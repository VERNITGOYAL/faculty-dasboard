import React, { useState } from 'react';
import { Eye, Download, Calendar, Upload, Users } from 'lucide-react';

const AssignmentDashboard = () => {
  const [activeTab, setActiveTab] = useState('my-assignments');

  const TabButton = ({ id, children, active, onClick }) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
        active 
          ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );

  const MyAssignments = () => (
    <div className="space-y-6">
      {/* Data Structures Lab Assignment */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Data Structures Lab Assignment</h3>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">active</span>
            </div>
            <p className="text-sm text-gray-500">CS-201 • Due: 2024-07-01</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Eye size={16} />
              View
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors">
              Review Submissions
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">23/45 submitted</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '51%' }}></div>
          </div>
        </div>
      </div>

      {/* Machine Learning Project */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Machine Learning Project</h3>
              <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">grading</span>
            </div>
            <p className="text-sm text-gray-500">CS-401 • Due: 2024-06-30</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Eye size={16} />
              View
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors">
              Review Submissions
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">15/32 submitted</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '47%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );

  const CreateAssignment = () => (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Create New Assignment</h3>
        <p className="text-gray-600">Set up a new assignment for your students</p>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Title</label>
            <input
              type="text"
              placeholder="Enter assignment title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
              <option>CS-201 - Data Structures</option>
              <option>CS-401 - Machine Learning</option>
              <option>CS-101 - Programming Fundamentals</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            rows={6}
            placeholder="Assignment description and requirements..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Points</label>
            <input
              type="number"
              placeholder="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Upload size={16} />
              Upload Files
            </button>
          </div>
        </div>

        <button
          className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
        >
          Create Assignment
        </button>
      </div>
    </div>
  );

  const ReviewSubmissions = () => (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Submissions</h3>
        <p className="text-gray-600">Review and grade student submissions</p>
      </div>

      <div className="space-y-4">
        {/* Rahul Sharma */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div>
              <h4 className="font-medium text-gray-900">Rahul Sharma</h4>
              <p className="text-sm text-gray-500">2021001 • Submitted: 2024-06-25</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
              <Download size={14} />
              Download
            </button>
            <button className="px-4 py-1.5 text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors text-sm font-medium">
              Grade
            </button>
          </div>
        </div>

        {/* Priya Singh */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <h4 className="font-medium text-gray-900">Priya Singh</h4>
              <p className="text-sm text-gray-500">2021002 • Submitted: 2024-06-26</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-900">Grade: A</span>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
              <Download size={14} />
              Download
            </button>
            <button className="px-4 py-1.5 text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors text-sm font-medium">
              Re-grade
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className="max-w-7xl  mx-auto p-6">
        <h1 className="text-2xl font-bold text-black mb-8">Assignment & Project Evaluation</h1>
        
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex gap-80 border-b border-gray-200">
            <TabButton
              id="my-assignments"
              active={activeTab === 'my-assignments'}
              onClick={() => setActiveTab('my-assignments')}
            >
              My Assignments
            </TabButton>
            <TabButton
              id="create-assignment"
              active={activeTab === 'create-assignment'}
              onClick={() => setActiveTab('create-assignment')}
            >
              Create Assignment
            </TabButton>
            <TabButton
              id="review-submissions"
              active={activeTab === 'review-submissions'}
              onClick={() => setActiveTab('review-submissions')}
            >
              Review Submissions
            </TabButton>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'my-assignments' && <MyAssignments />}
          {activeTab === 'create-assignment' && <CreateAssignment />}
          {activeTab === 'review-submissions' && <ReviewSubmissions />}
        </div>
      </div>
    </div>
  );
};

export default AssignmentDashboard;