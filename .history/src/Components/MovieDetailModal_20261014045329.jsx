// import React, { useState, useEffect } from 'react';

// export function MovieDetailModal({ movie, onClose }) {
//     const [isLiked, setIsLiked] = useState(false);
//     const [isSaved, setIsSaved] = useState(false);
//     const [activeVideoUrl, setActiveVideoUrl] = useState(null); 

//     if (!movie) return null;

//     useEffect(() => {
//         const updateModalStates = () => {
//             const likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
//             setIsLiked(likedMovies.includes(movie.id));

//             const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
//             setIsSaved(savedMovies.includes(movie.id));
//         };
//         updateModalStates();
//         window.addEventListener('storage', updateModalStates);
//         return () => window.removeEventListener('storage', updateModalStates);
//     }, [movie.id]);

//     const handleLikeToggle = () => {
//         let likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
//         if (likedMovies.includes(movie.id)) {
//             likedMovies = likedMovies.filter(id => id !== movie.id);
//             setIsLiked(false);
//         } else {
//             likedMovies.push(movie.id);
//             setIsLiked(true);
//         }
//         localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
//         window.dispatchEvent(new Event('storage'));
//     };

//     const handleSaveToggle = () => {
//         let savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
//         if (savedMovies.includes(movie.id)) {
//             savedMovies = savedMovies.filter(id => id !== movie.id);
//             setIsSaved(false);
//         } else {
//             savedMovies.push(movie.id);
//             setIsSaved(true);
//         }
//         localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
//         window.dispatchEvent(new Event('storage'));
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//             <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative flex flex-col justify-between min-h-[480px] bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950 text-white">
                
//                 <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors text-sm px-3 py-1.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer z-50">
//                     ✕ Close
//                 </button>

//                 {activeVideoUrl ? (
//                     <div className="w-full h-full flex flex-col flex-1">
//                         <div className="flex items-center justify-between mb-4 text-left">
//                             <div>
//                                 <h3 className="text-xl font-bold">{movie.title}</h3>
//                                 <p className="text-zinc-500 text-xs mt-0.5">Streaming live inside CineMatch Player</p>
//                             </div>
//                             <button onClick={() => setActiveVideoUrl(null)} className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-4 py-2 rounded-full font-bold cursor-pointer">
//                                 ← Back to Info
//                             </button>
//                         </div>
//                         <div className="w-full flex-1 aspect-video bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 relative">
//                             <iframe src={activeVideoUrl} title={movie.title} className="w-full h-full absolute inset-0" allowFullScreen></iframe>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-left w-full">
//                         <div className="w-48 sm:w-56 md:w-64 aspect-[2/3] overflow-hidden rounded-xl border border-zinc-800/80 shadow-2xl shrink-0 bg-zinc-900">
//                             <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
//                         </div>

//                         <div className="flex-1 flex flex-col justify-between min-w-0">
//                             <div>
//                                 <span className="text-pink-500 font-bold text-xs uppercase tracking-widest font-mono">Featured Film</span>
//                                 <h2 className="text-3xl font-extrabold tracking-tight mb-3 truncate">{movie.title}</h2>
//                                 <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-medium mb-4">
//                                     <span className="text-cyan-400 font-bold">★ {movie.rating || '8.4'}</span>
//                                     <span>&middot;</span><span>{movie.year}</span>
//                                     <span>&middot;</span><span>{movie.runtime} min</span>
//                                     <span>&middot;</span><span className="text-zinc-300">{Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre}</span>
//                                 </div>
//                                 <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">{movie.description}</p>
//                             </div>

//                             <div className="flex flex-wrap items-center gap-2.5 mt-6">
//                                 <button onClick={() => movie.trailerUrl ? setActiveVideoUrl(movie.trailerUrl) : alert("No trailer available")} className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-full cursor-pointer active:scale-95 shadow-lg shadow-pink-950/40">
//                                     ▶ Play trailer
//                                 </button>
//                                 <button onClick={() => movie.movieUrl ? setActiveVideoUrl(movie.movieUrl) : alert("No movie streaming link available")} className="bg-red-600 text-white font-bold text-xs px-5 py-2.5 rounded-full cursor-pointer active:scale-95 shadow-lg shadow-red-950/40">
//                                     💻 Watch Movie
//                                 </button>
//                                 <button onClick={handleLikeToggle} className={`font-bold text-xs px-4 py-2.5 rounded-full border cursor-pointer ${isLiked ? 'bg-rose-600/20 border-rose-500 text-rose-400' : 'bg-zinc-900/40 border-zinc-800 text-zinc-200'}`}>
//                                     <span>{isLiked ? '❤️ Liked' : '♡ Favorite'}</span>
//                                 </button>
//                                 <button onClick={handleSaveToggle} className={`font-bold text-xs px-4 py-2.5 rounded-full border cursor-pointer ${isSaved ? 'bg-purple-600/20 border-purple-500 text-purple-400' : 'bg-zinc-900/40 border-zinc-800 text-zinc-200'}`}>
//                                     <span>{isSaved ? '🔖 In Watchlist' : '📑 Watchlist'}</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';

