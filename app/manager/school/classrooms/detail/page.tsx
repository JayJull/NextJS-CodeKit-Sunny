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
      name: "Gilang Zale",
      email: "lagze@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Shen Woaini",
      email: "shen@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Masayoshi Ackerm...",
      email: "mazda@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Rain Senorita",
      email: "rain@sunny.com",
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
              href="/manager/school/classrooms"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Manage Classrooms
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
                    240
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 bg-red-50 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl border">
                    <AlertDialogHeader className="text-center pb-4">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                      <AlertDialogTitle className="text-xl font-semibold text-gray-900 mb-2">
                        Hapus Class
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-sm text-gray-600 leading-relaxed">
                        Apakah Anda yakin ingin menghapus class{" "}
                        <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                          IPS Adventure
                        </span>
                        ?
                        <br />
                        <br />
                        <span className="text-red-600 font-medium">
                          Tindakan ini tidak dapat dibatalkan
                        </span>{" "}
                        dan akan menghapus class ini secara permanen.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                      <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                        Batal
                      </AlertDialogCancel>
                      <AlertDialogAction className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium">
                        Ya, Hapus Class
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span className="font-medium">Manage</span>
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

            <Link href={"detail/add-student"}>
              <Button className="w-full bg-blue-600 text-white rounded-xl py-4 mb-6 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                <span className="font-medium">Add Student +</span>
              </Button>
            </Link>

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

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 bg-red-50 text-red-600 hover:bg-red-100 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl border">
                      <AlertDialogHeader className="text-center pb-4">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <AlertDialogTitle className="text-xl font-semibold text-gray-900 mb-2">
                          Hapus Siswa
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-sm text-gray-600 leading-relaxed">
                          Apakah Anda yakin ingin menghapus siswa{" "}
                          <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                            "{student.name}"
                          </span>
                          ?
                          <br />
                          <br />
                          <span className="text-red-600 font-medium">
                            Tindakan ini tidak dapat dibatalkan
                          </span>{" "}
                          dan akan menghapus siswa ini secara permanen dari
                          kelas.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                        <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                          Batal
                        </AlertDialogCancel>
                        <AlertDialogAction className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium">
                          Ya, Hapus Siswa
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">List Subjects</h3>
            </div>

            <Link href={"detail/add-subject"}>
              <Button className="w-full bg-blue-600 text-white rounded-xl py-4 mb-6 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                <span className="font-medium">Assign Subject +</span>
              </Button>
            </Link>

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

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 bg-red-50 text-red-600 hover:bg-red-100 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl border">
                      <AlertDialogHeader className="text-center pb-4">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <AlertDialogTitle className="text-xl font-semibold text-gray-900 mb-2">
                          Hapus Mata Pelajaran
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-sm text-gray-600 leading-relaxed">
                          Apakah Anda yakin ingin menghapus mata pelajaran{" "}
                          <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                            "{subject.title}"
                          </span>
                          ?
                          <br />
                          <br />
                          <span className="text-red-600 font-medium">
                            Tindakan ini tidak dapat dibatalkan
                          </span>{" "}
                          dan akan menghapus mata pelajaran ini secara permanen
                          dari kelas.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                        <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                          Batal
                        </AlertDialogCancel>
                        <AlertDialogAction className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium">
                          Ya, Hapus Mata Pelajaran
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
