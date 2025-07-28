import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Users, Shield, CheckCircle } from 'lucide-react';

const onboardingSlides = [
  {
    id: 1,
    icon: Users,
    title: "Connect Skills to Jobs",
    subtitle: "कुशलता से नौकरी जोड़ें",
    description: "Find work opportunities near you or hire skilled workers for your needs",
    image: "👥",
    bgColor: "bg-brand-blue"
  },
  {
    id: 2,
    icon: Shield,
    title: "Empowering Local Workers",
    subtitle: "स्थानीय कामगारों को सशक्त बनाना",
    description: "Supporting blue-collar workers, homemakers, and local artisans to find meaningful work",
    image: "💪",
    bgColor: "bg-brand-green"
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Easy, Safe & Flexible",
    subtitle: "आसान, सुरक्षित और लचीला",
    description: "Simple to use, verified profiles, secure payments, and work on your own terms",
    image: "✅",
    bgColor: "bg-brand-yellow"
  }
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/role-selection');
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    navigate('/role-selection');
  };

  const slide = onboardingSlides[currentSlide];
  const IconComponent = slide.icon;

  return (
    <div className={`min-h-screen ${slide.bgColor} text-white transition-all duration-500`}>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <button 
            onClick={handlePrev}
            className={`p-2 rounded-full bg-white/20 ${currentSlide === 0 ? 'opacity-50' : 'opacity-100'}`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleSkip}
            className="text-white/80 font-medium hover:text-white"
          >
            Skip
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {onboardingSlides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Icon/Image */}
          <div className="w-32 h-32 mb-8 bg-white/20 rounded-full flex items-center justify-center">
            <IconComponent className="w-16 h-16 text-white" />
          </div>

          {/* Large Emoji */}
          <div className="text-6xl mb-6">{slide.image}</div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-3">{slide.title}</h1>
          
          {/* Hindi Subtitle */}
          <h2 className="text-xl font-semibold mb-6 text-white/90">{slide.subtitle}</h2>

          {/* Description */}
          <p className="text-lg leading-relaxed text-white/80 mb-12 max-w-sm">
            {slide.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="p-6">
          <Button
            onClick={handleNext}
            className="w-full py-4 text-lg font-semibold bg-white text-gray-800 hover:bg-gray-100"
          >
            {currentSlide === onboardingSlides.length - 1 ? 'Get Started' : 'Next'}
            {currentSlide < onboardingSlides.length - 1 && (
              <ChevronRight className="w-5 h-5 ml-2" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
