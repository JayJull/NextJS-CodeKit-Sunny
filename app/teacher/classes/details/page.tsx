import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Settings,
  UserPlus,
  Trash2,
  Users,
  BookText,
  Paintbrush,
  Code,
  Dumbbell,
  UploadCloud,
  AlertTriangle,
  Pencil,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function ClassroomDetails() {
  const students = [
    {
      id: 1,
      name: "Omi Silalahi",
      email: "Omisil@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Joko Pangabean",
      email: "Jokp@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Jenny Simbolon",
      email: "jenys@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
  ];

  const subjects = [
    {
      id: 1,
      title: "Object Sketching",
      category: "Visual Design",
      icon: <Paintbrush className="w-6 h-6 text-gray-600" />,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=60&h=60&fit=crop",
    },
    {
      id: 2,
      title: "Learning Code",
      category: "Computer Science",
      icon: <Code className="w-6 h-6 text-gray-600" />,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=60&h=60&fit=crop",
    },
    {
      id: 3,
      title: "Canvas Whisper",
      category: "Visual Design",
      icon: <Paintbrush className="w-6 h-6 text-gray-600" />,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=60&h=60&fit=crop",
    },
    {
      id: 4,
      title: "Sport & Health",
      category: "Athletics",
      icon: <Dumbbell className="w-6 h-6 text-gray-600" />,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Classroom Details
            </h1>
            <Link
              href="/teacher/classes"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              My Classroom
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full sm:w-auto"
            >
              <UploadCloud className="w-4 h-4" />
              Import .CSV
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 relative">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=80&h=80&fit=crop"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  IPS Adventure
                </h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <BookText className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Grade 10</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 mb-1">Total Students</p>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    24.000
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                  <Pencil className="w-4 h-4" />
                  <span className="font-medium">Edit Classrooms</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">List Students</h3>
            </div>

            <div className="space-y-4">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden relative flex-shrink-0">
                      <Image
                        src={student.avatar}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {student.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {student.email}
                      </p>
                    </div>
                  </div>
                  <Link href={"details/student"}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8  text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">List Subjects</h3>
            </div>

            <div className="space-y-4">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-gray-100 relative flex-shrink-0">
                      <Image
                        src={subject.image}
                        alt={subject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {subject.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        {React.cloneElement(subject.icon, {
                          className: "w-3 h-3 sm:w-4 sm:h-4",
                        })}
                        <span className="truncate">{subject.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
