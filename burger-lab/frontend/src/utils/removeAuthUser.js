import { AUTH_USER_STORAGE_KEY } from "../constants/authStorageKeys";

export function removeAuthUser() {
  localStorage.removeItem(AUTH_USER_STORAGE_KEY);
}
