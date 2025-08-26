import React from "react";
import {
  Search,
  Settings,
  LogOut,
  Bell,
  Crown,
  Check,
  X,
  Clock,
  AlertCircle,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

interface User {
  name: string;
  email?: string;
  role: string;
  avatar?: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "info" | "success" | "warning" | "error";
  isRead: boolean;
  avatar?: string;
}

interface AppNavbarProps {
  user: User;
  onSearch?: (query: string) => void;
  onProfileClick?: () => void;
  onLogout?: () => void;
}

const AppNavbar: React.FC<AppNavbarProps> = ({
  user,
  onSearch,
  onProfileClick,
  onLogout,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: "1",
      title: "New Assignment",
      message: "Mathematics homework has been assigned for tomorrow",
      time: "2 minutes ago",
      type: "info",
      isRead: false,
      avatar: "/api/placeholder/32/32",
    },
    {
      id: "2",
      title: "Grade Updated",
      message: "Your Physics exam grade has been updated to A-",
      time: "1 hour ago",
      type: "success",
      isRead: false,
    },
    {
      id: "3",
      title: "School Event",
      message: "Annual sports day registration is now open",
      time: "3 hours ago",
      type: "info",
      isRead: true,
    },
    {
      id: "4",
      title: "Payment Due",
      message: "Monthly school fee payment is due in 3 days",
      time: "1 day ago",
      type: "warning",
      isRead: true,
    },
    {
      id: "5",
      title: "System Maintenance",
      message: "Platform will be under maintenance tonight from 11 PM to 2 AM",
      time: "2 days ago",
      type: "error",
      isRead: true,
    },
    {
      id: "6",
      title: "New Message",
      message:
        "You have received a new message from your teacher about the upcoming project submission",
      time: "3 days ago",
      type: "info",
      isRead: false,
    },
    {
      id: "7",
      title: "Attendance Alert",
      message:
        "Your attendance is below 75%. Please attend classes regularly to maintain good standing",
      time: "4 days ago",
      type: "warning",
      isRead: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleSearch = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const markAsRead = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  const removeNotification = (notificationId: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== notificationId)
    );
  };

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <Check className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatRole = (role: string) => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white border-gray-200 px-2 sm:px-4 lg:px-6 font-poppins">
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <SidebarTrigger className="h-8 w-8 text-black flex-shrink-0" />
        <div className="h-6 w-px bg-border hidden sm:block bg-slate-300 flex-shrink-0" />
        <div className="relative flex-1 max-w-md min-w-0">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground flex-shrink-0" />
          <Input
            placeholder="Search your subject or student"
            className="rounded-full w-full pl-10 pr-12 sm:pr-16 h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
          />
          <Button
            size="sm"
            className="rounded-full absolute right-1 top-1/2 -translate-y-1/2 h-8 px-2 sm:px-4 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm flex-shrink-0"
            onClick={handleSearch}
          >
            <span className="hidden sm:inline">GO</span>
            <Search className="h-4 w-4 sm:hidden" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10 text-black"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-medium">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-72 sm:w-80 lg:w-96 p-0 max-h-[80vh] flex flex-col"
            sideOffset={5}
          >
            <div className="flex items-center justify-between p-3 sm:p-4 border-b flex-shrink-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm sm:text-base">
                  Notifications
                </h3>
                {unreadCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-600 text-xs"
                  >
                    {unreadCount} new
                  </Badge>
                )}
              </div>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="text-xs text-blue-600 hover:text-blue-700 p-1 h-auto flex-shrink-0"
                >
                  Mark all read
                </Button>
              )}
            </div>

            <div className="overflow-y-auto max-h-80 sm:max-h-96 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-track-gray-100 scrollbar-thumb-gray-400">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`group p-3 sm:p-4 hover:bg-gray-50 transition-colors ${
                        !notification.isRead
                          ? "bg-blue-50/50 border-l-2 border-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {notification.avatar ? (
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback className="text-xs">
                              {getInitials(notification.title)}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="flex-shrink-0 mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-sm font-medium leading-tight ${
                                  !notification.isRead
                                    ? "text-gray-900"
                                    : "text-gray-700"
                                }`}
                              >
                                {notification.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed break-words">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-2">
                                {notification.time}
                              </p>
                            </div>

                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              )}
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                  >
                                    <MoreHorizontal className="h-3 w-3" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  align="end"
                                  className="w-40"
                                >
                                  {!notification.isRead && (
                                    <DropdownMenuItem
                                      onClick={() =>
                                        markAsRead(notification.id)
                                      }
                                      className="text-xs cursor-pointer"
                                    >
                                      Mark as read
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem
                                    onClick={() =>
                                      removeNotification(notification.id)
                                    }
                                    className="text-xs text-red-600 hover:text-red-700 cursor-pointer"
                                  >
                                    Remove
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {notifications.length > 0 && (
              <div className="p-3 border-t bg-gray-50 flex-shrink-0">
                <Button
                  variant="ghost"
                  className="w-full text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  View all notifications
                </Button>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 sm:gap-3 px-1 sm:px-2 lg:px-3 h-10 min-w-0"
            >
              <div className="text-right hidden lg:block min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {formatRole(user.role)}
                </div>
              </div>
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56" sideOffset={5}>
            <div className="lg:hidden px-3 py-2 border-b">
              <div className="text-sm font-medium text-gray-900">
                {user.name}
              </div>
              <div className="text-xs text-gray-500">
                {formatRole(user.role)}
              </div>
            </div>
            <DropdownMenuItem
              onClick={onProfileClick}
              className="cursor-pointer"
            >
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onProfileClick}
              className="cursor-pointer"
            >
              <Crown className="mr-2 h-4 w-4" />
              Upgrade to Pro
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600 focus:text-red-600 cursor-pointer"
              onClick={onLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppNavbar;
