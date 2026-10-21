import React, { useState, useEffect } from 'react';
import { fatchData } from '../Data/api';
import { MovieCart } from '../Components/MovieCart';
// FIXED: Detail popup display handle karne ke liye main component import kiya
import { MovieDetailModal } from '../Components/MovieDetailModal'; 

export function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // 1. Component load hote hi localStorage me se 'likedMovies' ka array check karo
    useEffect(() => {
        const fetchFavoritesFromStorage = () => {
            // LocalStorage se raw data string read karo
            const storedLikedIds = JSON.parse(localStorage.getItem('likedMovies') || '[]');
            
            // fatchData array records me se match hone wali matching values ko filter karo
            const matchedFavorites = fatchData.filter(movie => storedLikedIds.includes(movie.id));
            
            setFavoriteMovies(matchedFavorites);
        };

        fetchFavoritesFromStorage();

        // 💡 Listener lagaya hai taaki agar Detail Modal me se user Unlike kare, toh ye page turant updates handle kar le
        window.addEventListener('storage', fetchFavoritesFromStorage);
        return () => window.removeEventListener('storage', fetchFavoritesFromStorage);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white pt-16 pb-24 px-6 md:px-16 lg:px-24">

            {/* Header / Filter Pill Title Section */}
            <div className="max-w-6xl w-full mx-auto mb-10">
                <div className="flex flex-wrap gap-2 border-b border-zinc-900/50 pb-5">
                    <button
                        className="px-5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-rose-600 border border-rose-700 text-white shadow-md shadow-rose-950/50 transition-all duration-200"
                    >
                        Favorites ❤️ ({favoriteMovies.length})
                    </button>
                </div>
            </div>

            {/* Core Responsive Catalog Grid Area Component */}
            <div className="max-w-6xl w-full mx-auto">
                {favoriteMovies.length === 0 ? (
                    /* EMPTY LOCALSTORAGE REORDS STATE */
                    <div className="text-center py-16 p-8 bg-zinc-900/40 border border-zinc-900/60 rounded-xl backdrop-blur-sm">
                        <p className="text-zinc-500 text-sm font-medium">No movies found in your Favorites list library matrix nodes.</p>
                        <p className="text-zinc-600 text-xs mt-1">Go back and click the ❤️ icon on any movie card to see it here!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {/* 2. FIXED: Custom local components loop mapped with direct trigger props */}
                        {favoriteMovies.map((movie, index) => (
                            <MovieCart 
                                key={`fav-item-node-${movie.id || index}`} 
                                data={movie} 
                                // 💡 FIXED: Cart element click hote hi dynamic state update ho jayegi
                                onCardClick={setSelectedMovie} 
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* 3. FIXED: Details Preview Pop-up Overlay rendering condition block inject */}
            {selectedMovie && (
                <MovieDetailModal 
                    movie={selectedMovie} 
                    onClose={() => setSelectedMovie(null)} 
                />
            )}

        </div>
    );
}
