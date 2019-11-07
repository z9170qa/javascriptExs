'use strict';
const KEY = "291ac242";
const output = document.getElementById("output");
const id = new URLSearchParams(window.location.search).get('id');

function search() {
    fetch("http://www.omdbapi.com/?apikey=" + KEY + "&i=" + id)
        .then(res => res.json())
        .then(json => renderFilm(json))
        .catch(err => console.error(err));
}

function renderFilm(json) {
    console.log(json);
    let card = document.createElement("div");
    output.appendChild(card);
    printMembers();
}

search();




