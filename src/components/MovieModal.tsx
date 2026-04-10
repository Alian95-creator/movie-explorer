import { useEffect, useState } from "react";
import { fetchTrailer } from "../services/api";

function MovieModal({ movie, onClose }: any) {
  const [trailer, setTrailer] = useState<string | null>(null);

  useEffect(() => {
    fetchTrailer(movie.id).then(setTrailer);
  }, [movie.id]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {trailer ? (
          <iframe
            className="w-full h-64"
            src={`https://www.youtube.com/embed/${trailer}`}
            allowFullScreen
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-4">
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p className="text-gray-300 text-sm mt-2">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;