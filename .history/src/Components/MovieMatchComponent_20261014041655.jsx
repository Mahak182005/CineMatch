import React, { useState } from 'react';
import { fatchData } from '../Data/api';
// 1. FIXED: Dynamic context render bypass popup detail modal ko call kiya hai
import { MovieDetailModal } from './MovieDetailModal'; 

export function MovieMatchComponent({ onClose }) {
  const [moviesData] = useState(fatchData || []);
  const [selectedMood, setSelectedMood] = useState('Any mood');
  const [selectedLanguage, setSelectedLanguage] = useState('Any language');
  
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // 👇 Dynamic detail popup system tracks handler state nodes
  const [selectedMovie, setSelectedMovie] = useState(null);

  // FIXED LOGIC: Multi-mood array matching verification rules grid setup
  const handleFindMovie = () => {
    const results = moviesData.filter(movie => {
      // 💡 FIXED: movie.mood vector properties values includes dynamically double cross checking rules logic
      const matchMood = selectedMood === 'Any mood' || 
        (movie.mood && Array.isArray(movie.mood) && movie.mood.some(m => m.toLowerCase() === selectedMood.toLowerCase()));
      
      const matchLanguage = selectedLanguage === 'Any language' || 
        (movie.language && movie.language.toLowerCase() === selectedLanguage.toLowerCase());
        
      return matchMood && matchLanguage;
    });

    setFilteredMovies(results); 
    setHasSearched(true); 
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
        {/* Main Dialog Box Container */}
        <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative max-h-[90vh] flex flex-col text-white z-50">
          
          {/* Upper Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors font-sans text-sm px-2 py-1 bg-zinc-900/50 hover:bg-zinc-900 rounded-md z-50 cursor-pointer"
          >
            ✕
          </button>

          {/* Title Header Section */}
          <div className="mb-5 flex-shrink-0 text-left">
            <h2 className="text-xl font-bold text-white tracking-tight">Movie Match</h2>
            <p className="text-zinc-400 text-xs mt-1">What are you in the mood for tonight?</p>
          </div>

          {/* Dropdown Input Stack */}
          <div className="space-y-4 mb-5 flex-shrink-0 text-left">
            {/* Mood Dropdown Selector */}
            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Mood</label>
              <select 
                value={selectedMood} 
                onChange={(e) => setSelectedMood(e.target.value)} 
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 cursor-pointer transition-colors"
              >
                <option value="Any mood">Any mood</option>
                <option value="Thrilled">Thrilled ⚡</option>
                <option value="Happy">Happy 😊</option>
                <option value="Sad">Sad 😢</option>
                <option value="Romantic">Romantic 💕</option>
                <option value="Energetic">Energetic 🔥</option>
                <option value="Relaxed">Relaxed ☕</option>
              </select>
            </div>

            {/* Language Dropdown Selector */}
            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Language</label>
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)} 
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 cursor-pointer transition-colors"
              >
                <option value="Any language">Any language</option>
                <option value="English">English</option>
                <option value="Korean">Korean</option>
              </select>
            </div>
          </div>

          {/* Search CTA Execute Button */}
          <button 
            onClick={handleFindMovie}
            className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-md shadow-amber-500/10 cursor-pointer flex-shrink-0"
          >
            <span>✨</span>
            <span>Find my movie</span>
          </button>

          {/* DYNAMIC SEARCH RESULTS SCROLLABLE VIEWPORT */}
          {hasSearched && (
            <div className="mt-5 border-t border-zinc-900 pt-4 overflow-y-auto flex-1 text-left custom-scrollbar">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Matched Results ({filteredMovies.length})
              </h3>
              
              {filteredMovies.length === 0 ? (
                <p className="text-zinc-500 text-xs py-4 text-center">No movies match these preferences parameters.</p>
              ) : (
                <div className="space-y-2">
                  {filteredMovies.map((movie, index) => (
                    <div 
                      key={movie.id || index} 
                      // 👇 FIXED: Row click handles trigger integration safely
                      onClick={() => setSelectedMovie(movie)}
                      className="p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 flex items-center space-x-3 hover:bg-zinc-900/80 hover:border-red-950 transition-all cursor-pointer group" 
                    >
                      <img src={movie.poster} alt={movie.title} className="w-9 h-12 object-cover rounded shadow group-hover:scale-102 transition-transform" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-xs font-bold truncate group-hover:text-red-400 transition-colors">{movie.title}</h4>
                        <p className="text-zinc-500 text-[10px] mt-0.5">{movie.year} &middot; {movie.language}</p>
                      </div>
                      <span className="text-amber-400 text-xs font-bold font-mono">★{movie.rating}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* 👇 2. FIXED: Inner nested detail overlays rendering layout hooks mapping */}
      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </>
  );
}
