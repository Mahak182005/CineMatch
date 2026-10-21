import { useState, useEffect } from 'react';
import { fatchData } from '../Data/api';
import { MovieCart } from '../Components/MovieCart';
import { MovieDetailModal } from '../Components/MovieDetailModal';

export function Profile() {
    const [historyMovies, setHistoryMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    // 👇 Users ke active signup records data vectors track karne ke liye dynamic states
    const [userName, setUserName] = useState('Explorer');
    const [userInitials, setUserInitials] = useState('EX');

    useEffect(() => {
        const fetchHistoryAndProfile = () => {
            // 1. LocalStorage se watchHistory nikal kar mapping matrix sync kijiye
            const storedHistoryIds = JSON.parse(localStorage.getItem('watchHistory') || '[]');
            const matchedHistory = storedHistoryIds
                .map(id => fatchData.find(movie => movie.id === id))
                .filter(Boolean);
                
            setHistoryMovies(matchedHistory);

            // 2. 💡 FIXED LOGIC: Sign Up wala asli user data read karke dynamic name set kijiye
            const savedName = localStorage.getItem('registered_user_name');
            if (savedName) {
                setUserName(savedName);
                
                // Naam ke pehle 2 akshar nikalne ka logic (e.g., "John Doe" -> "JD")
                const initials = savedName
                    .split(' ')
                    .map(word => word[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2);
                setUserInitials(initials);
            }
        };

        fetchHistoryAndProfile();
        window.addEventListener('storage', fetchHistoryAndProfile);
        return () => window.removeEventListener('storage', fetchHistoryAndProfile);
    }, []);

    // 🚪 LOG OUT ACTION DISPATCHER HANDLER
    const handleLogout = () => {
        // Sirf login state token urao, user ka account credentials mat delete karna!
        localStorage.removeItem('isLoggedIn');
        
        alert("Logged out successfully. Redirecting securely back to gate portal... 🚪");
        
        // Direct browser routing window bypass update
        window.location.href = '/signin';
    };

    return (
        <div className="py-20 px-6 md:px-16 lg:px-25 min-h-screen text-white pb-24 bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950">
            
            {/* 1. Main Profile Summary Layout Frame Grid (With Right-Aligned Logout Button) */}
            <div className="w-full mx-auto pt-12 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-6xl border-b border-zinc-900/40 mb-8">
                
                {/* Left Side: Avatar block and Header elements container */}
                <div className="flex items-center space-x-5 text-left">
                    {/* 👇 FIXED: Pink circle me ab static text ke bajaye dynamic initials dikhenge */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center font-black text-white text-lg tracking-wider shadow-lg shadow-pink-950/30 shrink-0 select-none">
                        {userInitials}
                    </div>
                    
                    <div className="min-w-0">
                        {/* 👇 FIXED: "Your movie space" ke badle user ka dynamic active name attach kar diya */}
                        <h1 className="text-2xl font-black text-white md:text-3xl tracking-tight capitalize">
                            {userName}'s space 🎬
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm mt-1 font-medium tracking-wide">
                            {historyMovies.length} films watched <span className="text-zinc-600 mx-1.5">&middot;</span> Member since 2026
                        </p>
                    </div>
                </div>

                {/* 👇 RIGHT SIDE FIXED: Sleek professional solid glassmorphic Sign Out button block */}
                <button 
                    onClick={handleLogout}
                    className="bg-zinc-900/60 hover:bg-red-950/40 border border-zinc-800 hover:border-red-900/50 text-zinc-300 hover:text-red-400 text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-1.5 cursor-pointer shadow active:scale-95 sm:mt-0"
                >
                    <span>Logout</span> <span>🚪</span>
                </button>
            </div>

            {/* 2. Active Tab Pill Marker */}
            <div className="max-w-6xl mx-auto mb-10 text-left">
                <div className="flex flex-wrap gap-2 pb-5">
                    <button
                        className="px-5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-rose-600 border border-rose-700 text-white shadow-md shadow-rose-950/50 transition-all duration-200 cursor-default"
                    >
                        History 📜 ({historyMovies.length})
                    </button>
                </div>
            </div>

            {/* 3. History Movie Catalog Mapping Grid */}
            <div className="max-w-6xl w-full mx-auto">
                {historyMovies.length === 0 ? (
                    <div className="text-center py-16 p-8 bg-zinc-900/30 border border-zinc-800/60 rounded-xl backdrop-blur-sm">
                        <p className="text-zinc-500 text-sm font-medium">No movies found in your watch history library.</p>
                        <p className="text-zinc-600 text-xs mt-1">Open any movie card and click "Watch Movie" to start tracking your history!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {historyMovies.map((movie, index) => (
                            <MovieCart 
                                key={`history-item-${movie.id || index}`} 
                                data={movie} 
                                onCardClick={setSelectedMovie} 
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* 4. Details Pop-up Overlays Component Player */}
            {selectedMovie && (
                <MovieDetailModal 
                    movie={selectedMovie} 
                    onClose={() => setSelectedMovie(null)} 
                />
            )}

        </div>
    );
}
