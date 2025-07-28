import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Wrench } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  showBackButton?: boolean;
}

export default function PlaceholderPage({ 
  title, 
  description = "This page is coming soon! We're working hard to bring you this feature.",
  showBackButton = true 
}: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      {showBackButton && (
        <div className="bg-white border-b p-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
          <Wrench className="w-12 h-12 text-brand-blue" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8 max-w-md">{description}</p>
        
        <div className="space-y-3 w-full max-w-sm">
          <Button 
            onClick={() => navigate('/')} 
            className="w-full bg-brand-blue hover:bg-blue-600"
          >
            Go to Home
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="w-full"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
