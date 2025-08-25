// app/teacher/subject-details/page.tsx
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Plus,
  Download,
  Edit,
  Eye,
  Users,
  BookText,
  Calendar,
  FileText,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import Link from "next/link";

export default function SubjectDetails() {
  const searchParams = useSearchParams();
  const subjectName = searchParams.get("subject") || "Subject Not Found";
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  // Data subjects yang sama dengan TeacherOverview
  const subjects = [
    {
      image: "/teacher/1.jpg",
      title: "Object Sketching",
      category: "Visual Design",
      certified: true,
      totalStudents: "240.520",
      classrooms: "6.450",
      status: "Attached",
      exams: [
        {
          name: "HTML Tag Explorer",
          submissions: "33 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Structure & Syntax Drill",
          submissions: "33 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Web Layout Builder",
          submissions: "33 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Clean Code Practice",
          submissions: "33 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Basic Challenge Pro",
          submissions: "33 Submissions",
          createdAt: "21 May 2025",
        },
      ],
    },
    {
      image: "/teacher/2.jpg",
      title: "Digital Domination",
      category: "Business Marketing",
      certified: true,
      totalStudents: "320.000",
      classrooms: "6.450",
      status: "Attached",
      exams: [
        {
          name: "Marketing Fundamentals",
          submissions: "28 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Digital Strategy Test",
          submissions: "31 Submissions",
          createdAt: "21 May 2025",
        },
      ],
    },
    {
      image: "/teacher/3.jpg",
      title: "Linear Gameplan",
      category: "Mathematics",
      certified: true,
      totalStudents: "320.000",
      classrooms: "6.450",
      status: "Attached",
      exams: [
        {
          name: "Linear Algebra Basics",
          submissions: "45 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Matrix Operations",
          submissions: "42 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Vector Calculations",
          submissions: "38 Submissions",
          createdAt: "21 May 2025",
        },
      ],
    },
    {
      image: "/teacher/4.jpg",
      title: "Creative Writing",
      category: "Language Arts",
      certified: true,
      totalStudents: "280.000",
      classrooms: "5.200",
      status: "Attached",
      exams: [
        {
          name: "Poetry Analysis",
          submissions: "25 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Story Structure",
          submissions: "27 Submissions",
          createdAt: "21 May 2025",
        },
      ],
    },
    {
      image: "/teacher/5.jpg",
      title: "Data Science",
      category: "Computer Science",
      certified: false,
      totalStudents: "150.000",
      classrooms: "3.100",
      status: "Attached",
      exams: [
        {
          name: "Python Basics",
          submissions: "52 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Data Analysis",
          submissions: "48 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Machine Learning Intro",
          submissions: "35 Submissions",
          createdAt: "21 May 2025",
        },
      ],
    },
    {
      image: "/teacher/4.jpg",
      title: "Physics Lab",
      category: "Science",
      certified: true,
      totalStudents: "420.000",
      classrooms: "7.800",
      status: "Attached",
      exams: [
        {
          name: "Mechanics Fundamentals",
          submissions: "38 Submissions",
          createdAt: "21 May 2025",
        },
        {
          name: "Thermodynamics Quiz",
          submissions: "33 Submissions",
          createdAt: "21 May 2025",
        },
      ],
    },
  ];

  // Cari subject berdasarkan title
  const subject = subjects.find(
    (s) =>
      s.title === subjectName || s.title === decodeURIComponent(subjectName)
  ) || {
    image: "/teacher/1.jpg",
    title: subjectName,
    category: "Unknown Category",
    certified: false,
    totalStudents: "0",
    classrooms: "0",
    status: "Unknown",
    exams: [],
  };

  // Pagination logic untuk exams
  const totalPages = Math.ceil(subject.exams.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExams = subject.exams.slice(startIndex, endIndex);

  return (
    <div className="p-3 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Subject Details
          </h1>
        </div>
        <Button variant="outline" className="w-fit sm:w-auto">
          <Download size={16} />
          <span className="text-sm font-medium ml-2">Import CSV</span>
        </Button>
      </div>

      {/* Back Button */}
      <div className="flex items-center mb-6">
        <Link href="/teacher/subject">
          <Button variant="ghost" size="sm" className="mr-4 text-gray-500">
            <ArrowLeft size={16} className="mr-2" />
            <span className="text-sm font-medium">Subject Assigned</span>
          </Button>
        </Link>
      </div>

      {/* Subject Info Card */}
      <Card className="p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
          {/* Kolom 1: Image + Title + Category */}
          <div className="flex items-center gap-4">
            <img
              src={subject.image}
              alt={subject.title}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {subject.title}
              </h2>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <BookText size={14} />
                {subject.category}
              </p>
            </div>
          </div>

          {/* Kolom 2: Total Students */}
          <div className="text-center">
            <span className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground justify-center">
              Total Students
            </span>
            <span className="text-zinc-950 font-bold text-sm sm:text-sm flex items-center gap-1 justify-center">
              <Users size={14} className="text-sky-600" />
              <span className="truncate max-w-[120px] sm:max-w-none">
                {subject.totalStudents}
              </span>
            </span>
          </div>

          {/* Kolom 3: Classrooms */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">Classrooms</p>
            <div className="flex items-center gap-1 text-base font-semibold justify-center">
              <BookText size={16} className="text-orange-600" />
              {subject.classrooms}
            </div>
          </div>
        </div>
      </Card>

      {/* Available Exams Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Available Exams</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 w-fit sm:w-auto">
          <Plus size={16} className="mr-2" />
          <span className="text-sm font-medium">Add New</span>
        </Button>
      </div>

      {/* Exams List */}
      <div className="space-y-3">
        {currentExams.map((exam, index) => (
          <Card key={index} className="p-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
              {/* Kolom 1: Exam Info */}
              <div className="flex items-center gap-4 justify-start">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{exam.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Users size={12} />
                    {exam.submissions}
                  </p>
                </div>
              </div>

              {/* Kolom 2: Created At */}
              <div className="flex flex-col items-center text-center">
                <p className="text-xs text-gray-500">Created at</p>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-950">
                  <Calendar size={14} className="text-green-500" />
                  {exam.createdAt}
                </div>
              </div>

              {/* Kolom 3: Actions */}
              <div className="flex items-end justify-end gap-2">
                <Link
                  href={`/teacher/editsubject?edit=${encodeURIComponent(
                    exam.name
                  )}&subject=${encodeURIComponent(subject.title)}`}
                >
                  <Button variant="outline" size="sm">
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                </Link>
                <Button className="bg-black hover:bg-gray-800" size="sm">
                  <Eye size={14} className="mr-1" />
                  Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-6 justify-center sm:justify-start">
          <PaginationContent className="flex-wrap gap-1">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="text-xs sm:text-sm"
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;

              const shouldRender =
                pageNumber === 1 ||
                pageNumber === totalPages ||
                Math.abs(currentPage - pageNumber) <= 1;

              if (!shouldRender) {
                if (
                  (pageNumber === currentPage - 2 && pageNumber > 1) ||
                  (pageNumber === currentPage + 2 && pageNumber < totalPages)
                ) {
                  return (
                    <PaginationItem
                      key={pageNumber}
                      className="hidden sm:block"
                    >
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }
                return null;
              }

              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    isActive={isActive}
                    onClick={() => setCurrentPage(pageNumber)}
                    className="text-xs sm:text-sm w-8 h-8 sm:w-10 sm:h-10"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="text-xs sm:text-sm"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
