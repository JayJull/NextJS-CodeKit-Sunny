'use client';
import SunnyDashboard from "@/layouts/dashboard-layout";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = {
    name: "Shen WoAini",
    email: "cihuy@gmail.com",
    role: "student" as const,
    avatar: "student/profile.png" 
  };

  return (
    <SunnyDashboard user={user}>
      {children}
    </SunnyDashboard>
  );
}