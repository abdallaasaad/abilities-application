let currentPage = 1;

function loadCharacters() {
  fetchCharacters(currentPage).then((data) => {
    displayCharacters(data.results);
    if (data.next) {
      document.getElementById("load-more").style.display = "block";
    } else {
      document.getElementById("load-more").style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadCharacters();

  document.getElementById("load-more").addEventListener("click", () => {
    currentPage++;
    loadCharacters();
  });
});
