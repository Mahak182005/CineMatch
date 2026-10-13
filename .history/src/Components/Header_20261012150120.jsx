import { Link } from "react-router-dom";
export function Header(){
    return(
        <header className="w-full max-w-full fixed">     
            <div className="flex justify-between gap-20 items-center border-1 border-gray-800  bg-zinc-950/70 backdrop-blur-md border-b border-white/10 py-3 px-25">    
                    <div className="flex items-center gap-8">
                        <Link to="/">
                            <div className="flex items-center gap-2">
                                <div className="text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film size-5" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
                                </div>
                                <p className="font-semibold text-xl text-white font-bold">Cine<span className="text-red-500">Match</span></p>
                            </div>
                        </Link>
                    <div className="flex gap-8">
                        <Link to="/"><div className="text-zinc-400 hover:text-white transition-colors">Home</div></Link>
                        <Link className="text-zinc-400 hover:text-white transition-colors" to="/discover">Discover</Link>
                        <Link className="text-zinc-400 hover:text-white transition-colors" to="/match">Movie Match</Link>
                        {/* <Link className="text-gray-500" to="/browse">Browser</Link> */}
                    </div>
                </div>
                <div className="flex gap-8 items-center">
                  {/* <img src="https://images.openai.com/static-rsc-4/xpLf_iDkSa24squI-Ip5QKZDulp0bh7B7cuwtMJkyvB3GZ-utHOG7STBEdMhCHi332WpSdAey1vEcinOtZuM0vqtNlfz2iFG4NJkjVUb6CCT1gYCvnhXDTZPIKbWEkUhrQU-C51ka7CL4NYJu1wmD4mK8NLTfRdr_e0rAs2OP8c?purpose=inline" alt="image" className="w-6 h-5 "/> */}
                  <div className="flex gap-4 items-center">
                        <Link className="text-zinc-400 hover:text-red-500" to="fav"><div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg></div></Link>
                        <Link className="text-zinc-400 hover:text-red-500" to="/watchlist">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="gray"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                            </svg>
                        </Link>             
                        <Link className="text-zinc-400 hover:text-red-500" to="/profile"><div className=""><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div></Link>
                    </div>
                </div>
            </div>
       </header>
    )
}



