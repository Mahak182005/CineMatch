import {fetchData} from "../Data/api";

export const filterMovie = (fetchData, search)=>{
    return fetchData.filter((movie)=>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
}