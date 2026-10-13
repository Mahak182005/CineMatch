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
                <div className="font-semibold text-4xl">
                    <p className="text-white text-lg">Discover movies</p>
                    <p className="text-white">Fresh stories, all in one place.</p>
                </div>

                <div className="border-1 border-gray-500 my-6 py-2 bg-[#0B0F1A] flex  justify-between px-20 rounded-2xl">
                    <input type="text" placeholder="Search titles..." value={search} onChange={(e)=>setSearch(e.target.value)} className="text-white border-1 border-gray-500 px-2 mx-4 w-120" />
                    <div className="flex gap-10">
                        <select className="border-1 border-gray-500 w-20 text-white rounded-xl text-center">
                            <option>All</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>

                        <select className="border-1 border-gray-500 w-20 text-white rounded-xl text-center">
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