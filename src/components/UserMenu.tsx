import {useState} from 'react'
import {User, Settings, LogOut} from 'lucide-react'
import {Link} from 'react-router-dom'

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 space-x-2 rounded-lg hover:bg-gray-100"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ray-200">
          <User size={20} className="text-gray-600" />
        </div>
        <span className="text-gray-600">Admin User</span>
      </button>
     {isOpen && (
      <div className="absolute right-0 z-50 w-48 py-2 mt-2 bg-white rounded-lg">
        <Link 
        to="/settings"
        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Settings size={20} className="text-gray-600" />
          <span className="ml-2">Settings</span>
        </Link>
        <button className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
        >
          <LogOut size={20} className="text-red-600" />
          <span className="ml-2">Sign Out</span>
        </button>
      </div>
     )}
    </div>
  )
}

export default UserMenu
