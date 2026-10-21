import React, { useState } from 'react';
import { fatchData } from '../Data/api';
import { MovieDetailModal } from './MovieDetailModal';

export function MovieRouletteComponent({ onClose }) {
  const [isRolling, setIsRolling] = useState(false);
  const [resultMovie, setResultMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSpin = () => {
    if (!fatchData || fatchData.length === 0) return;

    setIsRolling(true);
    setResultMovie(null); // Purani select ki hui movie ko clear karne ke liye

    // 1 second tak dice ghumega, fir random movie select hogi
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fatchData.length);
      setResultMovie(fatchData[randomIndex]);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
        {/* Main Card Dialog Box Container */}
        <div className="w-full max-w-lg bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative flex flex-col items-center text-white bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950">
          
          {/* Top Corner Cross Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors bg-zinc-900/50 hover:bg-zinc-900 px-2.5 py-1 rounded-md text-sm z-50 cursor-pointer"
          >
            ✕
          </button>

          {/* Header Section */}
          <div className="w-full text-left mb-8 flex items-start space-x-3">
            <span className="text-3xl">🎲</span>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">Movie Roulette</h2>
              <p className="text-zinc-400 text-xs mt-0.5">Let fate choose your movie</p>
            </div>
          </div>

          {/* Center Dice Section with Purple/Pink Glow Ring */}
          <div className="flex flex-col items-center justify-center my-6">
            <div className="w-40 h-40 rounded-full border-4 border-purple-600/80 shadow-[0_0_25px_rgba(147,51,234,0.5)] flex items-center justify-center bg-zinc-950/60 backdrop-blur-md relative overflow-hidden group">
              
              {/* Spinning/Rotating Dice element */}
              <span 
                className={`text-6xl select-none transition-transform duration-1000 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${
                  isRolling ? 'animate-[spin_1s_linear_infinite]' : 'hover:scale-110'
                }`}
              >
                🎲
              </span>
            </div>
          </div>

          {/* Dynamic Spin Action Button */}
          <button 
            onClick={handleSpin}
            disabled={isRolling}
            className="mt-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:from-zinc-800 disabled:to-zinc-800 disabled:text-zinc-500 text-white font-bold text-xs px-8 py-3 rounded-full transition-all shadow-lg shadow-pink-950/40 cursor-pointer tracking-wide active:scale-95"
          >
            {isRolling ? 'Spinning...' : 'Spin the wheel'}
          </button>

          {/* RANDOM MOVIE MATCH RESULT DISPLAY SLIDE */}
          {resultMovie && !isRolling && (
            <div 
              onClick={() => setSelectedMovie(resultMovie)}
              className="w-full mt-8 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-950 flex items-center space-x-4 cursor-pointer hover:bg-zinc-900/70 transition-all group animate-[fadeIn_0.3s_ease-out]"
            >
              <img src={resultMovie.poster} alt={resultMovie.title} className="w-12 h-16 object-cover rounded-md border border-zinc-800 shadow" />
              <div className="flex-1 min-w-0 text-left">
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded">
                  ★ {resultMovie.rating}
                </span>
                <h4 className="font-bold text-white text-sm truncate mt-1.5 group-hover:text-red-400 transition-colors">
                  {resultMovie.title}
                </h4>
                <p className="text-zinc-500 text-xs mt-0.5">{resultMovie.year} &middot; Click to view details</p>
              </div>
              <span className="text-zinc-600 group-hover:text-red-400 transition-colors text-base font-mono">&gt;</span>
            </div>
          )}

        </div>
      </div>

      {/* Dynamic Detail Modal Trigger Overlay */}
      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </>
  );
}
