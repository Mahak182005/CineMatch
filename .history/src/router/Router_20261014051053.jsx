import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieMatch } from "../pages/MovieMatch";
import { Favorites } from "../pages/Favorites";
import { Watchlist } from "../pages/Watchlist";
import { Profile } from "../pages/Profile";
import { Discover } from "../pages/Discover";
import { SignIn } from "../pages/SignIn"; // 👈 SignIn पेज इम्पोर्ट किया
import { SignUp } from "../pages/SignUp"; // 👈 SignUp पेज इम्पोर्ट किया
import { Layout } from "../Layout/Layout";

// 🔐 1. PROTECTED ROUTE GUARD COMPONENT
// यह चेक करेगा कि यूजर लॉग-इन है या नहीं। नहीं होने पर /signin पर भेज देगा।
const ProtectedRoute = () => {
    const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return isUserLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />;
};

// 🔓 2. PUBLIC ROUTE GUARD COMPONENT
// यह लॉग-इन यूजर को वापस लॉगिन/साइनअप पेज पर जाने से रोकेगा (सीधे होम पेज भेज देगा)।
const PublicRoute = () => {
    const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return !isUserLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

// 🗺️ 3. CORE ROUTER CONFIGURATION MATRIX
const router = createBrowserRouter([
    // ─── PUBLIC ROUTES (बिना लॉगिन के खुलेंगे पर लॉग-इन यूजर के लिए ब्लॉक होंगे) ───
    {
        element: <PublicRoute />,
        children: [
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    },

    // ─── PROTECTED ROUTES (सिर्फ लॉग-इन यूजर ही इन पेजेस को देख पाएंगे) ───
    {
        path: "/",
        element: <ProtectedRoute />, // 👈 गार्ड यहाँ सारे बच्चों की रक्षा कर रहा है
        children: [
            {
                element: <Layout />, // आपका मुख्य नेविगेशन लेआउट
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
        ]
    },

    // ─── NOT FOUND FALLBACK (गलत पाथ होने पर होम पेज पर रीडायरेक्ट) ───
    {
        path: "*",
        element: <Navigate to="/" replace />
    }
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
