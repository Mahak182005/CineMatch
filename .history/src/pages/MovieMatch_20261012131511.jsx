// export function MovieMatch(){
//     return(
//         <>      
//             {/* <div className="h-screen bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white">
//                 <div className=" mx-25 py-20 ">
//                     <h1 className="text-3xl text-white">Find it your way</h1>
//                     <p className="text-zinc-400 text-sm mt-1">Every tool you need for the perfect movie night.</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">

//                     <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
//                     <div className="flex items-center space-x-4">
//                         <span className="text-2xl">❤️</span>
//                         <div>
//                         <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Movie Match</h3>
//                         <p className="text-zinc-400 text-xs mt-0.5">Mood, genre, time & language</p>
//                         </div>
//                     </div>
//                     <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
//                     </div>

//                     <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
//                     <div className="flex items-center space-x-4">
//                         <span className="text-2xl">🎲</span>
//                         <div>
//                         <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Movie Roulette</h3>
//                         <p className="text-zinc-400 text-xs mt-0.5">Let fate choose your movie</p>
//                         </div>
//                     </div>
//                     <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
//                     </div>

//                     <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
//                     <div className="flex items-center space-x-4">
//                         <span className="text-2xl">🌙</span>
//                         <div>
//                         <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Tonight's Pick</h3>
//                         <p className="text-zinc-400 text-xs mt-0.5">One personalized recommendation</p>
//                         </div>
//                     </div>
//                     <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
//                     </div>

//                     <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
//                     <div className="flex items-center space-x-4">
//                         <span className="text-2xl">⚖️</span>
//                         <div>
//                         <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Compare Movies</h3>
//                         <p className="text-zinc-400 text-xs mt-0.5">Ratings, runtime and more</p>
//                         </div>
//                     </div>
//                     <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
//                     </div>

//                 </div>
//             </div> */}

//         </>
//     )
// }

import { useState } from 'react';
import { fatchData } from '../Data/api';

export function MovieMatch({ fatchData = [] }) {
    const [activeTab, setActiveTab] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState('All');

    // 1. JSON Data me se saare Unique Genres nikalne ke liye dynamic logic
    const allGenres = ['All', ...new Set(fatchData.map(movie => movie.genre).filter(Boolean))];

    // 2. Filter logic: Jo Genre select hoga, wahi movies screen par dikhengi
    const filteredMovies = selectedGenre === 'All' 
        ? fatchData 
        : fatchData.filter(movie => movie.genre === selectedGenre);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white flex flex-col justify-start pb-20">
            
            {/* Header Area */}
            <div className="max-w-6xl w-full mx-auto px-6 pt-16 pb-8">
                <span className="text-red-500 font-bold text-xs uppercase tracking-widest">Engine Mode</span>
                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl mt-1">
                    Find it your way
                </h1>
                <p className="text-zinc-400 text-sm md:text-base mt-2">
                    Every tool you need for the perfect movie night.
                </p>
            </div>

            {/* Core 4 Interactive Tools Grid */}
            <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                
                {/* 1. Movie Match */}
                <div onClick={() => setActiveTab('match')} className={`flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border transition-all duration-300 cursor-pointer group backdrop-blur-sm ${activeTab === 'match' ? 'border-red-600 shadow-lg shadow-red-950/50' : 'border-zinc-800/80 hover:border-red-900/50'}`}>
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">❤️</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white transition-colors text-base">Movie Match</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">Mood, genre, time & language</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-lg">&gt;</span>
                </div>

                {/* 2. Movie Roulette */}
                <div onClick={() => setActiveTab('roulette')} className={`flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border transition-all duration-300 cursor-pointer group backdrop-blur-sm ${activeTab === 'roulette' ? 'border-red-600 shadow-lg shadow-red-950/50' : 'border-zinc-800/80 hover:border-red-900/50'}`}>
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">🎲</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white transition-colors text-base">Movie Roulette</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">Let fate choose your movie</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-lg">&gt;</span>
                </div>

                {/* 3. Tonight's Pick */}
                <div onClick={() => setActiveTab('tonight')} className={`flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border transition-all duration-300 cursor-pointer group backdrop-blur-sm ${activeTab === 'tonight' ? 'border-red-600 shadow-lg shadow-red-950/50' : 'border-zinc-800/80 hover:border-red-900/50'}`}>
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">🌙</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white transition-colors text-base">Tonight's Pick</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">One personalized recommendation</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-lg">&gt;</span>
                </div>

                {/* 4. Compare Movies */}
                <div onClick={() => setActiveTab('compare')} className={`flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border transition-all duration-300 cursor-pointer group backdrop-blur-sm ${activeTab === 'compare' ? 'border-red-600 shadow-lg shadow-red-950/50' : 'border-zinc-800/80 hover:border-red-900/50'}`}>
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">⚖️</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white transition-colors text-base">Compare Movies</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">Ratings, runtime and more</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-lg">&gt;</span>
                </div>
            </div>

            {/* Dynamic Genre Preferences Panel */}
            <div className="max-w-6xl w-full mx-auto px-6 mb-12">
                <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md">
                    <h2 className="text-lg font-bold text-white mb-3">Quick Filter Preferences</h2>
                    <div className="flex flex-wrap gap-2">
                        {allGenres.map((genre) => (
                            <button 
                                key={genre}
                                onClick={() => setSelectedGenre(genre)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                                    selectedGenre === genre 
                                        ? 'bg-red-600 text-white shadow-md shadow-red-900/40' 
                                        : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                                }`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dynamic Movie Grid mapped from fetchData JSON */}
            <div className="max-w-6xl w-full mx-auto px-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
                        {selectedGenre === 'All' ? 'All Indexed Movies' : `${selectedGenre} Matches`} ({filteredMovies.length})
                    </h2>
                </div>
                
                {filteredMovies.length === 0 ? (
                    <p className="text-zinc-500 text-sm mt-4">No movies found in this category.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredMovies.map((movie, index) => (
                            <div key={movie.id || index} className="group relative rounded-xl overflow-hidden bg-zinc-900/40 border border-zinc-800/80 hover:border-red-900/50 transition-all duration-300 flex flex-col justify-between">
                                <div className="h-48 w-full overflow-hidden relative bg-zinc-950">
                                    <img 
                                        src={movie.poster_url || 'https://unsplash.com'} 
                                        alt={movie.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                                    />
                                    {movie.rating && (
                                        <div className="absolute top-2 right-2 bg-zinc-950/90 border border-zinc-800 px-2 py-0.5 rounded text-[10px] text-amber-400 font-bold shadow-md">
                                            ★ {movie.rating}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] text-red-500 font-semibold tracking-wider uppercase">{movie.genre || 'Movie'}</span>
                                        <h4 className="font-bold text-white text-sm truncate mt-0.5" title={movie.title}>{movie.title}</h4>
                                    </div>
                                    <p className="text-zinc-500 text-xs mt-2">
                                        Released: {movie.release_year || movie.year || 'N/A'} {movie.runtime ? `· ${movie.runtime} min` : ''}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}