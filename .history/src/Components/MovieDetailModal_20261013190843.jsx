import React, { useState, useEffect } from 'react';

export function MovieDetailModal({ movie, onClose }) {
    const [showTrailer, setShowTrailer] = useState(false);

    // Esc dabane par modal band ho
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    if (!movie) return null;

    const genres = Array.isArray(movie.genre) ? movie.genre : movie.genre ? [movie.genre] : [];
    const moods = Array.isArray(movie.mood) ? movie.mood : [];
    const cast = Array.isArray(movie.cast) ? movie.cast : [];

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
            {/* Card (andar click karne par band nahi hoga) */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 shadow-2xl text-white bg-zinc-950"
            >
                {/* Backdrop image upar */}
                {movie.backdrop && (
                    <div className="absolute inset-x-0 top-0 h-56 overflow-hidden pointer-events-none">
                        <img src={movie.backdrop} alt="" className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
                    </div>
                )}

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-zinc-300 hover:text-white text-sm px-3 py-1.5 bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer"
                >
                    ✕ Close
                </button>

                <div className="relative p-6 md:p-8">
                    {/* Trailer player */}
                    {showTrailer && movie.trailerUrl && (
                        <div className="mb-6 mt-8 aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-black">
                            <iframe
                                src={`${movie.trailerUrl}?autoplay=1&rel=0`}
                                title={`${movie.title} trailer`}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}

                    <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 ${showTrailer ? '' : 'mt-8'}`}>
                        {/* LEFT: Poster */}
                        <div className="w-44 sm:w-52 md:w-60 aspect-[2/3] overflow-hidden rounded-xl border border-zinc-800 shadow-2xl shrink-0 bg-zinc-900">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/300x450?text=No+Poster";
                                }}
                            />
                        </div>

                        {/* RIGHT: Details */}
                        <div className="flex-1 text-left">
                            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3">
                                {movie.title}
                            </h2>

                            {/* Badges: rating, year, runtime, language */}
                            <div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-4">
                                {movie.rating && (
                                    <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                        ★ {movie.rating}
                                    </span>
                                )}
                                {movie.year && (
                                    <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300 font-mono">
                                        {movie.year}
                                    </span>
                                )}
                                {movie.runtime && (
                                    <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300 font-mono">
                                        {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                                    </span>
                                )}
                                {movie.language && (
                                    <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">
                                        {movie.language}
                                    </span>
                                )}
                            </div>

                            {/* Genres */}
                            {genres.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {genres.map((g) => (
                                        <span key={g} className="text-xs px-3 py-1 rounded-full bg-red-600/15 text-red-300 border border-red-900/50">
                                            {g}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Moods */}
                            {moods.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {moods.map((m) => (
                                        <span key={m} className="text-xs px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-900/40">
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Description */}
                            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
                                {movie.description || 'No description available.'}
                            </p>

                            {/* Director + Cast */}
                            <div className="space-y-1.5 text-sm mb-6">
                                {movie.director && (
                                    <p>
                                        <span className="text-zinc-500">Director: </span>
                                        <span className="text-zinc-200">{movie.director}</span>
                                    </p>
                                )}
                                {cast.length > 0 && (
                                    <p>
                                        <span className="text-zinc-500">Cast: </span>
                                        <span className="text-zinc-200">{cast.join(', ')}</span>
                                    </p>
                                )}
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-wrap items-center gap-2">
                                {movie.trailerUrl && (
                                    <button
                                        onClick={() => setShowTrailer((s) => !s)}
                                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-lg shadow-pink-950/40 cursor-pointer"
                                    >
                                        {showTrailer ? '■ Hide trailer' : '▶ Play trailer'}
                                    </button>
                                )}

                                {movie.watchUrl && (
                                    <a
                                        href={movie.watchUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs px-5 py-2.5 rounded-full transition-colors"
                                    >
                                        🎬 Watch movie
                                    </a>
                                )}

                                {movie.tmdbUrl && (
                                    <a
                                        href={movie.tmdbUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-full transition-colors"
                                    >
                                        TMDB ↗
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