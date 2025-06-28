import React, { useState } from "react";
import {
  Users,
  MessageSquareText,
  Bell,
  Send,
  Search,
  PlusCircle
} from "lucide-react";

const tabs = ["Conversations", "Compose", "Announcements", "Groups"];

export default function InternalMessaging() {
  const [activeTab, setActiveTab] = useState("Conversations");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Internal Messaging</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6 gap-55  border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab ? "border-b-2 border-blue-700 text-blue-700" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Switcher */}
      <div className="bg-white rounded-lg shadow p-4">
        {activeTab === "Conversations" && <Conversations />}
        {activeTab === "Compose" && <Compose />}
        {activeTab === "Announcements" && <Announcements />}
        {activeTab === "Groups" && <Groups />}
      </div>
    </div>
  );
}

function Conversations() {
  return (
    <div className="flex">
      <div className="w-1/3 border-r text-black pr-4">
        <h2 className="text-lg font-semibold text-black mb-2">Messages</h2>
        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-2 py-2 border rounded"
          />
        </div>
        <ul className="space-y-2 ">
          <li className="bg-blue-100  p-2 rounded">
            <div className="font-medium">Rahul Sharma</div>
            <div className="text-sm text-gray-500">Thank you for the feedback...</div>
          </li>
          <li className="relative p-2 hover:bg-gray-100 rounded">
            <div className="font-medium">Dr. Priya Gupta</div>
            <div className="text-sm text-gray-500">Meeting scheduled...</div>
            <span className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 rounded-full">2</span>
          </li>
          <li className="relative p-2 hover:bg-gray-100 rounded">
            <div className="font-medium">Computer Science Dept</div>
            <div className="text-sm text-gray-500">New curriculum update...</div>
            <span className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 rounded-full">1</span>
          </li>
        </ul>
      </div>

      <div className="w-2/3 text-black pl-4">
        <h2 className="text-lg font-semibold  mb-2">Rahul Sharma</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-2 rounded w-fit max-w-md">
            Sir, I have submitted my Data Structures assignment. Could you please review it?
            <div className="text-xs text-gray-500">10:30 AM</div>
          </div>
          <div className="bg-blue-500 text-white p-2 rounded w-fit max-w-md ml-auto">
            I've received your assignment. I'll review it by tomorrow and provide feedback.
            <div className="text-xs text-white">2:15 PM</div>
          </div>
          <div className="bg-gray-100 p-2 rounded w-fit max-w-md">
            Thank you for the feedback on my assignment. I'll work on the improvements you suggested.
            <div className="text-xs text-gray-500">4:20 PM</div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 border rounded"
          />
          <button className="bg-blue-600 text-white p-2 rounded">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Compose() {
  return (
    <div className="text-black"> 
      <h2 className="text-xl font-semibold text-black mb-4">Compose New Message</h2>
      <form className="space-y-4">
        <div className="flex gap-4">
          <select className="border p-2 rounded w-1/2">
            <option>Individual Student</option>
          </select>
          <select className="border p-2 rounded w-1/2">
            <option>Rahul Sharma (2021001)</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Enter message subject"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Type your message here..."
          className="w-full border p-2 rounded"
          rows="5"
        ></textarea>
        <div className="flex gap-2">
          <button className="p-2 border rounded">Attach File</button>
          <button className="bg-blue-600 text-white p-2 rounded">Send Message</button>
        </div>
      </form>
    </div>
  );
}

function Announcements() {
  return (
    <div className="space-y-4 text-black">
      <div className="bg-white border rounded p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">Mid-term Exam Schedule</h3>
            <p className="text-sm text-gray-500">To: All Students • 2024-06-25</p>
            <p className="mt-2">Mid-term examinations will begin from July 1st, 2024.</p>
          </div>
          <span className="text-green-600 font-medium">sent</span>
        </div>
        <button className="mt-2 px-3 py-1 border text-sm rounded">View Recipients</button>
      </div>

      <div className="bg-white border rounded p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">Guest Lecture on AI</h3>
            <p className="text-sm text-gray-500">To: CS Department • 2024-06-23</p>
            <p className="mt-2">Distinguished guest lecture on Artificial Intelligence trends.</p>
          </div>
          <span className="text-yellow-600 font-medium">draft</span>
        </div>
        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1 border text-sm rounded">Edit</button>
          <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">Send Now</button>
        </div>
      </div>

      <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded">
        <Bell className="w-4 h-4" /> Create Announcement
      </button>
    </div>
  );
}

function Groups() {
  return (
    <div className="grid grid-cols-2 text-black gap-4">
      {[
        { name: "CS-201 Students", members: 45 },
        { name: "CS-401 Students", members: 32 },
        { name: "Faculty Colleagues", members: 12 }
      ].map((group) => (
        <div key={group.name} className="border p-4 rounded">
          <div className="font-semibold text-lg mb-1">{group.name}</div>
          <div className="text-sm text-gray-500 mb-2">{group.members} members</div>
          <button className="px-3 py-1 border text-sm rounded">Manage Group</button>
        </div>
      ))}
      <div className="border-dashed border-2 border-gray-300 flex flex-col items-center justify-center p-4 rounded">
        <PlusCircle className="w-6 h-6 text-blue-600" />
        <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Add Group</button>
      </div>
    </div>
  );
}
