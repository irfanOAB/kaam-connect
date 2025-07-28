import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'hi', name: 'हिंदी', englishName: 'Hindi' },
  { code: 'en', name: 'English', englishName: 'English' },
  { code: 'mr', name: 'मराठी', englishName: 'Marathi' },
  { code: 'ta', name: 'தமிழ்', englishName: 'Tamil' },
  { code: 'te', name: 'తెలుగు', englishName: 'Telugu' },
  { code: 'kn', name: 'ಕನ್ನಡ', englishName: 'Kannada' },
  { code: 'gu', name: 'ગુજરાતી', englishName: 'Gujarati' },
  { code: 'bn', name: 'বাংলা', englishName: 'Bengali' },
];

export default function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedLanguage) {
      // Store language preference
      localStorage.setItem('kaamconnect_language', selectedLanguage);
      navigate('/onboarding');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-md mx-auto pt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-brand-blue rounded-full flex items-center justify-center">
            <div className="text-2xl font-bold text-white">KC</div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Language</h1>
          <p className="text-gray-600">अपनी भाषा चुनें</p>
        </div>

        {/* Language Options */}
        <div className="space-y-3 mb-8">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => setSelectedLanguage(language.code)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                selectedLanguage === language.code
                  ? 'border-brand-blue bg-brand-blue/10'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800 text-lg">
                    {language.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {language.englishName}
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 ${
                  selectedLanguage === language.code
                    ? 'border-brand-blue bg-brand-blue'
                    : 'border-gray-300'
                }`}>
                  {selectedLanguage === language.code && (
                    <div className="w-full h-full rounded-full bg-white scale-50 transform"></div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          disabled={!selectedLanguage}
          className="w-full py-4 text-lg font-semibold bg-brand-blue hover:bg-blue-600 disabled:opacity-50"
        >
          Continue / जारी रखें
        </Button>
      </div>
    </div>
  );
}
