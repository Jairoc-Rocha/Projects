export function getFirstName(fullName) {
  if (!fullName) {
    return "";
  }

  return fullName.trim().split(" ")[0];
}
