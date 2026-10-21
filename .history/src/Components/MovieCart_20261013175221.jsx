
// 1. Array destructing me data ke sath 'onCardClick' prop ko add kiya
export function MovieCart({ data, onCardClick }) {
    return (
        <div 
            // 2. Click hone par ye function main page ko movie ka data bhej dega
            onClick={() => onCardClick && onCardClick(data)} 
            className="bg-zinc-900/30 rounded-xl overflow-hidden border border-zinc-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-950/20 hover:border-red-900/50 hover:-translate-y-1 cursor-pointer group"
        > 
            <div className="aspect-[2/3] w-full overflow-hidden bg-zinc-950">
                <img 
                    src={data.poster} 
                    alt={data.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />
            </div>
            
            <div className="px-4 py-4 text-white">
                <div className="flex justify-between items-start gap-2">
                    <p className="font-bold text-sm truncate flex-1 group-hover:text-red-400 transition-colors" title={data.title}>
                        {data.title}
                    </p>
                    <span className="text-amber-400 font-bold text-xs shrink-0 bg-zinc-950/60 px-1.5 py-0.5 rounded border border-zinc-800/40">
                        ⭐ {data.rating}
                    </span>
                </div>
                
                {/* Genre lists map toggle indicator */}
                <p className="text-zinc-500 text-xs mt-1.5 font-medium truncate">
                    {Array.isArray(data.genre) ? data.genre.join(', ') : data.genre}
                </p>
            </div>
        </div>
    );
}
