import React from 'react';

// 1. FIXED: Yahan bracket ke andar 'onCardClick' ko likhna zaroori hai
export function MovieCart({ data, onCardClick }) {
    return (
        <div 
            // 2. FIXED: Is div par click hote hi ye main page ko batayega ki kaun si movie select hui hai
            onClick={() => onCardClick(data)} 
            className="bg-gradient-to-br from-[#626562] via-[#484B49] to-[#3D403F] rounded-xl overflow-hidden border border-white/20 transition transition-all duration-300 hover:shadow-black/30 hover:-translate-y-1 cursor-pointer"
        > 
            <div>
                <img src={data.poster} className="object-cover w-full h-auto" alt={data.title}/>
            </div>
            <div className="px-4 py-4 text-white">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-sm truncate">{data.title}</p>
                    <span className="text-xs text-amber-400 shrink-0">⭐ {data.rating}</span>
                </div>
                {/* Agar genre array hai toh use join karein, varna normal print */}
                <p className="text-xs text-zinc-400 mt-1 truncate">
                    {Array.isArray(data.genre) ? data.genre.join(', ') : data.genre}
                </p>
            </div>
        </div>
    );
}
