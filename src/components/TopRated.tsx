import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "../services/api";
import MovieModal from "./MovieModal";

function TopRated() {
  const [movies, setMovies] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    fetchTopRatedMovies().then(setMovies);
  }, []);

  return (
    <section id="toprated" className="px-4 md:px-6 py-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Top Rated
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

            <div className="mt-2 flex justify-between">
              <h3 className="text-xs md:text-sm line-clamp-1">
                {movie.title}
              </h3>

              <span className="text-yellow-400 text-xs">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <MovieModal movie={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default TopRated;