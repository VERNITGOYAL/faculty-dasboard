import React from "react";
import {
  Lightbulb,
  Bell,
  ClipboardList,
  Calendar,
  FileCheck,
  Users,
  BookOpenCheck
} from "lucide-react";

export default function DashboardMainContent() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen text-black px-4 sm:px-6 md:px-8 py-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden mb-6">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome Dr. Aarav Sharma</h1>
          <p className="text-lg opacity-90">Associate Professor, Computer Science</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Thought of the Day */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 text-gray-900 flex items-center gap-2">
              ⭐ Thought of the Day
            </h2>
            <p className="italic text-gray-700 text-base leading-relaxed">
              Innovation distinguishes between a leader and a follower. – <span className="font-semibold">Steve Jobs</span>
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Today's Tasks", count: "7", desc: "Actionable items", btn: "View Tasks", color: "text-green-600" },
          { title: "Pending Reviews", count: "12", desc: "Assignments to grade", btn: "Review Now", color: "text-orange-600" },
          { title: "Leave Requests", count: "5", desc: "Awaiting approval", btn: "Review", color: "text-purple-600" },
          { title: "Notifications", count: "8", desc: "New alerts", btn: "View All", color: "text-red-600" },
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md">
            <h3 className="text-sm font-medium mb-1">{card.title}</h3>
            <p className={`text-3xl font-bold ${card.color}`}>{card.count}</p>
            <p className="text-sm text-gray-600">{card.desc}</p>
            <button className="mt-2 text-sm font-medium text-blue-600 hover:underline">{card.btn}</button>
          </div>
        ))}
      </div>

      {/* Assigned Courses & Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpenCheck className="w-5 h-5 text-blue-600" />
            Assigned Courses
          </h2>
          {[
            { title: "Data Structures", code: "CS-201", sem: "Semester 3", next: "Today 10:00 AM" },
            { title: "Machine Learning", code: "CS-401", sem: "Semester 7", next: "Tomorrow 2:00 PM" },
          ].map((course, i) => (
            <div key={i} className="mb-4 p-4 rounded-lg border bg-gray-50">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.code} • {course.sem}</p>
              <p className="text-sm text-blue-600 mt-1">Next Class: {course.next}</p>
              <button className="mt-2 text-sm font-medium text-blue-700 hover:underline">View Course</button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-600" />
            Upcoming Events
          </h2>
          {[
            { name: "Faculty Meeting", time: "Tomorrow 3:00 PM", location: "Conference Hall", color: "text-blue-500" },
            { name: "Tech Workshop", time: "Friday 10:00 AM", location: "IT Dept", color: "text-green-600" },
          ].map((event, i) => (
            <div key={i} className="mb-3 p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${event.color} mt-1`} />
                <p className="font-medium">{event.name}</p>
              </div>
              <p className="text-sm text-gray-600">{event.time} • {event.location}</p>
            </div>
          ))}
          <button className="mt-2 text-sm font-medium text-blue-700 hover:underline">View All Events</button>
        </div>
      </div>

      {/* Quick Actions & Research Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Upload Assignment", "Mark Attendance", "View Requests", "Send Notice"].map((action, i) => (
              <button key={i} className="bg-gray-100 rounded-lg py-3 text-sm hover:bg-gray-200">
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Research Snapshot</h2>
          <div className="flex gap-4">
            {[
              { label: "Publications", value: "8", color: "bg-blue-100 text-blue-700" },
              { label: "Projects", value: "3", color: "bg-green-100 text-green-700" },
              { label: "Grants", value: "2", color: "bg-purple-100 text-purple-700" },
            ].map((snap, i) => (
              <div key={i} className={`rounded-lg px-4 py-3 text-center flex-1 ${snap.color}`}>
                <p className="text-2xl font-bold">{snap.value}</p>
                <p className="text-sm">{snap.label}</p>
              </div>
            ))}
          </div>
          <button className="mt-3 text-sm font-medium text-blue-700 hover:underline">View Research Work</button>
        </div>
      </div>

      {/* Goal & Wellness */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Goal & Progress Tracker</h2>
          {[
            { label: "Teaching Goal", val: "16/20 lectures", percent: 80 },
            { label: "Research Goal", val: "2/5 papers submitted", percent: 40 },
            { label: "Wellness Activity", val: "3/7 days completed", percent: 43 },
          ].map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{item.label}</span>
                <span>{item.val}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Wellness</h2>
          <p className="text-sm text-gray-700 italic mb-3">
            “Take time to make your soul happy. A healthy mind leads to better teaching.”
          </p>
          <div className="flex gap-2 text-2xl">
            {["😊", "😁", "😌", "🥳"].map((emo, i) => (
              <span key={i}>{emo}</span>
            ))}
          </div>
          <button className="mt-3 text-sm font-medium text-blue-700 hover:underline">View Weekly Summary</button>
        </div>
      </div>

      {/* Celebrating GBU Excellence */}
      <div className="bg-white rounded-xl p-5 border shadow-sm mb-10">
        <h2 className="text-xl font-bold text-blue-800 mb-1">🎖️ Celebrating GBU Excellence</h2>
        <p className="text-sm text-gray-600 mb-4">Recognizing outstanding achievements of our faculty and students</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Dr. Priya Sharma", role: "Professor, Computer Science", award: "Best Research Paper Award", school: "School of Engineering", date: "March 2024" },
            { name: "Prof. Amit Gupta", role: "Associate Professor, Mathematics", award: "Excellence in Teaching Award", school: "School of Basic Sciences", date: "Feb 2024" },
            { name: "Rahul Kumar", role: "M.Tech Student, CSE", award: "Patent Filed - AI in Education", school: "School of Engineering", date: "Jan 2024" },
          ].map((person, i) => (
            <div key={i} className="border p-4 rounded-xl bg-yellow-50">
              <h3 className="font-bold">{person.name}</h3>
              <p className="text-sm text-gray-700 mb-2">{person.role}</p>
              <div className="bg-yellow-100 p-2 rounded-lg text-center text-sm font-medium">
                {person.award}<br />
                <span className="text-xs font-normal">{person.school} • {person.date}</span>
              </div>
              <button className="mt-2 text-sm text-blue-700 hover:underline">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
