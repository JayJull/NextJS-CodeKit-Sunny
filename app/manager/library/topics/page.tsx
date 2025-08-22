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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TopicsPage() {
  const topics = [
    {
      icon: <BookText className="w-6 h-6" />,
      title: "Mathematics",
      subjects: "240 Subjects",
      certified: true,
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Visual Design",
      subjects: "240 Subjects",
      certified: true,
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Marketing",
      subjects: "240 Subjects",
      certified: true,
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Science",
      subjects: "240 Subjects",
      certified: true,
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      subjects: "240 Subjects",
      certified: true,
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      subjects: "240 Subjects",
      certified: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(topics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTopics = topics.slice(startIndex, endIndex);

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

                <div className="flex flex-1 items-center justify-center sm:w-32 sm:flex-shrink-0">
                  {topic.certified && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">
                          <BadgeCheck />
                        </span>
                      </div>
                      <span className="text-sm font-medium">CERTIFIED</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 justify-end sm:justify-center sm:w-32 sm:flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 h-8 w-8 text-gray-400 hover:text-gray-600"
                  >
                    <Trash2 size={16} />
                  </Button>
                  <Link href={"topics/edit"}>
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

                <div className="flex flex-1 items-center justify-center sm:w-32 sm:flex-shrink-0">
                  {topic.certified && (
                    <div className="flex items-center gap-2 text-red-600">
                      <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">
                          <BadgeX />
                        </span>
                      </div>
                      <span className="text-sm font-medium">UNCERTIFIED</span>
                    </div>
                  )}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 justify-end sm:justify-center sm:w-32 sm:flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 h-8 w-8 text-gray-400 hover:text-gray-600"
                  >
                    <Trash2 size={16} />
                  </Button>
                  <Link href={"topics/edit"}>
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
