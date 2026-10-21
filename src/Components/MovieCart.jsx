import React, { useState, useEffect } from 'react';

export function MovieCart({ data, onCardClick }) {
    // LocalStorage se states map aur sync karne ke liye reactive variables
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    // 1. Check storage configurations on component initial mount
    useEffect(() => {
        const updateStates = () => {
            const likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
            setIsLiked(likedMovies.includes(data.id));

            const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
            setIsSaved(savedMovies.includes(data.id));
        };

        updateStates();
        
        // Storage dispatcher attach kiya taaki DetailModal me change hote hi Cart bhi real-time me update ho jaye
        window.addEventListener('storage', updateStates);
        return () => window.removeEventListener('storage', updateStates);
    }, [data.id]);

    // 2. LIKE BUTTON CLICK ACTIONS SYSTEM (❤️)
    const handleLikeClick = (e) => {
        e.stopPropagation(); // 💡 Standard rule: Taaki chota button dabaane par bada Detail Modal pop-up na khule
        
        let likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
        if (likedMovies.includes(data.id)) {
            likedMovies = likedMovies.filter(id => id !== data.id);
            setIsLiked(false);
        } else {
            likedMovies.push(data.id);
            setIsLiked(true);
        }
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
        window.dispatchEvent(new Event('storage')); // Event dispatch clear sync ke liye
    };

    // 3. SAVE/WATCHLIST BUTTON CLICK ACTIONS SYSTEM (🔖)
    const handleSaveClick = (e) => {
        e.stopPropagation(); // 💡 Card toggle pipeline click locking event mask handler
        
        let savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
        if (savedMovies.includes(data.id)) {
            savedMovies = savedMovies.filter(id => id !== data.id);
            setIsSaved(false);
        } else {
            savedMovies.push(data.id);
            setIsSaved(true);
        }
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <div 
            onClick={() => onCardClick && onCardClick(data)} 
            className="bg-gradient-to-br from-[#626562] via-[#484B49] to-[#3D403F] rounded-xl overflow-hidden border border-white/20 transition transition-all duration-300 hover:shadow-black/30 hover:-translate-y-1 cursor-pointer group relative"
        > 
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-950">
                <img src={data.poster} className="object-cover w-full h-full" alt={data.title}/>
                <div className="absolute top-2.5 right-2.5 flex items-center space-x-1.5 z-20">
                    <button 
                        onClick={handleLikeClick}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md transition-all active:scale-75 backdrop-blur-md cursor-pointer border ${
                            isLiked 
                                ? 'bg-rose-600 border-rose-500 text-white' 
                                : 'bg-black/60 border-zinc-800 text-zinc-300 hover:text-white hover:bg-black/80'
                        }`}
                        title={isLiked ? "Remove Favorite" : "Add to Favorites"}
                    >
                        {isLiked ? '❤️' : '♡'}
                    </button>

                    <button 
                        onClick={handleSaveClick}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md transition-all active:scale-75 backdrop-blur-md cursor-pointer border ${
                            isSaved 
                                ? 'bg-purple-600 border-purple-500 text-white' 
                                : 'bg-black/60 border-zinc-800 text-zinc-300 hover:text-white hover:bg-black/80'
                        }`}
                        title={isSaved ? "Remove from Watchlist" : "Save to Watchlist"}
                    >
                        {isSaved ? '🔖' : '📑'}
                    </button>
                </div>
            </div>

            <div className="px-4 py-4 text-white bg-black/10 backdrop-blur-xs">
                <div className="flex justify-between items-center gap-2">
                    <p className="font-bold text-sm truncate flex-1 group-hover:text-red-400 transition-colors" title={data.title}>
                        {data.title}
                    </p>
                    <span className="text-xs text-amber-400 shrink-0 font-mono font-bold bg-black/30 px-1.5 py-0.5 rounded border border-white/5">
                        ⭐ {data.rating}
                    </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1 truncate">
                    {Array.isArray(data.genre) ? data.genre.join(', ') : data.genre}
                </p>
            </div>
        </div>
    );
}
