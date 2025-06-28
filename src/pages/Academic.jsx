import React, { useState } from 'react';
import { Download, Clock, Users, MapPin, Calendar } from 'lucide-react';

const CourseDashboard = () => {
  const [activeTab, setActiveTab] = useState('Course Cards');

  const courses = [
    {
      title: 'Data Structures',
      code: 'CS-201',
      semester: '3rd Semester',
      students: 35,
      type: 'Theory',
      schedule: 'Mon, Wed, Fri - 10:00 AM',
      location: 'LH-101',
      status: 'Ongoing'
    },
    {
      title: 'Machine Learning',
      code: 'CS-401',
      semester: '7th Semester',
      students: 28,
      type: 'Theory + Lab',
      schedule: 'Tue, Thu - 2:00 PM',
      location: 'LH-201',
      status: 'Ongoing'
    },
    {
      title: 'Research Methodology',
      code: 'CS-501',
      semester: '9th Semester',
      students: 15,
      type: 'Theory',
      schedule: 'Wed - 4:00 PM',
      location: 'CR-301',
      status: 'Ongoing'
    }
  ];

  const timetableData = [
    { time: '10:00 AM', monday: { course: 'Data Structures', location: 'LH-101' }, tuesday: null, wednesday: { course: 'Data Structures', location: 'LH-101' }, thursday: null, friday: { course: 'Data Structures', location: 'LH-101' } },
    { time: '2:00 PM', monday: { course: 'Office Hours', location: 'Faculty Room', type: 'office' }, tuesday: { course: 'Machine Learning', location: 'LH-201' }, wednesday: null, thursday: { course: 'Machine Learning', location: 'LH-201' }, friday: null },
    { time: '4:00 PM', monday: null, tuesday: { course: 'ML Lab', location: 'Lab-A', type: 'lab' }, wednesday: { course: 'Research Methodology', location: 'CR-301' }, thursday: null, friday: null }
  ];

  const sessionCalendarData = [
    { day: 'Mon', course: 'Data Structures', time: '10:00 AM', location: 'LH-101', type: 'Lecture' },
    { day: 'Mon', course: 'Office Hours', time: '2:00 PM', location: 'Faculty Room', type: 'Consultation' },
    { day: 'Tue', course: 'Machine Learning', time: '2:00 PM', location: 'LH-201', type: 'Lecture' },
    { day: 'Tue', course: 'ML Lab', time: '4:00 PM', location: 'Lab-A', type: 'Practical' },
    { day: 'Wed', course: 'Data Structures', time: '10:00 AM', location: 'LH-101', type: 'Lecture' }
  ];

  const renderCourseCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.code} • {course.semester}</p>
            </div>
            <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
              {course.status}
            </span>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              {course.students} Students
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
              {course.type}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              {course.schedule}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              {course.location}
            </div>
          </div>
          
          <button className="w-full text-center text-sm text-gray-700 hover:text-gray-900 font-medium">
            View Course Dashboard
          </button>
        </div>
      ))}
    </div>
  );

  const renderTimetableView = () => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Weekly Timetable</h3>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Time</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Monday</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Tuesday</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Wednesday</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Thursday</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Friday</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {timetableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.time}</td>
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                  <td key={day} className="px-6 py-4">
                    {row[day] ? (
                      <div className={`p-3 rounded text-sm ${
                        row[day].type === 'office' ? 'bg-orange-100 text-orange-800' :
                        row[day].type === 'lab' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        <div className="font-medium">{row[day].course}</div>
                        <div className="text-xs opacity-75">{row[day].location}</div>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-sm">-</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSessionCalendar = () => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Session Calendar</h3>
        <p className="text-sm text-gray-600 mt-1">View all your scheduled sessions and events</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {sessionCalendarData.map((session, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded text-center min-w-[48px]">
                {session.day}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{session.course}</h4>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {session.time} • {session.location}
                </div>
                <div className="text-xs text-gray-500 mt-1 bg-gray-100 inline-block px-2 py-1 rounded">
                  {session.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Course Cards':
        return renderCourseCards();
      case 'Timetable View':
        return renderTimetableView();
      case 'Session Calendar':
        return renderSessionCalendar();
      default:
        return renderCourseCards();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <Download className="w-4 h-4" />
            <span>Download Timetable</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 gap-95 bg-gray-100 p-1 rounded-lg w-fit">
          {['Course Cards', 'Timetable View', 'Session Calendar'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default CourseDashboard;