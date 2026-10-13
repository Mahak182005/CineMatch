import { useState } from 'react';
import { fatchData } from '../Data/api';

export function MovieMatch() {
    // const [activeTab, setActiveTab] = useState(null);
    // const [selectedGenre, setSelectedGenre] = useState('All');

    // // 1. JSON Data me se saare Unique Genres nikalne ke liye dynamic logic
    // const allGenres = ['All', ...new Set(fatchData.map(movie => movie.genre).filter(Boolean))];

    // // 2. Filter logic: Jo Genre select hoga, wahi movies screen par dikhengi
    // const filteredMovies = selectedGenre === 'All' 
    //     ? fatchData 
    //     : fatchData.filter(movie => movie.genre === selectedGenre);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white flex flex-col justify-start pb-20">
            
            {/* Header Area */}
            <div className="max-w-6xl w-full mx-auto px-6 pt-16 pb-8">
                <span className="text-red-500 font-bold text-xs uppercase">Engine Mode</span>
                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl mt-1">
                    Find it your way
                </h1>
                <p className="text-zinc-400 text-sm md:text-base mt-2">
                    Every tool you need for the perfect movie night.
                </p>
            </div>

         

        

        </div>
    );
}

