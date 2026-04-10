import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
import MovieModal from "./MovieModal";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
}

function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selected, setSelected] = useState<Movie | null>(null);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className="px-4 md:px-6 py-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Trending Movies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelected(movie)}
            className="cursor-pointer transform hover:scale-105 transition"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="rounded-lg w-full"
            />

            <h3 className="text-xs md:text-sm mt-2 line-clamp-1">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>

      {selected && (
        <MovieModal movie={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default MovieGrid;