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

function displayMovies(movies){

movieGrid.innerHTML="";

movies.forEach(movie=>{

const card=document.createElement("div");

card.classList.add("movie-card");

card.innerHTML=`

<img src="${IMG_URL+movie.poster_path}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>⭐ ${movie.vote_average}</p>

</div>

`;

movieGrid.appendChild(card);

});

}

getTrendingMovies();

const searchInput=document.getElementById("searchInput");
const searchBtn=document.getElementById("searchBtn");

searchBtn.addEventListener("click",searchMovie);

function searchMovie(){

const query=searchInput.value;

fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)

.then(res=>res.json())

.then(data=>displayMovies(data.results));

}

searchInput.addEventListener("keyup",(e)=>{
if(e.key==="Enter") searchMovie();
});