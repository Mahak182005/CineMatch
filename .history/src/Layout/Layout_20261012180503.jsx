import { Outlet } from "react-router-dom"
import {Header} from "../Components/Header"
import { Footer } from "../Components/Footer"
export function Layout(){
    return(
        <div className="bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}