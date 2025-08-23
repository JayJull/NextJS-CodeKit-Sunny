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
import Image from "next/image";

interface Subject {
  id: number;
  title: string;
  category: string;
  image: string;
  certified: boolean;
  classrooms: string;
  teacher: string;
  lessonAttached: boolean;
  status: "published" | "deactivated";
}

export default function SubjectsPage() {
  const subjects = [
    {
      id: 1,
      title: "Object Sketching",
      category: "Visual Design",
      image:
        "https://plus.unsplash.com/premium_photo-1681494761177-68de49e52b60?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000",
      certified: true,
      classrooms: "6.450",
      teacher: "Armin Yeager",
      lessonAttached: true,
      status: "published" as const,
    },
    {
      id: 2,
      title: "Digital Domination",
      category: "Business Marketing",
      image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&q=80&w=2000",
      certified: true,
      classrooms: "6.450",
      teacher: "Galang Vamos",
      lessonAttached: true,
      status: "published" as const,
    },
    {
      id: 3,
      title: "Linear Gameplan",
      category: "Mathematics",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&q=80&w=2000",
      certified: true,
      classrooms: "6.450",
      teacher: "Sakura Rose",
      lessonAttached: true,
      status: "published" as const,
    },
    {
      id: 4,
      title: "Learning Basics HTML",
      category: "Computer Science",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&q=80&w=2000",
      certified: true,
      classrooms: "6.450",
      teacher: "Raisa Nur",
      lessonAttached: true,
      status: "published" as const,
    },
    {
      id: 5,
      title: "Business Strategy",
      category: "Business Marketing",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=80&w=2000",
      certified: true,
      classrooms: "6.450",
      teacher: "Karina Mine",
      lessonAttached: true,
      status: "published" as const,
    },
    {
      id: 6,
      title: "Marketing Insights",
      category: "Business Marketing",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&q=80&w=2000",
      certified: false,
      classrooms: "6.450",
      teacher: "Karina Mine",
      lessonAttached: true,
      status: "deactivated" as const,
    },
    {
      id: 7,
      title: "Advanced Photography",
      category: "Visual Design",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&q=80&w=2000",
      certified: true,
      classrooms: "2.150",
      teacher: "John Smith",
      lessonAttached: true,
      status: "published" as const,
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("published");
  const itemsPerPage: number = 5;

  const filteredSubjects = subjects.filter(
    (subject) => subject.status === activeTab
  );
  const totalPages: number = Math.ceil(filteredSubjects.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentsubjects: Subject[] = filteredSubjects.slice(
    startIndex,
    endIndex
  );

  const handleDeleteSubject = (
    subjectId: number,
    subjectTitle: string
  ): void => {
    console.log(`Deleting subject: ${subjectTitle} with ID: ${subjectId}`);
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

      <Tabs value={activeTab} onValueChange={setActiveTab}>
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
            {currentsubjects.map((subject: Subject) => (
              <Card
                key={subject.id}
                className="p-4 shadow-sm border border-gray-200"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="w-full h-48 lg:w-32 lg:h-24 bg-gray-200 rounded-lg overflow-hidden relative">
                      <Image
                        src={subject.image}
                        alt={subject.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 300px"
                        className={`object-cover ${
                          !subject.certified ? "grayscale" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 gap-4 lg:relative">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                          {subject.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {subject.category}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between lg:justify-center items-start sm:items-center gap-4 lg:flex-1">
                        <div className="flex justify-center lg:flex-1 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                          {subject.certified ? (
                            <div className="flex items-center gap-1">
                              <BadgeCheck className="w-4 h-4 text-blue-600" />
                              <span className="text-xs font-medium text-blue-600 uppercase">
                                Certified
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <BadgeX className="w-4 h-4 text-red-600" />
                              <span className="text-xs font-medium text-red-600 uppercase">
                                Uncertified
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 sm:ml-auto">
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
                            <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl border">
                              <AlertDialogHeader className="text-center pb-4">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                  <AlertTriangle className="h-6 w-6 text-red-600" />
                                </div>
                                <AlertDialogTitle className="text-xl font-semibold text-gray-900 mb-2">
                                  Hapus Mata Pelajaran
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-sm text-gray-600 leading-relaxed">
                                  Apakah Anda yakin ingin menghapus mata
                                  pelajaran{" "}
                                  <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                                    "{subject.title}"
                                  </span>
                                  ?
                                  <br />
                                  <br />
                                  <span className="text-red-600 font-medium">
                                    Tindakan ini tidak dapat dibatalkan
                                  </span>{" "}
                                  dan akan menghapus mata pelajaran ini secara
                                  permanen dari semua kelas yang terkait.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                                <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                                  Batal
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium"
                                  onClick={() =>
                                    handleDeleteSubject(
                                      subject.id,
                                      subject.title
                                    )
                                  }
                                >
                                  Ya, Hapus Mata Pelajaran
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <Link href={"subjects/edit"}>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                            >
                              <Edit size={14} className="mr-2" />
                              Edit
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200 mb-3 hidden sm:block" />

                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 lg:grid lg:grid-cols-3 lg:items-center lg:justify-items-center gap-4 lg:gap-8 text-sm text-gray-600 lg:max-w-2xl lg:mx-auto">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Classrooms</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">
                            {subject.classrooms}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Teacher</span>
                        <div className="flex items-center gap-2">
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

            {totalPages > 1 && (
              <Pagination className="mt-8 justify-start">
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setCurrentPage((prev: number) => Math.max(prev - 1, 1))
                      }
                      className={`text-xs sm:text-sm ${
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber: number = index + 1;
                    const isActive: boolean = currentPage === pageNumber;

                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          onClick={() => setCurrentPage(pageNumber)}
                          isActive={isActive}
                          className={`text-xs sm:text-sm w-8 h-8 sm:w-10 sm:h-10 cursor-pointer ${
                            isActive
                              ? "bg-gray-900 text-white hover:bg-gray-800"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((prev: number) =>
                          Math.min(prev + 1, totalPages)
                        )
                      }
                      className={`text-xs sm:text-sm ${
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </TabsContent>

        <TabsContent value="deactivated" className="mt-6">
          <div className="space-y-4">
            {currentsubjects.map((subject: Subject) => (
              <Card
                key={subject.id}
                className="p-4 shadow-sm border border-gray-200 opacity-75"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="w-full h-48 lg:w-32 lg:h-24 bg-gray-200 rounded-lg overflow-hidden relative">
                      <Image
                        src={subject.image}
                        alt={subject.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 300px"
                        className="object-cover grayscale"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 gap-4 lg:relative">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                          {subject.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {subject.category}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between lg:justify-center items-start sm:items-center gap-4 lg:flex-1">
                        <div className="flex justify-center lg:flex-1 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                          <div className="flex items-center gap-1">
                            <BadgeX className="w-4 h-4 text-red-600" />
                            <span className="text-xs font-medium text-red-600 uppercase">
                              Uncertified
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 sm:ml-auto">
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
                            <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl border">
                              <AlertDialogHeader className="text-center pb-4">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                  <AlertTriangle className="h-6 w-6 text-red-600" />
                                </div>
                                <AlertDialogTitle className="text-xl font-semibold text-gray-900 mb-2">
                                  Hapus Mata Pelajaran
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-sm text-gray-600 leading-relaxed">
                                  Apakah Anda yakin ingin menghapus mata
                                  pelajaran{" "}
                                  <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                                    "{subject.title}"
                                  </span>
                                  ?
                                  <br />
                                  <br />
                                  <span className="text-red-600 font-medium">
                                    Tindakan ini tidak dapat dibatalkan
                                  </span>{" "}
                                  dan akan menghapus mata pelajaran ini secara
                                  permanen dari semua kelas yang terkait.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                                <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                                  Batal
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium"
                                  onClick={() =>
                                    handleDeleteSubject(
                                      subject.id,
                                      subject.title
                                    )
                                  }
                                >
                                  Ya, Hapus Mata Pelajaran
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <Link href={"subjects/edit"}>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                            >
                              <Edit size={14} className="mr-2" />
                              Edit
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200 mb-3 hidden sm:block" />

                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 lg:grid lg:grid-cols-3 lg:items-center lg:justify-items-center gap-4 lg:gap-8 text-sm text-gray-600 lg:max-w-2xl lg:mx-auto">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Classrooms</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">
                            {subject.classrooms}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 mb-1">Teacher</span>
                        <div className="flex items-center gap-2">
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

            {currentsubjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No deactivated subjects found.</p>
              </div>
            )}

            {totalPages > 1 && (
              <Pagination className="mt-8 justify-start">
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setCurrentPage((prev: number) => Math.max(prev - 1, 1))
                      }
                      className={`text-xs sm:text-sm ${
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber: number = index + 1;
                    const isActive: boolean = currentPage === pageNumber;

                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          onClick={() => setCurrentPage(pageNumber)}
                          isActive={isActive}
                          className={`text-xs sm:text-sm w-8 h-8 sm:w-10 sm:h-10 cursor-pointer ${
                            isActive
                              ? "bg-gray-900 text-white hover:bg-gray-800"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((prev: number) =>
                          Math.min(prev + 1, totalPages)
                        )
                      }
                      className={`text-xs sm:text-sm ${
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
