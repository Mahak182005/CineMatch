import { MovieMatchOpt } from "../Components/MovieMatchOpt"
export function MovieMatch(){
    return(
        <>
            <div className="bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 h-screen py-20 px-25">
                <MovieMatchOpt  text="Movie Match" para="Mood, genre, time & language"/>
                <MovieMatchOpt text="Movie Roulette" para="Let fate choose your movie" />
                <MovieMatchOpt text="Tonight's Pick" para="One personalization recommendation" />
                <MovieMatchOpt text="Compare Movies" para="Rating, runtime and more" />
            </div>
        </>
    )
}