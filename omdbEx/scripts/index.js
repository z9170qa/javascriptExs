'use strict';
const KEY = "291ac242";
const searchBar = document.getElementById("searchBar");
const output = document.getElementById("output");


function search() {
    fetch("http://www.omdbapi.com/?apikey=" + KEY + "&s=" + searchBar.value)
        .then(res => res.json())
        .then(json => renderFilms(json))
        .catch(err => console.error(err));
}

function renderFilms(json) {
    json.Search.forEach(film => {
        console.log(film);
        let card = document.createElement("div");
        card.addEventListener('click', () => window.location.href = './film.html?id=' + film.imdbID);
        card.className = "card p-5 w-50";
        let title = document.createElement('h3');
        title.innerText = "Title: " + film.Title;
        title.className = "card-title";
        card.appendChild(title);
        let poster = document.createElement("img");
        poster.src = film.Poster;
        poster.className = "card-image";
        card.appendChild(poster);
        let body = document.createElement("p");
        body.innerText = "Released: " + film.Year;
        body.className = "card-body";
        card.appendChild(body);
        output.appendChild(card);
    });
}