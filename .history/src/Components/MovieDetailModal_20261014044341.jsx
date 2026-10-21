import React, { useState, useEffect } from 'react';

export function MovieDetailModal({ movie, onClose }) {
    // 1. LocalStorage के लिए स्टेट्स कॉन्फ़िगरेशन
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    if (!movie) return null;

    // 2. कॉम्पोनेंट लोड होते ही मेमोरी से पुरानी स्टेट्स रीड करना
    useEffect(() => {
        const updateModalStates = () => {
            const likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
            setIsLiked(likedMovies.includes(movie.id));

            const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
            setIsSaved(savedMovies.includes(movie.id));
        };

        updateModalStates();

        // इवेंट लिसनर ताकि कार्ट और मॉडल दोनों आपस में जुड़े रहें
        window.addEventListener('storage', updateModalStates);
        return () => window.removeEventListener('storage', updateModalStates);
    }, [movie.id]);

    // 3. लाइक (Favorite) टॉगल हैंडलर
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
        window.dispatchEvent(new Event('storage')); // कार्ट को तुरंत बताने के लिए
    };

    // 4. सेव (Watchlist) टॉगल हैंडलर
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
        window.dispatchEvent(new Event('storage')); // कार्ट को तुरंत बताने के लिए
    };

    // 5. ट्रेलर देखने का फंक्शन
    const handlePlayTrailer = () => {
        if (movie.trailerUrl) {
            window.open(movie.trailerUrl, '_blank');
        } else {
            alert("इस मूवी का ट्रेलर लिंक अभी उपलब्ध नहीं है।");
        }
    };

    // 6. पूरी मूवी स्ट्रीम करने का फंक्शन
    const handleWatchMovie = () => {
        if (movie.movieUrl) {
            window.open(movie.movieUrl, '_blank');
        } else {
            alert("इस मूवी का स्ट्रीमिंग लिंक अभी उपलब्ध नहीं है।");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
            {/* मुख्य विस्तृत कार्ड फ़्रेम */}
            <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950 text-white">
                
                {/* क्लोज़ बटन */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors text-sm px-3 py-1.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer z-50"
                >
                    ✕ Close
                </button>

                {/* हॉरिजॉन्टल कंटेंट लेआउट */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    {/* बायाँ हिस्सा: मूवी पोस्टर */}
                    <div className="w-48 sm:w-56 md:w-64 aspect-[2/3] overflow-hidden rounded-xl border border-zinc-800/80 shadow-2xl shrink-0 bg-zinc-900">
                        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
                    </div>

                    {/* दायाँ हिस्सा: टेक्स्ट डिटेल्स और एक्शन्स */}
                    <div className="flex-1 text-left flex flex-col justify-center pt-2">
                        <span className="text-pink-500 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">Featured Film</span>
                        
                        <h2 className="text-3xl font-extrabold text-white md:text-4xl tracking-tight mb-3">{movie.title}</h2>
                        
                        {/* मूवी मेटाडेटा */}
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-zinc-400 font-medium mb-4">
                            <span className="text-cyan-400 font-bold">★ {movie.rating || '8.4'}</span>
                            <span className="text-zinc-600">&middot;</span><span>{movie.year || '2024'}</span>
                            <span className="text-zinc-600">&middot;</span><span>{movie.runtime || '120'} min</span>
                            <span className="text-zinc-600">&middot;</span>
                            <span className="text-zinc-300 font-semibold">
                                {Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre}
                            </span>
                        </div>

                        {/* मूवी का विवरण */}
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-normal max-w-2xl">{movie.description}</p>

                        {/* एक्शन बटन्स की पंक्ति (यहाँ आपके ट्रेलर और मूवी बटन्स वापस आ गए हैं) */}
                        <div className="flex flex-wrap items-center gap-2.5 mt-auto">
                            
                            {/* बटन 1: प्ले ट्रेलर (गुलाबी थीम) */}
                            <button 
                                onClick={handlePlayTrailer}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center space-x-1.5 shadow-lg shadow-pink-950/40 cursor-pointer active:scale-95"
                            >
                                <span>▶</span> <span>Play trailer</span>
                            </button>

                            {/* बटन 2: वॉच मूवी (लाल थीम - जो पहले मिस हो गया था) */}
                            <button 
                                onClick={handleWatchMovie}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center space-x-1.5 shadow-lg shadow-red-950/40 cursor-pointer active:scale-95"
                            >
                                <span>💻</span> <span>Watch Movie</span>
                            </button>

                            {/* बटन 3: दिल (Favorite) */}
                            <button 
                                onClick={handleLikeToggle}
                                className={`font-bold text-xs px-4 py-2.5 rounded-full transition-colors flex items-center space-x-1.5 cursor-pointer border ${
                                    isLiked 
                                        ? 'bg-rose-600/20 border-rose-500 text-rose-400 hover:bg-rose-600/30' 
                                        : 'bg-zinc-900/40 border-zinc-800 text-zinc-200 hover:border-zinc-700'
                                }`}
                            >
                                <span>{isLiked ? '❤️' : '♡'}</span>
                                <span>{isLiked ? 'Liked' : 'Favorite'}</span>
                            </button>

                            {/* बटन 4: बुकमार्क (Watchlist) */}
                            <button 
                                onClick={handleSaveToggle}
                                className={`font-bold text-xs px-4 py-2.5 rounded-full transition-colors flex items-center space-x-1.5 cursor-pointer border ${
                                    isSaved 
                                        ? 'bg-purple-600/20 border-purple-500 text-purple-400 hover:bg-purple-600/30' 
                                        : 'bg-zinc-900/40 border-zinc-800 text-zinc-200 hover:border-zinc-700'
                                }`}
                            >
                                <span>{isSaved ? '🔖' : '📑'}</span>
                                <span>{isSaved ? 'In Watchlist' : 'Watchlist'}</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
