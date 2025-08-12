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
  Laptop,
  Dumbbell,
} from "lucide-react";
import Link from "next/link";

export default function TeacherDetails() {
  const searchParams = useSearchParams();
  const className = searchParams.get("class") || "Kelas Tidak Ditemukan";

  // Mock data for demonstration
  const classroomDetails = {
    "Mutimedia 3A": {
      image: "/teacher/1.jpg",
      title: "TRPL 3A",
      grade: 12,
      totalStudents: "240.520",
    },
  };
  const listStudent = {
    "Mutimedia 3A": [
      {
        name: "Jenny",
        email: "jenny@gmail.com",
        image: "/teacher/2.jpg",
      },
      {
        name: "Izaa",
        email: "Izza@gmail.com",
        image: "/teacher/3.jpg",
      },
      {
        name: "Joko",
        email: "joko@gmail.com",
        image: "/teacher/4.jpg",
      },
      {
        name: "Omi",
        email: "omi@gmail.com",
        image: "/teacher/5.jpg",
      },
    ],
  };
  const listSubject = {
    "Mutimedia 3A": [
      {
        name: "Canvas Whisper",
        image: "/teacher/2.jpg",
        subject: "Desain Visual",
        icons: <Palette />,
      },
      {
        name: "Learning Code",
        image: "/teacher/2.jpg",
        subject: "Computer Sciense",
        icons: <Laptop />,
      },
      {
        name: "Sport And Healt",
        image: "/teacher/2.jpg",
        subject: "Athlethics",
        icons: <Dumbbell />,
      },
      {
        name: "Object Sketching",
        image: "/teacher/2.jpg",
        subject: "Desain Visual",
        icons: <Palette />,
      },
    ],
  };
  const classroom = classroomDetails[
    className as keyof typeof classroomDetails
  ] || {
    title: className,
    grade: 0,
    totalStudents: "0",
    image: "/teacher/1.jpg",
  };
  const list = listStudent[className as keyof typeof listStudent] || [];
  const subject = listSubject[className as keyof typeof listSubject] || [];
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
          <Card className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 w-full hover:shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-3 sm:gap-6">
              <img
                src={classroom.image}
                alt={classroom.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-lg font-semibold truncate">
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
                <span className="text-zinc-950 font-bold text-sm sm:text-sm text-muted-foreground flex items-center gap-1">
                  <Users size={14} className="text-sky-600" />
                  <span className="truncate max-w-[120px] sm:max-w-none">
                    {classroom.totalStudents}
                  </span>
                </span>
              </div>
            </div>

            <div>
              <Button variant="emerald" size="sm" className="sm:size-default">
                <PencilLine size={14} className="mr-1 sm:mr-2 sm:size-4" />
                <span className="text-xs sm:text-sm">Edit Classroom</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* List Student*/}
      <div className="bg-gray-50 min-h-screen">
        <div className="min-h-screen pt-4">
          {" "}
          <div className="flex flex-col lg:flex-row gap-6">
            {" "}
            {/* Left Side - List Students */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                List Students
              </h2>
              <div className="space-y-4">
                {list.map((student, index) => (
                  <div key={index}>
                    <Link
                      href={`/teacher/detailstudent?student=${encodeURIComponent(
                        student.name
                      )}&class=${encodeURIComponent(className)}`}
                    >
                      <Card className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 w-full">
                        <div className="flex items-center gap-3 sm:gap-6">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-lg font-semibold truncate">
                              {student.name}
                            </h3>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Mail size={14} />
                              {student.email}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-4 mr-2">
                          <Settings
                            className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // Handle settings click here
                            }}
                          />
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Side - List Subject */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                List Subject
              </h2>
              <div className="space-y-4">
                {subject.map((subjectItem, index) => (
                  <Card
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 w-full"
                  >
                    <div className="flex items-center gap-3 sm:gap-6">
                      <img
                        src={subjectItem.image}
                        alt={subjectItem.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-lg font-semibold truncate">
                          {subjectItem.name}
                        </h3>
                        <div className="text-sm sm:text-lg font-semibold truncate flex items-center gap-1">
                          {subjectItem.icons}
                          {subjectItem.subject}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
