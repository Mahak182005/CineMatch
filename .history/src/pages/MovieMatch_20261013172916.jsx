import { useState } from 'react';
import {filterMovie} from "../Logic/search" 
import { fatchData } from '../Data/api';
import { MovieCart } from '../Components/MovieCart';
import {moodData} from "../Data/MoodData"
import { MovieMatchComponent } from '../Components/MovieMatchComponent';

export function MovieMatch() {
    const [activeTab, setActiveTab] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [isOpen, setIsOpen] = useState(false);

    // Purani line ko is tarah se badlein:
    const filteredSavedMovies = selectedGenre === 'All' 
        ? fatchData 
        : filterMovie(fatchData, selectedGenre)


    return (
        <div className="min-h-screen w-full text-white flex flex-col justify-start pb-20">
            
            {/* Header Section */}
            <div className="max-w-6xl w-full mx-auto px-6 pt-16 pb-8">
                <span className="text-red-500 font-bold text-xs uppercase tracking-widest">Engine Mode</span>
                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl mt-1">
                    Find it your way
                </h1>
                <p className="text-zinc-400 text-sm md:text-base mt-2">
                    Every tool you need for the perfect movie night.
                </p>
            </div>

            {/* Core 4 Tools Grid */}
            <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {/* 1. Movie Match */}
               <div 
                    onClick={() => {
                        setActiveTab('match'); // Purana tab feature bhi chalega
                        setIsOpen(true);       // Modal window pop-up bhi active hoga
                    }} 
                    className={`flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border transition-all duration-300 cursor-pointer group backdrop-blur-sm ${
                        activeTab === 'match' ? 'border-red-600 shadow-lg shadow-red-950/50' : 'border-zinc-800/80 hover:border-red-900/50'
                    }`}
                >
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

            {/* NEW ADDITION 1: Quick Preference Panel */}
            <div className="max-w-6xl w-full mx-auto px-6 mb-12">
                <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md">
                    <h2 className="text-lg font-bold text-white mb-3">Quick Filter Preferences</h2>
                    
                    <div className="flex flex-wrap gap-2">
                        {moodData.map((m) => (
                            <button 
                                key={m}
                                onClick={() => setSelectedGenre(m.text)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                                    selectedGenre === m.text 
                                        ? 'bg-red-600 text-white shadow-md shadow-red-900/40' 
                                        : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                                }`}
                            >
                                {m.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* NEW ADDITION 2: Recent Matches Movie Row */}
            <div className="max-w-6xl w-full mx-auto px-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-zinc-100 tracking-tight">Your Recent Matches: {filteredSavedMovies.length} found</h2>
                    <span className="text-xs text-red-400 hover:underline cursor-pointer">See Full History &rarr;</span>
                </div>
                {
                    filteredSavedMovies.length>0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredSavedMovies.map((movie, index) => (
                                <MovieCart data={movie}/> 
                            ))}
                        </div> ) : (
                            fatchData.map((m)=>{
                                <MovieCart data={movie}/> 
                            })
                        )
                }
               
            </div>

                {isOpen && ( <MovieMatchComponent /> ) }
        </div>
    );
}
