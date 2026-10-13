import { Mood } from "../Components/Mood";
import { mood } from "../Data/MoodData";
import {fatchData} from "../Data/api";
import {MovieCart}  from "../Components/MovieCart";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <>
            <div className="px-25 pt-15">
            <div className="flex gap-15 justify-between py-6">
                    <div>
                        <p className="text-white text-7xl font-semibold">Find your</p>
                        <p className="text-red-500 text-7xl font-semibold">next obsession.</p>
                        <p className="text-xl w-120 text-white py-6">Mood, runtime, genre, or a spin of the roulette — your perfect film is closer than you think.</p>
                        <Link to="/discover"><button className="bg-red-500 px-2 py-1 my-4 border-2 border-red-500 rounded-2xl">Start Watching</button></Link>
                    </div>
                    <div>
                        <img className="h-80 w-150" src="https://images.pexels.com/photos/8273617/pexels-photo-8273617.jpeg?cs=tinysrgb&dpr=1&w=500" alt="image" />
                    </div>
            </div>

                {/* Pick your mood */}
                <div className="py-10">
                    <p className="text-sm font-semibold text-red-400 text-sm uppercase">FEEL FIRST, CHOOSE SECOND</p>
                    <p className="text-4xl text-white font-semibold font-semibold">Pick your mood</p>
                    <div className="grid grid-cols-6 gap-3">
                    {
                        mood.map((m)=>{
                            return(
                                <div>   
                                    <Mood text={m.text} image={m.image} /> 
                                </div>
                            )
                        })
                    }
                    </div>
                    {/* cards */}
                    <div>
                        <p className="text-sm text-red-400 font-semibold">WHAT EVERYONE'S WATCHING</p>
                        <p className="font-semibold text-4xl text-white font-semibold">Trending now</p>

                        <div className="grid grid-cols-4 my-6 gap-3">
                        {
                            fatchData.slice(0,4).map((movie)=>{
                                return <MovieCart data={movie} />
                            })
                        }
                        </div>
                        
                    </div>  
                </div>
            </div>
            <div class="flex items-center justify-between p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm mx-25 my-5">
                <div>
                    <span class="text-red-500 font-bold text-xs uppercase tracking-wider">Based on your favorites</span>
                    <h2 class="text-2xl font-extrabold text-white mt-1 mb-4">More journeys beyond this world.</h2>
                    <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-250 shadow-lg shadow-red-950/50">
                        See Recommendations
                    </button>
                </div>
                <img src="" class="w-44 h-auto rounded-xl border border-zinc-800 shadow-md" alt="Projector" />
            </div>

        </>
    )
}