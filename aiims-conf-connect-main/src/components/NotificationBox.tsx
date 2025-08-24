
// import React, { useState } from 'react';
// import { Bell, X, CheckCircle, AlertCircle, Info, Calendar } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

// interface Notification {
//   id: string;
//   type: 'info' | 'success' | 'warning' | 'event';
//   title: string;
//   message: string;
//   time: string;
//   isRead: boolean;
// }

// const sampleNotifications: Notification[] = [
//   {
//     id: '1',
//     type: 'event',
//     title: 'Registration Reminder',
//     message: 'Early bird registration ends in 3 days. Register now to save!',
//     time: '2 hours ago',
//     isRead: false
//   },
//   {
//     id: '3',
//     type: 'info',
//     title: 'Schedule Update',
//     message: 'The conference schedule has been updated. Check out the new timings.',
//     time: '2 days ago',
//     isRead: true
//   }
// ];

// const getIcon = (type: string) => {
//   switch (type) {
//     case 'success':
//       return <CheckCircle className="h-4 w-4 text-green-500" />;
//     case 'warning':
//       return <AlertCircle className="h-4 w-4 text-yellow-500" />;
//     case 'event':
//       return <Calendar className="h-4 w-4 text-maroon-600" />;
//     default:
//       return <Info className="h-4 w-4 text-blue-500" />;
//   }
// };

// export default function NotificationBox() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [notifications, setNotifications] = useState(sampleNotifications);

//   const unreadCount = notifications.filter(n => !n.isRead).length;

//   const markAsRead = (id: string) => {
//     setNotifications(prev =>
//       prev.map(notification =>
//         notification.id === id
//           ? { ...notification, isRead: true }
//           : notification
//       )
//     );
//   };

//   const markAllAsRead = () => {
//     setNotifications(prev =>
//       prev.map(notification => ({ ...notification, isRead: true }))
//     );
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <div className="relative">
//         {/* Notification Box */}
//         {isOpen && (
//           <Card className="absolute bottom-16 right-0 w-80 shadow-lg border-0 bg-white">
//             <div className="p-4 border-b border-gray-100">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold text-maroon-800">Notifications</h3>
//                 <div className="flex items-center gap-2">
//                   {/* {unreadCount > 0 && (
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={markAllAsRead}
//                       className="text-xs text-maroon-600 hover:text-maroon-700"
//                     >
//                       Mark all read
//                     </Button>
//                   )} */}
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => setIsOpen(false)}
//                     className="h-6 w-6 p-0"
//                   >
//                     <X className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             <CardContent className="p-0 max-h-96 overflow-y-auto">
//               {notifications.length === 0 ? (
//                 <div className="p-6 text-center text-gray-500">
//                   <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
//                   <p>No notifications</p>
//                 </div>
//               ) : (
//                 <div className="space-y-0">
//                   {notifications.map((notification) => (
//                     <div
//                       key={notification.id}
//                       className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${!notification.isRead ? 'bg-maroon-50/30' : ''
//                         }`}
//                       onClick={() => markAsRead(notification.id)}
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="flex-shrink-0 mt-1">
//                           {getIcon(notification.type)}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center gap-2 mb-1">
//                             <h4 className="text-sm font-medium text-gray-900 truncate">
//                               {notification.title}
//                             </h4>
//                             {!notification.isRead && (
//                               <div className="w-2 h-2 bg-maroon-600 rounded-full flex-shrink-0"></div>
//                             )}
//                           </div>
//                           <p className="text-sm text-gray-600 line-clamp-2 mb-1">
//                             {notification.message}
//                           </p>
//                           {/* <p className="text-xs text-gray-500">{notification.time}</p> */}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         )}

//         {/* Toggle Button */}
//         <Button
//           onClick={() => setIsOpen(!isOpen)}
//           className="h-14 w-14 rounded-full bg-maroon-700 hover:bg-maroon-800 shadow-lg relative"
//         >
//           <Bell className="h-6 w-6 text-white" />
//           {unreadCount > 0 && (
//             <Badge
//               className="absolute -top-1 -right-1 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs"
//             >
//               {unreadCount > 9 ? '9+' : unreadCount}
//             </Badge>
//           )}
//         </Button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, X, CheckCircle, AlertCircle, Info, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'event';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  link?: string;
}

const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'event',
    title: 'Registration Open',
    message: 'Conference registration is now open. Explore categories, fees, and deadlines to plan your participation.',
    time: '2 hours ago',
    isRead: false,
    link: '/registration-details'
  },
  {
    id: '3',
    type: 'info',
    title: 'Schedule Update',
    message: 'The conference schedule has been updated. Check out the new timings.',
    time: '2 days ago',
    isRead: true,
    link: '/events'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'warning':
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    case 'event':
      return <Calendar className="h-4 w-4 text-maroon-600" />;
    default:
      return <Info className="h-4 w-4 text-blue-500" />;
  }
};

export default function NotificationBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Notification Box */}
        {isOpen && (
          <Card className="absolute bottom-16 right-0 w-80 shadow-lg border-0 bg-white">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-maroon-800">Notifications</h3>
                <div className="flex items-center gap-2">
                  {/* Optional Mark all read button */}
                  {/* {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={markAllAsRead}
                      className="text-xs text-maroon-600 hover:text-maroon-700"
                    >
                      Mark all read
                    </Button>
                  )} */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <CardContent className="p-0 max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No notifications</p>
                </div>
              ) : (
                <div className="space-y-0">
                  {notifications.map((notification) => (
                    <Link
                      key={notification.id}
                      to={notification.link || '#'}
                      onClick={() => markAsRead(notification.id)}
                      className={`block p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${!notification.isRead ? 'bg-maroon-50/30' : ''
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {getIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm font-medium text-gray-900 truncate">
                              {notification.title}
                            </h4>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-maroon-600 rounded-full flex-shrink-0"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Toggle Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-maroon-700 hover:bg-maroon-800 shadow-lg relative"
        >
          <Bell className="h-6 w-6 text-white" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </div>
    </div>
  );
}
