const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

let accessToken = localStorage.getItem("devopshub_access_token") || null;

export function setToken(token) {
  accessToken = token;
  if (token) {
    localStorage.setItem("devopshub_access_token", token);
  } else {
    localStorage.removeItem("devopshub_access_token");
  }
}

export function getToken() {
  return accessToken || localStorage.getItem("devopshub_access_token");
}

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export async function apiRequest(endpoint, options = {}) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const config = {
    ...options,
    headers,
    credentials: "include",
  };

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  } catch (netErr) {
    throw new Error("Unable to reach backend server. Please verify the server is running.");
  }

  // Handle token expiration & automatic refresh
  if (response.status === 401 && !options._retry && endpoint !== "/auth/login" && endpoint !== "/auth/register" && endpoint !== "/auth/refresh") {
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((newToken) => {
          config.headers.Authorization = `Bearer ${newToken}`;
          return fetch(`${API_BASE_URL}${endpoint}`, config).then((r) => r.json());
        });
    }

    options._retry = true;
    isRefreshing = true;

    try {
      const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ refreshToken: localStorage.getItem("devopshub_refresh_token") }),
      });

      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        setToken(refreshData.accessToken);
        processQueue(null, refreshData.accessToken);
        config.headers.Authorization = `Bearer ${refreshData.accessToken}`;
        return (await fetch(`${API_BASE_URL}${endpoint}`, config)).json();
      } else {
        processQueue(new Error("Session expired"), null);
        setToken(null);
        localStorage.removeItem("devopshub_user");
        localStorage.removeItem("devopshub_refresh_token");
        window.dispatchEvent(new Event("auth:logout"));
        throw new Error("Session expired. Please log in again.");
      }
    } catch (refreshErr) {
      processQueue(refreshErr, null);
      throw refreshErr;
    } finally {
      isRefreshing = false;
    }
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg = data?.message || (data?.errors && data.errors[0]?.message) || `Request failed (${response.status})`;
    const error = new Error(errorMsg);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

// -------------------------
// Authentication
// -------------------------
export const loginUser = async (credentials) => {
  const data = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  if (data.accessToken) {
    setToken(data.accessToken);
    if (data.refreshToken) {
      localStorage.setItem("devopshub_refresh_token", data.refreshToken);
    }
  }
  return data;
};

export const googleLoginApi = async (googleData) => {
  const data = await apiRequest("/auth/google", {
    method: "POST",
    body: JSON.stringify(googleData),
  });
  if (data.accessToken) {
    setToken(data.accessToken);
    if (data.refreshToken) {
      localStorage.setItem("devopshub_refresh_token", data.refreshToken);
    }
  }
  return data;
};

export const registerUser = async (userData) => {
  const data = await apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  if (data.accessToken) {
    setToken(data.accessToken);
    if (data.refreshToken) {
      localStorage.setItem("devopshub_refresh_token", data.refreshToken);
    }
  }
  return data;
};

export const logoutUser = async () => {
  try {
    await apiRequest("/auth/logout", { method: "POST" });
  } finally {
    setToken(null);
    localStorage.removeItem("devopshub_refresh_token");
    localStorage.removeItem("devopshub_user");
  }
};

export const getCurrentUser = () => apiRequest("/auth/me");
export const updateUserProfile = (profileData) => apiRequest("/auth/profile", { method: "PUT", body: JSON.stringify(profileData) });
export const updatePassword = (passData) => apiRequest("/auth/change-password", { method: "PUT", body: JSON.stringify(passData) });

// -------------------------
// Dashboard & Analytics
// -------------------------
export const getDashboardStats = () => apiRequest("/dashboard/stats");
export const getAnalytics = () => apiRequest("/analytics");

// -------------------------
// Pipelines
// -------------------------
export const getPipelines = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiRequest(`/pipelines${query ? `?${query}` : ""}`);
};
export const getPipeline = (id) => apiRequest(`/pipelines/${id}`);
export const createPipeline = (pipeline) => apiRequest("/pipelines", { method: "POST", body: JSON.stringify(pipeline) });
export const updatePipeline = (id, updates) => apiRequest(`/pipelines/${id}`, { method: "PUT", body: JSON.stringify(updates) });
export const deletePipeline = (id) => apiRequest(`/pipelines/${id}`, { method: "DELETE" });
export const runPipeline = (id) => apiRequest(`/pipelines/${id}/run`, { method: "POST" });

// -------------------------
// Builds
// -------------------------
export const getBuilds = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiRequest(`/builds${query ? `?${query}` : ""}`);
};
export const getBuild = (id) => apiRequest(`/builds/${id}`);
export const cancelBuild = (id) => apiRequest(`/builds/${id}/cancel`, { method: "POST" });

// -------------------------
// Deployments
// -------------------------
export const getDeployments = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiRequest(`/deployments${query ? `?${query}` : ""}`);
};
export const createDeployment = (depData) => apiRequest("/deployments", { method: "POST", body: JSON.stringify(depData) });
export const getDeployment = (id) => apiRequest(`/deployments/${id}`);

// -------------------------
// Logs
// -------------------------
export const getLogs = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiRequest(`/logs${query ? `?${query}` : ""}`);
};
export const createLog = (logData) => apiRequest("/logs", { method: "POST", body: JSON.stringify(logData) });

// -------------------------
// Extended Modules
// -------------------------
export const getModuleData = (type) => apiRequest(`/modules/${type}`);
export const createModuleItem = (type, data) => apiRequest(`/modules/${type}`, { method: "POST", body: JSON.stringify(data) });

// -------------------------
// Health
// -------------------------
export const getSystemHealth = () => apiRequest("/health");
