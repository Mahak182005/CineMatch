export function Mood({text, image}){
    return(
        <>
            <div className="bg-[#343A3A] px-4 py-4 text-center border-1 border-amber-900 rounded-2xl my-6">
                <span class="text-3xl">{image}</span>
                <p className="text-xl font-semibold">{text}</p>
            </div>
        </>
    )
}