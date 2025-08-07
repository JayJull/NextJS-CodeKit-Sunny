"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Eye, Users, BookText } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const classrooms = [
  {
    image: "/teacher/1.jpg",
    title: "TRPL 3A",
    grade: 12,
    totalStudents: "240.520",
  },
  {
    image: "/teacher/2.jpg",
    title: "Design 3B",
    grade: 11,
    totalStudents: "6.290.205",
  },
  {
    image: "/teacher/3.jpg",
    title: "MIPA 3B",
    grade: 10,
    totalStudents: "97.500",
  },
  {
    image: "/teacher/4.jpg",
    title: "Design 3B",
    grade: 9,
    totalStudents: "205.205",
  },
  {
    image: "/teacher/5.jpg",
    title: "Design 3B",
    grade: 8,
    totalStudents: "2.250.600",
  },
  {
    image: "/teacher/4.jpg",
    title: "Design 3B",
    grade: 9,
    totalStudents: "205.205",
  },
];

export default function TeacherOverview() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(classrooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClassrooms = classrooms.slice(startIndex, endIndex);

  return (
    <div className="p-3 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            My Classrooms
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and view your classrooms
          </p>
        </div>
        <Button variant="secondary" className="w-fit sm:w-auto">
          <Download size={16} />
          <span className="text-sm font-medium ml-2">Import CSV</span>
        </Button>
      </div>

      <div>
        <Tabs defaultValue="published">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger
              value="published"
              className="flex-1 sm:flex-none data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              PUBLISHED
            </TabsTrigger>
            <TabsTrigger
              value="deactivated"
              className="flex-1 sm:flex-none data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              DEACTIVATED
            </TabsTrigger>
          </TabsList>
          <TabsContent value="published">
            <div className="space-y-4">
              {currentClassrooms.map((item, idx) => (
                <Card
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 sm:p-5"
                >
                  <div className="flex items-center gap-3 sm:gap-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold truncate">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <BookText size={14} />
                        Grade {item.grade}
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
                          {item.totalStudents}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/teacher/details?class=${encodeURIComponent(
                        item.title
                      )}`}
                    >
                      <Button
                        variant="emerald"
                        size="sm"
                        className="sm:size-default"
                      >
                        <Eye size={14} className="mr-1 sm:mr-2 sm:size-4" />
                        <span className="text-xs sm:text-sm">Details</span>
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}

              {/* Pagination */}
              <Pagination className="mt-6 justify-center sm:justify-start">
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      className="text-xs sm:text-sm"
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;

                    // Show first page, last page, current page, and neighbors
                    const shouldRender =
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      Math.abs(currentPage - pageNumber) <= 1;

                    if (!shouldRender) {
                      if (
                        // Add ellipsis if previous item wasn't ellipsis
                        (pageNumber === currentPage - 2 && pageNumber > 1) ||
                        (pageNumber === currentPage + 2 &&
                          pageNumber < totalPages)
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
          </TabsContent>
          <TabsContent value="deactivated">
            <div className="space-y-4">
              {currentClassrooms.map((item, idx) => (
                <Card
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 sm:p-5"
                >
                  <div className="flex items-center gap-3 sm:gap-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold truncate">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <BookText size={14} />
                        Grade {item.grade}
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
                          {item.totalStudents}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="sm:size-default"
                      disabled
                    >
                      <Eye size={14} className="mr-1 sm:mr-2 sm:size-4" />
                      <span className="text-xs sm:text-sm">Details</span>
                    </Button>
                  </div>
                </Card>
              ))}
              {/* Pagination */}
              <Pagination className="mt-6 justify-center sm:justify-start">
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      className="text-xs sm:text-sm"
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;

                    // Show first page, last page, current page, and neighbors
                    const shouldRender =
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      Math.abs(currentPage - pageNumber) <= 1;

                    if (!shouldRender) {
                      if (
                        // Add ellipsis if previous item wasn't ellipsis
                        (pageNumber === currentPage - 2 && pageNumber > 1) ||
                        (pageNumber === currentPage + 2 &&
                          pageNumber < totalPages)
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
