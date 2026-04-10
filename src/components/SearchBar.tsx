import { useState } from "react";
import { searchMovies } from "../services/api";

function SearchBar({ onResults }: any) {
  const [query, setQuery] = useState("");

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      const results = await searchMovies(value);
      onResults(results);
    }
  };

  return (
    <div className="px-4 md:px-6 mt-20">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search movies..."
        className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white outline-none"
      />
    </div>
  );
}

export default SearchBar;