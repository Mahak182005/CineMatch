export function Mood({text, image}){
    return(
        <>
            <div className="bg-gradient-to-br from-[#626562] via-[#484B49] to-[#3D403F] my-6 text-center py-4 border border-white/20 shadow-lg shadow-black/20 rounded-2xl duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1">
                {/* <span class="text-3xl">{image}</span> */}
                <img src={image} alt="img" />
                <p className="text-xl font-semibold">{text}</p>
            </div>
        </>
    )
}