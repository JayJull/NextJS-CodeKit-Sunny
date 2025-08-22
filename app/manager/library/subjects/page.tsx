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
    <div className="p-4 sm:p-2 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Manage Subjects
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View & update your subjects
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-gray-200 w-full sm:w-auto"
          >
            <UploadCloud className="w-4 h-4 mr-2" />
            Import .CSV
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full sm:w-auto focus-visible:outline-none"
          >
            <Link href="subjects/add">
              Add Subject <Plus className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="published">
        <TabsList className="w-full sm:w-auto bg-gray-100">
          <TabsTrigger
            value="published"
            className="flex-1 sm:flex-none data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-4 py-2"
          >
            PUBLISHED
          </TabsTrigger>
          <TabsTrigger
            value="deactivated"
            className="flex-1 sm:flex-none data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-4 py-2"
          >
            DEACTIVATED
          </TabsTrigger>
        </TabsList>

        <TabsContent value="published" className="mt-6">
          <div className="space-y-4">
            {currentsubjects.map((subject) => (
              <Card key={subject.id} className="p-4 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <span className="text-xs text-gray-600">Image</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                          {subject.title}
                        </h3>
                        <p className="text-sm text-gray-600">{subject.category}</p>
                      </div>

                      <div className="flex-1 flex justify-center  mt-4">
                        {subject.certified && (
                          <div className="flex items-center gap-1">
                            <BadgeCheck className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-600 uppercase">
                              Certified
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 ml-4 mt-2">
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
                          <AlertDialogContent className="sm:max-w-md">
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
                            <AlertDialogFooter className="gap-3 sm:gap-3">
                              <AlertDialogCancel className="mt-0 flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction 
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
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
                            asChild
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                          >
                            <span className="flex items-center">
                              <Edit size={14} className="mr-2" />
                              Edit
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <hr className="border-gray-200 mb-3" />

                    <div className="flex items-center justify-center gap-40 text-sm text-gray-600">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Classrooms</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">{subject.classrooms}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Teacher</span>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                          </div>
                          <span className="font-medium">{subject.teacher}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Lesson</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="font-medium">Attached</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Pagination className="mt-8 justify-start">
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
                    className="text-xs sm:text-sm"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>

        <TabsContent value="deactivated" className="mt-6">
          <div className="space-y-4">
            {currentsubjects.map((subject) => (
              <Card key={subject.id} className="p-4 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <span className="text-xs text-gray-600">Image</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                          {subject.title}
                        </h3>
                        <p className="text-sm text-gray-600">{subject.category}</p>
                      </div>

                      <div className="flex-1 flex justify-center  mt-4">
                        {subject.certified && (
                          <div className="flex items-center gap-1">
                            <BadgeX className="w-4 h-4 text-red-600" />
                            <span className="text-xs font-medium text-red-600 uppercase">
                              Uncertified
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 ml-4 mt-2">
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
                          <AlertDialogContent className="sm:max-w-md">
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
                            <AlertDialogFooter className="gap-3 sm:gap-3">
                              <AlertDialogCancel className="mt-0 flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction 
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
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
                            asChild
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                          >
                            <span className="flex items-center">
                              <Edit size={14} className="mr-2" />
                              Edit
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <hr className="border-gray-200 mb-3" />
                    <div className="flex items-center justify-center gap-40 text-sm text-gray-600">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Classrooms</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">{subject.classrooms}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Teacher</span>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                          </div>
                          <span className="font-medium">{subject.teacher}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Lesson</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="font-medium">Attached</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Pagination className="mt-8 justify-start">
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
                    className="text-xs sm:text-sm"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}