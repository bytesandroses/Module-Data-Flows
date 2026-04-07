// Given a list of film data
// When the page first loads
// Then it should display the list of films now showing, including the film title, times and film certificate.

const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

console.log(film);

const filmSection = document.createElement("section");
const title = document.createElement("h1");

const director = document.createElement("p");
director.textContent = film.director;

title.textContent = film.title;
filmSection.appendChild(title);
filmSection.appendChild(director);

document.body.appendChild(filmSection);
