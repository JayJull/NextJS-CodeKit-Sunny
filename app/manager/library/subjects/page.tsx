"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import {
  BadgeCheck,
  BadgeX,
  CheckCircle,
  Edit,
  Plus,
  Trash2,
  UploadCloud,
  Users,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SubjectsPage() {
  const subjects = [
    {
      id: 1,
      title: "Object Sketching",
      category: "Visual Design",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Armin Yeager",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 2,
      title: "Digital Domination",
      category: "Business Marketing",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Galang Vamos",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 3,
      title: "Linear Gameplan",
      category: "Mathematics",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Sakura Rose",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 4,
      title: "Learning Basics HTML",
      category: "Computer Science",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Raisa Nur",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 5,
      title: "Digital Domination",
      category: "Business Marketing",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Karina Mine",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
    {
      id: 6,
      title: "Digital Domination",
      category: "Business Marketing",
      image: "/api/placeholder/140/100",
      certified: true,
      classrooms: "6.450",
      teacher: "Karina Mine",
      teacherAvatar: "/api/placeholder/32/32",
      lessonAttached: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(subjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentsubjects = subjects.slice(startIndex, endIndex);

  const handleDeleteSubject = (subjectId: number, subjectTitle: string) => {
    // Implement delete logic here
    console.log(`Deleting subject: ${subjectTitle} with ID: ${subjectId}`);
    // You can add your actual delete API call here
  };

  return (
    <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Manage Subjects
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            View & update your subjects
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-gray-200 w-full sm:w-auto sm:min-w-[140px]"
          >
            <UploadCloud className="w-4 h-4 mr-2" />
            <span className="hidden xs:inline">Import .CSV</span>
            <span className="xs:hidden">Import</span>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full sm:w-auto sm:min-w-[140px] focus-visible:outline-none"
          >
            <Link href="subjects/add" className="flex items-center justify-center">
              <span className="hidden xs:inline">Add Subject</span>
              <span className="xs:hidden">Add</span>
              <Plus className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="published">
        <TabsList className="w-full bg-gray-100 grid grid-cols-2 sm:w-auto sm:flex">
          <TabsTrigger
            value="published"
            className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-3 py-2 text-xs sm:text-sm sm:px-4"
          >
            PUBLISHED
          </TabsTrigger>
          <TabsTrigger
            value="deactivated"
            className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-3 py-2 text-xs sm:text-sm sm:px-4"
          >
            DEACTIVATED
          </TabsTrigger>
        </TabsList>

        {/* Published Tab Content */}
        <TabsContent value="published" className="mt-4 sm:mt-6">
          <div className="space-y-3 sm:space-y-4">
            {currentsubjects.map((subject) => (
              <Card key={subject.id} className="p-3 sm:p-4 shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  {/* Thumbnail - Mobile: Full width, SM+: Left aligned */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-18 sm:w-20 sm:h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <span className="text-xs text-gray-600">Image</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-3 sm:space-y-0">
                    {/* Title and Actions Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      {/* Title Section */}
                      <div className="min-w-0 text-center sm:text-left">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate mb-1">
                          {subject.title}
                        </h3>
                        <p className="text-sm text-gray-600">{subject.category}</p>
                      </div>

                      {/* Certified Badge - Mobile: Center, SM+: Between title and actions */}
                      <div className="flex justify-center sm:flex-1 sm:justify-center lg:justify-start lg:flex-none lg:mx-4">
                        {subject.certified && (
                          <div className="flex items-center gap-1">
                            <BadgeCheck className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-600 uppercase">
                              Certified
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-center sm:justify-end gap-2">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-2 h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="mx-4 sm:mx-0 sm:max-w-md">
                            <AlertDialogHeader className="text-center">
                              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                              </div>
                              <AlertDialogTitle className="text-lg font-semibold text-gray-900">
                                Delete Subject
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-sm text-gray-600 mt-2">
                                Are you sure you want to delete <span className="font-medium text-gray-900">"{subject.title}"</span>? 
                                This action cannot be undone and will permanently remove the subject from all classrooms.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-3">
                              <AlertDialogCancel className="mt-0 flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 order-2 sm:order-1">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction 
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white order-1 sm:order-2"
                                onClick={() => handleDeleteSubject(subject.id, subject.title)}
                              >
                                Delete Subject
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        
                        <Link href={"subjects/edit"}>
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-3 py-2 sm:px-4"
                          >
                            <Edit size={14} className="mr-1 sm:mr-2" />
                            <span className="text-xs sm:text-sm">Edit</span>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200 my-3" />

                    {/* Stats Section - Responsive Grid */}
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 mb-1 text-xs sm:text-sm">Classrooms</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-orange-500" />
                          <span className="font-medium text-sm sm:text-base">{subject.classrooms}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 mb-1 text-xs sm:text-sm">Teacher</span>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                          </div>
                          <span className="font-medium text-sm sm:text-base truncate max-w-[100px] sm:max-w-none">{subject.teacher}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 mb-1 text-xs sm:text-sm">Lesson</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="font-medium text-sm sm:text-base">Attached</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Pagination */}
            <div className="flex justify-center sm:justify-start">
              <Pagination className="mt-6 sm:mt-8">
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      className="text-xs sm:text-sm px-2 sm:px-3"
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;

                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          href="#"
                          isActive={isActive}
                          onClick={() => setCurrentPage(pageNumber)}
                          className="text-xs sm:text-sm w-8 h-8 sm:w-10 sm:h-10 data-[current]:bg-gray-900 data-[current]:text-white"
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
                      className="text-xs sm:text-sm px-2 sm:px-3"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </TabsContent>

        {/* Deactivated Tab Content */}
        <TabsContent value="deactivated" className="mt-4 sm:mt-6">
          <div className="space-y-3 sm:space-y-4">
            {currentsubjects.map((subject) => (
              <Card key={subject.id} className="p-3 sm:p-4 shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-18 sm:w-20 sm:h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <span className="text-xs text-gray-600">Image</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-3 sm:space-y-0">
                    {/* Title and Actions Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      {/* Title Section */}
                      <div className="min-w-0 text-center sm:text-left">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate mb-1">
                          {subject.title}
                        </h3>
                        <p className="text-sm text-gray-600">{subject.category}</p>
                      </div>

                      {/* Uncertified Badge */}
                      <div className="flex justify-center sm:flex-1 sm:justify-center lg:justify-start lg:flex-none lg:mx-4">
                        {subject.certified && (
                          <div className="flex items-center gap-1">
                            <BadgeX className="w-4 h-4 text-red-600" />
                            <span className="text-xs font-medium text-red-600 uppercase">
                              Uncertified
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-center sm:justify-end gap-2">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-2 h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="mx-4 sm:mx-0 sm:max-w-md">
                            <AlertDialogHeader className="text-center">
                              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                              </div>
                              <AlertDialogTitle className="text-lg font-semibold text-gray-900">
                                Delete Subject
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-sm text-gray-600 mt-2">
                                Are you sure you want to delete <span className="font-medium text-gray-900">"{subject.title}"</span>? 
                                This action cannot be undone and will permanently remove the subject from all classrooms.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-3">
                              <AlertDialogCancel className="mt-0 flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 order-2 sm:order-1">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction 
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white order-1 sm:order-2"
                                onClick={() => handleDeleteSubject(subject.id, subject.title)}
                              >
                                Delete Subject
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        
                        <Link href={"subjects/edit"}>
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-3 py-2 sm:px-4"
                          >
                            <Edit size={14} className="mr-1 sm:mr-2" />
                            <span className="text-xs sm:text-sm">Edit</span>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200 my-3" />

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 mb-1 text-xs sm:text-sm">Classrooms</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-orange-500" />
                          <span className="font-medium text-sm sm:text-base">{subject.classrooms}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 mb-1 text-xs sm:text-sm">Teacher</span>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                          </div>
                          <span className="font-medium text-sm sm:text-base truncate max-w-[100px] sm:max-w-none">{subject.teacher}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 mb-1 text-xs sm:text-sm">Lesson</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="font-medium text-sm sm:text-base">Attached</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Pagination */}
            <div className="flex justify-center sm:justify-start">
              <Pagination className="mt-6 sm:mt-8">
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      className="text-xs sm:text-sm px-2 sm:px-3"
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;

                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          href="#"
                          isActive={isActive}
                          onClick={() => setCurrentPage(pageNumber)}
                          className="text-xs sm:text-sm w-8 h-8 sm:w-10 sm:h-10 data-[current]:bg-gray-900 data-[current]:text-white"
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
                      className="text-xs sm:text-sm px-2 sm:px-3"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}