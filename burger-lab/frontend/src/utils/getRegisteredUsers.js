import { REGISTERED_USERS_STORAGE_KEY } from "../constants/authStorageKeys";

export function getRegisteredUsers() {
  const storedUsers = localStorage.getItem(REGISTERED_USERS_STORAGE_KEY);

  if (!storedUsers) {
    return [];
  }

  try {
    return JSON.parse(storedUsers);
  } catch {
    localStorage.removeItem(REGISTERED_USERS_STORAGE_KEY);

    return [];
  }
}
