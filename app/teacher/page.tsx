import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DashboardOverview() {
  const user = {
    name: "Cihuy",
    role: "teacher" as const,
    avatar: "https://example.com/avatar.jpg",
  };

  return (
    <DashboardLayout user={user}>
      <div className="flex justify-between items-center mx-8 mb-6">
        <div>
          <h2 className="text-2xl font-bold">My Classrooms</h2>
          <p className="text-sm text-stone-500">
            Manage and view your classrooms
          </p>
        </div>
        <Button variant="secondary">
          <Download className="mr-2" />
          import.csv
        </Button>
      </div>

      <div className="mx-8 space-y-4">
        <div className="flex space-x-4">
          <Button variant="emerald" className="rounded-[50px]">
            PUBLISHED
          </Button>
          <Button variant="secondary" className="rounded-[50px]">
            DEACTIVATED
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
