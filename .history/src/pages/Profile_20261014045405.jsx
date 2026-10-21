import { useState, useEffect } from 'react';
import { fatchData } from '../Data/api';
import { MovieCart } from '../Components/MovieCart';
import { MovieDetailModal } from '../Components/MovieDetailModal';

export function Profile() {
    const [historyMovies, setHistoryMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // LocalStorage से watchHistory निकालकर fatchData से मैप करना
    useEffect(() => {
        const fetchHistoryFromStorage = () => {
            const storedHistoryIds = JSON.parse(localStorage.getItem('watchHistory') || '[]');
            
            // जिस आर्डर में देखी गई है, उसी आर्डर में मूवीज को सजाना (Latest on top)
            const matchedHistory = storedHistoryIds
                .map(id => fatchData.find(movie => movie.id === id))
                .filter(Boolean); // अगर कोई मूवी डेटाबेस में न मिले तो उसे हटा दें
                
            setHistoryMovies(matchedHistory);
        };

        fetchHistoryFromStorage();
        window.addEventListener('storage', fetchHistoryFromStorage);
        return () => window.removeEventListener('storage', fetchHistoryFromStorage);
    }, []);

    return (
        <div className="py-20 px-6 md:px-16 lg:px-25 min-h-screen text-white pb-24 bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950">
            
            {/* 1. Main Profile Summary Status Section */}
            <div className="w-full mx-auto pt-12 pb-6 flex items-center space-x-5 max-w-6xl">
                {/* Pink/Rose Rounded Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center font-extrabold text-white text-lg tracking-wide shadow-lg shadow-pink-950/30 shrink-0">
                    AR
                </div>
                
                <div className="min-w-0 text-left">
                    <h1 className="text-2xl font-black text-white md:text-3xl tracking-tight">
                        Your movie space
                    </h1>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1 font-medium tracking-wide">
                        {historyMovies.length} films watched <span className="text-zinc-600 mx-1.5">&middot;</span> Member since 2026
                    </p>
                </div>
            </div>

            {/* 2. Single Active Filter Pill Container Component */}
            <div className="max-w-6xl mx-auto mb-10 text-left">
                <div className="flex flex-wrap gap-2 border-b border-zinc-900/50 pb-5">
                    <button
                        className="px-5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-rose-600 border border-rose-700 text-white shadow-md shadow-rose-950/50 transition-all duration-200"
                    >
                        History 📜 ({historyMovies.length})
                    </button>
                </div>
            </div>

            {/* 3. Display History Gallery Contents Grid */}
            <div className="max-w-6xl w-full mx-auto">
                {historyMovies.length === 0 ? (
                    <div className="text-center py-16 p-8 bg-zinc-900/40 border border-zinc-900/60 rounded-xl backdrop-blur-sm">
                        <p className="text-zinc-500 text-sm font-medium">No movies found in your watch history library.</p>
                        <p className="text-zinc-600 text-xs mt-1">Open any movie card and click "Watch Movie" to start tracking your history!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {historyMovies.map((movie, index) => (
                            <MovieCart 
                                key={`history-item-${movie.id || index}`} 
                                data={movie} 
                                onCardClick={setSelectedMovie} 
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* 4. Details Preview Pop-up Overlay */}
            {selectedMovie && (
                <MovieDetailModal 
                    movie={selectedMovie} 
                    onClose={() => setSelectedMovie(null)} 
                />
            )}

        </div>
    );
}
