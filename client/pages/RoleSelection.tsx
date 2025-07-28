import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Building, ArrowLeft } from 'lucide-react';

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<'worker' | 'provider' | ''>('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole === 'worker') {
      navigate('/phone-verification?role=worker');
    } else if (selectedRole === 'provider') {
      navigate('/phone-verification?role=provider');
    }
  };

  const handleBrowse = () => {
    // Allow limited browsing without registration
    navigate('/worker-home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-md mx-auto p-6 pt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-brand-blue rounded-full flex items-center justify-center">
            <div className="text-2xl font-bold text-white">KC</div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to KaamConnect</h1>
          <p className="text-gray-600">कामकनेक्ट में आपका स्वागत है</p>
        </div>

        {/* Role Selection */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            How would you like to use KaamConnect?
          </h2>

          {/* Worker Option */}
          <button
            onClick={() => setSelectedRole('worker')}
            className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
              selectedRole === 'worker'
                ? 'border-brand-blue bg-brand-blue/10'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                selectedRole === 'worker' ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                <User className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">I'm a Worker</h3>
                <p className="text-gray-600 text-sm mb-2">मैं एक कामगार हूँ</p>
                <p className="text-gray-500 text-sm">
                  Find jobs, apply for work, and earn money using your skills
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 ${
                selectedRole === 'worker'
                  ? 'border-brand-blue bg-brand-blue'
                  : 'border-gray-300'
              }`}>
                {selectedRole === 'worker' && (
                  <div className="w-full h-full rounded-full bg-white scale-50 transform"></div>
                )}
              </div>
            </div>
          </button>

          {/* Job Provider Option */}
          <button
            onClick={() => setSelectedRole('provider')}
            className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
              selectedRole === 'provider'
                ? 'border-brand-green bg-brand-green/10'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                selectedRole === 'provider' ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                <Building className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">I Need Help</h3>
                <p className="text-gray-600 text-sm mb-2">मुझे मदद चाहिए</p>
                <p className="text-gray-500 text-sm">
                  Post jobs, find workers, and hire skilled people for your needs
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 ${
                selectedRole === 'provider'
                  ? 'border-brand-green bg-brand-green'
                  : 'border-gray-300'
              }`}>
                {selectedRole === 'provider' && (
                  <div className="w-full h-full rounded-full bg-white scale-50 transform"></div>
                )}
              </div>
            </div>
          </button>
        </div>

        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          disabled={!selectedRole}
          className={`w-full py-4 text-lg font-semibold mb-4 ${
            selectedRole === 'worker' 
              ? 'bg-brand-blue hover:bg-blue-600' 
              : selectedRole === 'provider'
              ? 'bg-brand-green hover:bg-green-600'
              : 'bg-gray-400'
          } disabled:opacity-50`}
        >
          Continue / जारी रखें
        </Button>

        {/* Browse Option */}
        <div className="text-center">
          <button
            onClick={handleBrowse}
            className="text-brand-blue font-medium hover:underline"
          >
            Skip & Browse Limited Features
          </button>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/onboarding')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
