import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AUTH_STORAGE_KEY = "burgerLabUser";

function getStoredUser() {
  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Erro ao recuperar usuário armazenado:", error);

    localStorage.removeItem(AUTH_STORAGE_KEY);

    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);

  function login(userData) {
    setUser(userData);

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
  }

  function logout() {
    setUser(null);

    localStorage.removeItem(AUTH_STORAGE_KEY);
  }

  const authContextValue = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser utilizado dentro de AuthProvider.");
  }

  return context;
}
