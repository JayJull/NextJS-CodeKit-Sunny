"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  UploadCloud,
  Eye,
  FileText,
  Mail,
  CheckCircle,
  Circle,
  MedalIcon,
  BadgeCheck,
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

const students = [
  {
    id: 1,
    name: "Shen Woaini",
    email: "shen@sunny.com",
    score: "N/A",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    verified: true,
  },
  {
    id: 2,
    name: "Shen Woaini",
    email: "shen@sunny.com",
    score: 100,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    verified: true,
  },
  {
    id: 3,
    name: "Shen Woaini",
    email: "shen@sunny.com",
    score: 100,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    verified: true,
  },
  {
    id: 4,
    name: "Shen Woaini",
    email: "shen@sunny.com",
    score: 100,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    verified: true,
  },
  {
    id: 5,
    name: "Shen Woaini",
    email: "shen@sunny.com",
    score: 100,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
    verified: true,
  },
];

const examData = {
  title: "Basic Pro Challenge",
  subject: "Objecting Sketching",
  totalSubmissions: 33,
};

export default function ExamDetails() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = students.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Exam For Subject Details
            </h1>
            <Link
              href="/teacher/subject/manage"
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

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {examData.title}
              </h2>
              <p className="text-gray-500">{examData.subject}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FileText className="w-4 h-4" />
              <span>{examData.totalSubmissions} Submissions</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">List Students</h3>
        </div>

        <div className="space-y-4">
          {currentStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {/* Desktop Layout */}
              <div className="hidden sm:flex items-center justify-between">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                    <Image
                      src={student.avatar}
                      alt={student.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-base mb-1">
                      {student.name}
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Mail className="w-3 h-3" />
                      <span>{student.email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-36">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Score</p>
                    <div className="flex items-center justify-center gap-1">
                      <MedalIcon className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-gray-900">
                        {student.score}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-32">
                    {student.verified && (
                      <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                        <BadgeCheck className="w-4 h-4" />
                        VERIFIED
                      </div>
                    )}

                    <Link href={"detail-exam/detail-student"}>
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-1.5 rounded-lg flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="sm:hidden space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                    <Image
                      src={student.avatar}
                      alt={student.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-base mb-1">
                      {student.name}
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{student.email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Score</p>
                      <div className="flex items-center justify-center gap-1">
                        <Circle className="w-3 h-3 text-green-500 fill-current" />
                        <span className="font-semibold text-gray-900 text-sm">
                          {student.score}
                        </span>
                      </div>
                    </div>

                    {student.verified && (
                      <div className="flex items-center gap-1 text-blue-600 text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        VERIFIED
                      </div>
                    )}
                  </div>

                  <Link href={"detail-exam/detail-student"}>
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm">
                      <Eye className="w-4 h-4" />
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </div>
  );
}