export function MovieDetailModal({ movie, onClose }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [activeVideoUrl, setActiveVideoUrl] = useState(null); 

    if (!movie) return null;

    useEffect(() => {
        const updateModalStates = () => {
            const likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
            setIsLiked(likedMovies.includes(movie.id));

            const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
            setIsSaved(savedMovies.includes(movie.id));
        };
        updateModalStates();
        window.addEventListener('storage', updateModalStates);
        return () => window.removeEventListener('storage', updateModalStates);
    }, [movie.id]);

    const handleLikeToggle = () => {
        let likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
        if (likedMovies.includes(movie.id)) {
            likedMovies = likedMovies.filter(id => id !== movie.id);
            setIsLiked(false);
        } else {
            likedMovies.push(movie.id);
            setIsLiked(true);
        }
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
        window.dispatchEvent(new Event('storage'));
    };

    const handleSaveToggle = () => {
        let savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
        if (savedMovies.includes(movie.id)) {
            savedMovies = savedMovies.filter(id => id !== movie.id);
            setIsSaved(false);
        } else {
            savedMovies.push(movie.id);
            setIsSaved(true);
        }
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        window.dispatchEvent(new Event('storage'));
    };

    // 💡 इतिहास (History) में मूवी सेव करने का फंक्शन
    const addToHistory = () => {
        let watchHistory = JSON.parse(localStorage.getItem('watchHistory') || '[]');
        
        // अगर मूवी पहले से हिस्ट्री में है, तो डुप्लिकेट हटाने के लिए उसे पहले डिलीट करो
        watchHistory = watchHistory.filter(id => id !== movie.id);
        
        // नई मूवी को हिस्ट्री में सबसे ऊपर (शुरुआत में) जोड़ो
        watchHistory.unshift(movie.id);
        
        localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative flex flex-col justify-between min-h-[480px] bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950 text-white">
                
                <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors text-sm px-3 py-1.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer z-50">
                    ✕ Close
                </button>

                {activeVideoUrl ? (
                    <div className="w-full h-full flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-4 text-left">
                            <div>
                                <h3 className="text-xl font-bold">{movie.title}</h3>
                                <p className="text-zinc-500 text-xs mt-0.5">Streaming live inside CineMatch Player</p>
                            </div>
                            <button onClick={() => setActiveVideoUrl(null)} className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-4 py-2 rounded-full font-bold cursor-pointer">
                                ← Back to Info
                            </button>
                        </div>
                        <div className="w-full flex-1 aspect-video bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 relative">
                            <iframe src={activeVideoUrl} title={movie.title} className="w-full h-full absolute inset-0" allowFullScreen></iframe>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-left w-full">
                        <div className="w-48 sm:w-56 md:w-64 aspect-[2/3] overflow-hidden rounded-xl border border-zinc-800/80 shadow-2xl shrink-0 bg-zinc-900">
                            <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                                <span className="text-pink-500 font-bold text-xs uppercase tracking-widest font-mono">Featured Film</span>
                                <h2 className="text-3xl font-extrabold tracking-tight mb-3 truncate">{movie.title}</h2>
                                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-medium mb-4">
                                    <span className="text-cyan-400 font-bold">★ {movie.rating || '8.4'}</span>
                                    <span>&middot;</span><span>{movie.year}</span>
                                    <span>&middot;</span><span>{movie.runtime} min</span>
                                    <span>&middot;</span><span className="text-zinc-300">{Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre}</span>
                                </div>
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">{movie.description}</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2.5 mt-6">
                                <button onClick={() => movie.trailerUrl ? setActiveVideoUrl(movie.trailerUrl) : alert("No trailer available")} className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-full cursor-pointer active:scale-95 shadow-lg shadow-pink-950/40">
                                    ▶ Play trailer
                                </button>
                                
                                {/* 💡 Watch Movie पर क्लिक करते ही addToHistory() भी चलेगा */}
                                <button 
                                    onClick={() => {
                                        if (movie.movieUrl) {
                                            setActiveVideoUrl(movie.movieUrl);
                                            addToHistory(); 
                                        } else {
                                            alert("No movie streaming link available");
                                        }
                                    }} 
                                    className="bg-red-600 text-white font-bold text-xs px-5 py-2.5 rounded-full cursor-pointer active:scale-95 shadow-lg shadow-red-950/40"
                                >
                                    💻 Watch Movie
                                </button>
                                
                                <button onClick={handleLikeToggle} className={`font-bold text-xs px-4 py-2.5 rounded-full border cursor-pointer ${isLiked ? 'bg-rose-600/20 border-rose-500 text-rose-400' : 'bg-zinc-900/40 border-zinc-800 text-zinc-200'}`}>
                                    <span>{isLiked ? '❤️ Liked' : '♡ Favorite'}</span>
                                </button>
                                <button onClick={handleSaveToggle} className={`font-bold text-xs px-4 py-2.5 rounded-full border cursor-pointer ${isSaved ? 'bg-purple-600/20 border-purple-500 text-purple-400' : 'bg-zinc-900/40 border-zinc-800 text-zinc-200'}`}>
                                    <span>{isSaved ? '🔖 In Watchlist' : '📑 Watchlist'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
