import { useState } from 'react';
import { fatchData } from '../Data/api';

export function MovieMatch() {
    // const [activeTab, setActiveTab] = useState(null);
    // const [selectedGenre, setSelectedGenre] = useState('All');

    // // 1. JSON Data me se saare Unique Genres nikalne ke liye dynamic logic
    // const allGenres = ['All', ...new Set(fatchData.map(movie => movie.genre).filter(Boolean))];

    // // 2. Filter logic: Jo Genre select hoga, wahi movies screen par dikhengi
    // const filteredMovies = selectedGenre === 'All' 
    //     ? fatchData 
    //     : fatchData.filter(movie => movie.genre === selectedGenre);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white flex flex-col justify-start pb-20">
            
            {/* Header Area */}
            <div className="max-w-6xl w-full mx-auto px-6 pt-16 pb-8">
                <span className="text-red-500 font-bold text-xs uppercase">Engine Mode</span>
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
                {/* <div onClick={() => setActiveTab('match')} className={`flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border transition-all duration-300 cursor-pointer group backdrop-blur-sm ${activeTab === 'match' ? 'border-red-600 shadow-lg shadow-red-950/50' : 'border-zinc-800/80 hover:border-red-900/50'}`}> */}
                <div>    <div className="flex items-center space-x-4">
                        <span className="text-3xl">❤️</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white transition-colors text-base">Movie Match</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">Mood, genre, time & language</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-lg">&gt;</span>
                </div>

                {/* 2. Movie Roulette */}
                {/* <div onClick={() => setActiveTab('roulette')} className={`flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border transition-all duration-300 cursor-pointer group backdrop-blur-sm ${activeTab === 'roulette' ? 'border-red-600 shadow-lg shadow-red-950/50' : 'border-zinc-800/80 hover:border-red-900/50'}`}> */}
                <div>
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

        

        </div>
    );
}

