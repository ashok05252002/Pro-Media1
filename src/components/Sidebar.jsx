import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Car, 
  Camera, 
  CreditCard, 
  Settings as SettingsIcon,
  DollarSign,
  ParkingSquare,
  FileText,
  Receipt
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Dashboard' },
    { path: '/vehicles', icon: <Car size={20} />, label: 'Live Parking' },
    { path: '/slots', icon: <ParkingSquare size={20} />, label: 'Slot Management' },
    { path: '/reports', icon: <FileText size={20} />, label: 'Reports' },
    { path: '/payment-report', icon: <Receipt size={20} />, label: 'Payment Reports' },
    { path: '/pricing', icon: <DollarSign size={20} />, label: 'Pricing' },
    { path: '/passes', icon: <CreditCard size={20} />, label: 'Passes' },
    { path: '/cameras', icon: <Camera size={20} />, label: 'Camera Config' },
    { path: '/settings', icon: <SettingsIcon size={20} />, label: 'Settings' }
  ];

  return (
    <div className="w-64 bg-white shadow-md h-full">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-blue-800">Hospital Parking</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 ${
                    isActive
                      ? 'bg-blue-100 text-blue-800 border-r-4 border-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
