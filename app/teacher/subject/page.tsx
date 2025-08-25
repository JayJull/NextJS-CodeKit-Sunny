"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Eye,
  Users,
  BookText,
  Edit,
  UserCheck,
  BadgeCheck,
  Album,
  LaptopMinimalCheck,
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const subjects = [
  {
    image: "/teacher/1.jpg",
    title: "Object Sketching",
    category: "Visual Design",
    certified: true,
    totalStudents: "320.000",
    classrooms: "6.450",
    status: "Attached",
  },
  {
    image: "/teacher/2.jpg",
    title: "Digital Domination",
    category: "Business Marketing",
    certified: true,
    totalStudents: "320.000",
    classrooms: "6.450",
    status: "Attached",
  },
  {
    image: "/teacher/3.jpg",
    title: "Linear Gameplan",
    category: "Mathematics",
    certified: true,
    totalStudents: "320.000",
    classrooms: "6.450",
    status: "Attached",
  },
  {
    image: "/teacher/4.jpg",
    title: "Creative Writing",
    category: "Language Arts",
    certified: true,
    totalStudents: "280.000",
    classrooms: "5.200",
    status: "Attached",
  },
  {
    image: "/teacher/5.jpg",
    title: "Data Science",
    category: "Computer Science",
    certified: false,
    totalStudents: "150.000",
    classrooms: "3.100",
    status: "Attached",
  },
  {
    image: "/teacher/4.jpg",
    title: "Physics Lab",
    category: "Science",
    certified: true,
    totalStudents: "420.000",
    classrooms: "7.800",
    status: "Attached",
  },
];

export default function TeacherOverview() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(subjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSubjects = subjects.slice(startIndex, endIndex);

  return (
    <div className="p-4 lg:p-2">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
            Subject Assigned
          </h1>
          <p className="text-gray-500 text-sm">Manage and view your subjects</p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <Download size={16} />
          <span className="text-sm font-medium ml-2">Import CSV</span>
        </Button>
      </div>

      <div>
        <Tabs defaultValue="published">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger
              value="published"
              className="flex-1 lg:flex-none data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              PUBLISHED
            </TabsTrigger>
            <TabsTrigger
              value="deactivated"
              className="flex-1 lg:flex-none data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              DEACTIVATED
            </TabsTrigger>
          </TabsList>
          <TabsContent value="published">
            <div className="space-y-4">
              {currentSubjects.map((item, idx) => (
                <Card key={idx} className="p-4 lg:p-6">
                  <div className="flex flex-col gap-4">
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                      <div className="flex gap-4 mb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                            <BookText size={14} />
                            {item.category}
                          </p>
                          {item.certified && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-800 gap-1">
                              <BadgeCheck size={12} /> CERTIFIED
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Action buttons for mobile */}
                      <div className="flex gap-2 mb-4">
                        <Link href={"subject/edit"} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Edit size={14} className="mr-2" />
                            <span className="text-xs">Edit</span>
                          </Button>
                        </Link>
                        <Link href={"subject/manage"} className="flex-1">
                          <Button
                            className="bg-blue-600 hover:bg-blue-700 w-full"
                            size="sm"
                          >
                            <Album size={14} className="mr-2" />
                            <span className="text-xs">Exams</span>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <BookText size={14} />
                            {item.category}
                          </p>
                        </div>
                      </div>

                      {/* Certified badge in center */}
                      <div className="flex justify-center">
                        {item.certified && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-800 gap-2">
                            <BadgeCheck /> CERTIFIED
                          </span>
                        )}
                      </div>

                      {/* Action buttons aligned with image */}
                      <div className="flex gap-2">
                        <Link href={"subject/edit"}>
                          <Button variant="outline" size="sm" className="px-4">
                            <Edit size={14} className="mr-2" />
                          </Button>
                        </Link>

                        <Link href={"subject/manage"}>
                          <Button
                            className="bg-blue-600 hover:bg-blue-700 px-4"
                            size="sm"
                          >
                            <Album size={14} className="mr-2" />
                            <span className="text-sm">Exams</span>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Student
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <Users size={14} className="text-purple-600" />
                          <span className="text-xs sm:text-sm font-semibold">
                            {item.totalStudents}
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Classrooms
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <LaptopMinimalCheck
                            size={14}
                            className="text-orange-600"
                          />
                          <span className="text-xs sm:text-sm font-semibold">
                            {item.classrooms}
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Lesson
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <UserCheck size={14} className="text-green-600" />
                          <span className="text-xs sm:text-sm font-semibold">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Pagination */}
              <Pagination className="mt-6 justify-center lg:justify-start">
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
              {currentSubjects.map((item, idx) => (
                <Card key={idx} className="p-4 lg:p-6 opacity-60">
                  <div className="flex flex-col gap-4">
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                      <div className="flex gap-4 mb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0 grayscale"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                            <BookText size={14} />
                            {item.category}
                          </p>
                          {item.certified && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 gap-1">
                              <BadgeCheck size={12} /> CERTIFIED
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Action buttons for mobile */}
                      <div className="flex gap-2 mb-4">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex-1"
                          disabled
                        >
                          <Edit size={14} className="mr-2" />
                          <span className="text-xs">Edit</span>
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex-1"
                          disabled
                        >
                          <Eye size={14} className="mr-2" />
                          <span className="text-xs">Exams</span>
                        </Button>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0 grayscale"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <BookText size={14} />
                            {item.category}
                          </p>
                        </div>
                      </div>

                      {/* Certified badge in center */}
                      <div className="flex justify-center">
                        {item.certified && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 gap-2">
                            <BadgeCheck /> CERTIFIED
                          </span>
                        )}
                      </div>

                      {/* Action buttons aligned with image */}
                      <div className="flex gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="px-4"
                          disabled
                        >
                          <Edit size={14} className="mr-2" />
                          <span className="text-sm">Edit</span>
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="px-4"
                          disabled
                        >
                          <Eye size={14} className="mr-2" />
                          <span className="text-sm">Exams</span>
                        </Button>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Student
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <Users size={14} className="text-purple-600" />
                          <span className="text-xs sm:text-sm font-semibold">
                            {item.totalStudents}
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Classrooms
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <BookText size={14} className="text-orange-600" />
                          <span className="text-xs sm:text-sm font-semibold">
                            {item.classrooms}
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Lesson
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <UserCheck size={14} className="text-green-600" />
                          <span className="text-xs sm:text-sm font-semibold">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              <Pagination className="mt-6 justify-center lg:justify-start">
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

                    const shouldRender =
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      Math.abs(currentPage - pageNumber) <= 1;

                    if (!shouldRender) {
                      if (
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