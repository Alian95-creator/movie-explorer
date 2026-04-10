function Hero() {
  return (
    <div
      className="h-[60vh] md:h-[80vh] bg-cover bg-center flex items-end p-4 md:p-10"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg')",
      }}
    >
      <div className="max-w-xl">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">
          Discover Movies
        </h1>

        <p className="text-gray-300 text-sm md:text-base mb-6">
          Explore trending movies and find your next favorite film.
        </p>

        <button className="bg-red-600 px-4 md:px-6 py-2 md:py-3 rounded-lg">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Hero;