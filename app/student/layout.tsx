'use client';
import SunnyDashboard from "@/layouts/dashboard-layout";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = {
    name: "Cihuyy",
    email: "cihuy@gmail.com",
    role: "student" as const,
    avatar: "logo/logo.png"
  };

  return (
    <SunnyDashboard user={user}>
      {children}
    </SunnyDashboard>
  );
}