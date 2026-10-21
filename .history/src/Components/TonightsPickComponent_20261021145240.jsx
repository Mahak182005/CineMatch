// import React, { useState } from 'react';
// import { fatchData } from '../Data/api';
// import { MovieDetailModal } from './MovieDetailModal';

// export function TonightsPickComponent({ onClose }) {
//   const [pickedMovie, setPickedMovie] = useState(null);
//   const [isRevealing, setIsRevealing] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   const handleReveal = () => {
//     if (!fatchData || fatchData.length === 0) return;

//     setIsRevealing(true);
//     setPickedMovie(null); // पुराने डेटा को साफ़ करने के लिए

//     // 800 मिलीसेकंड का एक छोटा सा सस्पेंस लोडर
//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * fatchData.length);
//       setPickedMovie(fatchData[randomIndex]);
//       setIsRevealing(false);
//     }, 800);
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
//         {/* मुख्य कंटेनर बॉक्स */}
//         <div className="w-full max-w-lg bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative flex flex-col items-center text-white bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950">
          
//           {/* ऊपर कोने का क्लोज़ बटन */}
//           <button 
//             onClick={onClose} 
//             className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors bg-zinc-900/50 hover:bg-zinc-900 px-2.5 py-1 rounded-md text-sm z-50 cursor-pointer"
//           >
//             ✕
//           </button>

//           {/* हेडर सेक्शन */}
//           <div className="w-full text-left mb-6 flex items-start space-x-3">
//             <span className="text-3xl">🌙</span>
//             <div>
//               <h2 className="text-xl font-bold tracking-tight text-white">Tonight's Pick</h2>
//               <p className="text-zinc-400 text-xs mt-0.5">One personalized recommendation just for you</p>
//             </div>
//           </div>

//           {/* बीच का विज़ुअल एरिया (Mystery Box or Movie Poster View) */}
//           <div className="w-full flex flex-col items-center justify-center my-4 min-h-[220px]">
//             {isRevealing ? (
//               // जब मूवी लोड हो रही हो (सस्पेंस लोडर)
//               <div className="flex flex-col items-center space-y-3">
//                 <div className="w-10 h-10 border-4 border-t-transparent border-pink-500 rounded-full animate-spin"></div>
//                 <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase animate-pulse">Finding your perfect match...</p>
//               </div>
//             ) : pickedMovie ? (
//               // जब रैंडम मूवी मिल जाए तो उसका शानदार प्रीव्यू
//               <div 
//                 onClick={() => setSelectedMovie(pickedMovie)}
//                 className="w-full p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-pink-900/60 shadow-xl flex gap-5 cursor-pointer hover:bg-zinc-900/60 transition-all group animate-[fadeIn_0.4s_ease-out]"
//               >
//                 {/* मूवी का पोस्टर */}
//                 <div className="w-24 h-36 rounded-lg overflow-hidden border border-zinc-800 shrink-0">
//                   <img src={pickedMovie.poster} alt={pickedMovie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
//                 </div>
                
//                 {/* मूवी की डिटेल्स */}
//                 <div className="flex-1 text-left flex flex-col justify-center">
//                   <div className="flex items-center justify-between">
//                     <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md">
//                       ★ {pickedMovie.rating}
//                     </span>
//                     <span className="text-zinc-500 text-xs font-mono">{pickedMovie.year}</span>
//                   </div>
                  
//                   <h3 className="font-extrabold text-white text-base mt-2 group-hover:text-pink-500 transition-colors truncate" title={pickedMovie.title}>
//                     {pickedMovie.title}
//                   </h3>
                  
//                   <p className="text-zinc-400 text-xs line-clamp-2 mt-1 leading-relaxed">
//                     {pickedMovie.description}
//                   </p>
                  
//                   <span className="text-[10px] text-pink-500 font-bold tracking-wider uppercase mt-3 block font-mono">
//                     ✨ Click to view full details
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               // शुरुआत का खाली कार्ड (Mystery Box)
//               <div className="w-full max-w-xs p-6 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/10 flex flex-col items-center justify-center text-center">
//                 <span className="text-4xl animate-bounce mb-3">🎬</span>
//                 <p className="text-zinc-400 text-xs">Not sure what to watch? Let us decide a masterpiece for your night.</p>
//               </div>
//             )}
//           </div>

//           {/* एक्शन ट्रिगर बटन */}
//           {!pickedMovie && !isRevealing && (
//             <button 
//               onClick={handleReveal}
//               className="mt-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs px-8 py-3 rounded-full transition-all shadow-lg shadow-pink-950/40 cursor-pointer tracking-wide active:scale-95"
//             >
//               Reveal Tonight's Pick 🌙
//             </button>
//           )}

//           {pickedMovie && !isRevealing && (
//             <button 
//               onClick={handleReveal}
//               className="mt-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-bold text-xs px-6 py-2 rounded-full transition-all cursor-pointer active:scale-95"
//             >
//               Pick Another One 🔄
//             </button>
//           )}

//         </div>
//       </div>

//       {/* मूवी पर क्लिक करते ही खुलने वाला असली विवरण पृष्ठ (Detail Modal) */}
//       {selectedMovie && (
//         <MovieDetailModal 
//           movie={selectedMovie} 
//           onClose={() => setSelectedMovie(null)} 
//         />
//       )}
//     </>
//   );
// }

import React, { useState } from 'react';
import { fatchData } from '../Data/api'; // अपने फ़ाइल पाथ के हिसाब से चेंज करें

export function TonightsPickComponent() {
  // select की गई कैटेगरी को स्टोर करने के लिए state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // डेटा को 'watchWith' एरे के आधार पर फ़िल्टर करने का लॉजिक
  const filteredMovies = selectedCategory === 'All'
    ? fatchData
    : fatchData.filter(movie => movie.watchWith && movie.watchWith.includes(selectedCategory));

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#141414', color: '#fff', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#e50914' }}>🎬 Movie Matchmaker</h2>
      
      {/* Dropdown Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', gap: '10px', alignItems: 'center' }}>
        <label htmlFor="watchWithSelect" style={{ fontSize: '18px' }}>Who are you watching with?</label>
        <select 
          id="watchWithSelect"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '10px 15px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#333', color: '#fff', border: '1px solid #555', cursor: 'pointer' }}
        >
          <option value="All">Everyone / All Movies</option>
          <option value="Friends">Friends</option>
          <option value="Family">Family</option>
          <option value="Partner">Partner</option>
          <option value="Alone">Alone</option>
        </select>
      </div>

      {/* Movies Grid List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '0 10px' }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} style={{ backgroundColor: '#222', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }}>
              <img 
                src={movie.poster} 
                alt={movie.title} 
                style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>{movie.title} ({movie.year})</h3>
                <p style={{ color: '#aaa', margin: '0 0 10px 0', fontSize: '14px' }}>⭐ {movie.rating} | {movie.runtime} min</p>
                <p style={{ fontSize: '14px', color: '#ddd', flexGrow: 1, lineHeight: '1.4' }}>{movie.description}</p>
                <div style={{ marginTop: '10px' }}>
                  {movie.genre.map((g, idx) => (
                    <span key={idx} style={{ display: 'inline-block', backgroundColor: '#e50914', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#aaa' }}>No movies found for this option.</p>
        )}
      </div>
    </div>
  );
}
