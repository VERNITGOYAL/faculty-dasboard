import { useState } from 'react';
import { Star, TrendingUp, MessageSquare, BarChart3, Users } from 'lucide-react';

export default function StudentFeedbackDashboard() {
  const [activeTab, setActiveTab] = useState('feedback');

  const tabs = [
    { id: 'feedback', label: 'Feedback Received' },
    { id: 'performance', label: 'Performance Tracking' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'give', label: 'Give Feedback' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const FeedbackReceived = () => (
    <div className="p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 text-center border">
          <div className="text-3xl font-bold text-blue-600 mb-2">4.7</div>
          <div className="text-gray-600 text-sm mb-2">Average Rating</div>
          <div className="flex justify-center gap-1">
            {renderStars(4.7)}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 text-center border">
          <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
          <div className="text-gray-600 text-sm mb-2">Positive Feedback</div>
          <TrendingUp className="w-6 h-6 text-green-600 mx-auto" />
        </div>
        
        <div className="bg-white rounded-lg p-6 text-center border">
          <div className="text-3xl font-bold text-purple-600 mb-2">124</div>
          <div className="text-gray-600 text-sm mb-2">Total Reviews</div>
          <MessageSquare className="w-6 h-6 text-purple-600 mx-auto" />
        </div>
        
        <div className="bg-white rounded-lg p-6 text-center border">
          <div className="text-3xl font-bold text-indigo-600 mb-2">✓</div>
          <div className="text-gray-600 text-sm">Excellence Badge</div>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-gray-900">Rahul Sharma</h3>
              <p className="text-sm text-gray-500">2021001 • CS-201</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {renderStars(4)}
              </div>
              <span className="text-sm text-gray-500">2024-06-20</span>
            </div>
          </div>
          <p className="text-gray-700 italic">"Excellent teaching methodology. Very clear explanations."</p>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-gray-900">Priya Singh</h3>
              <p className="text-sm text-gray-500">2021002 • CS-401</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {renderStars(5)}
              </div>
              <span className="text-sm text-gray-500">2024-06-18</span>
            </div>
          </div>
          <p className="text-gray-700 italic">"Outstanding professor! Made complex topics easy to understand."</p>
        </div>
      </div>
    </div>
  );

  const PerformanceTracking = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Student Performance Overview</h2>
        <p className="text-gray-600">Track individual student progress and performance metrics</p>
      </div>

      <div className="space-y-6">
        {/* Rahul Sharma */}
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Rahul Sharma</h3>
              <p className="text-sm text-gray-500">2021001</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Overall: A</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">88%</div>
              <div className="text-sm text-gray-600">Assignments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">90%</div>
              <div className="text-sm text-gray-600">Participation</div>
            </div>
          </div>
        </div>

        {/* Priya Singh */}
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Priya Singh</h3>
              <p className="text-sm text-gray-500">2021002</p>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Overall: A+</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
              <div className="text-sm text-gray-600">Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Assignments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Participation</div>
            </div>
          </div>
        </div>

        {/* Amit Kumar */}
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Amit Kumar</h3>
              <p className="text-sm text-gray-500">2021003</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Overall: B</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">78%</div>
              <div className="text-sm text-gray-600">Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">72%</div>
              <div className="text-sm text-gray-600">Assignments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">65%</div>
              <div className="text-sm text-gray-600">Participation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Analytics = () => (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Course Performance Trends */}
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-900">Course Performance Trends</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">CS-201 (Data Structures)</span>
                <span className="text-sm font-bold text-green-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">CS-401 (Machine Learning)</span>
                <span className="text-sm font-bold text-blue-600">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Excellence Metrics */}
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-900">Teaching Excellence Metrics</h3>
          </div>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">4.8/5.0</div>
              <div className="text-sm text-gray-600">Student Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
              <div className="text-sm text-gray-600">Course Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const GiveFeedback = () => (
    <div className="p-6">
      <div className="max-w-2xl">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Provide Student Feedback</h2>
          <p className="text-gray-600">Give personalized feedback to students</p>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Student</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Rahul Sharma - 2021001</option>
                <option>Priya Singh - 2021002</option>
                <option>Amit Kumar - 2021003</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>CS-201 - Data Structures</option>
                <option>CS-401 - Machine Learning</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Category</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Academic Performance</option>
              <option>Participation</option>
              <option>Assignment Quality</option>
              <option>Overall Progress</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Feedback</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
              placeholder="Provide constructive feedback..."
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Performance Rating</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Excellent (A+)</option>
                <option>Very Good (A)</option>
                <option>Good (B+)</option>
                <option>Satisfactory (B)</option>
                <option>Needs Improvement (C)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recommendations</label>
              <input 
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Suggestions for improvement"
              />
            </div>
          </div>

          <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'feedback':
        return <FeedbackReceived />;
      case 'performance':
        return <PerformanceTracking />;
      case 'analytics':
        return <Analytics />;
      case 'give':
        return <GiveFeedback />;
      default:
        return <FeedbackReceived />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Student Performance Feedback</h1>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xlmx-auto px-6">
          <nav className="flex  gap-55 space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}