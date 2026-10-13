import {fatchData} from "../Data/api.js";
import { MovieCart } from "../Components/MovieCart";
import { useState } from "react";
export function Discover(){
    const [search, setSearch] = useState("");
    // const [show, setShow] = useState(false);

    const filterMovies = fatchData.map((movie)=>{
        // setShow(true);
        movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })
    return(
        // bg-[#0B0F1A]
        <div className="py-20">
            <div className="pt-10 px-25"> 
                <div className="font-semibold text-lg">
                    <p className="text-white">Discover movies</p>
                    <p className=" text-zinc-400">Fresh stories, all in one place.</p>
                </div>

                <div className="border-1 rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md w-full p-4 flex  justify-between px-20 rounded-2xl">
                    <input type="text" placeholder="Search titles..." value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-zinc-950/50 text-zinc-200 placeholder-zinc-500 px-4 py-2 rounded-full border border-zinc-800/50 focus:outline-none focus:border-red-900/80 w-200" />
                    <div className="flex gap-10">
                        <select className="bg-zinc-950/60 border border-zinc-800 text-white px-4 py-2 rounded-full text-sm hover:bg-red-950/40 transition-all">
                            <option>All</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>

                        <select class="bg-zinc-950/60 border border-zinc-800 text-white px-4 py-2 rounded-full text-sm hover:bg-red-950/40 transition-all">
                            <option>All</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <p className="text-gray-400">{fatchData.length} movie found</p>
                <div className="grid grid-cols-4 my-6 gap-3">
                    
                    {/* {   show ? (
                            fatchData.map((movie)=>{
                                return <MovieCart data={movie} />
                            })
                        ) : (
                            filterMovies.map((movie)=>{
                                return <MovieCart data={movie} />
                            })
                        ) */}
                    {
                         fatchData.map((movie)=>{
                                return <MovieCart data={movie} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}