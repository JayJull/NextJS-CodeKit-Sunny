import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plus,
  UploadCloud,
  Wallet,
  GraduationCap,
  Medal,
  BookMarked,
  Presentation,
  ScrollText,
  Calendar,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function DashboardOverview() {
  const transactions = [
    {
      id: 1,
      name: "Chetista Reina",
      date: "23 Mei 2025",
      amount: "Rp 350.000",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Mikasa Yeager",
      date: "23 Mei 2025",
      amount: "Rp 350.000",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Armin Fuji",
      date: "23 Mei 2025",
      amount: "Rp 350.000",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  ];

  const students = [
    {
      id: 1,
      name: "Rain Senorita",
      email: "razka@sunny.com",
      classroom: "IPS Gagat 20",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Shen Woaini",
      email: "razka@sunny.com",
      classroom: "IPS Gagat 20",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Masayoshi Ackerman",
      email: "razka@sunny.com",
      classroom: "IPS Gagat 20",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View your dashboard overview
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-gray-200 w-full sm:w-auto"
          >
            <UploadCloud className="w-4 h-4 mr-2" />
            Import .CSV
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-4">
              <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  Rp 320.000.000
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Total Revenue
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-4">
              <ScrollText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">16.000.000</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Total Transactions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[400px]">
        <div className="order-1 md:order-1">
          <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-4">
                <BookMarked className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">12.560</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Total Student
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="order-3 md:order-2 lg:row-span-2">
          <Card className="h-full bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full text-center space-y-3 sm:space-y-4">
              <Image
                src="/manager/images-container.png"
                alt="container-images"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-48 sm:h-48 lg:w-[200px] lg:h-[200px] object-contain"
              />
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-base sm:text-lg font-semibold">Try All Features!</h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Upgrade to Pro and turn your dashboard into the ultimate
                  organizational tool.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="order-2 md:order-3">
          <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-4">
                <Medal className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">22.360</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Total School Grades
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="order-4 md:order-4">
          <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-4">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">6.205</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Total Teacher
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="order-5 md:order-5">
          <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-4">
                <Presentation className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">6.205</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Total Classrooms
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="border-gray-100 shadow-sm ">
          <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
              Latest Transactions
            </CardTitle>
            <p className="text-xs sm:text-sm text-gray-500">Recently Transactions</p>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
            {transactions.map((transaction, index) => (
              <div key={transaction.id} className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={transaction.avatar}
                      alt={transaction.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                      {transaction.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{transaction.date}</span>
                    </div>
                  </div>
                </div>

                {index < transactions.length - 1 && (
                  <div className="border-t border-gray-100"></div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-gray-500">Grand total:</p>
                  <p className="font-semibold text-red-500 text-sm sm:text-base">
                    {transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-gray-100 shadow-sm">
          <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
              Latest Students
            </CardTitle>
            <p className="text-xs sm:text-sm text-gray-500">Recently Joined Students</p>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
            {students.map((student, index) => (
              <div key={student.id} className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                      {student.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{student.email}</span>
                    </div>
                  </div>
                </div>

                {index < students.length - 1 && (
                  <div className="border-t border-gray-100"></div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-gray-500">Classroom:</p>
                  <p className="font-semibold text-blue-600 text-sm sm:text-base">
                    {student.classroom}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}