function displayCharacters(characters) {
  const characterList = document.getElementById("character-list");
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");
    characterCard.textContent = character.name;
    characterCard.addEventListener("click", () =>
      displayCharacterDetails(character.url)
    );
    characterList.appendChild(characterCard);
  });
}

function displayCharacterDetails(url) {
  fetchCharacterDetails(url).then((character) => {
    const detailsDiv = document.getElementById("character-details");
    detailsDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Mass: ${character.mass}</p>
            <p>Hair Color: ${character.hair_color}</p>
            <p>Skin Color: ${character.skin_color}</p>
            <p>Eye Color: ${character.eye_color}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Gender: ${character.gender}</p>
        `;
  });
}
