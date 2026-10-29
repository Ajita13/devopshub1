const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Something went wrong");
  }

  return response.json();
}

// -------------------------
// Pipelines
// -------------------------

export const getPipelines = () => {
  return request("/pipelines");
};

export const getPipeline = (id) => {
  return request(`/pipelines/${id}`);
};

export const createPipeline = (pipeline) => {
  return request("/pipelines", {
    method: "POST",
    body: JSON.stringify(pipeline),
  });
};

export const runPipeline = (id) => {
  return request(`/pipelines/${id}/run`, {
    method: "POST",
  });
};

export const deletePipeline = (id) => {
  return request(`/pipelines/${id}`, {
    method: "DELETE",
  });
};

// -------------------------
// Builds
// -------------------------

export const getBuilds = () => {
  return request("/builds");
};

// -------------------------
// Deployments
// -------------------------

export const getDeployments = () => {
  return request("/deployments");
};

// -------------------------
// Analytics
// -------------------------

export const getAnalytics = () => {
  return request("/analytics");
};

// -------------------------
// Logs
// -------------------------

export const getLogs = () => {
  return request("/logs");
};

// -------------------------
// System Health
// -------------------------

export const getSystemHealth = () => {
  return request("/health");
};