import React, { useState, useEffect } from 'react';
import { fatchData } from '../Data/api';
import { MovieCart } from '../Components/MovieCart';
import { MovieDetailModal } from '../Components/MovieDetailModal'; 

export function Watchlist() {
    const [watchlistMovies, setWatchlistMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // 1. LocalStorage se savedMovies IDs nikal kar fatchData se match karne ka handle logic
    useEffect(() => {
        const fetchWatchlistFromStorage = () => {
            const storedSavedIds = JSON.parse(localStorage.getItem('savedMovies') || '[]');
            const matchedWatchlist = fatchData.filter(movie => storedSavedIds.includes(movie.id));
            setWatchlistMovies(matchedWatchlist);
        };

        fetchWatchlistFromStorage();

        // Real-time synchronization event tracker hook attach kiya
        window.addEventListener('storage', fetchWatchlistFromStorage);
        return () => window.removeEventListener('storage', fetchWatchlistFromStorage);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white pt-16 pb-24 px-6 md:px-16 lg:px-24">

            {/* Sub-header Filter Pill Display Box */}
            <div className="max-w-6xl w-full mx-auto mb-10">
                <div className="flex flex-wrap gap-2 border-b border-zinc-900/50 pb-5">
                    <button
                        className="px-5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-rose-600 border border-rose-700 text-white shadow-md shadow-rose-950/50 transition-all duration-200"
                    >
                        Watchlist 🔖 ({watchlistMovies.length})
                    </button>
                </div>
            </div>

            {/* Core Responsive Content Catalog Grid Area */}
            <div className="max-w-6xl w-full mx-auto">
                {watchlistMovies.length === 0 ? (
                    <div className="text-center py-16 p-8 bg-zinc-900/40 border border-zinc-900/60 rounded-xl backdrop-blur-sm">
                        <p className="text-zinc-500 text-sm font-medium">No movies found in your Watchlist library nodes.</p>
                        <p className="text-zinc-600 text-xs mt-1">Go back and click the bookmark icon 🔖 on any movie card to add it here!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {watchlistMovies.map((movie, index) => (
                            <MovieCart 
                                key={`watchlist-item-${movie.id || index}`} 
                                data={movie} 
                                // Card click hotey hi dynamic single data preview trigger activate ho jayega
                                onCardClick={setSelectedMovie} 
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* 3. In-App Video Player Detail Modal Popup Framework Overlay */}
            {selectedMovie && (
                <MovieDetailModal 
                    movie={selectedMovie} 
                    onClose={() => setSelectedMovie(null)} 
                />
            )}

        </div>
    );
}
