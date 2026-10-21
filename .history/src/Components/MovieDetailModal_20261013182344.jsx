import React from 'react';

export function MovieDetailModal({ movie, onClose }) {
    // Agar movie ka data blank hai toh screen par kuch mat dikhao
    if (!movie) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            
            {/* Main Wide Card Layout */}
            <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-zinc-950 via-red-950/30 to-zinc-950 text-white">
                
                {/* Top Corner Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors text-sm px-3 py-1.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-lg z-50 cursor-pointer"
                >
                    ✕ Close
                </button>

                {/* Content Container Stack */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mt-4 md:mt-0">
                    
                    {/* LEFT: Big Poster Box */}
                    <div className="w-48 sm:w-56 md:w-64 aspect-[2/3] overflow-hidden rounded-xl border border-zinc-800/80 shadow-2xl shrink-0 bg-zinc-900">
                        <img 
                            src={movie.poster} 
                            alt={movie.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Agar image URL crash ho toh backup image set karein
                                e.target.src = "https://unsplash.com";
                            }}
                        />
                    </div>

                    {/* RIGHT: Metadata Text Fields */}
                    <div className="flex-1 text-left flex flex-col justify-center">
                        <span className="text-pink-500 font-bold text-xs uppercase tracking-widest block mb-1 font-mono">
                            Featured Film
                        </span>

                        <h2 className="text-2xl font-black text-white md:text-4xl tracking-tight mb-2">
                            {movie.title}
                        </h2>

                        {/* Badges block rows inline grid */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-medium mb-4">
                            <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                ★ {movie.rating || '8.5'}
                            </span>
                            <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300 font-mono">
                                {movie.year || '2024'}
                            </span>
                            <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300 font-mono">
                                {movie.runtime || '120'} min
                            </span>
                        </div>

                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-normal max-w-2xl">
                            {movie.description || 'No description summary available index array for this specific item records.'}
                        </p>

                        {/* Action buttons row framework grid controls */}
                        <div className="flex flex-wrap items-center gap-2 mt-4">
                            <button 
                                onClick={() => alert("Playing trailer placeholder key link workflow...")}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-lg shadow-pink-950/40 cursor-pointer"
                            >
                                ▶ Play trailer
                            </button>
                            <button className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-full cursor-pointer">
                                ♡ Favorite
                            </button>
                            <button className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-full cursor-pointer">
                                🔖 Watchlist
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
