interface Props {
  movie: any;
  onClose: () => void;
}

function MovieModal({ movie, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          className="w-full h-48 md:h-64 object-cover"
        />

        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            {movie.title}
          </h2>

          <p className="text-gray-300 text-sm md:text-base">
            {movie.overview}
          </p>

          <button
            onClick={onClose}
            className="mt-4 bg-red-600 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;