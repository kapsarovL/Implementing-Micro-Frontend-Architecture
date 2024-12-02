
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <div className="text-gray-400">{icon}</div>
    </div>
    <div className="flex items-end justify-between">
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="mt-2 text-sm text-green-500">{trend}</p>
      </div>
    </div>
  </div>
);

export default StatCard;
