import { useEffect, useState } from "react";
import { fetchTrendingMovies, searchMovies } from "../services/api";
import { motion, AnimatePresence } from "framer-motion";

function Hero({ onResults }: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      setMovies(data.slice(0, 5));
    });
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies]);

  const handleSearch = async () => {
    if (query.trim().length < 2) return;
    const results = await searchMovies(query);
    onResults(results);
  };

  const current = movies[index];

  return (
    <section className="relative min-h-[60vh] md:h-[80vh] overflow-hidden">
      {/* BACKGROUND */}
      <AnimatePresence>
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${current.backdrop_path})`,
            }}
          />
        )}
      </AnimatePresence>

      {/* OVERLAY GRADIENT (biar text kebaca tapi gak nutupin gambar) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* CONTENT DI BAWAH */}
      <div className="relative z-10 flex items-end h-full p-4 md:p-10">
        <div className="w-full max-w-xl">
          <h1 className="text-xl md:text-5xl font-bold mb-3">
            {current?.title || "Loading..."}
          </h1>

          <p className="text-gray-300 text-xs md:text-base mb-4 line-clamp-2 md:line-clamp-3">
            {current?.overview}
          </p>

          {/* SEARCH */}
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search movies..."
              className="flex-1 p-2 md:p-3 rounded-lg bg-[#1a1a1a]/90 text-white outline-none text-sm md:text-base"
            />

            <button
              onClick={handleSearch}
              className="bg-white text-black px-3 md:px-4 rounded-lg font-semibold text-sm md:text-base"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;