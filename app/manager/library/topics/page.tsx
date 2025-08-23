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
  BookText,
  Edit,
  FileText,
  Paintbrush,
  Briefcase,
  BarChart3,
  Code,
  Plus,
  Trash2,
  BadgeX,
  BadgeCheck,
  UploadCloud,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";

interface Topic {
  icon: JSX.Element;
  title: string;
  subjects: string;
  certified: boolean;
  status: "published" | "deactivated";
}

export default function TopicsPage() {
  const topics: Topic[] = [
    {
      icon: <BookText className="w-6 h-6" />,
      title: "Mathematics",
      subjects: "240 Subjects",
      certified: true,
      status: "published",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Visual Design",
      subjects: "240 Subjects",
      certified: true,
      status: "published",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Marketing",
      subjects: "240 Subjects",
      certified: true,
      status: "published",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Science",
      subjects: "240 Subjects",
      certified: true,
      status: "published",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      subjects: "240 Subjects",
      certified: true,
      status: "published",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Mobile Development",
      subjects: "180 Subjects",
      certified: false,
      status: "deactivated",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Mobile Development",
      subjects: "380 Subjects",
      certified: true,
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
            Manage Topics
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View & update your topics
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
            <Link href="topics/add">
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
            {currentTopics.map((topic, idx) => (
              <Card
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {topic.icon}
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <FileText size={14} />
                      <span>{topic.subjects}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-center sm:flex-1 sm:w-32 sm:flex-shrink-0">
                  {topic.certified && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">
                          <BadgeCheck />
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium">
                        CERTIFIED
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 sm:hidden">
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
                            Apakah Anda yakin ingin menghapus mata pelajaran{" "}
                            <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                              "{topic.title}"
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
                            onClick={() => handleDeleteSubject(topic.title)}
                          >
                            Ya, Hapus Mata Pelajaran
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Link href={"topics/edit"}>
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

                <div className="hidden sm:flex items-center gap-2 sm:ml-auto">
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
                          Apakah Anda yakin ingin menghapus mata pelajaran{" "}
                          <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                            "{topic.title}"
                          </span>
                          ?
                          <br />
                          <br />
                          <span className="text-red-600 font-medium">
                            Tindakan ini tidak dapat dibatalkan
                          </span>{" "}
                          dan akan menghapus mata pelajaran ini secara permanen
                          dari semua kelas yang terkait.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                        <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                          Batal
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium"
                          onClick={() => handleDeleteSubject(topic.title)}
                        >
                          Ya, Hapus Mata Pelajaran
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <Link href={"topics/edit"}>
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
            {currentTopics.map((topic, idx) => (
              <Card
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 shadow-sm border border-gray-200 opacity-75"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 grayscale">
                    {topic.icon}
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <FileText size={14} />
                      <span>{topic.subjects}</span>
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
                      UNCERTIFIED
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:hidden">
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
                            Apakah Anda yakin ingin menghapus mata pelajaran{" "}
                            <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                              "{topic.title}"
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
                            onClick={() => handleDeleteSubject(topic.title)}
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

                <div className="hidden sm:flex items-center gap-2 sm:ml-auto">
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
                          Apakah Anda yakin ingin menghapus mata pelajaran{" "}
                          <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                            "{topic.title}"
                          </span>
                          ?
                          <br />
                          <br />
                          <span className="text-red-600 font-medium">
                            Tindakan ini tidak dapat dibatalkan
                          </span>{" "}
                          dan akan menghapus mata pelajaran ini secara permanen
                          dari semua kelas yang terkait.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                        <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                          Batal
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium"
                          onClick={() => handleDeleteSubject(topic.title)}
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
              </Card>
            ))}

            {currentTopics.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No deactivated topics found.</p>
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
