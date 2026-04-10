import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import TopRated from "./components/TopRated";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = "Movie Explorer | Discover Films";
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen pt-16">
      <Navbar />
      <Hero onResults={setMovies} />
      <MovieGrid externalMovies={movies} />
      <TopRated />
    </div>
  );
}

export default App;