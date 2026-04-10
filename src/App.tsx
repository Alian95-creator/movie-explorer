import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <SearchBar onResults={setMovies} />
      <Hero />
      <MovieGrid externalMovies={movies} />
    </div>
  );
}

export default App;