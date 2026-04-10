import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
import MovieModal from "./MovieModal";
import SkeletonCard from "./SkeletonCard";
import { motion } from "framer-motion";

// 🔥 FIREBASE
import { auth } from "../services/firebase";
import { getWishlist, saveWishlist } from "../utils/wishlist";

function MovieGrid({ externalMovies }: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 🔥 USER STATE
  const [user, setUser] = useState<any>(null);
  const [wishlist, setWishlist] = useState<any[]>([]);

  // 🎬 LOAD MOVIES
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

  // 🔐 AUTH LISTENER + LOAD WISHLIST
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (u) => {
      setUser(u);

      if (u) {
        const data = await getWishlist(u.uid);
        setWishlist(data);
      } else {
        setWishlist([]);
      }
    });

    return () => unsub();
  }, []);

  // ❤️ TOGGLE WISHLIST
  const toggleWishlist = async (movie: any) => {
    if (!user) {
      alert("Login dulu bro 😄");
      return;
    }

    const exists = wishlist.find((m) => m.id === movie.id);

    let updated;

    if (exists) {
      updated = wishlist.filter((m) => m.id !== movie.id);
    } else {
      updated = [...wishlist, movie];
    }

    setWishlist(updated);
    await saveWishlist(user.uid, updated);
  };

  // ❗ EMPTY STATE
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
          ? Array(8)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : movies.map((movie) => {
              const isWishlisted = wishlist.find(
                (m) => m.id === movie.id
              );

              return (
                <motion.div
                  key={movie.id}
                  whileHover={{ scale: 1.06, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelected(movie)}
                  className="relative cursor-pointer group"
                >
                  {/* 🎬 IMAGE */}
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    className="rounded-lg w-full transition duration-300 group-hover:brightness-75"
                  />

                  {/* ❤️ BUTTON */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault(); // 🔥 tambahan penting
                      toggleWishlist(movie);
                    }}
                    className="absolute top-2 right-2 text-xl z-20"
                  >
                    {isWishlisted ? "❤️" : "🤍"}
                  </button>

                  {/* ✨ GLOW */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(255,0,0,0.4)]"></div>

                  {/* 📊 INFO */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <h3 className="text-xs md:text-sm font-semibold">
                      {movie.title}
                    </h3>

                    <span className="text-yellow-400 text-xs">
                      ⭐ {movie.vote_average?.toFixed(1)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
      </div>

      {/* 🎬 MODAL */}
      {selected && (
        <MovieModal
          movie={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

export default MovieGrid;