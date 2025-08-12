"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Phone,
  Mail,
  GraduationCap,
  CreditCard,
  BarChart3,
  Download,
  Aperture,
  BadgeCheck,
  PencilLine,
  BookText,
  Users,
  Monitor,
} from "lucide-react";
import Link from "next/link";

// Pastikan ada default export
export default function StudentDetails() {
  const searchParams = useSearchParams();
  const studentName = searchParams.get("student") || "Student Not Found";
  const className = searchParams.get("class") || "Kelas Tidak Ditemukan";

  console.log("StudentDetails loaded"); // Debug log
  console.log("Student:", studentName); // Debug log
  console.log("Class:", className); // Debug log

  // Mock data for student details
  const classroomDetails = {
    "Mutimedia 3A": {
      image: "/teacher/1.jpg",
      title: "TRPL 3A",
      grade: 12,
      totalStudents: "240.520",
    },
  };
  const studentDetails = {
    Jenny: {
      name: "Jenny",
      email: "jenny@gmail.com",
      image: "/teacher/2.jpg",
      monthlyTuition: "BELUM LUNAS",
      nisn: "5200400",
      classroom: "Desain Visual",
      phone: "081280502900",
      education: "Belum Lulus",
      verified: true,
    },
    Izaa: {
      name: "Izaa",
      email: "izza@gmail.com",
      image: "/teacher/3.jpg",
      monthlyTuition: "LUNAS",
      nisn: "5200401",
      classroom: "Computer Sciense",
      phone: "081280502901",
      education: "Lulus",
      verified: true,
    },
    Joko: {
      name: "Joko",
      email: "joko@gmail.com",
      image: "/teacher/4.jpg",
      monthlyTuition: "BELUM LUNAS",
      nisn: "5200402",
      classroom: "Athlethics",
      phone: "081280502902",
      education: "Belum Lulus",
      verified: false,
    },
    Omi: {
      name: "Omi",
      email: "omi@gmail.com",
      image: "/teacher/5.jpg",
      monthlyTuition: "LUNAS",
      nisn: "5200403",
      classroom: "Desain Visual",
      phone: "081280502903",
      education: "Lulus",
      verified: true,
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
  const student = studentDetails[
    studentName as keyof typeof studentDetails
  ] || {
    name: studentName,
    email: "unknown@example.com",
    image: "/teacher/1.jpg",
    monthlyTuition: "BELUM LUNAS",
    nisn: "0000000",
    classroom: "Unknown Class",
    phone: "000000000000",
    education: "Belum Lulus",
    verified: false,
  };

  return (
    <div className="p-3 sm:p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Student Details
          </h1>
        </div>
        <Button variant="secondary">
          <Download size={16} />
          <span className="text-sm font-medium ml-2">Import CSV</span>
        </Button>
      </div>

      <div className="flex items-center mb-6">
        <Link href={`/teacher/details?class=${encodeURIComponent(className)}`}>
          <Button variant="ghost" size="sm" className="mr-4">
            <ArrowLeft size={16} className="mr-2" />
            <span className="text-sm font-medium text-gray-500">
              Classroom Details
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

      <div className="max-w-md mt-4">
        <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
          {/* Call Parent Button - Top Right */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <img
              src={student.image}
              className="w-16 h-16 object-cover rounded-full flex-shrink-0"
            />
            <Button
              variant="outline"
              className="text-gray-700 border-gray-300 rounded-lg px-4 py-1 text-sm font-medium hover:bg-gray-50"
            >
              <Phone size={16} className="mr-2" />
              Call Parent
            </Button>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-lg font-semibold truncate">
                    {studentName}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Mail size={14} />
                    {student.email}
                  </p>
                </div>
                {student.verified && (
                  <span className=" bg-white text-blue-500 px-2 py-0.5 rounded-full text-xs font-medium flex items-end gap-1">
                    <BadgeCheck size={12} className="text-blue-500" />
                    VERIFIED
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-sm"></div>
            </div>
          </div>

          {/* Information List */}
          <div className="space-y-5">
            {/* Monthly Tuition */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Aperture size={20} className="text-gray-600" />
                <span className="text-gray-600 text-base">Monthly Tuition</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  student.monthlyTuition === "LUNAS"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {student.monthlyTuition}
              </span>
            </div>

            {/* NISN Number */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-gray-600" />
                <span className="text-gray-600 text-base">NISN Number</span>
              </div>
              <span className="text-gray-900 font-semibold text-base">
                {student.nisn}
              </span>
            </div>

            {/* Classroom */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Monitor size={20} className="text-gray-600" />
                <span className="text-gray-600 text-base">Classroom</span>
              </div>
              <span className="text-gray-900 font-semibold text-base">
                {student.classroom}
              </span>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gray-600" />
                <span className="text-gray-600 text-base">Phone Number</span>
              </div>
              <span className="text-gray-900 font-semibold text-base">
                {student.phone}
              </span>
            </div>

            {/* Education */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-gray-600" />
                <span className="text-gray-600 text-base">Education</span>
              </div>
              <span className="text-gray-900 font-semibold text-base">
                {student.education}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
