import { useState } from 'react';
import { filterMovie } from "../Logic/search"; 
import { fatchData } from '../Data/api';
import { MovieCart } from '../Components/MovieCart';
import { moodData } from "../Data/MoodData";
import { MovieMatchComponent } from '../Components/MovieMatchComponent';
import { MovieDetailModal } from '../Components/MovieDetailModal'; 
import { MovieRouletteComponent } from '../Components/MovieRouletteComponent';


export function MovieMatch() {
    const [activeTab, setActiveTab] = useState(null);
     const [moodMovie, setMoodMovie] = useState(fatchData);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    

    // Filters pipeline trigger logic matrix configurations
    const filteredSavedMovies = selectedGenre === 'All' 
        ? fatchData 
        : filterMovie(fatchData, selectedGenre);

    const handleMoodClick = (moodName) => {
        console.log("Clicked mood:", moodName);
        console.log("First movie:", fatchData[0]);
        console.log("First mood:", moodData[0]);

        const filteredMovies = filterMovie(fatchData, moodName);

        console.log("Filtered movies:", filteredMovies);
        setMoodMovie(filteredMovies);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white flex flex-col justify-start pb-20">
            
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
                        setActiveTab('match'); 
                        setIsOpen(true);       
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
                <div onClick={() => setActiveTab('roulette')} className="flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-900/50 cursor-pointer transition-all group backdrop-blur-sm">
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">🎲</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white text-base">Movie Roulette</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">Let fate choose your movie</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 text-lg">&gt;</span>
                </div>

                {/* 3. Tonight's Pick */}
                <div onClick={() => setActiveTab('tonight')} className="flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-900/50 cursor-pointer transition-all group backdrop-blur-sm">
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">🌙</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white text-base">Tonight's Pick</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">One personalized recommendation</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 text-lg">&gt;</span>
                </div>

                {/* 4. Compare Movies */}
                <div onClick={() => setActiveTab('compare')} className="flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-900/50 cursor-pointer transition-all group backdrop-blur-sm">
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">⚖️</span>
                        <div>
                            <h3 className="font-bold text-zinc-100 group-hover:text-white text-base">Compare Movies</h3>
                            <p className="text-zinc-400 text-xs mt-0.5">Ratings, runtime and more</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 text-lg">&gt;</span>
                </div>
            </div>

            {/* Quick Preference Panel */}
            <div className="max-w-6xl w-full mx-auto px-6 mb-12">
                <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md">
                    <h2 className="text-lg font-bold text-white mb-3">Quick Filter Preferences</h2>
                    <div className="flex flex-wrap gap-2">
                        {moodData && moodData.map((m, idx) => (
                            <button 
                                key={idx}
                                onClick={() => handleMoodClick(m.text)}
                                onCardClick={(m) => {
                                    console.log("clicked:", m);
                                    setSelectedMovie(m);
                                }}
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

            {/* Catalog Grid Showcase */}
            <div className="max-w-6xl w-full mx-auto px-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
                        Your Recent Matches
                    </h2>
                </div>
                
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredSavedMovies && filteredSavedMovies.length > 0 ? (
                        filteredSavedMovies.map((movie, index) => (
                            <MovieCart 
                                // FIXED: key me database id hatakar static unique grid indices lagaye hain
                                key={`saved-grid-node-${index}`} 
                                data={movie} 
                                onCardClick={setSelectedMovie} 
                            />
                        ))
                    ) : (
                        fatchData && fatchData.map((movie, index) => (
                            <MovieCart 
                                // FIXED: Id conflicts hatane ke liye dynamic index interpolation lagayi hai
                                key={`fatch-grid-node-${index}`} 
                                data={movie} 
                                onCardClick={setSelectedMovie} 
                            />
                        ))
                    )}
                </div> */}
                 <div className="grid grid-cols-4 my-6 gap-3">
                    {moodMovie.map((movie, index) => (
                        <MovieCart
                            key={movie.id || index}
                            data={movie}
                            onCardClick={setSelectedMovie}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Components */}
            {selectedMovie && <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
            {/* Sub-modals actions controller wrapper index triggers */}
            {isOpen && (
                <MovieMatchComponent onClose={() => {
                    setIsOpen(false);
                    setActiveTab(null); // Active highlighted node reset handles safely
                }} />
            )}

        </div>
    );
}
