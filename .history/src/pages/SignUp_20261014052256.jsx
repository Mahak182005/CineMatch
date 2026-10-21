import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      alert("Please fill in all the details.");
      return;
    }

    // 💡 सिर्फ डेटा रजिस्टर किया, लॉगिन टोकन अभी 'true' नहीं करेंगे!
    localStorage.setItem('registered_user_name', name);
    localStorage.setItem('registered_user_email', email.toLowerCase().trim());
    localStorage.setItem('registered_user_password', password);
    
    alert(`Registration Successful, ${name}! Now please Sign In to access your space. ✨`);
    
    // 🚀 अब शक्ल देखने के लिए सीधे साइन-इन वाले गेट पर ही भेजेंगे!
    navigate('/signin');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white flex items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-md bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md text-left">
        
        {/* Brand Logo Header */}
        <div className="flex items-center space-x-2 justify-center mb-6">
          <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center font-black text-base text-white shadow shadow-red-950">C</div>
          <span className="font-black text-xl tracking-tight text-white">CineMatch</span>
        </div>

        {/* Headline Copy */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-100">Create your space</h2>
          <p className="text-zinc-500 text-xs mt-1">Sign up to build your unique movie tracking dashboard</p>
        </div>

        {/* Inputs Form Container */}
        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl py-2 px-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-900/60"
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
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl py-2 px-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-900/60"
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
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl py-2 px-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-900/60"
              required
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs py-2.5 rounded-xl uppercase tracking-wider mt-2 cursor-pointer shadow-lg shadow-pink-950/30">
            Get Started ✨
          </button>
        </form>

        {/* Footer Redirect Link Switch Pane */}
        <div className="mt-6 text-center">
          <p className="text-zinc-500 text-xs">
            Already have an account?{' '}
            <button type="button" onClick={() => navigate('/signin')} className="text-pink-500 font-bold hover:underline bg-transparent border-none cursor-pointer">
              Sign In
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}
