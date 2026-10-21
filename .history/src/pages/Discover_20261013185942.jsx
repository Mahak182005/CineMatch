import { fatchData } from "../Data/api.js"; 
import { MovieCart } from "../Components/MovieCart"; 
import { filterMovie } from "../Logic/search"; // filter logic imported
import { useState } from "react"; 
import { MovieDetailModal } from "../Components/MovieDetailModal.jsx";

export function Discover() {
  // 1. States to track search, mood, and genre terms
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // 2. Apply your external mood filter logic first
  const moodFilteredMovies = selectedMood !== "All" 
    ? filterMovie(fatchData, selectedMood) 
    : fatchData;

  // 3. Chain text search and genre filtering on top of that result
  const filteredMovies = moodFilteredMovies.filter((movie) => {
    // Text search matching
    const matchesSearch = movie.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Genre matching
    let matchesGenre = true;
    if (selectedGenre !== "All" && movie.genres) {
      matchesGenre = movie.genres.some(
        (g) => g.toLowerCase() === selectedGenre.toLowerCase()
      );
    }

    return matchesSearch && matchesGenre;
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
            className="bg-zinc-950/50 text-zinc-200 placeholder-zinc-500 px-5 py-2 rounded-full border border-zinc-800/50 focus:outline-none focus:border-red-500 w-200 text-sm" 
          />
        </div>

        {/* Dynamic count display */}
        <p className="text-xs text-zinc-500 mt-3 pl-2">
          {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
        </p>

        {/* Movie Grid Rendering */}
        <div className="grid grid-cols-4 my-6 gap-3">
          {filteredMovies.map((movie, index) => (
           <MovieCart key={movie.id || index} data={movie} onCardClick={setSelectedMovie} />
          ))}
        </div>
      </div>
    </div>
  );
}
