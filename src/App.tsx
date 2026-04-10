import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import TopRated from "./components/TopRated";

function App() {
  const [movies, setMovies] = useState([]);

  const scrollToTrending = () => {
    document
      .getElementById("trending")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0b0b0b] pt-16 text-white min-h-screen">
      <Navbar />
      <Hero onResults={setMovies} />
      <MovieGrid externalMovies={movies} />
      <TopRated />
    </div>
  );
}

export default App;