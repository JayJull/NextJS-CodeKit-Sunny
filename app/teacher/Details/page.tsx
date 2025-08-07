"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Users,
  BookText,
  Download,
  PencilLine,
  Mail,
  Settings,
  Palette,
} from "lucide-react";
import Link from "next/link";

export default function TeacherDetails() {
  const searchParams = useSearchParams();
  const className = searchParams.get("class") || "Kelas Tidak Ditemukan";

  // Mock data for demonstration
  const classroomDetails = {
    "TRPL 3A": {
      image: "/teacher/1.jpg",
      title: "TRPL 3A",
      grade: 12,
      totalStudents: "240.520",
    },
  };
  const listStudent = {
    "TRPL 3A": {
      name: "Jenny",
      email: "jenny@gmail.com",
      image: "/teacher/2.jpg",
    },
  };
  const listSubject = {
    "TRPL 3A": {
      name: "Canvas Whisper",
      image: "/teacher/2.jpg",
      subject: "Desain Visual",
    },
  };
  const classroom = classroomDetails[
    className as keyof typeof classroomDetails
  ] || {
    title: className,
    grade: 0,
    totalStudents: "0",
    image: "/teacher/1.jpg",
  };
  const list = listStudent[className as keyof typeof listStudent] || {
    name: className,
    email: className,
    image: "/teacher/2.jpg",
  };
  const subject = listSubject[className as keyof typeof listSubject] || {
    name: className,
    subject: className,
    image: "/teacher/2.jpg",
  };
  return (
    <div className="p-3 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Classroom Details
          </h1>
        </div>
        <Button variant="secondary">
          <Download size={16} />
          <span className="text-sm font-medium ml-2">Import CSV</span>
        </Button>
      </div>
      <div className="flex items-center mb-6 ">
        <Link href="/teacher/classes">
          <Button variant="ghost" size="sm" className="mr-4">
            <ArrowLeft size={16} className="mr-2" />
            <span className="text-sm font-medium text-gray-500">
              My Classrooms
            </span>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Informasi Kelas */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3">
            <div className="flex items-center gap-3 sm:gap-6">
              <img
                src={classroom.image}
                alt={classroom.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold truncate">
                  {classroom.title}
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <BookText size={14} />
                  Grade {classroom.grade}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
              <div className="flex flex-col sm:text-center">
                <span className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground sm:justify-center">
                  Total Students
                </span>
                <span className="text-zinc-950 font-bold text-sm sm:text-base text-muted-foreground flex items-center gap-1">
                  <Users size={14} className="text-sky-600" />
                  <span className="truncate max-w-[120px] sm:max-w-none">
                    {classroom.totalStudents}
                  </span>
                </span>
              </div>
            </div>

            <div>
              <Link
                href={`/teacher/details?class=${encodeURIComponent(
                  classroom.title
                )}`}
              >
                <Button variant="emerald" size="sm" className="sm:size-default">
                  <PencilLine size={14} className="mr-1 sm:mr-2 sm:size-4" />
                  <span className="text-xs sm:text-sm">Edit Classroom</span>
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>

      {/* Daftar Mata Pelajaran */}
      <div className="bg-gray-50 min-h-screen">
        <div className="min-h-screen pt-4">
          <div className="flex gap-6">
            {/* Left Side - List Students */}
            <div className="w-1/2">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                List Students
              </h2>
              <Card className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4">
                <div className="flex items-center gap-3 sm:gap-6">
                  <img
                    src={list.image}
                    alt={list.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold truncate">
                      {list.name}
                    </h3>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Mail size={14} />
                      {list.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4 mr-2">
                  <Settings className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </Card>
            </div>

            {/* Right Side - List Subject */}
            <div className="w-1/2">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                List Subject
              </h2>
              <Card className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4">
                <div className="flex items-center gap-3 sm:gap-6">
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold truncate">
                      {subject.name}
                    </h3>
                    <div className="text-base sm:text-lg font-semibold truncate flex items-center gap-1">
                      <Palette size={14} />
                      {subject.name}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
