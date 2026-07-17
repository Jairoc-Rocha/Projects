import { AUTH_USER_STORAGE_KEY } from "../constants/authStorageKeys";

export function saveAuthUser(user) {
  localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user));
}
