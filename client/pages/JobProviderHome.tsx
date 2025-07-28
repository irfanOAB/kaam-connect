import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Star, 
  User, 
  Eye, 
  MessageCircle,
  Home,
  Search,
  Bell,
  Settings,
  ChefHat,
  Hammer,
  Scissors,
  Car,
  Brush,
  Users
} from 'lucide-react';

const serviceCategories = [
  { id: 'cook', name: 'Cook', icon: ChefHat, color: 'bg-orange-100 text-orange-600' },
  { id: 'cleaner', name: 'Cleaner', icon: Brush, color: 'bg-blue-100 text-blue-600' },
  { id: 'tailor', name: 'Tailor', icon: Scissors, color: 'bg-purple-100 text-purple-600' },
  { id: 'mechanic', name: 'Mechanic', icon: Hammer, color: 'bg-green-100 text-green-600' },
  { id: 'driver', name: 'Driver', icon: Car, color: 'bg-yellow-100 text-yellow-600' },
  { id: 'more', name: 'More', icon: Users, color: 'bg-gray-100 text-gray-600' },
];

const activeJobs = [
  {
    id: 1,
    title: 'Cook for Family Gathering',
    category: 'Cooking',
    applicants: 8,
    status: 'reviewing',
    budget: '₹12,000',
    location: 'Malad West',
    postedTime: '2 hours ago'
  },
  {
    id: 2,
    title: 'Weekly House Cleaning',
    category: 'Cleaning',
    applicants: 3,
    status: 'ongoing',
    budget: '₹400/day',
    location: 'Kandivali East',
    postedTime: '1 day ago'
  }
];

const recentWorkers = [
  {
    id: 1,
    name: 'प्रिया शर्मा',
    skill: 'Cook',
    rating: 4.8,
    experience: '5 years',
    distance: '1.2 km',
    verified: true,
    available: true
  },
  {
    id: 2,
    name: 'राहुल कुमार',
    skill: 'Cleaner',
    rating: 4.5,
    experience: '3 years',
    distance: '0.8 km',
    verified: true,
    available: false
  },
  {
    id: 3,
    name: 'सुनीता देवी',
    skill: 'Tailor',
    rating: 4.9,
    experience: '8 years',
    distance: '2.1 km',
    verified: true,
    available: true
  }
];

export default function JobProviderHome() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-green text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold">सुमित्रा पटेल</h2>
              <p className="text-sm text-green-100">Job Provider • Malad West</p>
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
            placeholder="Search workers by skill..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Post Job CTA */}
      <div className="p-4 bg-white border-b">
        <Link to="/post-job">
          <Button className="w-full py-4 text-lg font-semibold bg-brand-yellow hover:bg-yellow-500 text-gray-800">
            <Plus className="w-6 h-6 mr-2" />
            Post a New Job
          </Button>
        </Link>
      </div>

      {/* Service Categories */}
      <div className="p-4 bg-white border-b">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Workers by Service</h3>
        <div className="grid grid-cols-3 gap-3">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className="flex flex-col items-center p-4 rounded-xl border bg-white hover:bg-gray-50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-2`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 bg-white border-b">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-green">2</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-blue">11</div>
            <div className="text-sm text-gray-600">Applications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-yellow">5</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      </div>

      {/* Active Jobs */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Your Active Jobs</h3>
          <Link to="/my-jobs" className="text-brand-blue text-sm font-medium">
            View All
          </Link>
        </div>

        <div className="space-y-3">
          {activeJobs.map((job) => (
            <Card key={job.id}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{job.title}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {job.category}
                      </Badge>
                      <Badge 
                        className={`text-xs ${
                          job.status === 'ongoing' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {job.status === 'ongoing' ? 'Ongoing' : 'Reviewing'}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">{job.budget}</div>
                    <div className="text-sm text-gray-500">{job.postedTime}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {job.applicants} applications
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Browse Workers */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Available Workers Nearby</h3>
          <Link to="/browse-workers" className="text-brand-blue text-sm font-medium">
            View All
          </Link>
        </div>

        <div className="space-y-3">
          {recentWorkers.map((worker) => (
            <Card key={worker.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center relative">
                      <User className="w-6 h-6 text-gray-600" />
                      {worker.verified && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-800">{worker.name}</h4>
                        {worker.available ? (
                          <Badge className="text-xs bg-green-100 text-green-800">Available</Badge>
                        ) : (
                          <Badge className="text-xs bg-gray-100 text-gray-600">Busy</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <span>{worker.skill} • {worker.experience}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {worker.rating}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {worker.distance}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-brand-blue hover:bg-blue-600">
                      Book
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="grid grid-cols-4 gap-1">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'home' ? 'text-brand-green bg-green-50' : 'text-gray-600'
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'jobs' ? 'text-brand-green bg-green-50' : 'text-gray-600'
            }`}
          >
            <Plus className="w-5 h-5 mb-1" />
            <span className="text-xs">My Jobs</span>
          </button>
          <button
            onClick={() => setActiveTab('browse')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'browse' ? 'text-brand-green bg-green-50' : 'text-gray-600'
            }`}
          >
            <Search className="w-5 h-5 mb-1" />
            <span className="text-xs">Browse</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              activeTab === 'chat' ? 'text-brand-green bg-green-50' : 'text-gray-600'
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
