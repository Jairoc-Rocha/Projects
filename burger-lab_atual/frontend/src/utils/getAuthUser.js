import { AUTH_USER_STORAGE_KEY } from "../constants/authStorageKeys";

export function getAuthUser() {
  const storedUser = localStorage.getItem(AUTH_USER_STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem(AUTH_USER_STORAGE_KEY);

    return null;
  }
}
