// import React, { useState } from 'react';

// export function MovieMatchComponent({ onClose }) {
//     // Modal open ya close status track karne ke liye basic state variable
//     const [isOpen, setIsOpen] = useState(false);
    
//     // Dropdown fields ke entries manage karne ke liye configurations
//     const [selectedMood, setSelectedMood] = useState('Any mood');
//     const [selectedDuration, setSelectedDuration] = useState('Any duration');

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
                    
//                     {/* Main Dialog Box Card Structure Container */}
//                     <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-2xl relative">
                        
//                         {/* Upper Close Button Cross Icon Action trigger layout handler element */}
//                         <button 
//                             onClick={onClose} 
//                             className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors font-sans text-sm p-1.5 hover:bg-zinc-900 rounded-md"
//                         >
//                             ✕
//                         </button>

//                         {/* Title Header Section lines structure block markup element */}
//                         <div className="mb-6">
//                             <h2 className="text-xl font-bold text-white tracking-tight">Movie Match</h2>
//                             <p className="text-zinc-400 text-xs mt-1">What are you in the mood for tonight?</p>
//                         </div>

//                         {/* Dropdown interactive selection field wrappers matrix stack */}
//                         <div className="space-y-4 mb-6">
                            
//                             {/* Input Field Item A: Mood Option Node Category List selection wrapper drop-down configuration markup */}
//                             <div>
//                                 <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Mood</label>
//                                 <select 
//                                     value={selectedMood}
//                                     onChange={(e) => setSelectedMood(e.target.value)}
//                                     className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3C/svg%3E')] bg-no-repeat bg-[right_12px_center]"
//                                 >
//                                     <option value="Any mood">Any mood</option>
//                                     <option value="Thrilled">Thrilled ⚡</option>
//                                     <option value="Happy">Happy 😊</option>
//                                     <option value="Sad">Sad 😢</option>
//                                     <option value="Romantic">Romantic 💕</option>
//                                     <option value="Energetic">Energetic 🔥</option>
//                                 </select>
//                             </div>

//                             {/* Input Field Item B: Runtime/Duration option grid framework layouts dropdown element configurations block */}
//                             <div>
//                                 <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Runtime</label>
//                                 <select 
//                                     value={selectedDuration}
//                                     onChange={(e) => setSelectedDuration(e.target.value)}
//                                     className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 transition-colors cursor-pointer"
//                                 >
//                                     <option value="Any duration">Any duration</option>
//                                     <option value="Short (&lt; 90 min)">Short (&lt; 90 min)</option>
//                                     <option value="Standard (90-120 min)">Standard (90-120 min)</option>
//                                     <option value="Long (&gt; 120 min)">Long (&gt; 120 min)</option>
//                                 </select>
//                             </div>

//                         </div>

//                         {/* Action CTA Submission Execute Trigger Button container component panel with high contrast amber style */}
//                         <button 
//                             onClick={() => {
//                                 alert(`Searching database arrays matching custom preferences parameters:\nMood: ${selectedMood}\nDuration: ${selectedDuration}`);
//                                 setIsOpen(false); // Task triggered completed - closing layout view node framework handler
//                             }}
//                             className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-md shadow-amber-500/10 active:scale-[0.99]"
//                         >
//                             <span>✨</span>
//                             <span>Find my movie</span>
//                         </button>

//                     </div>
//                 </div>
            
//     );
// }

import React, { useState } from 'react';
import { fatchData } from '../Data/api';

// Sample Movies Data (Aap isko apne actual data/API se replace kar sakte hain)


export function MovieMatchComponent({ onClose }) {
  // Dropdown states manage karne ke liye
  const [moviesData, setMovieData] = useState(fatchData)
  const [selectedMood, setSelectedMood] = useState('Any mood');
  const [selectedLanguage, setSelectedLanguage] = useState('Any language');
  
  // Search results ko store aur screen par show karne ke liye State
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track karne ke liye ki search trigger hua ya nahi

  // Searching aur Matching ka Logic
  const handleFindMovie = () => {
    const results = moviesData.filter(movie => {
      const matchMood = selectedMood === 'Any mood' || movie.mood === selectedMood;
      const matchLanguage = selectedLanguage === 'Any language' || movie.language === selectedLanguage;
      return matchMood && matchLanguage;
    });

    setFilteredMovies(results); // Matches ko state mein save kiya
    setHasSearched(true); // Search completed status true kiya
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      {/* Main Dialog Box Card Structure Container */}
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-2xl relative max-h-[85vh] flex flex-col">
        
        {/* Upper Close Button Cross Icon */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors font-sans text-sm p-1.5 hover:bg-zinc-900 rounded-md"
        >
          ✕
        </button>

        {/* Title Header Section */}
        <div className="mb-6 flex-shrink-0">
          <h2 className="text-xl font-bold text-white tracking-tight">Movie Match</h2>
          <p className="text-zinc-400 text-xs mt-1">What are you in the mood for tonight?</p>
        </div>

        {/* Dropdown Input Matrix */}
        <div className="space-y-4 mb-6 flex-shrink-0">
          {/* Mood Dropdown */}
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Mood</label>
            <select 
              value={selectedMood} 
              onChange={(e) => setSelectedMood(e.target.value)} 
              className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 transition-colors cursor-pointer"
            >
              <option value="Any mood">Any mood</option>
              <option value="Thrilled">Thrilled ⚡</option>
              <option value="Happy">Happy 😊</option>
              <option value="Sad">Sad 😢</option>
              <option value="Romantic">Romantic 💕</option>
              <option value="Energetic">Energetic 🔥</option>
            </select>
          </div>

          {/* Language Dropdown */}
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Language</label>
            <select 
              value={selectedLanguage} 
              onChange={(e) => setSelectedLanguage(e.target.value)} 
              className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 transition-colors cursor-pointer"
            >
              <option value="Any language">Any language</option>
              <option value="Hindi">Hindi 🇮🇳</option>
              <option value="English">English 🇬🇧</option>
              <option value="Spanish">Spanish 🇪🇸</option>
              <option value="Korean">Korean 🇰🇷</option>
              <option value="Japanese">Japanese 🇯🇵</option>
              <option value="French">French 🇫🇷</option>
            </select>
          </div>
        </div>

        {/* Action CTA Button */}
        <button 
          onClick={handleFindMovie}
          className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-md shadow-amber-500/10 active:scale-[0.99] flex-shrink-0 mb-4"
        >
          <span>✨</span>
          <span>Find my movie</span>
        </button>

        {/* --- SEARCH RESULTS DISPLAY LOGIC --- */}
        {hasSearched && (
          <div className="overflow-y-auto border-t border-zinc-900 pt-4 custom-scrollbar flex-1">
            <h3 className="text-zinc-400 text-xs font-semibold mb-2 tracking-wide">Matched Movies:</h3>
            
            {filteredMovies.length > 0 ? (
              <div className="space-y-2">
                {filteredMovies.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-white text-xs font-bold">{movie.title}</h4>
                      <p className="text-[10px] text-zinc-500 mt-0.5">{movie.mood}</p>
                    </div>
                    <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700">
                      {movie.language}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-zinc-500 text-xs">
                😢 No movies found matching these filters.
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
