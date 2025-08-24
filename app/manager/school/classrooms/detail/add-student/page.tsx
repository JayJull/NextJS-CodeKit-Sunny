"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Plus,
  Settings,
  Trash2,
  Users,
  BookText,
  UploadCloud,
  Mail,
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
import Link from "next/link";
import Image from "next/image";

export default function AddStudent() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const availableStudents = [
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
      name: "Rain Senorita",
      email: "rain@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
  ];

  const latestAddedStudents = [
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
      name: "Rain Senorita",
      email: "rain@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Masayoshi Ackerman",
      email: "mazda@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Alex Thompson",
      email: "alex@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Add Student
            </h1>
            <Link
              href="/manager/school/classrooms/detail"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Classrooms Details
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
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Add Student to Classroom
              </h3>
              <p className="text-sm text-gray-500">
                Select a student to add to this classroom
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name
                  </label>
                  <div className="relative">
                    <Button
                      variant="outline"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full justify-between p-4 h-auto border-gray-200 rounded-xl hover:border-gray-300"
                    >
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">
                          {selectedStudent || "Choose Student"}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                        {availableStudents.map((student) => (
                          <Button
                            key={student.id}
                            variant="ghost"
                            onClick={() => {
                              setSelectedStudent(student.name);
                              setDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 p-4 h-auto justify-start first:rounded-t-xl last:rounded-b-xl"
                          >
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                              <Image
                                src={student.avatar}
                                alt={student.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <div className="font-medium text-gray-900">
                                {student.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {student.email}
                              </div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="destructive"
                    className="px-6 py-3 rounded-xl font-medium"
                  >
                    Cancel
                  </Button>
                  <Button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium">
                    Add Now
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Latest Added Students
              </h3>
              <p className="text-sm text-gray-500">
                Recently added students to this classroom
              </p>
            </div>

            <div className="space-y-4">
              {latestAddedStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                      <Image
                        src={student.avatar}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {student.name}
                      </h4>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Mail className="w-4 h-3" /> {student.email}
                      </p>
                    </div>
                  </div>
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
        </div>
      </div>
    </div>
  );
}
