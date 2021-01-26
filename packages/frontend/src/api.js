export async function fetchCats() {
  const resp = await fetch("http://localhost:8002/cats", { method: "GET" });
  return await resp.json();
}

export async function fetchUsers() {
  const resp = await fetch("http://localhost:8001/user", { method: "GET" });
  return await resp.json();
}

export async function saveUser(user) {
  const url = user.id ? `/user/${user.id}` : `/user`;
  const method = user.id ? "PATCH" : "POST";
  const resp = await fetch(`http://localhost:8001${url}`, {
    method,
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await resp.json();
}

export async function saveCat(cat) {
  const url = cat.id ? `/cats/${cat.id}` : `/cats`;
  const method = cat.id ? "PATCH" : "POST";
  const resp = await fetch(`http://localhost:8002${url}`, {
    method,
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await resp.json();
}

export async function deleteUser(userID) {
  const resp = await fetch(`http://localhost:8001/user/${userID}`, {
    method: "DELETE",
  });

  return await resp.json();
}

export async function deleteCat(catID) {
  const resp = await fetch(`http://localhost:8002/cats/${catID}`, {
    method: "DELETE",
  });

  return await resp.json();
}

export async function likeCat(userID, catID) {
  const resp = await fetch(
    `http://localhost:8001/user/${userID}/likecat/${catID}`,
    { method: "POST" }
  );

  return await resp.json();
}
