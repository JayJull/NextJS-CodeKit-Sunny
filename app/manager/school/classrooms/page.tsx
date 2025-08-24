"use client";
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
  Edit,
  Medal,
  Plus,
  BadgeX,
  UploadCloud,
  AlertTriangle,
  BookOpen,
  Users,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Topic {
  image: string;
  title: string;
  grade: string;
  students: string;
  status: "published" | "deactivated";
}

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
        <Medal className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        It looks like you don't have any data yet.
      </h3>
      <p className="text-sm text-gray-500 text-center max-w-sm">
        Start by adding your first member to see them appear here.
      </p>
    </div>
  );
};

export default function ClassroomPage() {
  const topics: Topic[] = [
    {
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=center",
      title: "Multimedia 3A",
      grade: "Grade 12",
      students: "240.520",
      status: "published",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&crop=center",
      title: "Multimedia 3B",
      grade: "Grade 11",
      students: "6.290.205",
      status: "published",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop&crop=center",
      title: "Multimedia 3C",
      grade: "Grade 10",
      students: "97.500",
      status: "published",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop&crop=center",
      title: "Accounting 1C",
      grade: "Grade 9",
      students: "205.205",
      status: "published",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=center",
      title: "Accounting 2C",
      grade: "Grade 8",
      students: "2.250.600",
      status: "published",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center",
      title: "Science 1A",
      grade: "Grade 7",
      students: "150.300",
      status: "deactivated",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
      title: "Art & Design",
      grade: "Grade 6",
      students: "75.890",
      status: "published",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("published");
  const itemsPerPage = 5;

  const filteredTopics = topics.filter((topic) => topic.status === activeTab);
  const totalPages = Math.ceil(filteredTopics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTopics = filteredTopics.slice(startIndex, endIndex);

  const handleDeleteSubject = (topicsTitle: string): void => {
    console.log(`Deleting subject: ${topicsTitle}`);
  };

  return (
    <div className="p-4 sm:p-2 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Manage School Grades
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View & update your school grades
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
            <Link href="classrooms/add">
              Add Topic <Plus className="w-4 h-4 ml-2" />
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
            {currentTopics.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {currentTopics.map((topic, idx) => (
                  <Card
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-full h-48 lg:w-32 lg:h-24 bg-gray-200 rounded-lg overflow-hidden relative">
                        <Image
                          src={topic.image}
                          alt={topic.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {topic.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <BookOpen size={14} />
                          <span>{topic.grade}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-center sm:flex-1 sm:w-32 sm:flex-shrink-0">
                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <div className="text-md font-normal text-gray-600 truncate">
                          Total Students
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-900 mt-1">
                          <Users size={20} className="text-blue-600" />
                          <span className="font-semibold">
                            {topic.students}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:hidden">
                        <Link href={"classrooms/edit"}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-2 h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Link href={"classrooms/detail"}>
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                        >
                          <Eye size={14} className="mr-2" />
                          Details
                        </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 sm:ml-auto">
                      <Link href={"classrooms/edit"}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href={"classrooms/detail"}>
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                      >
                        <Eye size={14} className="mr-2" />
                        Details
                      </Button>
                      </Link>
                    </div>
                  </Card>
                ))}

                {totalPages > 1 && (
                  <Pagination className="mt-8 justify-start">
                    <PaginationContent className="flex-wrap gap-1">
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            setCurrentPage((prev: number) =>
                              Math.max(prev - 1, 1)
                            )
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
              </>
            )}
          </div>
        </TabsContent>

        <TabsContent value="deactivated" className="mt-6">
          <div className="space-y-4">
            {currentTopics.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {currentTopics.map((topic, idx) => (
                  <Card
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 shadow-sm border border-gray-200 opacity-75"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-full h-48 lg:w-32 lg:h-24 bg-gray-200 rounded-lg overflow-hidden relative">
                        <Image
                          src={topic.image}
                          alt={topic.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 300px"
                          className="object-cover grayscale"
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {topic.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <BookOpen size={14} />
                          <span>{topic.grade}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-center sm:flex-1 sm:w-32 sm:flex-shrink-0">
                      <div className="flex items-center gap-2 text-red-600">
                        <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">
                            <BadgeX />
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium">
                          Deactived
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:hidden">
                        <Link href={"classrooms/edit"}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-2 h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Link href={"classrooms/detail"}>
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                        >
                          <Eye size={14} className="mr-2" />
                          Details
                        </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 sm:ml-auto">
                      <Link href={"classrooms/edit"}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href={"classrooms/detail"}>
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                      >
                        <Eye size={14} className="mr-2" />
                        Details
                      </Button>
                      </Link>
                    </div>
                  </Card>
                ))}

                {totalPages > 1 && (
                  <Pagination className="mt-8 justify-start">
                    <PaginationContent className="flex-wrap gap-1">
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            setCurrentPage((prev: number) =>
                              Math.max(prev - 1, 1)
                            )
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
              </>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
