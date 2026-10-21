
import React, { useState } from "react";

export function MovieDetailModal({ movie, onClose }) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  const trailerUrl =
    movie.trailerUrl ||
    (movie.trailerKey
      ? `https://www.youtube.com/embed/${movie.trailerKey}`
      : "");

  const genres = Array.isArray(movie.genre)
    ? movie.genre
    : movie.genre
      ? [movie.genre]
      : [];

  const cast = Array.isArray(movie.cast) ? movie.cast : [];

  const moods = Array.isArray(movie.mood) ? movie.mood : [];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">

      <div className="relative w-full max-w-5xl my-auto bg-gradient-to-br from-zinc-950 via-red-950/30 to-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl text-white overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 px-3 py-2 rounded-lg bg-black/70 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-red-600 transition"
        >
          ✕ Close
        </button>

        {/* Trailer Player */}
        {showTrailer && trailerUrl && (
          <div className="p-4 sm:p-6 border-b border-zinc-800">
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="font-bold text-lg">
                {movie.title} — Official Trailer
              </h3>

              <button
                onClick={() => setShowTrailer(false)}
                className="text-sm px-3 py-1 rounded-lg bg-zinc-800 hover:bg-red-600"
              >
                Close Trailer
              </button>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                key={trailerUrl}
                src={trailerUrl}
                title={`${movie.title} trailer`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Movie Details */}
        <div className="p-5 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">

            {/* Poster */}
            <div className="w-48 sm:w-56 md:w-64 mx-auto md:mx-0 shrink-0">
              <div className="aspect-[2/3] overflow-hidden rounded-xl border border-zinc-700 shadow-xl bg-zinc-900">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/300x450?text=No+Poster";
                  }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0 pt-2 md:pt-4">

              <span className="text-pink-400 font-bold text-xs uppercase tracking-[0.2em]">
                Featured Film
              </span>

              <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4">
                {movie.title}
              </h2>

              {/* Rating, Year, Runtime */}
              <div className="flex flex-wrap gap-2 mb-4 text-sm">
                {movie.rating != null && (
                  <span className="text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    ★ {movie.rating}
                  </span>
                )}

                {movie.year != null && (
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                    {movie.year}
                  </span>
                )}

                {movie.runtime != null && (
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                    {movie.runtime} min
                  </span>
                )}

                {movie.language && (
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                    {movie.language}
                  </span>
                )}
              </div>

              {/* Genres */}
              {genres.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-zinc-300 text-sm font-bold mb-2">
                    Genres
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => (
                      <span
                        key={genre}
                        className="text-xs text-pink-300 bg-pink-500/10 border border-pink-500/20 px-3 py-1.5 rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-5">
                <h3 className="text-zinc-300 font-bold text-sm mb-2">
                  Overview
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {movie.description || "No description available."}
                </p>
              </div>

              {/* Director */}
              {movie.director && (
                <div className="mb-4">
                  <h3 className="text-zinc-300 text-sm font-bold mb-1">
                    Director
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {movie.director}
                  </p>
                </div>
              )}

              {/* Cast */}
              {cast.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-zinc-300 text-sm font-bold mb-2">
                    Cast
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cast.map((actor) => (
                      <span
                        key={actor}
                        className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-zinc-300"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mood */}
              {moods.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-zinc-300 text-sm font-bold mb-2">
                    Perfect For This Mood
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {moods.map((mood) => (
                      <span
                        key={mood}
                        className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full"
                      >
                        ✦ {mood}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">

                <button
                  onClick={() => setShowTrailer(true)}
                  disabled={!trailerUrl}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:opacity-40 text-white font-bold text-sm px-5 py-3 rounded-full transition shadow-lg shadow-pink-950/40"
                >
                  ▶ Play Trailer
                </button>

                {movie.watchUrl && (
                  <a
                    href={movie.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 border border-zinc-700 hover:border-pink-500 text-white font-bold text-sm px-5 py-3 rounded-full transition"
                  >
                    ▶ Watch Movie
                  </a>
                )}

                {movie.tmdbUrl && (
                  <a
                    href={movie.tmdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-bold text-sm px-5 py-3 rounded-full transition"
                  >
                    More Info ↗
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
