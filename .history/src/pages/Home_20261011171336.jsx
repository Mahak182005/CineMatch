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
            {/* <div className="flex gap-2 my-5 items-center justify-between bg-gradient-to-br from-[#626562] via-[#484B49] to-[#3D403F]">
                <div className="px-25">
                    <p className="text-red-500 text-lg font-semibold py-2">Based on your favorites</p>
                    <p className="text-white text-lg font-semibold">More journeys beyond this world.</p>
                    <Link to="/discover" className="text-red-600 py-2 text-lg font-semibold hover:underline">See Recommendations ➜</Link>
                </div>
                <div className="px-25">
                    <img src="data:image/jpeg;base64,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" alt="image" />
                </div>
            </div> */}
         
<div class="flex items-center justify-between p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm max-w-5xl px-25 my-5">
  <div>
    <span class="text-red-500 font-bold text-xs uppercase tracking-wider">Based on your favorites</span>
    <h2 class="text-2xl font-extrabold text-white mt-1 mb-4">More journeys beyond this world.</h2>
    <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-250 shadow-lg shadow-red-950/50">
      See Recommendations
    </button>
  </div>
  <img src="projector.png" class="w-44 h-auto rounded-xl border border-zinc-800 shadow-md" alt="Projector" />
</div>

        </>
    )
}