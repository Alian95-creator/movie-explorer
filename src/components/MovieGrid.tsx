const dummyMovies = Array(8).fill({
  title: "Movie Title",
  image:
    "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
});

function MovieGrid() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {dummyMovies.map((movie, index) => (
          <div
            key={index}
            className="group cursor-pointer transform hover:scale-105 transition"
          >
            <img
              src={movie.image}
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