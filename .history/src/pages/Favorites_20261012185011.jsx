

export function Favorites() {
    // fatchData JSON array se saved movies array feed setup pipeline
    const filteredSavedMovies = [];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white pt-16 pb-24 px-6 md:px-16 lg:px-24">

            {/* 2. Single Active Filter Pill Container Component */}
            <div className="max-w-6xl w-full mx-auto mb-10">
                <div className="flex flex-wrap gap-2 border-b border-zinc-900/50 pb-5">
                    <button
                        className="px-5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-rose-600 border border-rose-700 text-white shadow-md shadow-rose-950/50 transition-all duration-200"
                    >
                        Favorites
                    </button>
                </div>
            </div>

            {/* 3. Display Saved Movies Gallery Contents Grid */}
            <div className="max-w-6xl w-full mx-auto">
                {filteredSavedMovies.length === 0 ? (
                    <div className="text-center py-16 p-8 bg-zinc-900/40 border border-zinc-900/60 rounded-xl backdrop-blur-sm">
                        <p className="text-zinc-500 text-sm font-medium">No movies found in your saved list vector library nodes.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {filteredSavedMovies.map((movie, index) => (
                            <div 
                                key={movie.id || index} 
                                className="group relative rounded-xl overflow-hidden bg-zinc-900/20 border border-zinc-800/60 hover:border-rose-900/50 transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer hover:bg-zinc-900/30"
                            >
                                {/* Upper Poster Viewport */}
                                <div className="aspect-[2/3] w-full overflow-hidden relative bg-zinc-950">
                                    <img 
                                        src={movie.poster} 
                                        alt={movie.title} 
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
                                    />
                                    
                                    {/* Small Pink Floating Bookmark Tag Icon Instead of Heart */}
                                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-zinc-950/80 border border-zinc-800/60 flex items-center justify-center text-xs text-rose-500 shadow-md backdrop-blur-xs transition-transform active:scale-95">
                                        🔖
                                    </div>

                                    {/* Star Rating Overlay */}
                                    {movie.rating && (
                                        <div className="absolute bottom-2 left-2 bg-zinc-950/80 border border-zinc-800/60 px-1.5 py-0.5 rounded text-[9px] text-amber-400 font-bold shadow flex items-center space-x-0.5 backdrop-blur-xs">
                                            <span>★</span>
                                            <span>{movie.rating}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Text Details Footer Box */}
                                <div className="p-3 bg-zinc-900/10 backdrop-blur-xs border-t border-zinc-900/50">
                                    <h4 className="font-bold text-zinc-100 text-xs truncate group-hover:text-white transition-colors" title={movie.title}>
                                        {movie.title}
                                    </h4>
                                    <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-1 font-medium">
                                        <span className="truncate max-w-[70px]">
                                            {movie.genre && movie.genre[0]}
                                        </span>
                                        <span className="font-mono text-zinc-400">{movie.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}