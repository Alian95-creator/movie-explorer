import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
import { motion, AnimatePresence } from "framer-motion";

function Hero({ onResults }: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      setMovies(data.slice(0, 5)); // ambil 5 buat slider
    });
  }, []);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies]);

  const handleSearch = async () => {
    if (query.trim().length < 2) return;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=382b2cfaaaa407d8b503d64cf9eaa0c3&query=${query}`
    );
    const data = await res.json();
    onResults(data.results);
  };

  const current = movies[index];

  return (
    <section className="relative min-h-[60vh] md:h-[80vh] overflow-hidden">
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

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative z-10 flex items-end h-full p-4 md:p-10">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            {current?.title || "Loading..."}
          </h1>

          <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-3">
            {current?.overview}
          </p>

          {/* 🔍 SEARCH */}
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search movies..."
              className="flex-1 p-3 rounded-lg bg-[#1a1a1a] text-white outline-none"
            />

            <button
              onClick={handleSearch}
              className="bg-white text-black px-4 rounded-lg font-semibold"
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