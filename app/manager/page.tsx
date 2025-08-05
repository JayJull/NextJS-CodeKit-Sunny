'use client';
import SunnyDashboard from "@/layouts/dashboard-layout";
import React from "react";

export default function DashboardOverview() {
  const user = {
    name: "Cihuyy",
    email: "cihuy@gmail.com",
    role: "manager" as const,
    avatar: "logo/logo.png"
  }
  
  return (
    <SunnyDashboard user={user} >
      <div>
        hai
      </div>
    </SunnyDashboard>
  )
}