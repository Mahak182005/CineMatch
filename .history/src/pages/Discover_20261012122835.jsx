// import {fatchData} from "../Data/api.js";
// import { MovieCart } from "../Components/MovieCart";
// import { useState } from "react";
// export function Discover(){
//     const [search, setSearch] = useState("");
//     // const [filterMovies, setFilterMovies] = useState(fetchData);
//     return(
//         // bg-[#0B0F1A]
//         <div className="py-20">
//             <div className="pt-10 px-25"> 
//                 <div className="font-semibold text-lg">
//                     <p className="text-white">Discover movies</p>
//                     <p className=" text-zinc-400">Fresh stories, all in one place.</p>
//                 </div>

//                 <div className="my-5 border-1 rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md w-full p-4 flex  justify-between px-20 rounded-2xl">
//                     <input type="text" placeholder="Search titles..." value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-zinc-950/50 text-zinc-200 placeholder-zinc-500 px-4 py-2 rounded-full border border-zinc-800/50 focus:outline-none focus:border-red-900/80 w-200" />
//                     <div className="flex gap-10">
//                         <select className="bg-zinc-950/60 border border-zinc-800 text-white px-4 py-2 rounded-full text-sm hover:bg-red-950/40 transition-all">
//                             <option>All</option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                         </select>

//                         <select className="bg-zinc-950/60 border border-zinc-800 text-white px-4 py-2 rounded-full text-sm hover:bg-red-950/40 transition-all">
//                             <option>All</option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                             <option value=""></option>
//                         </select>
//                     </div>
//                 </div>

//                 <p  className="text-xs text-zinc-500 mt-3 pl-2">{fatchData.length} movie found</p>
//                 <div className="grid grid-cols-4 my-6 gap-3">
//                     {
//                             fatchData.map((movie)=>{
//                                 return <MovieCart data={movie} />
//                             })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }


import { fatchData } from "../Data/api.js";
import { MovieCart } from "../Components/MovieCart";
import { filterMovie } from "../Logic/search"; // filter logic import kar li
import { useState } from "react";

export function Discover() {
    // 1. States banayi search terms ko track karne ke liye
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMood, setSelectedMood] = useState("All");
    const [selectedGenre, setSelectedGenre] = useState("All");

    // 2. Dynamic Filtering Logic
    const filteredMovies = fatchData.filter((movie) => {
        // Text search matching (title check karega)
        const matchesSearch = movie.title?.toLowerCase().includes(searchQuery.toLowerCase());

        // Mood matching (humare banaye filterMovie function ki logic use karega)
        let matchesMood = true;
        if (selectedMood !== "All" && movie.moods) {
            matchesMood = movie.moods.some(
                (m) => m.toLowerCase() === selectedMood.toLowerCase()
            );
        }

        // Genre matching (agar data me genres naam ki array hai to)
        let matchesGenre = true;
        if (selectedGenre !== "All" && movie.genres) {
            matchesGenre = movie.genres.some(
                (g) => g.toLowerCase() === selectedGenre.toLowerCase()
            );
        }

        return matchesSearch && matchesMood && matchesGenre;
    });

    return (
        <div className="py-20">
            <div className="pt-10 px-25"> 
                <div className="font-semibold text-lg">
                    <p className="text-white">Discover movies</p>
                    <p className="text-zinc-400">Fresh stories, all in one place.</p>
                </div>

                {/* Filter and Search Bar Container */}
                <div className="my-5 border-1 justify-center rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md w-full p-4 flex justify-between items-center px-10 rounded-2xl gap-5">
                    
                    {/* Text Search Input */}
                    <input 
                        type="text" 
                        placeholder="Search titles..." 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        className="bg-zinc-950/50 text-zinc-200 placeholder-zinc-500 px-5 py-2 rounded-full border border-zinc-800/50 focus:outline-none focus:border-red-500 w-100 text-sm" 
                    />
                </div>

                {/* Dynamic count display */}
                <p className="text-xs text-zinc-500 mt-3 pl-2">
                    {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
                </p>
                
                {/* Movie Grid Rendering */}
                <div className="grid grid-cols-4 my-6 gap-3">
                    {
                        filteredMovies.map((movie, index) => (
                            <MovieCart key={movie.id || index} data={movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
