import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="p-6">Loading movies...</div>;
  }

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group cursor-pointer transform hover:scale-105 transition"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="rounded-lg mb-2"
            />

            <h3 className="text-sm group-hover:text-red-500">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;