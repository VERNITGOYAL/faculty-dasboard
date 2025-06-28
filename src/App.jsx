import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Sidebar
import MyGBUSidebar from './components/sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Academic from './pages/Academic';
import Assignments from './pages/Assignments';
import Attendance from './pages/Attendance';
import ExamsResults from './pages/feedback';
import FeeManagement from './pages/leave';
import Library from './pages/message';
import FIRSGrievancePortal from './pages/portal';
import Placement from './pages/office';
import Wellness from './pages/Wellness';
import Residence from './pages/residence';
import StartupDashboard from './pages/startup';
import GBUStore from './pages/clubs';
import Impacts from './pages/Social_impacts';
//import Impacts from './pages/notification';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50  text-gray-800 dark:text-gray-100">
        <MyGBUSidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Core Pages */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/feedback" element={<ExamsResults />} />
            <Route path="/leave" element={<FeeManagement />} />
            <Route path="/message" element={<Library />} />
            <Route path="/portal" element={<FIRSGrievancePortal />} />
           <Route path="/office" element={<Placement />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/residence" element={<Residence />} />
            <Route path="/startup" element={<StartupDashboard />} />
            <Route path="/clubs" element={<GBUStore />} />
            <Route path="/impacts" element={<Impacts />} />
            {/* <Route path="/notification" element={<Notifications />} /> */}

            {/* 404 Fallback */}
            <Route path="*" element={<div className="p-10 text-center text-2xl">404 - Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
