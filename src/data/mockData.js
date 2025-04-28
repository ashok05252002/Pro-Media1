// Mock data for dashboard
export const mockDashboardData = {
  currentVehicles: 127,
  enteredToday: 243,
  exitedToday: 116,
  availableSlots: 73,
  vehicleFlow: {
    entries: [5, 8, 3, 2, 1, 4, 12, 25, 32, 18, 15, 10, 14, 18, 22, 19, 12, 8, 5, 4, 2, 1, 2, 1],
    exits: [1, 2, 1, 0, 0, 1, 3, 8, 15, 12, 10, 8, 12, 15, 10, 8, 5, 3, 2, 1, 0, 0, 0, 0]
  },
  parkingZones: [
    { id: '1', name: 'Main Parking Zone', total: 200, occupied: 127, isFull: false }
  ]
};

// Mock data for vehicle details
export const mockVehicleData = [
 { 
    id: '1', 
    vehicleNumber: 'AB12 XYZ', 
    entryTime: '2025-04-28 08:15:22', 
    exitTime: '2025-04-28 12:45:10', 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=AB12+XYZ',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'waiver',
    waiverType: 'staff',
    paymentAmount: '0.000'
  },
  { 
    id: '2', 
    vehicleNumber: 'CD34 WXY', 
    entryTime: '2025-04-28 08:30:45', 
    exitTime: null, 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=CD34+WXY',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '3', 
    vehicleNumber: 'EF56 VUT', 
    entryTime: '2025-04-28 09:12:33', 
    exitTime: '2025-04-28 11:20:15', 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=EF56+VUT',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'cash',
    paymentAmount: '1.000'
  },
  { 
    id: '4', 
    vehicleNumber: 'GH78 SRQ', 
    entryTime: '2025-04-28 10:05:18', 
    exitTime: null, 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=GH78+SRQ',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '5', 
    vehicleNumber: 'IJ90 PON', 
    entryTime: '2025-04-28 10:45:22', 
    exitTime: '2025-04-28 14:30:55', 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=IJ90+PON',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'card',
    paymentAmount: '2.000'
  },
  { 
    id: '6', 
    vehicleNumber: 'KL12 MLK', 
    entryTime: '2025-04-28 11:20:10', 
    exitTime: null, 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=KL12+MLK',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '7', 
    vehicleNumber: 'MN34 JIH', 
    entryTime: '2025-04-28 12:05:48', 
    exitTime: '2025-04-28 13:15:22', 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=MN34+JIH',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'cash',
    paymentAmount: '0.500'
  },
  { 
    id: '8', 
    vehicleNumber: 'OP56 GFE', 
    entryTime: '2025-04-28 12:30:15', 
    exitTime: null, 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=OP56+GFE',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '9', 
    vehicleNumber: 'QR78 DCB', 
    entryTime: '2025-04-28 12:10:33', 
    exitTime: '2025-04-28 15:45:10', 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=QR78+DCB',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'card',
    paymentAmount: '0.800'
  },
  { 
    id: '10', 
    vehicleNumber: 'ST90 AZY', 
    entryTime: '2025-04-28 15:25:42', 
    exitTime: null, 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=ST90+AZY',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '11', 
    vehicleNumber: 'UV12 BCD', 
    entryTime: '2025-04-28 08:20:15', 
    exitTime: '2025-04-28 17:30:45', 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=UV12+BCD',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'waiver',
    waiverType: 'staff',
    paymentAmount: '0.000'
  },
  { 
    id: '12', 
    vehicleNumber: 'WX34 EFG', 
    entryTime: '2025-04-28 09:10:30', 
    exitTime: null, 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=WX34+EFG',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '13', 
    vehicleNumber: 'YZ56 HIJ', 
    entryTime: '2025-04-28 10:25:40', 
    exitTime: '2025-04-28 12:15:20', 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=YZ56+HIJ',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'waiver',
    waiverType: 'staff',
    paymentAmount: '0.000'
  },
  { 
    id: '14', 
    vehicleNumber: 'AB78 KLM', 
    entryTime: '2025-04-28 11:05:15', 
    exitTime: null, 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=AB78+KLM',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '15', 
    vehicleNumber: 'CD90 NOP', 
    entryTime: '2025-04-28 12:30:25', 
    exitTime: '2025-04-28 14:45:10', 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=CD90+NOP',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'waiver',
    waiverType: 'staff',
    paymentAmount: '0.000'
  },
  { 
    id: '16', 
    vehicleNumber: 'EF12 QRS', 
    entryTime: '2025-04-28 12:15:35', 
    exitTime: null, 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=EF12+QRS',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '17', 
    vehicleNumber: 'GH34 TUV', 
    entryTime: '2025-04-28 14:10:33', 
    exitTime: '2025-04-28 16:10:30', 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=GH34+TUV',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'waiver',
    waiverType: 'staff',
    paymentAmount: '0.000'
  },
  { 
    id: '18', 
    vehicleNumber: 'IJ56 WXY', 
    entryTime: '2025-04-28 15:05:55', 
    exitTime: null, 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=IJ56+WXY',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  },
  { 
    id: '19', 
    vehicleNumber: 'KL78 ZAB', 
    entryTime: '2025-04-28 12:25:15', 
    exitTime: '2025-04-28 18:30:40', 
    type: 'Staff',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=KL78+ZAB',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image',
    paymentMethod: 'waiver',
    waiverType: 'staff',
    paymentAmount: '0.000'
  },
  { 
    id: '20', 
    vehicleNumber: 'MN90 CDE', 
    entryTime: '2025-04-28 12:10:25', 
    exitTime: null, 
    type: 'Visitor',
    plateImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x100/333/white?text=MN90+CDE',
    vehicleImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/333/white?text=Vehicle+Image'
  }
];

// Mock data for camera configuration
export const mockCameraData = [
  { 
    id: '1', 
    name: 'Entrance Camera', 
    location: 'Main Entrance',
    status: 'active'
  },
  { 
    id: '2', 
    name: 'Exit Camera', 
    location: 'Main Exit',
    status: 'active'
  }
];

// Mock data for doctor registration
export const mockDoctorData = [
  {
    id: '1',
    name: 'Dr. John Smith',
    department: 'Cardiology',
    vehicleNumber: 'AB12 XYZ',
    vehicleType: 'Car',
    validFrom: '2023-01-01',
    validUntil: '2023-12-31',
    status: 'active',
    mobileNumber: '+968 9123 4567'
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    department: 'Neurology',
    vehicleNumber: 'CD34 WXY',
    vehicleType: 'Car',
    validFrom: '2023-01-01',
    validUntil: '2023-05-15',
    status: 'expiring',
    mobileNumber: '+968 9234 5678'
  },
  {
    id: '3',
    name: 'Dr. Michael Brown',
    department: 'Pediatrics',
    vehicleNumber: 'EF56 VUT',
    vehicleType: 'Bike',
    validFrom: '2023-01-01',
    validUntil: '2023-04-30',
    status: 'expired',
    mobileNumber: '+968 9345 6789'
  },
  {
    id: '4',
    name: 'Dr. Emily Davis',
    department: 'Oncology',
    vehicleNumber: 'GH78 SRQ',
    vehicleType: 'Car',
    validFrom: '2023-01-01',
    validUntil: '2024-01-01',
    status: 'active',
    mobileNumber: '+968 9456 7890'
  },
  {
    id: '5',
    name: 'Dr. Robert Wilson',
    department: 'Orthopedics',
    vehicleNumber: 'IJ90 PON',
    vehicleType: 'Car',
    validFrom: '2023-01-01',
    validUntil: '2023-12-31',
    status: 'active',
    mobileNumber: '+968 9567 8901'
  }
];

// Mock data for settings
export const mockSettingsData = {
  parking: {
    gates: [
      {
        id: '1',
        name: 'Main Entrance',
        totalSlots: 200,
        staffAllocation: 60,
        doctorAllocation: 40,
        visitorAllocation: 80,
        emergencyAllocation: 20
      }
    ]
  }
};

// Mock data for tiered pricing module
export const mockTieredPricingData = [
  {
    id: '1',
    vehicleType: '4-Wheeler',
    name: 'Standard Car Parking',
    description: 'Regular pricing for visitor cars with progressive rates',
    isActive: true,
    tiers: [
      { id: '1-1', duration: 1, unit: 'hour', priceOMR: '0.500' },
      { id: '1-2', duration: 2, unit: 'hour', priceOMR: '0.300' },
      { id: '1-3', duration: 4, unit: 'hour', priceOMR: '0.200' },
      { id: '1-4', duration: 1, unit: 'day', priceOMR: '3.000' }
    ]
  },
  {
    id: '2',
    vehicleType: '2-Wheeler',
    name: 'Motorcycle Parking',
    description: 'Discounted rates for motorcycles and scooters',
    isActive: true,
    tiers: [
      { id: '2-1', duration: 1, unit: 'hour', priceOMR: '0.200' },
      { id: '2-2', duration: 3, unit: 'hour', priceOMR: '0.100' },
      { id: '2-3', duration: 1, unit: 'day', priceOMR: '1.000' }
    ]
  },
  {
    id: '3',
    vehicleType: '4-Wheeler',
    name: 'Premium VIP Parking',
    description: 'Reserved spots near hospital entrance with premium rates',
    isActive: true,
    tiers: [
      { id: '3-1', duration: 1, unit: 'hour', priceOMR: '1.000' },
      { id: '3-2', duration: 1, unit: 'day', priceOMR: '5.000' }
    ]
  },
  {
    id: '4',
    vehicleType: '2-Wheeler',
    name: 'Staff Motorcycle Parking',
    description: 'Special rates for hospital staff with motorcycles',
    isActive: false,
    tiers: [
      { id: '4-1', duration: 1, unit: 'day', priceOMR: '0.500' },
      { id: '4-2', duration: 1, unit: 'month', priceOMR: '8.000' }
    ]
  }
];

// Mock data for slot management
export const mockSlotData = {
  id: '1',
  name: 'Main Parking Zone',
  totalSlots: 200,
  availableSlots: 73,
  reservedSlots: 50,
  occupiedSlots: 77,
  status: 'active',
  isNearlyFull: false
};

// Mock data for user management
export const mockUserData = [
  {
    id: '1',
    name: 'Admin User',
    username: 'admin',
    email: 'admin@hospital.com',
    role: 'admin',
    isActive: true,
    lastLogin: '2023-05-09 14:30:22'
  },
  {
    id: '2',
    name: 'John Operator',
    username: 'john',
    email: 'john@hospital.com',
    role: 'operator',
    deviceId: 'DEV12345',
    deviceName: 'Samsung Galaxy S21',
    gateAssignment: 'entrance',
    isActive: true,
    lastLogin: '2023-05-10 08:15:45'
  },
  {
    id: '3',
    name: 'Sarah Manager',
    username: 'sarah',
    email: 'sarah@hospital.com',
    role: 'manager',
    isActive: true,
    lastLogin: '2023-05-10 09:20:33'
  },
  {
    id: '4',
    name: 'Mike Security',
    username: 'mike',
    email: 'mike@hospital.com',
    role: 'security',
    deviceId: 'DEV67890',
    deviceName: 'iPhone 13',
    gateAssignment: 'exit',
    isActive: true,
    lastLogin: '2023-05-10 07:45:12'
  },
  {
    id: '5',
    name: 'Emily Operator',
    username: 'emily',
    email: 'emily@hospital.com',
    role: 'operator',
    deviceId: 'DEV54321',
    deviceName: 'Google Pixel 6',
    gateAssignment: 'all',
    isActive: false,
    lastLogin: '2023-05-08 16:30:55'
  }
];
