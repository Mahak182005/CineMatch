import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Navigation handle karne ke liye hooks setup

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // 💡 SINK ENGINE LOGIC: LocalStorage se SignUp wala asli registered data fetch kiya
    const registeredEmail = localStorage.getItem('registered_user_email');
    const registeredPassword = localStorage.getItem('registered_user_password');
    const registeredName = localStorage.getItem('registered_user_name');

    // 🔍 CONDITION CHECK 1: Agar user ne is browser me kabhi SignUp kiya hi nahi hai
    if (!registeredEmail) {
      alert("No account found with this email! Please Sign Up first. ⚠️");
      navigate('/signup'); // Direct signup screen par send kar do
      return;
    }

    // 🔍 CONDITION CHECK 2: Inputs ko stored SignUp data se completely match karo
    const inputEmailClean = email.toLowerCase().trim();
    const storedEmailClean = registeredEmail.toLowerCase().trim();

    if (inputEmailClean === storedEmailClean && password === registeredPassword) {
      // ✅ MATCH HO GAYA! Ab user ko secure login access credentials authorized karo
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user_profile_name', registeredName || 'Explorer');

      alert(`Login Successful! Welcome back, ${registeredName || 'Explorer'} 🚀`);

      // Dashboard routing redirect layer parameters mapping execute ki
      navigate('/');
      window.location.reload(); // Matrix state routing parameters ko dynamic update karne ke liye refresh trigger
    } else {
      // ❌ MATCH NAHI HUA! Galat details hone par message show karo
      alert("Incorrect Email or Password! Please try again. ❌");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white flex items-center justify-center p-4 font-sans antialiased">
      {/* Central Card Container */}
      <div className="w-full max-w-md bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md text-left">
        
        {/* Brand Logo Identity */}
        <div className="flex items-center space-x-2 justify-center mb-6">
          <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center font-black text-base text-white shadow shadow-red-950">C</div>
          <span className="font-black text-xl tracking-tight text-white">CineMatch</span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-100">Welcome back</h2>
          <p className="text-zinc-500 text-xs mt-1">Sign in to access your watchlists and match analytics</p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSignInSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Email address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl py-2 px-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-900/60 focus:bg-zinc-950/90 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl py-2 px-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-900/60 focus:bg-zinc-950/90 transition-all"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-pink-950/40 cursor-pointer tracking-wider active:scale-95 mt-2 uppercase"
          >
            Sign In 🚀
          </button>
        </form>

        {/* Dynamic Route Redirect Links Footer Node */}
        <div className="mt-6 text-center">
          <p className="text-zinc-500 text-xs">
            New to CineMatch?{' '}
            <button 
              type="button"
              onClick={() => navigate('/signup')} 
              className="text-pink-500 font-bold hover:underline bg-transparent border-none cursor-pointer p-0"
            >
              Create Account
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}
