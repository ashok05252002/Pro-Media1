import React, { useState } from 'react';
import { Plus, Edit, Trash, Save, X, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { mockTieredPricingData } from '../data/mockData';

const Pricing = () => {
  const [pricingData, setPricingData] = useState(mockTieredPricingData);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [formData, setFormData] = useState({
    vehicleType: '4-Wheeler',
    name: '',
    description: '',
    isActive: true,
    tiers: [
      { id: Date.now(), duration: 1, unit: 'hour', priceOMR: '0.500' }
    ]
  });

  const handleEdit = (item) => {
    setFormData({
      vehicleType: item.vehicleType,
      name: item.name,
      description: item.description,
      isActive: item.isActive,
      tiers: [...item.tiers]
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setPricingData(pricingData.filter(item => item.id !== id));
  };

  const handleAdd = () => {
    setFormData({
      vehicleType: '4-Wheeler',
      name: '',
      description: '',
      isActive: true,
      tiers: [
        { id: Date.now(), duration: 1, unit: 'hour', priceOMR: '0.500' }
      ]
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing pricing
      setPricingData(pricingData.map(item => 
        item.id === editingId ? { ...item, ...formData } : item
      ));
    } else {
      // Add new pricing
      const newPricing = {
        id: Date.now().toString(),
        ...formData
      };
      setPricingData([...pricingData, newPricing]);
    }
    
    setShowForm(false);
    setEditingId(null);
  };

  const toggleStatus = (id) => {
    setPricingData(pricingData.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const addTier = () => {
    const lastTier = formData.tiers[formData.tiers.length - 1];
    const newTier = {
      id: Date.now(),
      duration: lastTier.duration + 1,
      unit: lastTier.unit,
      priceOMR: lastTier.priceOMR
    };
    setFormData({
      ...formData,
      tiers: [...formData.tiers, newTier]
    });
  };

  const removeTier = (tierId) => {
    if (formData.tiers.length <= 1) return; // Don't remove the last tier
    setFormData({
      ...formData,
      tiers: formData.tiers.filter(tier => tier.id !== tierId)
    });
  };

  const updateTier = (tierId, field, value) => {
    setFormData({
      ...formData,
      tiers: formData.tiers.map(tier => 
        tier.id === tierId ? { ...tier, [field]: value } : tier
      )
    });
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pricing Module</h1>
          <p className="text-gray-600">Manage tiered parking pricing for 2-wheelers and 4-wheelers</p>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          onClick={handleAdd}
        >
          <Plus size={18} className="mr-2" />
          Add Pricing
        </button>
      </div>

      {showForm ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {editingId ? 'Edit Pricing Structure' : 'Add New Pricing Structure'}
            </h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                  required
                >
                  <option value="4-Wheeler">4-Wheeler</option>
                  <option value="2-Wheeler">2-Wheeler</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pricing Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="e.g. Standard Visitor Parking"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.isActive ? "active" : "inactive"}
                  onChange={(e) => setFormData({...formData, isActive: e.target.value === "active"})}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows="2"
                  placeholder="Add any additional details about this pricing structure"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Time-Based Pricing Tiers</label>
                  <button 
                    type="button"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    onClick={addTier}
                  >
                    <Plus size={16} className="mr-1" />
                    Add Tier
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price (OMR)
                        </th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {formData.tiers.map((tier, index) => (
                        <tr key={tier.id}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              {index === 0 ? (
                                <span className="text-gray-700">First</span>
                              ) : (
                                <span className="text-gray-700">After</span>
                              )}
                              <div className="flex items-center ml-2">
                                <input
                                  type="number"
                                  min="1"
                                  className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  value={tier.duration}
                                  onChange={(e) => updateTier(tier.id, 'duration', parseInt(e.target.value) || 1)}
                                />
                                <select
                                  className="ml-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  value={tier.unit}
                                  onChange={(e) => updateTier(tier.id, 'unit', e.target.value)}
                                >
                                  <option value="hour">Hour(s)</option>
                                  <option value="day">Day(s)</option>
                                </select>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <input
                                type="number"
                                step="0.001"
                                min="0"
                                className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={tier.priceOMR}
                                onChange={(e) => updateTier(tier.id, 'priceOMR', e.target.value)}
                              />
                              <span className="ml-2 text-gray-500">OMR</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right">
                            <button
                              type="button"
                              className="text-red-600 hover:text-red-900"
                              onClick={() => removeTier(tier.id)}
                              disabled={formData.tiers.length <= 1}
                            >
                              <Trash size={16} className={formData.tiers.length <= 1 ? "text-gray-400" : ""} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-2 text-sm text-gray-500 flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>Pricing tiers are applied cumulatively based on parking duration</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              >
                <Save size={18} className="mr-2" />
                {editingId ? 'Update' : 'Save'} Pricing
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pricing Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Base Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pricingData.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr className={`hover:bg-gray-50 ${expandedId === item.id ? 'bg-blue-50' : ''}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{item.vehicleType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">{item.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900 font-medium">
                          {item.tiers[0]?.priceOMR ? parseFloat(item.tiers[0].priceOMR).toFixed(3) : '0.000'} OMR
                          <span className="text-gray-500 ml-1">
                            / {item.tiers[0]?.duration || 1} {item.tiers[0]?.unit || 'hour'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleStatus(item.id)}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.isActive 
                              ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                              : 'bg-red-100 text-red-800 hover:bg-red-200'
                          }`}
                        >
                          {item.isActive ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="text-blue-600 hover:text-blue-900 mr-3"
                          onClick={() => handleEdit(item)}
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 mr-3"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash size={16} />
                        </button>
                        <button
                          className="text-gray-600 hover:text-gray-900"
                          onClick={() => toggleExpand(item.id)}
                        >
                          {expandedId === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </td>
                    </tr>
                    {expandedId === item.id && (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 bg-gray-50">
                          <div className="text-sm text-gray-500 mb-2">{item.description}</div>
                          <div className="border border-gray-200 rounded-md overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Duration
                                  </th>
                                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price (OMR)
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {item.tiers.map((tier, index) => (
                                  <tr key={index}>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                      {index === 0 ? (
                                        <span>First {tier.duration} {tier.unit}{tier.duration > 1 ? 's' : ''}</span>
                                      ) : (
                                        <span>After {tier.duration} {tier.unit}{tier.duration > 1 ? 's' : ''}</span>
                                      )}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                      {parseFloat(tier.priceOMR).toFixed(3)} OMR
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            
            {pricingData.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No pricing data available. Click "Add Pricing" to create new pricing rules.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
