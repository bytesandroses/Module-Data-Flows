const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];

function createFilmCard(filmCard) {
  const filmCardTemplate = document
    .getElementById("film-card")
    .content.cloneNode(true);

  filmCardTemplate.querySelector("h3").textContent = filmCard.title;
  filmCardTemplate.querySelector("[data-director]").textContent =
    filmCard.director;
  filmCardTemplate.querySelector("time").textContent = filmCard.duration;
  filmCardTemplate.querySelector("[data-certificate]").textContent =
    filmCard.certificate;

  return filmCardTemplate;
}

const filmCards = films.map(createFilmCard);

document.body.append(...filmCards);
