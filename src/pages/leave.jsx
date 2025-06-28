import React, { useState } from 'react';
import { 
  Download, 
  Calendar, 
  User, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Filter, 
  FileText,
  Eye,
  X,
  Check
} from 'lucide-react';

const FacultyLeaveManagement = () => {
  const [activeTab, setActiveTab] = useState('apply');
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: ''
  });

  const leaveBalances = [
    { type: 'CL', used: 5, total: 10, percentage: 50, color: 'bg-blue-500' },
    { type: 'EL', used: 5, total: 15, percentage: 33, color: 'bg-green-500' },
    { type: 'DL', used: 2, total: 8, percentage: 25, color: 'bg-purple-500' },
    { type: 'AL', used: 3, total: 6, percentage: 50, color: 'bg-orange-500' },
    { type: 'ML', used: 0, total: 12, percentage: 0, color: 'bg-red-500' }
  ];

  const leaveHistory = [
    {
      dateRange: '2024-06-20 to 2024-06-22',
      type: 'CL',
      duration: '3 days',
      status: 'APPROVED',
      approvedBy: 'Dr. Sharma (HoD)',
      remarks: 'Personal work'
    },
    {
      dateRange: '2024-05-10 to 2024-05-12',
      type: 'ML',
      duration: '3 days',
      status: 'APPROVED',
      approvedBy: 'Dr. Sharma (HoD)',
      remarks: 'Medical treatment'
    },
    {
      dateRange: '2024-07-01 to 2024-07-02',
      type: 'EL',
      duration: '2 days',
      status: 'PENDING',
      approvedBy: '-',
      remarks: 'Family function'
    }
  ];

  const pendingApprovals = [
    {
      name: 'Dr. Priya Sharma',
      department: 'Computer Science',
      leaveType: 'CL',
      period: '2024-07-05 to 2024-07-07',
      duration: '3 days',
      appliedOn: '2024-06-28',
      reason: 'Personal work',
      hasDocument: false
    },
    {
      name: 'Prof. Rajesh Kumar',
      department: 'Mathematics',
      leaveType: 'ML',
      period: '2024-07-10 to 2024-07-15',
      duration: '6 days',
      appliedOn: '2024-06-30',
      reason: 'Medical treatment for chronic condition',
      hasDocument: true
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Leave request submitted:', formData);
    // Reset form
    setFormData({
      leaveType: '',
      fromDate: '',
      toDate: '',
      reason: ''
    });
  };

  const getStatusBadge = (status) => {
    if (status === 'APPROVED') {
      return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">APPROVED</span>;
    } else if (status === 'PENDING') {
      return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">PENDING</span>;
    } else {
      return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">REJECTED</span>;
    }
  };

  const getLeaveTypeBadge = (type) => {
    const colors = {
      'CL': 'bg-blue-100 text-blue-800',
      'EL': 'bg-green-100 text-green-800',
      'ML': 'bg-red-100 text-red-800',
      'AL': 'bg-orange-100 text-orange-800',
      'DL': 'bg-purple-100 text-purple-800'
    };
    return <span className={`${colors[type]} px-6 py-1 rounded text-xs  font-medium`}>{type}</span>;
  };

  const renderApplyLeave = () => (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Apply for Leave</h2>
        <p className="text-gray-600">Submit your leave request with required details</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Leave Type <span className="text-red-500">*</span>
            </label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select leave type</option>
              <option value="CL">Casual Leave (CL)</option>
              <option value="EL">Earned Leave (EL)</option>
              <option value="ML">Medical Leave (ML)</option>
              <option value="AL">Annual Leave (AL)</option>
              <option value="DL">Duty Leave (DL)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reason <span className="text-red-500">*</span>
          </label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            placeholder="Please provide reason for leave"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-900 transition-colors font-medium"
        >
          Submit Leave Request
        </button>
      </div>
    </div>
  );

  const renderMyBalance = () => (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Leave Balance Overview</h2>
        <p className="text-gray-600">Your current leave quota and utilization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaveBalances.map((balance, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${balance.color}`}></span>
                <span className="font-medium text-gray-900">{balance.type}</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">{balance.total - balance.used}/{balance.total} left</div>
                <div className="text-lg font-semibold text-gray-900">{balance.percentage}%</div>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-600">Used: {balance.used}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${balance.color}`}
                style={{ width: `${balance.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMyHistory = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Leave History</h2>
          <p className="text-gray-600">Your complete leave application history</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-6 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700">
          <div>Date Range</div>
          <div>Type</div>
          <div>Duration</div>
          <div>Status</div>
          <div>Approved By</div>
          <div>Remarks</div>
        </div>
        {leaveHistory.map((item, index) => (
          <div key={index} className="grid grid-cols-6 gap-4 px-6 py-4 border-t border-gray-200 text-sm">
            <div className="font-medium text-gray-900">{item.dateRange}</div>
            <div>{getLeaveTypeBadge(item.type)}</div>
            <div className="text-gray-600">{item.duration}</div>
            <div>{getStatusBadge(item.status)}</div>
            <div className="text-gray-600">{item.approvedBy}</div>
            <div className="text-gray-600">{item.remarks}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderApprovals = () => (
    <div>
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
            <div className="text-gray-600 flex items-center justify-center">
              <Clock className="w-4 h-4 mr-1" />
              Pending Approvals
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">45</div>
            <div className="text-gray-600 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Approved This Month
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">3</div>
            <div className="text-gray-600 flex items-center justify-center">
              <XCircle className="w-4 h-4 mr-1" />
              Rejected This Month
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {pendingApprovals.map((approval, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">{approval.name}</h3>
                  <p className="text-sm text-gray-600">{approval.department} • {approval.leaveType}</p>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                PENDING
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Leave Period
                </div>
                <div className="font-medium">{approval.period}</div>
                <div className="text-sm text-gray-600">Duration: {approval.duration}</div>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  Applied On
                </div>
                <div className="font-medium">{approval.appliedOn}</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-1">Reason:</div>
              <div className="text-sm italic">"{approval.reason}"</div>
            </div>

            {approval.hasDocument && (
              <div className="flex items-center text-sm text-green-600 mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Proof document attached
                <button className="ml-2 flex items-center text-blue-600 hover:text-blue-700">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </button>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <X className="w-4 h-4 mr-2" />
                Reject
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                <Check className="w-4 h-4 mr-2" />
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'apply', label: 'Apply Leave' },
    { id: 'balance', label: 'My Balance' },
    { id: 'history', label: 'My History' },
    { id: 'approvals', label: 'Approvals' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-900">Faculty Leave Management</h1>
          <button className="flex items-center text-black  px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Download className="w-4 text-black h-4 mr-2" />
            Download Full Report
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b  border-gray-200 mb-8">
          <nav className="flex gap-60 space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
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

        {/* Tab Content */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {activeTab === 'apply' && renderApplyLeave()}
          {activeTab === 'balance' && renderMyBalance()}
          {activeTab === 'history' && renderMyHistory()}
          {activeTab === 'approvals' && renderApprovals()}
        </div>
      </div>
    </div>
  );
};

export default FacultyLeaveManagement;