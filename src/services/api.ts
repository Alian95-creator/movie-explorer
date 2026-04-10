const API_KEY = "382b2cfaaaa407d8b503d64cf9eaa0c3";

const BASE = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const res = await fetch(`${BASE}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchTopRatedMovies = async () => {
  const res = await fetch(`${BASE}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query: string) => {
  const res = await fetch(
    `${BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchTrailer = async (movieId: number) => {
  const res = await fetch(
    `${BASE}/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  const data = await res.json();
  const trailer = data.results.find((v: any) => v.type === "Trailer");
  return trailer ? trailer.key : null;
};