// Guardando o endereço da API em uma constante
const API_URL = "http://localhost:3000";

export async function apiFetch(path, options = {}) {
    // A função junta API_URL + path
  const response = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  return response;
}
