
import React, { useState } from "react";

export function MovieDetailModal({ movie, onClose }) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  const trailerUrl =
    movie.trailerUrl ||
    (movie.trailerKey
      ? `https://www.youtube.com/embed/${movie.trailerKey}`
      : "");

  const watchUrl = movie.watchUrl;

  const handleWatchMovie = () => {
    if (watchUrl) {
      window.open(watchUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-3xl rounded-xl bg-white p-6">

        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-2xl"
        >
          &times;
        </button>

        <h2 className="mb-4 text-2xl font-bold">
          {movie.title}
        </h2>

        <p className="mb-4 text-gray-600">
          {movie.description}
        </p>

        {showTrailer && trailerUrl && (
          <div className="mb-4 aspect-video w-full">
            <iframe
              src={trailerUrl}
              title={`${movie.title} Trailer`}
              className="h-full w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowTrailer(!showTrailer)}
            disabled={!trailerUrl}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button>

          <button
            onClick={handleWatchMovie}
            disabled={!watchUrl}
            className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:opacity-50"
          >
            Watch Movie
          </button>
        </div>

      </div>
    </div>
  );
}
