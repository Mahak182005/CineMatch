import React, { useState } from 'react';

export function SignIn({ onSignInSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Sign In Logic: login token true set kiya memory me
    localStorage.setItem('isLoggedIn', 'true');
    
    // Agar koi naam saved nahi hai toh default name placeholder set kar do
    if (!localStorage.getItem('user_profile_name')) {
      localStorage.setItem('user_profile_name', 'Movie Fan');
    }

    alert("Login Successful! Welcome back 🚀");

    // Main page open karne ke liye callback trigger
    if (onSignInSuccess) onSignInSuccess();
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

      </div>
    </div>
  );
}
