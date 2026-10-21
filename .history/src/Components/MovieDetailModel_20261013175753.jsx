

// Yeh aapka main component hai jo Movie Match page ke andar data render karega
export function MovieDetailModal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            
            {/* Main Wide Card Frame Structure (Matching your screenshot style) */}
            <div className="w-full max-w-4xl bg-zinc-950/90 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950">
                
                {/* Close Button Trigger Layer Element */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors text-sm p-1.5 hover:bg-zinc-900/50 rounded-lg z-10"
                >
                    ✕ Close
                </button>

                {/* Horizontal Content Flex Grid Container */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    
                    {/* LEFT SIDE: Big Movie Poster Window Frame Component */}
                    <div className="w-48 sm:w-56 md:w-64 aspect-[2/3] overflow-hidden rounded-xl border border-zinc-800 shadow-xl shrink-0">
                        <img 
                            src={movie.poster || movie.backdrop} 
                            alt={movie.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT SIDE: Text Info & Action CTA Row Matrix Elements */}
                    <div className="flex-1 text-left flex flex-col justify-center pt-2">
                        
                        {/* Pink Accent Small Tag Label Header */}
                        <span className="text-pink-500 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">
                            Featured Film
                        </span>

                        {/* Bold Massive White Title Typography */}
                        <h2 className="text-3xl font-extrabold text-white md:text-4xl tracking-tight mb-3">
                            {movie.title}
                        </h2>

                        {/* Metadata Small Grid Badges Inline Layer Row Block Container */}
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-zinc-400 font-medium mb-4">
                            <span className="text-cyan-400 font-bold flex items-center space-x-0.5">
                                <span>★</span> <span>{movie.rating || '8.4'}</span>
                            </span>
                            <span className="text-zinc-600">&middot;</span>
                            <span>{movie.year || '2024'}</span>
                            <span className="text-zinc-600">&middot;</span>
                            <span>{movie.runtime || '118'} min</span>
                            <span className="text-zinc-600">&middot;</span>
                            <span className="text-zinc-300 font-semibold">
                                {Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre || 'Romance'}
                            </span>
                            <span className="text-zinc-600">&middot;</span>
                            <span className="text-zinc-500 font-mono">{movie.language || 'English'}</span>
                        </div>

                        {/* Multi-line Descriptive Body Summary Copy Line Layout Container Component */}
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-normal">
                            {movie.description || 'Two strangers meet above a city at sunset and discover one evening can alter two lives.'}
                        </p>

                        {/* ACTION BUTTON ROW (Direct clone from your beautiful mockup image) */}
                        <div className="flex flex-wrap items-center gap-2.5 mt-auto">
                            
                            {/* Button A: Play Trailer - Neon Pink Solid Style */}
                            <button 
                                onClick={() => alert(`Launching YouTube Embed Key ID: ${movie.trailerKey || 'YoHD_x0ZxsY'}`)}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 flex items-center space-x-1.5 shadow-lg shadow-pink-950/40 active:scale-95"
                            >
                                <span>▶</span>
                                <span>Play trailer</span>
                            </button>

                            {/* Button B: Favorite - Hollow Outline Glass Style */}
                            <button className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-full transition-colors flex items-center space-x-1.5">
                                <span>♡</span>
                                <span>Favorite</span>
                            </button>

                            {/* Button C: Watchlist - Hollow Outline Glass Style */}
                            <button className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-full transition-colors flex items-center space-x-1.5">
                                <span>🔖</span>
                                <span>Watchlist</span>
                            </button>

                            {/* Button D: Watched - Hollow Outline Glass Style */}
                            <button className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-full transition-colors flex items-center space-x-1.5">
                                <span>✓</span>
                                <span>Watched</span>
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
