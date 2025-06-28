import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit3, 
  Camera, 
  BookOpen, 
  Users, 
  Award, 
  FileText, 
  Calendar,
  Plus,
  Bell,
  GraduationCap,
  Clock
} from 'lucide-react';

const FacultyProfile = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Academic', 'Research', 'Research Scholars', 'Achievements'];

  const TabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                </div>
                
                <div className="flex items-start gap-8">
                  {/* Profile Photo */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-semibold text-gray-600 mb-3">
                      RK
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                      <Camera className="w-4 h-4" />
                      Change Photo
                    </button>
                  </div>

                  {/* Personal Details */}
                  <div className="flex-1 grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="text-gray-900">Dr. Rajesh Kumar</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        <div className="text-gray-900">Computer Science</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="text-blue-600">rajesh.kumar@gbu.ac.in</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <div className="text-gray-900">123 Faculty Quarters, GBU Campus, Greater Noida</div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                        <div className="text-gray-900">Associate Professor</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                        <div className="text-blue-600">FAC001234</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="text-gray-900">+91 98765 43210</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Assignments */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Assignments</h2>
                
                <div className="grid grid-cols-3 gap-8">
                  {/* Course Assignments */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Course Assignments</h3>
                    <div className="space-y-2">
                      <div className="text-gray-700">Data Structures (CS-201)</div>
                      <div className="text-gray-700">Machine Learning (CS-401)</div>
                      <div className="text-gray-700">Research Methodology (CS-501)</div>
                    </div>
                  </div>

                  {/* Administrative Roles */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Administrative Roles</h3>
                    <div className="space-y-2">
                      <div className="text-gray-700">IQAC Member</div>
                      <div className="text-gray-700">Research Committee</div>
                      <div className="text-gray-700">Placement Committee</div>
                    </div>
                  </div>

                  {/* Mentorship */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Mentorship</h3>
                    <div className="space-y-2">
                      <div className="text-gray-700">15 M.Tech Students</div>
                      <div className="text-gray-700">3 PhD Scholars</div>
                      <div className="text-gray-700">Tech Club Mentor</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Academic':
        return (
          <div className="space-y-8">
            {/* Teaching Summary */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Teaching Summary</h2>
                </div>
                
                <div className="grid grid-cols-3 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                    <div className="text-gray-700">Years of Experience</div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                    <div className="text-gray-700">Courses Taught</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">450+</div>
                    <div className="text-gray-700">Students Mentored</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Semester Courses */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Semester Courses</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Data Structures</h3>
                      <p className="text-sm text-gray-600">CS-201 • Semester 3</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">
                        Active
                      </span>
                      <p className="text-sm text-gray-600">30 Students</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Machine Learning</h3>
                      <p className="text-sm text-gray-600">CS-301 • Semester 5</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">
                        Active
                      </span>
                      <p className="text-sm text-gray-600">35 Students</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Research Methodology</h3>
                      <p className="text-sm text-gray-600">CS-401 • Semester 7</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-1">
                        Active
                      </span>
                      <p className="text-sm text-gray-600">40 Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Research':
        return (
          <div className="space-y-8">
            {/* Research Contributions */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Research Contributions</h2>
                </div>
                
                <div className="grid grid-cols-4 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                    <div className="text-gray-700">Publications</div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                    <div className="text-gray-700">Patents</div>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
                    <div className="text-gray-700">Conferences</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                    <div className="text-gray-700">Ongoing Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Publications */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Publications</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">Machine Learning Applications in Education - IEEE Conference 2024</h3>
                    <p className="text-gray-600">Rajesh Kumar, et al.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">Data Mining Techniques for Student Performance Analysis - ACM Journal 2023</h3>
                    <p className="text-gray-600">Rajesh Kumar, et al.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">AI-Driven Campus Management Systems - Springer 2023</h3>
                    <p className="text-gray-600">Rajesh Kumar, et al.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Research Scholars':
        return (
          <div className="space-y-8">
            {/* Header with Add Button */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Research Scholars</h1>
                <p className="text-gray-600">Manage and track your research scholars</p>
              </div>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800">
                <Plus className="w-4 h-4" />
                Add Scholar
              </button>
            </div>

            {/* Scholar Summary */}
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-700">Active Scholars</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-gray-700">Graduated</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <Bell className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-gray-700">Review Due</div>
              </div>
            </div>

            {/* Scholar Details */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Rahul Sharma</h2>
                    <p className="text-gray-600">Ph.D. • Started: 2022-08-01</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Mid Review
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Research Topic</h3>
                    <p className="text-gray-700 mb-4">Machine Learning Applications in Healthcare</p>
                    
                    <h3 className="font-medium text-gray-900 mb-2">Progress</h3>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">60%</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Coursework</span>
                      <span>Proposal</span>
                      <span>Mid Review</span>
                      <span>Final</span>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Next Review
                      </h3>
                      <p className="text-orange-600 font-medium">2024-07-15</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Recent Meetings</h3>
                    <p className="text-gray-600 mb-4">2 logged</p>

                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-gray-900">2024-06-20</h4>
                        <p className="text-sm text-gray-600">Discussed data collection methodology</p>
                        <p className="text-xs text-blue-600 mt-1">Target: Complete literature review by July 5</p>
                      </div>
                      
                      <div className="border-l-4 border-gray-300 pl-4">
                        <h4 className="font-medium text-gray-900">2024-06-05</h4>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Schedule Meeting
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Log Entry
                      </button>
                      <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Achievements':
        return (
          <div className="space-y-8">
            {/* Awards & Recognition */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Awards & Recognition</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Best Faculty Award</h3>
                      <p className="text-gray-600">GBU • 2023</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Excellence in Research</h3>
                      <p className="text-gray-600">IEEE • 2022</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Outstanding Teacher Award</h3>
                      <p className="text-gray-600">GBU • 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Faculty Profile</h1>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800">
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white  border-b">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-40 space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <TabContent />
      </div>
    </div>
  );
};

export default FacultyProfile;