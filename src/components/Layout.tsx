import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import {LayoutGrid, Package, ShoppingCart, Menu, Settings, Users, HelpCircle} from 'lucide-react'
import Header  from './Header'


const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const menuItems = [
    {icon: LayoutGrid, label: 'Dashboard', path: '/'},
    {icon: Package, label: 'Products', path: '/products'},
    {icon: ShoppingCart, label: 'Orders', path: '/orders'},
    {icon: Users, label: 'Customers', path: '/customers'},
    {icon: Settings, label: 'Settings', path: '/settings'},
    {icon: HelpCircle, label: 'Support', path: '/support'},
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className={`font-bold text-xl ${isSidebarOpen && 'hidden'}`}>Micro-Frontend</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover;ng-gray-100 rounded">
            <Menu size={20} />
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link 
            key={item.path}
            to={item.path}
            className="flex items-center px-4 py-3 transition-colors hover:bg-gray-100"
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="ml-4">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
