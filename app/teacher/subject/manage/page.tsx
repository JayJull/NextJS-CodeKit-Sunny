"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  UploadCloud,
  Plus,
  Edit3,
  Eye,
  Calendar,
  FileText,
  Users,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const exams = [
  {
    id: 1,
    title: "HTML Tag Explorer",
    submissions: 33,
    createdAt: "21 May 2025",
  },
  {
    id: 2,
    title: "Structure & Syntax Drill",
    submissions: 33,
    createdAt: "21 May 2025",
  },
  {
    id: 3,
    title: "Web Layout Builder",
    submissions: 33,
    createdAt: "21 May 2025",
  },
  {
    id: 4,
    title: "Clean Code Practice",
    submissions: 33,
    createdAt: "21 May 2025",
  },
  {
    id: 5,
    title: "Basic Challenge Pro",
    submissions: 33,
    createdAt: "21 May 2025",
  },
];

export default function SubjectDetails() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(exams.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExams = exams.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Subject Details
            </h1>
            <Link
              href="/teacher/subject"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Subject Assigned
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full sm:w-auto bg-white border-gray-200"
            >
              <UploadCloud className="w-4 h-4" />
              Import .CSV
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 relative">
                <Image
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=80&h=80&fit=crop"
                  alt="Object Sketching"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  Object Sketching
                </h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-4 h-4 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12 2L13.09 8.26L20.5 7L19.3 13.3L22 18.5L15.7 19.7L12 22L8.3 19.7L2 18.5L4.7 13.3L3.5 7L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <span className="text-sm">Visual Design</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-1">Total Students</p>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    240.520
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-1">Classrooms</p>
                <div className="flex items-center gap-2">
                  <School className="w-5 h-5 text-orange-500" />
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    6.450
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Available Exams</h3>
          <Link href={"manage/add"}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New
            </Button>
          </Link>
        </div>

        <div className="space-y-3 md:space-y-4">
          {currentExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors gap-4 sm:gap-0"
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
                    {exam.title}
                  </h4>
                  <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-4 text-xs md:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>{exam.submissions} Submissions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Created at</span>
                      <span className="text-gray-700 ml-1">
                        {exam.createdAt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Link href={"manage/edit"}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:bg-gray-100 flex items-center gap-1 px-3 py-1.5 text-sm"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </Button>
                </Link>
                <Link href={"manage/detail-exam"}>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-1.5 rounded-lg flex items-center gap-1 text-sm">
                    <Eye className="w-4 h-4" />
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Pagination className="mt-6 justify-center lg:justify-start">
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
      </div>
    </div>
  );
}
