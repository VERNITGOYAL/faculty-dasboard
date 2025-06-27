import React, { useState } from 'react';
import { Users, Calendar, Clock, FileText, Eye, Plus, Edit3, Upload, MapPin, Medal, Download, Share, Image, Search } from 'lucide-react';

const tabs = [
  "Overview",
  "Create Event",
  "Upload Media",
  "Volunteer Hours",
  "IQAC Reports",
  "Calendar",
  "Archive"
];

export default function ClubsManagementPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  const navClass = (tab) => `px-10 py-2 font-medium text-sm transition-all duration-150 rounded-md ${
    activeTab === tab ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-blue-600'
  }`;

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">Clubs & Societies Management</h1>
        <button className="bg-blue-900 text-white px-4 py-2 rounded flex items-center space-x-2">
          <Plus size={16} />
          <span>Create New Event</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 bg-white p-2 rounded shadow">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={navClass(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

       <div>
        {activeTab === "Overview" && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Users size={20} />, label: 'Clubs Mentored', value: 2 },
                { icon: <Calendar size={20} className="text-green-600" />, label: 'Events This Year', value: 12 },
                { icon: <Clock size={20} className="text-purple-600" />, label: 'Volunteer Hours', value: 243 },
                { icon: <FileText size={20} className="text-orange-600" />, label: 'IQAC Reports', value: 8 }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded shadow p-4 space-y-2 text-center">
                  <div className="text-blue-600 text-xl font-bold">{stat.value}</div>
                  <div className="text-gray-500 flex justify-center items-center gap-2 text-sm">
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Events */}
            <div className="bg-white text-black p-4 rounded shadow">
              <h2 className="text-lg  text-black font-semibold">Recent Events</h2>
              <p className="text-sm text-black mb-4">Latest club activities and their status</p>

              {[{
                name: "AI Workshop Series",
                club: "Tech Innovation Club",
                date: "2024-07-05",
                mode: "Offline",
                category: "Technical",
                participants: 25,
                hours: 0,
                status: "Approved"
              }, {
                name: "Robotics Competition",
                club: "Robotics Society",
                date: "2024-07-10",
                mode: "Offline",
                category: "Technical",
                participants: 60,
                hours: 120,
                status: "Completed"
              }].map((event, i) => (
                <div key={i} className="border rounded p-4 mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-md">{event.name}</h3>
                      <p className="text-sm text-gray-500">{event.club}</p>
                      <div className="text-sm text-gray-700 mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-y-1">
                        <p><strong>Date:</strong> {event.date}</p>
                        <p><strong>Mode:</strong> {event.mode}</p>
                        <p><strong>Category:</strong> {event.category}</p>
                        <p><strong>Participants:</strong> {event.participants}</p>
                        <p><strong>Vol. Hours:</strong> {event.hours}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      event.status === 'Approved' ? 'bg-blue-100 text-blue-700' :
                      event.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>{event.status}</span>
                  </div>
                  <div className="flex mt-4 gap-3">
                    <button className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1 text-sm"><Eye size={14} /> View</button>
                    <button className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1 text-sm"><Edit3 size={14} /> Edit</button>
                    {event.status === 'Completed' && (
                      <button className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1 text-sm"><Upload size={14} /> Report</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Create Event" && (
          <div className="bg-white text-black p-6 rounded shadow">
            <h2 className="text-lg text-black font-semibold mb-2">Create New Club Event</h2>
            <p className="text-sm text-gray-500 mb-6">Fill in the event details for approval and scheduling</p>
            <form className="space-y-4 text-black">
              <div className="grid md:grid-cols-2 gap-4">
                <input placeholder="Event Name *" className="border p-2 rounded w-full" />
                <input placeholder="Organizing Club *" value="Tech Innovation Club" className="border p-2 rounded w-full" readOnly />
                <input placeholder="dd-mm-yyyy" className="border p-2 rounded w-full" />
                <input placeholder="--:--" className="border p-2 rounded w-full" />
                <select className="border p-2 rounded w-full"><option>Offline</option><option>Online</option></select>
                <input placeholder="Venue *" className="border p-2 rounded w-full" />
                <select className="border p-2 rounded w-full"><option>Technical</option><option>Cultural</option></select>
              </div>
              <div>
                <button className="flex items-center text-sm text-blue-600 gap-1"><MapPin size={14} /> Add Geo-location</button>
              </div>
              <input placeholder="Speaker name, designation, organization" className="border p-2 rounded w-full" />
              <textarea placeholder="Detailed description of the event, objectives, expected outcomes" rows={4} className="border p-2 rounded w-full" />
              <input placeholder="Upload Event Circular/Notice" className="border p-2 rounded w-full" />
              <div className="flex justify-between">
                <button type="button" className="px-4 py-2 border rounded">Save as Draft</button>
                <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded">Submit for Approval</button>
              </div>
            </form>
          </div>
        )}
        {activeTab === "Upload Media" && (
          <div className="bg-white text-black p-6 rounded shadow space-y-4">
            <h2 className="text-lg font-semibold mb-2">Upload Event Media</h2>
            <p className="text-sm text-gray-500">Upload event photographs and documentation</p>
            <select className="border p-2 rounded w-full">
              <option>AI Workshop Series - July 5, 2024</option>
            </select>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className="border p-4 rounded flex items-center gap-2">
                  <Image size={18} /> Upload Photo {i}
                </button>
              ))}
              <input placeholder="Event Poster/Banner (Optional)" className="border p-2 rounded w-full" />
              <button className="border p-4 rounded flex items-center gap-2">
                <Upload size={18} /> Upload Poster
              </button>
              <textarea placeholder="Tag Participants" className="border p-2 rounded w-full" />
              <textarea placeholder="Tag Organizers" className="border p-2 rounded w-full" />
            </div>
            <div className="bg-blue-50 p-4 text-sm text-blue-900 rounded">
              <strong>Geo-tagging Requirements:</strong>
              <ul className="list-disc list-inside">
                <li>At least one photograph must be geo-tagged for venue verification</li>
                <li>Ensure location services are enabled on your camera</li>
                <li>Photos should be taken at the actual event venue</li>
              </ul>
            </div>
            <button className="bg-blue-900 text-white w-full py-2 rounded font-medium">Upload Media & Verify Geo-tags</button>
          </div>
        )}

        {activeTab === "Volunteer Hours" && (
          <div className="bg-white text-black p-6 rounded shadow space-y-4">
            <h2 className="text-lg font-semibold">Volunteer Hours Management</h2>
            <p className="text-sm text-gray-500">Assign and track student volunteer contributions</p>
            <div className="grid grid-cols-4 gap-4">
              {['Bronze', 'Silver', 'Gold', 'Platinum'].map((badge, idx) => (
                <div key={badge} className="p-4 border rounded text-center bg-yellow-50">
                  <Medal size={20} className="mx-auto mb-1" />
                  <strong>{badge}</strong>
                  <div className="text-xs text-gray-500">{["10+","30+","50+","100+"][idx]} hours</div>
                </div>
              ))}
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Student Name</th>
                  <th>Roll No.</th>
                  <th>Total Hours</th>
                  <th>Badge</th>
                  <th>Recent Activity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Rahul Kumar", roll: "21BT001", hours: 45, badge: "Silver", activity: "Event Photography - 8 hours" },
                  { name: "Priya Sharma", roll: "21BT002", hours: 78, badge: "Gold", activity: "Event Coordination - 12 hours" },
                  { name: "Amit Singh", roll: "21BT003", hours: 120, badge: "Platinum", activity: "Technical Support - 15 hours" }
                ].map((s, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{s.name}</td>
                    <td>{s.roll}</td>
                    <td>{s.hours}</td>
                    <td><span className="bg-gray-100 px-2 py-1 rounded text-xs">{s.badge}</span></td>
                    <td>{s.activity}</td>
                    <td className="flex gap-2 py-2">
                      <button className="p-1 border rounded"><Plus size={14} /></button>
                      <button className="p-1 border rounded"><Eye size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right mt-4">
              <button className="bg-blue-900 text-white px-4 py-2 rounded">Finalize Hours & Submit to Mentor Portal</button>
            </div>
          </div>
        )}

        {activeTab === "IQAC Reports" && (
          <div className="bg-white text-black p-6 rounded shadow space-y-4">
            <h2 className="text-lg font-semibold">IQAC Event Reports</h2>
            <p className="text-sm text-gray-500">Generate and manage institutional quality reports</p>
            <div className="border rounded p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">Robotics Competition</h3>
                  <p className="text-sm text-gray-500">Robotics Society • 2024-07-10</p>
                  <div className="text-sm mt-2 grid grid-cols-2 gap-2">
                    <p><strong>Participants:</strong> 60</p>
                    <p><strong>Mode:</strong> Offline</p>
                    <p><strong>Category:</strong> Technical</p>
                    <p><strong>Vol. Hours:</strong> 120</p>
                  </div>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Geo-verified</span><br />
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">4/4 Photos</span>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="bg-blue-900 text-white px-3 py-1 rounded text-sm">Generate IQAC Report</button>
                <button className="border px-3 py-1 rounded text-sm flex items-center gap-1"><Download size={14} /> PDF</button>
                <button className="border px-3 py-1 rounded text-sm flex items-center gap-1"><Share size={14} /> Share</button>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded text-sm text-blue-900">
              <strong>IQAC Report Includes:</strong>
              <ul className="list-disc list-inside">
                <li>Event name, date, time, and mode</li>
                <li>Speaker/guest information</li>
                <li>4 verified photographs</li>
                <li>Impact assessment</li>
                <li>Venue with geo-location link</li>
                <li>Event summary and objectives</li>
                <li>Participant list and count</li>
                <li>Volunteer hours allocated</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "Calendar" && (
          <div className="bg-white text-black  p-6 rounded shadow space-y-4">
            <h2 className="text-lg font-semibold">Event Calendar</h2>
            <p className="text-sm text-gray-500">View and manage upcoming club events</p>
            <div className="flex gap-2">
              <button className="border px-3 py-1 rounded">This Month</button>
              <button className="border px-3 py-1 rounded">Next Month</button>
              <select className="border px-3 py-1 rounded"><option>All Categories</option></select>
              <select className="border px-3 py-1 rounded"><option>All Clubs</option></select>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-4 text-center text-sm">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="font-semibold text-gray-700">{day}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div key={i} className="border p-2 h-20 text-left relative">
                  <div className="text-xs text-gray-500">{i + 1}</div>
                  {(i + 1 === 5 || i + 1 === 10) && <span className="absolute bottom-1 left-1 text-xs bg-blue-100 text-blue-700 px-1 rounded">Event</span>}
                </div>
              ))}
            </div>
          </div>
        )}
{activeTab === "Archive" && (
  <div className="bg-white p-6 rounded shadow space-y-6 text-black">
    {/* Archive Header */}
    <div>
      <h2 className="text-xl font-semibold text-blue-900">Event Archive & Reports</h2>
      <p className="text-sm text-gray-500">Access historical event data and documentation</p>
    </div>

    {/* Filters + Export Button */}
    <div className="flex flex-wrap items-center gap-4">
      <select className="border p-2 rounded text-sm">
        <option>All Years</option>
        <option>2025</option>
        <option>2024</option>
      </select>
      <select className="border p-2 rounded text-sm">
        <option>All Clubs</option>
        <option>Tech Innovation Club</option>
        <option>Robotics Society</option>
      </select>
      <select className="border p-2 rounded text-sm">
        <option>All Categories</option>
        <option>Technical</option>
        <option>Cultural</option>
      </select>
      <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded text-sm flex items-center gap-1">
        <Download size={16} /> Export All
      </button>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-600 border-b">
            <th className="py-2 px-4">Event Name</th>
            <th className="py-2 px-4">Club</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Participants</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {[
            {
              name: "AI Workshop Series",
              club: "Tech Innovation Club",
              date: "2024-07-05",
              category: "Technical",
              participants: 25,
              status: "Approved",
            },
            {
              name: "Robotics Competition",
              club: "Robotics Society",
              date: "2024-07-10",
              category: "Technical",
              participants: 60,
              status: "Completed",
            },
          ].map((event, i) => (
            <tr key={i} className="border-b">
              <td className="py-2 px-4 font-semibold">{event.name}</td>
              <td className="py-2 px-4">{event.club}</td>
              <td className="py-2 px-4">{event.date}</td>
              <td className="py-2 px-4">{event.category}</td>
              <td className="py-2 px-4">{event.participants}</td>
              <td className="py-2 px-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  event.status === "Approved"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {event.status}
                </span>
              </td>
              <td className="py-2 px-4">
                <div className="flex gap-2">
                  <button className="p-1 border rounded text-gray-600"><Eye size={14} /></button>
                  <button className="p-1 border rounded text-gray-600"><Download size={14} /></button>
                  <button className="p-1 border rounded text-gray-600"><Share size={14} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Summary Boxes */}
    <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
      <div className="border rounded p-4">
        <div className="text-blue-700 text-xl font-bold">24</div>
        <div className="text-gray-500">Total Events</div>
      </div>
      <div className="border rounded p-4">
        <div className="text-green-700 text-xl font-bold">1,250</div>
        <div className="text-gray-500">Total Participants</div>
      </div>
      <div className="border rounded p-4">
        <div className="text-purple-700 text-xl font-bold">580</div>
        <div className="text-gray-500">Volunteer Hours</div>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
}
