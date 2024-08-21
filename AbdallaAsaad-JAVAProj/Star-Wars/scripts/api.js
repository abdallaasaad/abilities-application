const apiURL = "https://swapi.dev/api";

async function fetchCharacters(page = 1) {
  return fetch(`${apiURL}/people/?page=${page}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error:", error));
}

async function fetchCharacterDetails(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error:", error));
}
