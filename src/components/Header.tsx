import {useState} from "react";
import {Bell} from "lucide-react"
import Search from './common/Search';
import ThemeToggle from './common/ThemeToggle';
import NotificationsPanel from "./NotificationsPanel";
import UserMenu from './UserMenu';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="w-96">
          <Search onSearch={console.log} placeholder="search anything..." />
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="relative">
            <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-full hover:bg-gray-100"
            >
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></span>
            </button>
            {showNotifications && (
              <NotificationsPanel onClose={() => setShowNotifications(false)} />
            )}
          </div>
          <UserMenu />
        </div>
      </div>
      Header
    </header>
  )
}

export default Header
