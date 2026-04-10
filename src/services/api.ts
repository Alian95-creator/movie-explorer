const API_KEY = "382b2cfaaaa407d8b503d64cf9eaa0c3";

export const fetchTrendingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchTrailer = async (movieId: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  const data = await res.json();

  const trailer = data.results.find(
    (vid: any) => vid.type === "Trailer"
  );

  return trailer ? trailer.key : null;
};