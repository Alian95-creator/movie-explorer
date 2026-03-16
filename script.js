const API_KEY = "382b2cfaaaa407d8b503d64cf9eaa0c3";

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

movieGrid.innerHTML="Loading...";

async function getTrendingMovies() {

  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;

  const response = await fetch(url);

  const data = await response.json();

  displayMovies(data.results);

}

function displayMovies(movies) {

  movieGrid.innerHTML = "";

  movies.forEach(movie => {

    if(!movie.poster_path) return;

    const movieCard = document.createElement("div");

    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.vote_average.toFixed(1)}</p>
      </div>
    `;

    movieGrid.appendChild(movieCard);

  });

}

getTrendingMovies();


async function searchMovie() {

  const query = searchInput.value.trim();

  if (!query) return;

  movieGrid.innerHTML = "<h2>Searching...</h2>";

  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

  const response = await fetch(url);

  const data = await response.json();

  displayMovies(data.results);

}

const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function showMovieDetail(movie){

modal.style.display = "flex";

modalBody.innerHTML = `
<h2>${movie.title}</h2>

<img src="${IMG_URL + movie.poster_path}">

<p><strong>Rating:</strong> ${movie.vote_average}</p>

<p><strong>Release:</strong> ${movie.release_date}</p>

<p>${movie.overview}</p>
`;

}

closeModal.onclick = () => {
modal.style.display="none";
};