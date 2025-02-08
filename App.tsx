import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Clock,
  Bell,
  MessageSquare,
  BarChart3,
  Shield,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { UserProfile } from './components/UserProfile';

function FeatureCard({ icon: Icon, title, description, onClick }: { 
  icon: React.ElementType;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="bg-indigo-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-indigo-400 w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Task Assignment and Prioritization",
      description: "Assign tasks to team members with clear deadlines and priority levels.",
      path: "/features/task-assignment"
    },
    {
      icon: Shield,
      title: "Role-Based Permissions",
      description: "Control access levels by assigning roles like Admin, Editor, or Viewer to team members.",
      path: "/features/role-based-permissions"
    },
    {
      icon: Bell,
      title: "Deadline Tracking and Notifications",
      description: "Set task deadlines and receive automated reminders to stay on schedule.",
      path: "/features/task-assignment"
    },
    {
      icon: MessageSquare,
      title: "Real-Time Collaboration",
      description: "Add comments, share files, and discuss tasks within the platform for seamless teamwork.",
      path: "/features/collaboration"
    },
    {
      icon: BarChart3,
      title: "Progress Reporting",
      description: "Generate reports on task completion and team performance with analytics for better decision making.",
      path: "/features/task-assignment"
    },
    {
      icon: Clock,
      title: "Secure Authentication",
      description: "Ensure only verified users can access the platform using secure login (authentication).",
      path: "/login"
    }
  ];

  const handleGetStarted = () => {
    try {
      navigate('/register');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-8 h-8 text-indigo-400" />
            <span className="text-2xl font-bold text-white">Zidio</span>
          </div>
          <div className="flex items-center space-x-4">
            <UserProfile />
            <button 
              onClick={() => navigate('/login')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Streamline Your Workflow with Zidio Task Management
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Experience seamless task organization, real-time collaboration, and enhanced productivity with our innovative platform designed for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleGetStarted}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-300 w-full sm:w-auto"
            >
              <span>Start Free Trial</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/demo')}
              className="border border-gray-400 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-black/30 backdrop-blur-lg py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => navigate(feature.path)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {/* Replace with actual company logos */}
            <div className="h-12 w-32 bg-gray-800/50 rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-gray-800/50 rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-gray-800/50 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;