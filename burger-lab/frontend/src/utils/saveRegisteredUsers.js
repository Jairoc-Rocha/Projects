import { REGISTERED_USERS_STORAGE_KEY } from "../constants/authStorageKeys";

export function saveRegisteredUsers(users) {
  localStorage.setItem(REGISTERED_USERS_STORAGE_KEY, JSON.stringify(users));
}
