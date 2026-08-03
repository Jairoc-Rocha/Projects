const API_URL = "http://localhost:3001";

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error("Não foi possível buscar os usuários.");
  }

  return response.json();
}

export async function getUserByEmail(email) {
  const normalizedEmail = email.trim().toLowerCase();

  const response = await fetch(
    `${API_URL}/users?email=${encodeURIComponent(normalizedEmail)}`,
  );

  if (!response.ok) {
    throw new Error("Não foi possível buscar o usuário.");
  }

  const users = await response.json();

  return users[0] ?? null;
}

export async function createUser(userData) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Não foi possível cadastrar o usuário.");
  }

  return response.json();
}
