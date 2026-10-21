import React, { useState } from 'react';

export function SignUp({ onSignUpSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      alert("Please fill in all the details.");
      return;
    }

    // Sign Up Logic: User ka naam aur login token storage me save kiya
    localStorage.setItem('user_profile_name', name);
    localStorage.setItem('isLoggedIn', 'true');
    
    alert(`Registration Successful! Welcome ${name} ✨`);

    // Main page par redirect karne ke liye callback trigger
    if (onSignUpSuccess) onSignUpSuccess();
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
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-100">Create your space</h2>
          <p className="text-zinc-500 text-xs mt-1">Sign up to build your unique movie tracking dashboard</p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl py-2 px-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-900/60 focus:bg-zinc-950/90 transition-all"
              required
            />
          </div>

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
            Get Started ✨
          </button>
        </form>

      </div>
    </div>
  );
}
