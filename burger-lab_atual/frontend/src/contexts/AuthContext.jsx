import { createContext, useState } from "react";

import { AUTH_MESSAGES } from "../constants/authMessages";
import { getAuthUser } from "../utils/getAuthUser";
import { getRegisteredUsers } from "../utils/getRegisteredUsers";
import { normalizeEmail } from "../utils/normalizeEmail";
import { removeAuthUser } from "../utils/removeAuthUser";
import { saveAuthUser } from "../utils/saveAuthUser";
import { saveRegisteredUsers } from "../utils/saveRegisteredUsers";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getAuthUser());

  function login(email) {
    const normalizedEmail = normalizeEmail(email);
    const registeredUsers = getRegisteredUsers();

    const registeredUser = registeredUsers.find(
      (user) => user.email === normalizedEmail,
    );

    if (!registeredUser) {
      return {
        success: false,
        message: AUTH_MESSAGES.emailNotRegistered,
      };
    }

    saveAuthUser(registeredUser);
    setUser(registeredUser);

    return {
      success: true,
      message: AUTH_MESSAGES.loginSuccess,
    };
  }

  function register(registerFormData) {
    const normalizedEmail = normalizeEmail(registerFormData.email);
    const registeredUsers = getRegisteredUsers();

    const userAlreadyExists = registeredUsers.some(
      (user) => user.email === normalizedEmail,
    );

    if (userAlreadyExists) {
      return {
        success: false,
        message: AUTH_MESSAGES.emailAlreadyRegistered,
      };
    }

    const newUser = {
      name: registerFormData.name.trim(),
      email: normalizedEmail,
    };

    const updatedUsers = [...registeredUsers, newUser];

    saveRegisteredUsers(updatedUsers);

    return {
      success: true,
      message: AUTH_MESSAGES.registerSuccess,
    };
  }

  function logout() {
    removeAuthUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
