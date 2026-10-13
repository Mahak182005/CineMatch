export function MovieMatch(){
    return(
        <>      
            <div classNameName="bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white p-8 ">
                <div className=" mx-25 py-20 ">
                    <h1 className="text-3xl text-white">Find it your way</h1>
                    <p className="text-zinc-400 text-sm mt-1">Every tool you need for the perfect movie night.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">

                    <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl">❤️</span>
                        <div>
                        <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Movie Match</h3>
                        <p className="text-zinc-400 text-xs mt-0.5">Mood, genre, time & language</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
                    </div>

                    <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl">🎲</span>
                        <div>
                        <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Movie Roulette</h3>
                        <p className="text-zinc-400 text-xs mt-0.5">Let fate choose your movie</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
                    </div>

                    <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl">🌙</span>
                        <div>
                        <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Tonight's Pick</h3>
                        <p className="text-zinc-400 text-xs mt-0.5">One personalized recommendation</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
                    </div>

                    <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-red-900/60 cursor-pointer transition-all duration-200 group">
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl">⚖️</span>
                        <div>
                        <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Compare Movies</h3>
                        <p className="text-zinc-400 text-xs mt-0.5">Ratings, runtime and more</p>
                        </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">&gt;</span>
                    </div>

                </div>
            </div>

        </>
    )
}