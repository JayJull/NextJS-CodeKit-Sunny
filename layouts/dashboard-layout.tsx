import React, { useMemo } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/sidebar-layout";
import AppNavbar from "@/components/layout/navbar-layout";
import { getMenuItemsByRole } from "@/lib/menu-config";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email?: string;
  role: "manager" | "teacher" | "student";
  avatar?: string;
}

interface SunnyDashboardProps {
  user: User;
  children: React.ReactNode;
  onSearch?: (query: string) => void;
}

const SunnyDashboard: React.FC<SunnyDashboardProps> = ({
  user,
  children,
  onSearch,
}) => {
  const router = useRouter();
  const menuItems = useMemo(() => getMenuItemsByRole(user.role), [user.role]);

  const handleSearch = (query: string) => {
    onSearch?.(query);
    console.log("Search query:", query);
  };

  const handleProfileClick = () => {
    const profileRoutes = {
      student: "/student/settings",
      teacher: "/teacher/settings",
      manager: "/manager/settings",
    };
    router.push(profileRoutes[user.role]);
  };

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-950">
        <AppSidebar menuItems={menuItems} />
        <SidebarInset className="flex flex-1 flex-col min-w-0">
          <AppNavbar
            user={user}
            onSearch={handleSearch}
            onProfileClick={handleProfileClick}
            onLogout={handleLogout}
          />
          <main className="flex-1 p-4 sm:p-6 bg-gray-50/50 dark:bg-gray-950/50 overflow-auto text-gray-900 font-poppins ">
            <div className="max-w-full">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default SunnyDashboard;