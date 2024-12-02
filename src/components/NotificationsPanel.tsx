import {Bell, X} from 'lucide-react'

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NotificationsPanel: React.FC<{ onClose: () => void }> = ({onClose}) => {
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'New Order',
      message: 'Order #1234 has been placed',
      time: '5 minutes ago',
      read: false,
        },
        {
          id: '2',
          title: 'Low Stock Alert',
          message: 'Product "Wireless Headphones" is running low on stock',
          time: '2 hours ago',
          read: true,
        },
        {
          id: '3',
          title: 'System Update',
          message: 'System maintenance scheduled for tonight',
          time: '2 hours ago',
          read: true,
        },
  ];
  return (
    <div className="absolute right-0 z-50 py-2 mt-2 bg-white rounded-lg shadow-lg w-80">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
          <X size={16} />
        </button>
      </div>
      <div className="overflow-y-auto max-h-96">
        {notifications.map((notification) => (
          <div 
          key={notification.id}
          className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''
            }`}
            >
              <div className="flex items-start gap-3">
                <Bell size={16} className={!notification.read ? 'text-blue-500' : 'text-fray-400'} />
                <div>
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="text-sm text-fray-400">{notification.message}</p>
                  <span className="text-xs text-gray-400">{notification.time}</span>
                </div>
              </div>
            </div>
        ))}
      </div>
     <div className="px-4 py-2 border-t border-gray-200">
      <button className="text-sm text-blue-600 hover:text-blue-700">
        Mark all as read
      </button>
     </div>
    </div>
  )
}

export default NotificationsPanel
