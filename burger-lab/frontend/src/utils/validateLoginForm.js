import { AUTH_MESSAGES } from "../constants/authMessages";
import { isValidEmail } from "./isValidEmail";

export function validateLoginForm(loginFormData) {
  if (!loginFormData.email.trim()) {
    return AUTH_MESSAGES.emailRequired;
  }

  if (!isValidEmail(loginFormData.email)) {
    return AUTH_MESSAGES.emailInvalid;
  }

  if (!loginFormData.password.trim()) {
    return AUTH_MESSAGES.passwordRequired;
  }

  return "";
}
