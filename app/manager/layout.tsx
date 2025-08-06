'use client';
import SunnyDashboard from "@/layouts/dashboard-layout";

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = {
    name: "Cihuyy",
    email: "cihuy@gmail.com",
    role: "manager" as const,
    avatar: "logo/logo.png"
  };

  return (
    <SunnyDashboard user={user}>
      {children}
    </SunnyDashboard>
  );
}