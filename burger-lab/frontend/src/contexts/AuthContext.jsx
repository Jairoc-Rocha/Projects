import { createContext, useContext, useEffect, useState } from "react";

import { apiFetch } from "../services/api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  async function checkAuth() {
    try {
      const response = await apiFetch("/me");
      const data = await response.json();

      if (!response.ok) {
        setUser(null);
        return;
      }

      setUser(data);
    } catch (error) {
      console.log("Erro ao verificar usuário logado:");
      console.log(error);

      setUser(null);
    } finally {
      setLoadingUser(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    setUser,
    loadingUser,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
