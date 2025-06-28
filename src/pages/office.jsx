import React, { useState } from "react";
import { Eye, Clock, File, CheckCircle, Plus, ArrowRight, User } from "lucide-react";

const Card = ({ icon, label, value }) => (
  <div className="bg-white rounded shadow-sm p-4 text-center">
    <div className="flex justify-center mb-2">{icon}</div>
    <p className="text-2xl font-bold text-blue-800">{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const FileCard = ({ title, fileId, fileType, currentOwner, submitted, due, priority, status, steps, completedSteps }) => (
  <div className="bg-white p-4 rounded shadow-sm mb-4">
    <div className="flex justify-between">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{fileType} • File ID: {fileId} • Currently with: {currentOwner}</p>
        <p className="text-sm text-gray-500 mt-1">Submitted: {submitted}</p>
      </div>
      <div className="text-right">
        <span className={`text-xs px-2 py-1 rounded-full mr-2 ${priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-700'}`}>{priority.toUpperCase()}</span>
        <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">{status.toUpperCase()}</span>
        <p className="text-sm text-gray-600 mt-1">Due: {due}</p>
      </div>
    </div>
    {steps.length > 0 && (
      <div className="mt-3">
        <h4 className="text-sm font-semibold mb-1">Workflow Progress:</h4>
        <ul className="space-y-1 text-sm">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              {idx < completedSteps ? (
                <CheckCircle size={16} className="text-green-500" />
              ) : (
                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
              )}
              <span className={idx === completedSteps ? 'text-blue-600 font-medium' : ''}>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
    <div className="flex mt-4 space-x-2">
      <button className="border px-4 py-1 rounded text-sm">View Document</button>
      <button className="border px-4 py-1 rounded text-sm">Download</button>
      <button className="bg-blue-900 text-white px-4 py-1 rounded text-sm ml-auto">Track Progress</button>
    </div>
  </div>
);

const InboxItem = ({ title, from, type, date, priority }) => (
  <div className={`border-l-4 mb-3 p-4 rounded ${priority === 'medium' ? 'border-yellow-400 bg-yellow-50' : 'border-green-400 bg-green-50'}`}>
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">From: {from}</p>
        <p className="text-sm text-gray-500">{type} • Received: {date}</p>
      </div>
      <div className="space-x-2">
        <button className="border px-3 py-1 rounded text-sm">Review</button>
        <button className="bg-blue-900 text-white px-3 py-1 rounded text-sm">Take Action</button>
      </div>
    </div>
  </div>
);

export default function EOfficeDashboard() {
  const [tab, setTab] = useState("mydocuments");

  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-800 p-4">
      <h1 className="text-2xl font-bold text-blue-800">E-Office: File Movement & Approvals</h1>
      <p className="text-sm text-gray-500 mb-6">Digital office file management and approval workflow system</p>

      <div className="flex space-x-2 gap-60 border-b border-gray-200 mb-4">
        {["My Documents", "Inbox", "Create File", "File Tracking"].map((label) => (
          <button
            key={label}
            onClick={() => setTab(label.toLowerCase().replace(/\s+/g, ""))}
            className={`px-4 py-2 text-sm font-medium ${tab === label.toLowerCase().replace(/\s+/g, "") ? "bg-white border-t border-l border-r border-gray-200 rounded-t text-blue-800" : "text-gray-500"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "mydocuments" && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card icon={<File className="text-blue-600" />} label="Active Files" value="12" />
            <Card icon={<Clock className="text-yellow-500" />} label="Pending Action" value="5" />
            <Card icon={<CheckCircle className="text-green-600" />} label="Completed" value="28" />
            <Card icon={<Eye className="text-purple-600" />} label="In Review" value="7" />
          </div>

          <FileCard
            title="Faculty Promotion Application"
            fileId="DOC001"
            fileType="HR Document"
            currentOwner="Dr. Rajesh Kumar"
            submitted="2024-06-20"
            due="2024-07-05"
            priority="high"
            status="pending approval"
            steps={["Applicant", "Department Head", "Dean Review", "HR Approval", "Final Approval"]}
            completedSteps={2}
          />

          <FileCard
            title="Research Grant Proposal"
            fileId="DOC002"
            fileType="Academic Document"
            currentOwner="Research Committee"
            submitted="2024-06-25"
            due="2024-07-10"
            priority="medium"
            status="in review"
            steps={[]}
            completedSteps={0}
          />
        </div>
      )}

      {tab === "inbox" && (
        <div>
          <h2 className="font-semibold text-lg mb-4">Inbox - Items Requiring Action</h2>
          <InboxItem
            title="Student Grade Change Request"
            from="Dr. Priya Singh"
            type="Grade Modification"
            date="2024-06-26"
            priority="medium"
          />
          <InboxItem
            title="Course Curriculum Update"
            from="Academic Committee"
            type="Curriculum"
            date="2024-06-24"
            priority="low"
          />
        </div>
      )}

      {tab === "createfile" && (
        <div className="bg-white p-6 rounded shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Create New Office File</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border rounded p-2">
              <option>HR Document</option>
              <option>Academic Document</option>
            </select>
            <select className="border rounded p-2">
              <option>Normal</option>
              <option>High</option>
            </select>
            <input className="border rounded p-2 col-span-2" placeholder="Enter descriptive title for the file" />
            <textarea className="border rounded p-2 col-span-2" placeholder="Provide detailed description..." rows={4}></textarea>
            <input className="border rounded p-2" placeholder="Target Completion Date" />
            <select className="border rounded p-2">
              <option>Department Head</option>
              <option>Dean</option>
            </select>
            <input className="border rounded p-2 col-span-2" placeholder="Attach documents" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Workflow Route Preview: You → Department Head → Dean → Final Approval</p>
          <button className="bg-blue-900 text-white py-2 px-4 mt-4 rounded flex items-center space-x-2">
            <ArrowRight size={16} />
            <span>Submit File for Processing</span>
          </button>
        </div>
      )}

      {tab === "filetracking" && (
        <div>
          <div className="bg-white p-6 rounded shadow-sm mb-6">
            <h2 className="font-semibold text-lg mb-4">File Tracking & Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input className="border rounded p-2 col-span-2" placeholder="Enter File ID or search by title..." />
              <select className="border rounded p-2">
                <option>All Types</option>
              </select>
              <select className="border rounded p-2">
                <option>All Status</option>
              </select>
              <select className="border rounded p-2">
                <option>Last 30 days</option>
              </select>
              <button className="bg-blue-900 text-white py-2 px-4 rounded col-span-1 flex items-center space-x-2">
                <Eye size={16} /> <span>Track File</span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-md mb-2">Recent File Activities</h3>
            <ul className="space-y-2">
              <li className="bg-blue-50 rounded p-2">DOC001 moved to Dean Review • 2 hours ago</li>
              <li className="bg-green-50 rounded p-2">DOC003 completed workflow • 1 day ago</li>
              <li className="bg-purple-50 rounded p-2">DOC002 submitted for review • 2 days ago</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
