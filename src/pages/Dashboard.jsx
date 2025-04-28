import React, { useState, useEffect } from 'react';
import { Car, LogIn, LogOut, ParkingCircle, DollarSign, Clock, Users } from 'lucide-react';
import StatCard from '../components/StatCard';
import VehicleFlowChart from '../components/VehicleFlowChart';
import { mockDashboardData } from '../data/mockData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch data from an API
    // For now, we'll use mock data
    setTimeout(() => {
      setDashboardData(mockDashboardData);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Hospital Parking Management Overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="md:col-span-2 lg:col-span-2">
          <StatCard 
            title="Available Parking Slots" 
            value={dashboardData.availableSlots} 
            icon={<ParkingCircle size={32} className="text-white" />} 
            color="bg-purple-500"
            isAlert={dashboardData.availableSlots < 10}
          />
        </div>
        <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Current Vehicles" 
            value={dashboardData.currentVehicles} 
            icon={<Car size={24} className="text-white" />} 
            color="bg-blue-500"
          />
          <StatCard 
            title="Vehicles Entered Today" 
            value={dashboardData.enteredToday} 
            icon={<LogIn size={24} className="text-white" />} 
            color="bg-green-500"
          />
          <StatCard 
            title="Vehicles Exited Today" 
            value={dashboardData.exitedToday} 
            icon={<LogOut size={24} className="text-white" />} 
            color="bg-orange-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <VehicleFlowChart data={dashboardData.vehicleFlow} />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Report Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm text-blue-500 mb-1">Today's Revenue</p>
              <p className="text-xl font-bold text-blue-700">OMR 125.500</p>
            </div>
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-sm text-green-500 mb-1">Most Active Time</p>
              <p className="text-xl font-bold text-green-700">08:00 - 10:00</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-md flex items-center">
              <div className="flex-1">
                <p className="text-sm text-orange-500 mb-1">Vehicle Types</p>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm">60% Staff</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-sm">40% Visitor</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-3 rounded-md">
              <p className="text-sm text-purple-500 mb-1">Recent Activity</p>
              <div className="text-sm space-y-1">
                <div className="flex items-center">
                  <Clock size={12} className="text-purple-500 mr-1" />
                  <span className="text-gray-600">AB12 XYZ entered (5m ago)</span>
                </div>
                <div className="flex items-center">
                  <Clock size={12} className="text-purple-500 mr-1" />
                  <span className="text-gray-600">CD34 WXY exited (12m ago)</span>
                </div>
                <div className="flex items-center">
                  <DollarSign size={12} className="text-purple-500 mr-1" />
                  <span className="text-gray-600">Payment received: OMR 2.500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
