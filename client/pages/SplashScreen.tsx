import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/language-selection');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-green to-brand-yellow flex flex-col items-center justify-center p-6">
      <div className="text-center">
        {/* Logo */}
        <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <div className="text-4xl font-bold text-brand-blue">KC</div>
        </div>
        
        {/* App Name */}
        <h1 className="text-4xl font-bold text-white mb-4">KaamConnect</h1>
        
        {/* Tagline */}
        <p className="text-xl text-white/90 mb-8 font-medium">
          Connecting Skills. Empowering Lives.
        </p>
        
        {/* Loading Animation */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  );
}
