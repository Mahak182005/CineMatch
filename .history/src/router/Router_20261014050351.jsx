import { createBrowserRouter } from "react-router-dom";
import {Home} from "../pages/Home";
import {RouterProvider} from "react-router-dom";
import {MovieMatch} from "../pages/MovieMatch";
import { Favorites } from "../pages/Favorites";
import {Watchlist} from "../pages/Watchlist"
import { Profile } from "../pages/Profile";
import { Discover } from "../pages/Discover";
import {Layout} from "../Layout/Layout";

const ProtectedRoute = () => {
    const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return isUserLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />;
};

const router = createBrowserRouter([
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },  
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/discover",
                element: <Discover />
            },
            {
                path: "/match",
                element: <MovieMatch />
            },
            {
                path: "/fav",
                element: <Favorites />
            },
            {
                path: "/watchlist",
                element: <Watchlist />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])
function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;