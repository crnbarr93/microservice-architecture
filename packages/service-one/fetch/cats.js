const fetch = require("node-fetch");

const baseUrl = "http://localhost:8002/cats";

async function fetchCatById(id) {
  const res = await fetch(`${baseUrl}/${id}`, { method: "GET" });
  const cat = await res.json();
  console.log(cat);
  return cat;
}

module.exports = {
  fetchCatById,
};
