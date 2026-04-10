function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-end p-10"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg')",
      }}
    >
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Movies
        </h1>
        <p className="text-gray-300 mb-6">
          Explore trending movies and find your next favorite film.
        </p>

        <button className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Hero;