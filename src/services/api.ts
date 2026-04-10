const API_KEY = "382b2cfaaaa407d8b503d64cf9eaa0c3";

export const fetchTrendingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};