export function Mood({text, image}){
    return(
        <>
            {/* <div className="bg-[#484B49] px-4 py-4 text-center border-1 border-amber-900 rounded-2xl my-6"> */}
            <div className="bg-gradient-to-br from-[#626562] via-[#484B49] to-[#3D403F] border border-white/20 shadow-lg shadow-black/20 rounded-2xl duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1">
                <span class="text-3xl">{image}</span>
                <p className="text-xl font-semibold">{text}</p>
            </div>
        </>
    )
}