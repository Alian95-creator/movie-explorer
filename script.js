const API_KEY = 382b2cfaaaa407d8b503d64cf9eaa0c3

const BASE_URL = "https://api.themoviedb.org/3";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const movieGrid = document.getElementById("movieGrid")

async function getTrendingMovies(){

const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;

const res = await fetch(url);

const data = await res.json();

displayMovies(data.results);

}