import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
import MovieModal from "./MovieModal";
import SkeletonCard from "./SkeletonCard";
import { motion } from "framer-motion";

function MovieGrid({ externalMovies }: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (externalMovies && externalMovies.length > 0) {
      setMovies(externalMovies);
      setLoading(false);
    } else {
      fetchTrendingMovies().then((data) => {
        setMovies(data);
        setLoading(false);
      });
    }
  }, [externalMovies]);

  if (!loading && movies.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h2 className="text-xl mb-2">No movies found</h2>
        <p className="text-sm">Try another keyword 🎬</p>
      </div>
    );
  }

  return (
    <section id="trending" className="px-4 md:px-6 py-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Trending Movies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {loading
          ? Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : movies.map((movie) => (
              <motion.div
                key={movie.id}
                whileHover={{ scale: 1.06, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(movie)}
                className="relative cursor-pointer group"
              >
                {/* IMAGE */}
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  className="rounded-lg w-full transition duration-300 group-hover:brightness-75"
                />

                {/* GLOW */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(255,0,0,0.4)]"></div>

                {/* OVERLAY INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-xs md:text-sm font-semibold">
                    {movie.title}
                  </h3>

                  <span className="text-yellow-400 text-xs">
                    ⭐ {movie.vote_average?.toFixed(1)}
                  </span>
                </div>
              </motion.div>
            ))}
      </div>

      {selected && (
        <MovieModal movie={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default MovieGrid;