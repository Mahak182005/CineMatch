import React, { useState } from 'react';
import { fatchData } from '../Data/api';
import { MovieDetailModal } from './MovieDetailModal';

export function CompareMoviesComponent({ onClose }) {
  const [movieOneId, setMovieOneId] = useState('');
  const [movieTwoId, setMovieTwoId] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Id ke basis par selected movie objects find karne ke liye mapping layout
  const movieOne = fatchData.find(m => m.id === parseInt(movieOneId));
  const movieTwo = fatchData.find(m => m.id === parseInt(movieTwoId));

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
        {/* Main Dialog Box Card Structure */}
        <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative flex flex-col text-white max-h-[90vh] overflow-y-auto bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950">
          
          {/* Top Corner Cross Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors bg-zinc-900/50 hover:bg-zinc-900 px-2.5 py-1 rounded-md text-sm z-50 cursor-pointer"
          >
            ✕
          </button>

          {/* Header Section */}
          <div className="w-full text-left mb-6 flex items-start space-x-3 border-b border-zinc-900 pb-4 flex-shrink-0">
            <span className="text-3xl">⚖️</span>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">Compare Movies</h2>
              <p className="text-zinc-400 text-xs mt-0.5">Analyze ratings, runtimes, cast, and specs side by side</p>
            </div>
          </div>

          {/* 1. SELECTORS DROPDOWNS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-shrink-0">
            {/* Movie 1 Selector */}
            <div className="text-left">
              <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Select First Movie</label>
              <select 
                value={movieOneId} 
                onChange={(e) => setMovieOneId(e.target.value)}
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-red-900/60 cursor-pointer transition-colors"
              >
                <option value="">Choose Movie 1...</option>
                {fatchData.map((m, i) => (
                  <option key={`comp-select1-${m.id}-${i}`} value={m.id}>{m.title} ({m.year})</option>
                ))}
              </select>
            </div>

            {/* Movie 2 Selector */}
            <div className="text-left">
              <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Select Second Movie</label>
              <select 
                value={movieTwoId} 
                onChange={(e) => setMovieTwoId(e.target.value)}
                className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-red-900/60 cursor-pointer transition-colors"
              >
                <option value="">Choose Movie 2...</option>
                {fatchData.map((m, i) => (
                  <option key={`comp-select2-${m.id}-${i}`} value={m.id}>{m.title} ({m.year})</option>
                ))}
              </select>
            </div>
          </div>

          {/* 2. COMPARISON LAYOUT MATRIX DISPLAY */}
          <div className="flex-1 w-full">
            {movieOne || movieTwo ? (
              <div className="grid grid-cols-2 gap-4 md:gap-8 border border-zinc-900 bg-zinc-900/10 rounded-xl p-4 md:p-6 text-left">
                
                {/* COLUMN LEFT: MOVIE 1 DETAILS */}
                <div className="space-y-4">
                  {movieOne ? (
                    <div onClick={() => setSelectedMovie(movieOne)} className="group cursor-pointer">
                      <img src={movieOne.poster} alt={movieOne.title} className="w-24 h-36 object-cover rounded-lg border border-zinc-800 shadow mb-3 group-hover:scale-102 transition-transform" />
                      <h3 className="font-extrabold text-white text-base md:text-lg group-hover:text-red-400 transition-colors leading-tight">{movieOne.title}</h3>
                      <p className="text-zinc-500 text-xs font-mono mt-0.5">{movieOne.year}</p>
                      
                      <div className="mt-4 pt-3 border-t border-zinc-900 space-y-3 font-sans text-xs">
                        <div>
                          <span className="text-zinc-500 block">Rating:</span>
                          <span className="text-amber-400 font-bold">★ {movieOne.rating} / 10</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Runtime:</span>
                          <span className="text-zinc-300">{movieOne.runtime} minutes</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Genre:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {movieOne.genre?.map((g, idx) => (
                              <span key={idx} className="bg-red-950/20 border border-red-900/20 text-red-400 text-[9px] font-bold px-1.5 py-0.5 rounded">{g}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Director:</span>
                          <span className="text-zinc-300 truncate block">{movieOne.director}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Starring Cast:</span>
                          <span className="text-zinc-400 text-[11px] line-clamp-2 leading-relaxed">{movieOne.cast?.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-zinc-600 text-xs italic py-12 text-center">First slot active, select movie above...</p>
                  )}
                </div>

                {/* COLUMN RIGHT: MOVIE 2 DETAILS */}
                <div className="border-l border-zinc-900 pl-4 md:pl-8 space-y-4">
                  {movieTwo ? (
                    <div onClick={() => setSelectedMovie(movieTwo)} className="group cursor-pointer">
                      <img src={movieTwo.poster} alt={movieTwo.title} className="w-24 h-36 object-cover rounded-lg border border-zinc-800 shadow mb-3 group-hover:scale-102 transition-transform" />
                      <h3 className="font-extrabold text-white text-base md:text-lg group-hover:text-red-400 transition-colors leading-tight">{movieTwo.title}</h3>
                      <p className="text-zinc-500 text-xs font-mono mt-0.5">{movieTwo.year}</p>
                      
                      <div className="mt-4 pt-3 border-t border-zinc-900 space-y-3 font-sans text-xs">
                        <div>
                          <span className="text-zinc-500 block">Rating:</span>
                          <span className="text-amber-400 font-bold">★ {movieTwo.rating} / 10</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Runtime:</span>
                          <span className="text-zinc-300">{movieTwo.runtime} minutes</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Genre:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {movieTwo.genre?.map((g, idx) => (
                              <span key={idx} className="bg-red-950/20 border border-red-900/20 text-red-400 text-[9px] font-bold px-1.5 py-0.5 rounded">{g}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Director:</span>
                          <span className="text-zinc-300 truncate block">{movieTwo.director}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Starring Cast:</span>
                          <span className="text-zinc-400 text-[11px] line-clamp-2 leading-relaxed">{movieTwo.cast?.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-zinc-600 text-xs italic py-12 text-center">Second slot active, select movie above...</p>
                  )}
                </div>

              </div>
            ) : (
              /* EMPTY CHOOSE STATE CARD DESIGN */
              <div className="py-16 text-center border border-dashed border-zinc-900 rounded-xl bg-zinc-900/5">
                <span className="text-4xl">📊</span>
                <p className="text-zinc-500 text-xs max-w-xs mx-auto mt-2">Select two movies from the input drop-downs above to initialize active matrix configurations.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Dynamic Detail Modal Layer Overlays */}
      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </>
  );
}
