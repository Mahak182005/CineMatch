export function Profile(){
    return(
        <>
            <div className="h-screen py-20 px-25">
                <div className="flex gap-2 items-center text-2xl">
                    <div className="text-white border-1 border-red-500 rounded-2xl p-2 bg-red-500">
                        img
                    </div>
                    <div className="text-white">
                        <p>name</p>
                        <p className="text-sm">Your movie night, your taste.</p>
                    </div>
                </div>

                <hr className="text-white mt-4" />
            </div>
        </>
    )
}