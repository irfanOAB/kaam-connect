import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  IndianRupee, 
  Star, 
  User, 
  FileText, 
  MessageCircle,
  Home,
  Search,
  Bell,
  Settings
} from 'lucide-react';

const nearbyJobs = [
  {
    id: 1,
    title: 'Cook Needed for Family',
    category: 'Cooking',
    location: 'Malad West, Mumbai',
    distance: '1.2 km',
    budget: '8000-12000',
    duration: 'Full Time',
    rating: 4.5,
    description: 'Looking for experienced cook for family of 4. Should know North Indian and South Indian cuisine.',
    postedTime: '2 hours ago',
    applicants: 8,
    urgent: true
  },
  {
    id: 2,
    title: 'House Cleaning Service',
    category: 'Cleaning',
    location: 'Kandivali East, Mumbai',
    distance: '2.1 km',
    budget: '300-500',
    duration: 'Part Time',
    rating: 4.2,
    description: '2BHK apartment cleaning required. 3 times a week.',
    postedTime: '5 hours ago',
    applicants: 3,
    urgent: false
  },
  {
    id: 3,
    title: 'Tailor for Alterations',
    category: 'Tailoring',
    location: 'Borivali West, Mumbai',
    distance: '3.5 km',
    budget: '150-300',
    duration: 'Project Based',
    rating: 4.8,
    description: 'Need alterations for 5 dresses. Must be completed within 2 days.',
    postedTime: '1 day ago',
    applicants: 12,
    urgent: false
  }
];

export default function WorkerHome() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-blue text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold">राम कुमार</h2>
              <p className="text-sm text-blue-100">Cook • 4.8 ⭐</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs near you..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 bg-white border-b">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-blue">12</div>
            <div className="text-sm text-gray-600">Jobs Applied</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-green">8</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-yellow">₹2,400</div>
            <div className="text-sm text-gray-600">This Week</div>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Jobs Near You</h3>
          <Badge className="bg-brand-green text-white">
            {nearbyJobs.length} Available
          </Badge>
        </div>

        {nearbyJobs.map((job) => (
          <Card key={job.id} className="relative overflow-hidden">
            {job.urgent && (
              <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                URGENT
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{job.title}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {job.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    {job.rating}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="py-2 space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location} • {job.distance}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <IndianRupee className="w-4 h-4 mr-1" />
                  ₹{job.budget}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.duration}
                </div>
              </div>

              <p className="text-sm text-gray-700 line-clamp-2">
                {job.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{job.postedTime}</span>
                <span>{job.applicants} applied</span>
              </div>
            </CardContent>

            <CardFooter className="pt-3 space-x-2">
              <Button className="flex-1 bg-brand-blue hover:bg-blue-600">
                Apply Now
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="grid grid-cols-4 gap-1">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'home' ? 'text-brand-blue bg-blue-50' : 'text-gray-600'
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'applications' ? 'text-brand-blue bg-blue-50' : 'text-gray-600'
            }`}
          >
            <FileText className="w-5 h-5 mb-1" />
            <span className="text-xs">My Jobs</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'profile' ? 'text-brand-blue bg-blue-50' : 'text-gray-600'
            }`}
          >
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs">Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'chat' ? 'text-brand-blue bg-blue-50' : 'text-gray-600'
            }`}
          >
            <MessageCircle className="w-5 h-5 mb-1" />
            <span className="text-xs">Chat</span>
          </button>
        </div>
      </div>

      {/* Bottom padding to prevent content from being hidden behind nav */}
      <div className="pb-20"></div>
    </div>
  );
}
