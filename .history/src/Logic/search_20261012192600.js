export const filterMovie = (movies, moodName) => {
    if (!moodName) return movies;
    
    return movies.filter((movie) => {
        // 1. Safe-guard check: Ensure we support both 'moods' or 'mood' key names
        const movieMoods = movie.moods || movie.mood;
        
        if (!movieMoods) return false;

        // 2. If it's an array of moods
        if (Array.isArray(movieMoods)) {
            return movieMoods.some(
                (mood) => 
                    mood.toLowerCase().includes(moodName.toLowerCase()) ||
                    moodName.toLowerCase().includes(mood.toLowerCase())
            );
        }

        // 3. Fallback: If it's just a single string instead of an array
        return movieMoods;
    });
}