import React, { useState, useEffect } from 'react';
import { Download, Calendar, FileText, Filter, Search, ArrowDown, ArrowUp, ChevronLeft, ChevronRight, Printer, CreditCard, DollarSign } from 'lucide-react';
import { mockVehicleData } from '../data/mockData';

const PaymentReport = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [vehicleNumberFilter, setVehicleNumberFilter] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('all');
  const [paymentModeFilter, setPaymentModeFilter] = useState('all');
  const [staffFilter, setStaffFilter] = useState('all');
  const [sortField, setSortField] = useState('entryTime');
  const [sortDirection, setSortDirection] = useState('desc');
  const [showFilters, setShowFilters] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Enhanced mock data with additional payment details
  const enhancedMockData = mockVehicleData.map((vehicle, index) => {
    // Only add payment details to vehicles that have exited
    if (vehicle.exitTime) {
      const staffMembers = ['John Smith', 'Sarah Johnson', 'Michael Brown', 'Emily Davis', 'Robert Wilson'];
      const paymentStatus = vehicle.type === 'Staff' ? 'Waiver' : (Math.random() > 0.2 ? 'Paid' : 'Unpaid');
      const paymentModes = ['Cash', 'Card', 'UPI', 'Wallet'];
      
      return {
        ...vehicle,
        serialNumber: index + 1,
        paymentStatus: vehicle.paymentMethod === 'waiver' ? 'Waiver' : paymentStatus,
        paymentMode: vehicle.paymentMethod ? 
          vehicle.paymentMethod.charAt(0).toUpperCase() + vehicle.paymentMethod.slice(1) : 
          paymentModes[Math.floor(Math.random() * paymentModes.length)],
        collectedBy: staffMembers[Math.floor(Math.random() * staffMembers.length)],
        paymentAmount: vehicle.paymentAmount || (vehicle.type === 'Staff' ? '0.000' : (Math.random() * 5).toFixed(3))
      };
    }
    return {
      ...vehicle,
      serialNumber: index + 1,
      paymentStatus: 'Pending',
      paymentMode: '-',
      collectedBy: '-',
      paymentAmount: '-'
    };
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredData = enhancedMockData.filter(vehicle => {
    // General search filter
    if (searchTerm && 
        !vehicle.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !vehicle.paymentMode.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !vehicle.collectedBy.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Vehicle number filter
    if (vehicleNumberFilter && !vehicle.vehicleNumber.toLowerCase().includes(vehicleNumberFilter.toLowerCase())) {
      return false;
    }
    
    // Payment status filter
    if (paymentStatusFilter !== 'all' && vehicle.paymentStatus !== paymentStatusFilter) {
      return false;
    }
    
    // Payment mode filter
    if (paymentModeFilter !== 'all' && vehicle.paymentMode !== paymentModeFilter) {
      return false;
    }
    
    // Staff filter
    if (staffFilter !== 'all' && vehicle.collectedBy !== staffFilter) {
      return false;
    }
    
    // Date range filter
    if (dateRange.start && dateRange.end) {
      const entryDate = new Date(vehicle.entryTime);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      endDate.setHours(23, 59, 59, 999); // End of day
      
      if (entryDate < startDate || entryDate > endDate) {
        return false;
      }
    }
    
    return true;
  }).sort((a, b) => {
    let valueA, valueB;
    
    if (sortField === 'entryTime' || sortField === 'exitTime') {
      valueA = a[sortField] ? new Date(a[sortField]).getTime() : 0;
      valueB = b[sortField] ? new Date(b[sortField]).getTime() : 0;
    } else if (sortField === 'paymentAmount') {
      valueA = a[sortField] === '-' ? 0 : parseFloat(a[sortField]);
      valueB = b[sortField] === '-' ? 0 : parseFloat(b[sortField]);
    } else {
      valueA = a[sortField];
      valueB = b[sortField];
    }
    
    if (sortDirection === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  // Calculate summary data
  const totalTransactions = filteredData.filter(v => v.paymentStatus !== 'Pending').length;
  const totalCollected = filteredData
    .filter(v => v.paymentAmount !== '-')
    .reduce((sum, v) => sum + parseFloat(v.paymentAmount || 0), 0)
    .toFixed(3);

  // Get unique values for filters
  const uniquePaymentStatuses = ['all', ...new Set(enhancedMockData.map(v => v.paymentStatus))];
  const uniquePaymentModes = ['all', ...new Set(enhancedMockData.map(v => v.paymentMode).filter(mode => mode !== '-'))];
  const uniqueStaffMembers = ['all', ...new Set(enhancedMockData.map(v => v.collectedBy).filter(staff => staff !== '-'))];

  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, dateRange, vehicleNumberFilter, paymentStatusFilter, paymentModeFilter, staffFilter, sortField, sortDirection]);

  const handleDownloadPDF = () => {
    // Create a simple text representation of the data
    let content = "Payment Report\n\n";
    content += "Date: " + new Date().toLocaleDateString() + "\n\n";
    content += "S.No | Vehicle Number | Entry Time | Exit Time | Duration | Amount Paid | Payment Status | Payment Mode | Collected By\n";
    content += "----------------------------------------------------------------------------------------------------\n";
    
    filteredData.forEach(vehicle => {
      // Calculate duration
      let duration = '-';
      if (vehicle.entryTime) {
        const entryTime = new Date(vehicle.entryTime);
        const exitTime = vehicle.exitTime ? new Date(vehicle.exitTime) : new Date();
        const diffMs = exitTime - entryTime;
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        duration = `${diffHrs}h ${diffMins}m`;
      }
      
      content += `${vehicle.serialNumber} | ${vehicle.vehicleNumber} | ${vehicle.entryTime} | ${vehicle.exitTime || '-'} | ${duration} | ${vehicle.paymentAmount} | ${vehicle.paymentStatus} | ${vehicle.paymentMode} | ${vehicle.collectedBy}\n`;
    });
    
    // Create a Blob with the content
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a link and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `payment_report_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadExcel = () => {
    // Create CSV content
    let csv = "Serial Number,Vehicle Number,Entry Time,Exit Time,Duration,Amount Paid,Payment Status,Payment Mode,Collected By\n";
    
    filteredData.forEach(vehicle => {
      // Calculate duration
      let duration = '-';
      if (vehicle.entryTime) {
        const entryTime = new Date(vehicle.entryTime);
        const exitTime = vehicle.exitTime ? new Date(vehicle.exitTime) : new Date();
        const diffMs = exitTime - entryTime;
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        duration = `${diffHrs}h ${diffMins}m`;
      }
      
      csv += `"${vehicle.serialNumber}","${vehicle.vehicleNumber}","${vehicle.entryTime}","${vehicle.exitTime || ''}","${duration}","${vehicle.paymentAmount}","${vehicle.paymentStatus}","${vehicle.paymentMode}","${vehicle.collectedBy}"\n`;
    });
    
    // Create a Blob with the CSV content
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    // Create a link and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `payment_report_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const getPaymentStatusBadge = (status) => {
    const colors = {
      'Paid': 'bg-green-100 text-green-800',
      'Unpaid': 'bg-red-100 text-red-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Waiver': 'bg-purple-100 text-purple-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs rounded-full ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getPaymentModeBadge = (mode) => {
    if (mode === '-') return '-';
    
    const colors = {
      'Cash': 'bg-green-100 text-green-800',
      'Card': 'bg-blue-100 text-blue-800',
      'UPI': 'bg-purple-100 text-purple-800',
      'Wallet': 'bg-orange-100 text-orange-800',
      'Waiver': 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs rounded-full ${colors[mode] || 'bg-gray-100 text-gray-800'}`}>
        {mode}
      </span>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Payment Reports</h1>
          <p className="text-gray-600">Generate and download payment transaction reports</p>
        </div>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center"
            onClick={handlePrint}
          >
            <Printer size={18} className="mr-2" />
            Print
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            onClick={handleDownloadPDF}
          >
            <Download size={18} className="mr-2" />
            Download PDF
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
            onClick={handleDownloadExcel}
          >
            <FileText size={18} className="mr-2" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="p-3 rounded-full bg-blue-100 mr-4">
            <CreditCard size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Transactions</p>
            <p className="text-2xl font-bold">{totalTransactions}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="p-3 rounded-full bg-green-100 mr-4">
            <DollarSign size={24} className="text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Collected</p>
            <p className="text-2xl font-bold">OMR {totalCollected}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by vehicle number, payment mode, or staff..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} className="mr-2" />
            Advanced Filters
          </button>
        </div>

        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      value={dateRange.start}
                      onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                    />
                  </div>
                  <span className="flex-shrink-0">to</span>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      value={dateRange.end}
                      onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number</label>
                <input
                  type="text"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter vehicle number"
                  value={vehicleNumberFilter}
                  onChange={(e) => setVehicleNumberFilter(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={paymentStatusFilter}
                  onChange={(e) => setPaymentStatusFilter(e.target.value)}
                >
                  {uniquePaymentStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status === 'all' ? 'All Statuses' : status}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode</label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={paymentModeFilter}
                  onChange={(e) => setPaymentModeFilter(e.target.value)}
                >
                  {uniquePaymentModes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode === 'all' ? 'All Payment Modes' : mode}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Collected By</label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={staffFilter}
                  onChange={(e) => setStaffFilter(e.target.value)}
                >
                  {uniqueStaffMembers.map((staff) => (
                    <option key={staff} value={staff}>
                      {staff === 'all' ? 'All Staff Members' : staff}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center justify-center"
                  onClick={() => {
                    setDateRange({ start: '', end: '' });
                    setSearchTerm('');
                    setVehicleNumberFilter('');
                    setPaymentStatusFilter('all');
                    setPaymentModeFilter('all');
                    setStaffFilter('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('serialNumber')}
                >
                  <div className="flex items-center">
                    S.No
                    {sortField === 'serialNumber' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('vehicleNumber')}
                >
                  <div className="flex items-center">
                    Vehicle Number
                    {sortField === 'vehicleNumber' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('entryTime')}
                >
                  <div className="flex items-center">
                    Entry Time
                    {sortField === 'entryTime' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('exitTime')}
                >
                  <div className="flex items-center">
                    Exit Time
                    {sortField === 'exitTime' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('paymentAmount')}
                >
                  <div className="flex items-center">
                    Amount (OMR)
                    {sortField === 'paymentAmount' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('paymentStatus')}
                >
                  <div className="flex items-center">
                    Payment Status
                    {sortField === 'paymentStatus' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('paymentMode')}
                >
                  <div className="flex items-center">
                    Payment Mode
                    {sortField === 'paymentMode' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('collectedBy')}
                >
                  <div className="flex items-center">
                    Collected By
                    {sortField === 'collectedBy' && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                      </span>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((vehicle) => {
                // Calculate duration
                let duration = '-';
                if (vehicle.entryTime) {
                  const entryTime = new Date(vehicle.entryTime);
                  const exitTime = vehicle.exitTime ? new Date(vehicle.exitTime) : new Date();
                  const diffMs = exitTime - entryTime;
                  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
                  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                  duration = `${diffHrs}h ${diffMins}m`;
                }
                
                return (
                  <tr key={vehicle.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vehicle.serialNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{vehicle.vehicleNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vehicle.entryTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vehicle.exitTime || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">
                        {vehicle.paymentAmount === '-' ? '-' : `${vehicle.paymentAmount} OMR`}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getPaymentStatusBadge(vehicle.paymentStatus)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getPaymentModeBadge(vehicle.paymentMode)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vehicle.collectedBy}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No payment records found matching your search criteria.
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredData.length > 0 && (
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-2 md:mb-0">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} records
            </div>
            <div className="flex items-center space-x-1">
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </button>
              
              {/* Page numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                  let pageNumber;
                  
                  // Calculate which page numbers to show
                  if (totalPages <= 5) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + i;
                  } else {
                    pageNumber = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={i}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === pageNumber
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>
              
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="mt-2 md:mt-0 flex items-center space-x-2">
              <span className="text-xs">Items per page:</span>
              <select
                className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentReport;
