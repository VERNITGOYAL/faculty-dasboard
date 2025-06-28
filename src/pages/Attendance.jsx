import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  Clock3, 
  Download, 
  FileText, 
  Calendar,
  Filter,
  Eye,
  MessageCircle,
  X,
  Check
} from 'lucide-react';

const AttendanceSystem = () => {
  const [activeTab, setActiveTab] = useState('mark');

  const tabs = [
    { id: 'mark', label: 'Mark Attendance' },
    { id: 'reports', label: 'Reports' },
    { id: 'summary', label: 'Class Summary' },
    { id: 'leave', label: 'Student Leave Requests' }
  ];

  const students = [
    {
      id: '2021001',
      name: 'Rahul Sharma',
      cgpa: 8.5,
      attendance: '85%',
      status: 'present',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      id: '2021002', 
      name: 'Priya Singh',
      cgpa: 9.2,
      attendance: '78%',
      status: 'absent',
      icon: AlertCircle,
      color: 'text-red-500'
    },
    {
      id: '2021003',
      name: 'Amit Kumar', 
      cgpa: 7.8,
      attendance: '92%',
      status: 'late',
      icon: Clock3,
      color: 'text-yellow-500'
    }
  ];

  const leaveRequests = [
    {
      name: 'Rahul Sharma',
      id: '2021001',
      course: 'CS-201',
      semester: '3rd Semester',
      type: 'Medical',
      reason: 'Fever and flu symptoms, doctor advised rest',
      duration: '2024-01-15 to 2024-01-17',
      applied: 'Applied: 2024-01-14',
      status: 'Pending',
      leaveBalance: { medical: '8/15', casual: '5/10' },
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Priya Singh',
      id: '2021002',
      course: 'CS-201',
      semester: '3rd Semester',
      type: 'Family Emergency',
      reason: 'Family function - sister\'s wedding',
      duration: '2024-01-20 to 2024-01-22',
      applied: 'Applied: 2024-01-18',
      status: 'Approved',
      leaveBalance: { medical: '15/15', casual: '7/10' },
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      name: 'Amit Kumar',
      id: '2021003',
      course: 'CS-401',
      semester: '7th Semester',
      type: 'Personal',
      reason: 'Personal work at home',
      duration: '2024-01-25 to 2024-01-25',
      applied: 'Applied: 2024-01-24',
      status: 'Rejected',
      leaveBalance: { medical: '12/15', casual: '3/10' },
      statusColor: 'bg-red-100 text-red-800'
    }
  ];

  const renderMarkAttendance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Data Structures</h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>10:00 AM</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>45 students</span>
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-600">CS-201</div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Machine Learning</h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>2:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>32 students</span>
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-600">CS-401</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Students - Data Structures</h2>
            <p className="text-sm text-gray-600 mt-1">Mark attendance for today's class with enhanced details</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <FileText className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {students.map((student) => {
            const StatusIcon = student.icon;
            return (
              <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    student.status === 'present' ? 'bg-green-500' : 
                    student.status === 'absent' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600">{student.id}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">CGPA</p>
                    <p className="text-sm text-gray-600">{student.cgpa}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">Attendance</p>
                    <p className="text-sm text-gray-600">{student.attendance}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      student.status === 'present' ? 'bg-green-100 text-green-800' :
                      student.status === 'absent' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.status}
                    </span>
                    <div className="flex gap-1">
                      <button className="p-1 rounded bg-gray-200 hover:bg-gray-300">
                        <StatusIcon className={`w-4 h-4 ${student.color}`} />
                      </button>
                      <button className="p-1 rounded bg-gray-200 hover:bg-gray-300">
                        <Clock3 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 rounded bg-gray-200 hover:bg-gray-300">
                        <AlertCircle className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 border-t border-gray-200 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Topic Discussed Today</label>
            <input 
              type="text" 
              placeholder="Enter topic covered in today's class"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Remarks (Optional)</label>
            <textarea 
              placeholder="Add any additional remarks about today's class"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-900">
            Save Attendance & Class Details
          </button>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Attendance Reports & Analytics</h2>
        <p className="text-sm text-gray-600 mt-1">View detailed attendance statistics and reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-600">85%</div>
          <div className="text-sm text-gray-600 mt-1">Average Attendance</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">156</div>
          <div className="text-sm text-gray-600 mt-1">Classes Conducted</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-red-600">12</div>
          <div className="text-sm text-gray-600 mt-1">Low Attendance Alerts</div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600">8</div>
          <div className="text-sm text-gray-600 mt-1">Students Below 75%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50">
          <FileText className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-black">Generate Detailed Report</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50">
          <Download className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-black">Download Analytics</span>
        </button>
      </div>
    </div>
  );

  const renderClassSummary = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Class Summary</h2>
        <p className="text-sm text-gray-600 mt-1">Add comprehensive notes and summary for today's class</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Topic Covered</label>
            <input 
              type="text" 
              placeholder="Enter topic covered in class"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <input 
              type="text" 
              placeholder="Class duration (e.g., 50 minutes)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Class Notes</label>
          <textarea 
            placeholder="Add comprehensive class notes, key concepts discussed, student interactions, etc."
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Homework/Assignment</label>
          <textarea 
            placeholder="Assignment details and due date"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Next Class Preparation</label>
          <textarea 
            placeholder="Topics to prepare for next class, materials needed, etc."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-900">
          Save Comprehensive Class Summary
        </button>
      </div>
    </div>
  );

  const renderLeaveRequests = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Student Leave Requests</h2>
          <p className="text-sm text-gray-600 mt-1">Review and approve student leave applications</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <FileText className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="bg-white text-black rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Courses</option>
              <option>CS-201</option>
              <option>CS-401</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Semesters</option>
              <option>3rd Semester</option>
              <option>7th Semester</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
              <Filter className="w-4 h-4" />
              Apply Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Student Details</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Leave Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Duration</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Leave Balance</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leaveRequests.map((request, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{request.name}</div>
                      <div className="text-sm text-gray-600">{request.id} • {request.course}</div>
                      <div className="text-sm text-gray-600">{request.semester}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{request.type}</div>
                      <div className="text-sm text-gray-600">{request.reason}</div>
                      {request.type === 'Medical' && (
                        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1">
                          📎 View Attachment
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm">
                      <div className="text-gray-900">{request.duration}</div>
                      <div className="text-gray-600">{request.applied}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${request.statusColor}`}>
                      {request.status}
                    </span>
                    {request.status === 'Rejected' && (
                      <div className="text-xs text-red-600 mt-1">Insufficient reason provided. Please provide more details.</div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm">
                      <div>Medical: {request.leaveBalance.medical}</div>
                      <div>Casual: {request.leaveBalance.casual}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-2">
                      {request.status === 'Pending' && (
                        <div className="flex gap-1">
                          <button className="flex items-center gap-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200">
                            <Check className="w-3 h-3" />
                            Approve
                          </button>
                          <button className="flex items-center gap-1 px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200">
                            <X className="w-3 h-3" />
                            Reject
                          </button>
                        </div>
                      )}
                      <div className="flex gap-1">
                        <button className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                          <Eye className="w-3 h-3" />
                          View
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                          <MessageCircle className="w-3 h-3" />
                          Comment
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-gray-600">Pending Requests</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-sm text-gray-600">Approved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-sm text-gray-600">Rejected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">Total Requests</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'mark':
        return renderMarkAttendance();
      case 'reports':
        return renderReports();
      case 'summary':
        return renderClassSummary();
      case 'leave':
        return renderLeaveRequests();
      default:
        return renderMarkAttendance();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-black">Attendance & Class Summary</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>6/28/2025</span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="flex border-b gap-50 border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default AttendanceSystem;