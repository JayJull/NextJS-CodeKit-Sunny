"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { getMenuItemsByRole } from "@/lib/menu-config";

interface User {
  name: string;
  role: "manager" | "teacher" | "student";
  avatar?: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: User;
}

export function DashboardLayout({ children, user }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const menuItems = getMenuItemsByRole(user.role);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header user={user} onMenuToggle={handleMenuToggle} />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          menuItems={menuItems} 
          isOpen={sidebarOpen} 
          onClose={handleSidebarClose} 
        />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}