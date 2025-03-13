import React from 'react';

const Orders = () => {
  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Your Orders</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600">
            Please log in to view and manage your orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;