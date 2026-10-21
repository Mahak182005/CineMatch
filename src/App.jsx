import { useState, useEffect } from 'react';
import { MovieMatch } from './pages/MovieMatch';
import { SignIn } from './pages/SignIn'; // 👈 Import SignIn
import { SignUp } from './pages/SignUp'; // 👈 Import SignUp

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // 'signin' ya 'signup' स्क्रीन को टॉगल करने के लिए स्टेट
  const [authScreen, setAuthScreen] = useState('signin'); 

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setIsUserLoggedIn(true);
    }
  }, []);

  // 1. अगर यूजर लॉग-इन नहीं है
  if (!isUserLoggedIn) {
    if (authScreen === 'signin') {
      return (
        <div className="relative">
          <SignIn onSignInSuccess={() => setIsUserLoggedIn(true)} />
          {/* नीचे छोटा बटन स्क्रीन बदलने के लिए */}
          <button onClick={() => setAuthScreen('signup')} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-pink-500 font-bold hover:underline">
            New to CineMatch? Create Account
          </button>
        </div>
      );
    } else {
      return (
        <div className="relative">
          <SignUp onSignUpSuccess={() => setIsUserLoggedIn(true)} />
          <button onClick={() => setAuthScreen('signin')} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-pink-500 font-bold hover:underline">
            Already have an account? Sign In
          </button>
        </div>
      );
    }
  }

  // 2. अगर यूजर लॉग-इन है, तो मुख्य पेज खुलेगा
  return (
    <div>
        <MovieMatch />
    </div>
  );
}
