import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import VehicleDetails from './pages/VehicleDetails';
import CameraConfig from './pages/CameraConfig';
import Passes from './pages/Passes';
import Settings from './pages/Settings';
import Pricing from './pages/Pricing';
import SlotManagement from './pages/SlotManagement';
import Reports from './pages/Reports';
import PaymentReport from './pages/PaymentReport';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicles" element={<VehicleDetails />} />
            <Route path="/cameras" element={<CameraConfig />} />
            <Route path="/passes" element={<Passes />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/slots" element={<SlotManagement />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/payment-report" element={<PaymentReport />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
