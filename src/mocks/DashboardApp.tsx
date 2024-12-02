import React from 'react';
import { BarChart3, Users, DollarSign, TrendingUp } from 'lucide-react';
import StatCard from '../components/common/StatCard';

const DashboardApp: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$54,239"
          icon={<DollarSign size={20} />}
          trend="+14.2% from last month"
        />
        <StatCard
          title="Active Users"
          value="2,847"
          icon={<Users size={20} />}
          trend="+7.4% from last month"
        />
        <StatCard
          title="Sales"
          value="1,423"
          icon={<BarChart3 size={20} />}
          trend="+11.9% from last month"
        />
        <StatCard
          title="Growth Rate"
          value="24.5%"
          icon={<TrendingUp size={20} />}
          trend="+2.3% from last month"
        />
      </div>
    </div>
  );
}

export default DashboardApp;
