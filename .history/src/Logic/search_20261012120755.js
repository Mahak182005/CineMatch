

// export const filterMovie = (fetchData, search)=>{
//     return fetchData.filter((movie)=>
//         movie.title.toLowerCase().includes(search.toLowerCase())
//     );
// }


export const filterMovie = (movies, moodName) => {
    return movies.filter((movie) =>
        movie.moods?.some(
            (mood) => mood.toLowerCase() === moodName.toLowerCase()
        )
    );
};