export function Mood({text, image}){
    return(
        <>
            <div className="bg-white px-4 py-4 text-center baorder-1 border-brown-900 rounded-2xl my-6">
                <span class="text-3xl">{image}</span>
                <p className="text-xl font-semibold">{text}</p>
            </div>
        </>
    )
}