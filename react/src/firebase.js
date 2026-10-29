import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC952a2Y58mtFNVloG9X-zPm3IeaX-72PA",
  authDomain: "devops-97aac.firebaseapp.com",
  projectId: "devops-97aac",
  storageBucket: "devops-97aac.firebasestorage.app",
  messagingSenderId: "1099903757762",
  appId: "1:1099903757762:web:930ebb037f314011cab5bb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export default app;
