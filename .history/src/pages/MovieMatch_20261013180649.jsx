

export function MovieDetailModal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative bg-gradient-to-br from-zinc-950 via-red-950/20 to-zinc-950 text-white">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white text-sm p-1.5 hover:bg-zinc-900/50 rounded-lg"
                >
                    ✕ Close
                </button>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <div className="w-48 sm:w-56 md:w-64 aspect-[2/3] overflow-hidden rounded-xl border border-zinc-800 shadow-xl shrink-0">
                        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-left flex flex-col justify-center pt-2">
                        <span className="text-pink-500 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">Featured Film</span>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">{movie.title}</h2>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-medium mb-4">
                            <span className="text-cyan-400 font-bold">★ {movie.rating || '8.4'}</span>
                            <span>&middot;</span><span>{movie.year}</span>
                            <span>&middot;</span><span>{movie.runtime} min</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{movie.description}</p>
                        <div className="flex flex-wrap items-center gap-2.5">
                            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-full">▶ Play trailer</button>
                            <button className="bg-zinc-900/40 border border-zinc-800 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-full">♡ Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
