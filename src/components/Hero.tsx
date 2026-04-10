import { useState } from "react";
import { searchMovies } from "../services/api";

function Hero({ onResults, onExplore }: any) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim().length < 2) return;
    const results = await searchMovies(query);
    onResults(results);
  };

  return (
    <section
      id="home"
      className="min-h-[60vh] md:h-[80vh] bg-cover bg-center flex items-end p-4 md:p-10"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg')",
      }}
    >
      <div className="max-w-xl w-full">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">
          Discover Movies
        </h1>

        <p className="text-gray-300 text-sm md:text-base mb-6">
          Explore trending movies and find your next favorite film.
        </p>

        {/* SEARCH + CTA */}
        <div className="flex gap-2 md:gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search movies..."
            className="flex-1 p-3 rounded-lg bg-[#1a1a1a] text-white outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-white text-black px-4 md:px-5 rounded-lg font-semibold"
          >
            Search
          </button>

          <button
            onClick={onExplore}
            className="bg-red-600 px-4 md:px-6 rounded-lg font-semibold"
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;