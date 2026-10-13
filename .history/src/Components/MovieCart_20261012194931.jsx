export function MovieCart({data}){
    return(
        <>
            <div className="bg-gradient-to-br from-[#626562] via-[#484B49] to-[#3D403F] rounded-xl overflow-hidden border border-white/20 transition transition-all duration-300 hover:shadow-black/30 hover:-translate-y-1"> 
                <div>
                    <img src={data.poster} className="object-cover"/>
                </div>
                <div className="px-4 py-4 text-white">
                    <div className="flex justify-between">
                        <p>{data.title}</p>
                        <span>⭐ {data.rating}</span>
                    </div>
                    <p>{data.genre} </p>
                </div>
            </div>
        </>
    )
}