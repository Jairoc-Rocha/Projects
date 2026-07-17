import { AUTH_MESSAGES } from "../constants/authMessages"
import { isValidEmail } from "./isValidEmail"

export function validateRegisterForm(registerFormData) {
  if (!registerFormData.name.trim()) {
    return AUTH_MESSAGES.nameRequired
  }

  if (!registerFormData.email.trim()) {
    return AUTH_MESSAGES.emailRequired
  }

  if (!isValidEmail(registerFormData.email)) {
    return AUTH_MESSAGES.emailInvalid
  }

  if (!registerFormData.password.trim()) {
    return AUTH_MESSAGES.passwordRequired
  }

  if (registerFormData.password.length < 6) {
    return AUTH_MESSAGES.passwordMinLength
  }

  if (!registerFormData.confirmPassword.trim()) {
    return AUTH_MESSAGES.confirmPasswordRequired
  }

  if (registerFormData.password !== registerFormData.confirmPassword) {
    return AUTH_MESSAGES.passwordsDoNotMatch
  }

  return ""
}