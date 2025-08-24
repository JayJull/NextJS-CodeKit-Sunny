"use client";
import React, { useState } from "react";
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
  Plus,
  UploadCloud,
  FileText,
  Mail,
  Eye,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Member {
  id: number;
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
  NISN: string;
  userRole: string;
  gender: string;
  status: "pending" | "approved" | "declined";
  classroom: string;
  tuitionFee: string;
}

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
        <FileText className="w-8 h-8 text-gray-400" />
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

export default function TransactionPage() {
  const members: Member[] = [
    {
      id: 1,
      name: "Marry Zola",
      email: "marry@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c27ecb21?w=150&h=150&fit=crop&crop=face",
      verified: true,
      NISN: "5200400",
      userRole: "Student",
      gender: "Female",
      status: "pending",
      classroom: "Multimedia 3",
      tuitionFee: "Rp 190.000",
    },
    {
      id: 2,
      name: "Gilang Zale",
      email: "langze@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      NISN: "5200400",
      userRole: "Student",
      gender: "Male",
      status: "pending",
      classroom: "Multimedia 3",
      tuitionFee: "Rp 190.000",
    },
    {
      id: 3,
      name: "Shen Woaini",
      email: "shen@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: false,
      NISN: "5200400",
      userRole: "Student",
      gender: "Female",
      status: "declined",
      classroom: "Multimedia 3",
      tuitionFee: "Rp 190.000",
    },
    {
      id: 4,
      name: "Armin Yeager",
      email: "armin@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      verified: true,
      NISN: "5200400",
      userRole: "Student",
      gender: "Male",
      status: "approved",
      classroom: "Multimedia 3",
      tuitionFee: "Rp 190.000",
    },
    {
      id: 5,
      name: "Masayoshi Ackerman",
      email: "mazda@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      NISN: "5200400",
      userRole: "Student",
      gender: "Male",
      status: "approved",
      classroom: "Multimedia 3",
      tuitionFee: "Rp 190.000",
    },
    {
      id: 6,
      name: "Kasmine Karina",
      email: "karina@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      verified: true,
      NISN: "5200400",
      userRole: "Student",
      gender: "Female",
      status: "pending",
      classroom: "Multimedia 3",
      tuitionFee: "Rp 190.000",
    },
    {
      id: 7,
      name: "Sakura Rose",
      email: "sakura@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c27ecb21?w=150&h=150&fit=crop&crop=face",
      verified: false,
      NISN: "5200400",
      userRole: "Student",
      gender: "Female",
      status: "declined",
      classroom: "Multimedia 3",
      tuitionFee: "Rp 190.000",
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("recent");
  const itemsPerPage: number = 5;

  const getFilteredMembers = () => {
    if (activeTab === "recent") {
      return members;
    }
    return members.filter((member) => member.status === activeTab);
  };

  const filteredMembers = getFilteredMembers();
  const totalPages: number = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentMembers: Member[] = filteredMembers.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <div className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium uppercase">
            PENDING
          </div>
        );
      case "approved":
        return (
          <div className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium uppercase">
            APPROVED
          </div>
        );
      case "declined":
        return (
          <div className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium uppercase">
            DECLINED
          </div>
        );
      default:
        return null;
    }
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  return (
    <div className="p-4 sm:p-2 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            Manage Transaction
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            View & update your transactions
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl border-gray-200 w-full sm:w-auto text-xs sm:text-sm h-8 sm:h-10"
          >
            <UploadCloud className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Import .CSV
          </Button>

          <Button
            asChild
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full sm:w-auto focus-visible:outline-none text-xs sm:text-sm h-8 sm:h-10"
          >
            <Link href="students/add">
              Add Member <Plus className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full sm:w-auto bg-white border border-gray-200 rounded-lg p-1">
          <TabsTrigger
            value="recent"
            className="flex-1 sm:flex-none text-xs sm:text-base data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-2 sm:px-4 py-2"
          >
            RECENT TRANSACTIONS
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="flex-1 sm:flex-none text-xs sm:text-base data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-2 sm:px-4 py-2"
          >
            PENDING
          </TabsTrigger>
          <TabsTrigger
            value="approved"
            className="flex-1 sm:flex-none text-xs sm:text-base data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-2 sm:px-4 py-2"
          >
            SUCCESS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="mt-4 sm:mt-6">
          <div className="space-y-3 sm:space-y-4">
            {currentMembers.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {currentMembers.map((member: Member) => (
                  <Card
                    key={member.id}
                    className="p-3 sm:p-4 lg:p-6 shadow-sm border border-gray-200 bg-white rounded-lg"
                  >
                    <div className="block sm:hidden space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                              {member.name}
                            </h3>
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {member.email}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(member.status)}
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            NISN Number
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-orange-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">
                                ID
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.NISN}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Classroom
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.classroom}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Tuition Fee
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-3 h-3 text-pink-600" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.tuitionFee}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg w-full h-8"
                      >
                        <Link href={`transactions/detail`}>
                          <Eye size={12} className="mr-2" />
                          <span className="text-xs">Details</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="hidden sm:block">
                      <div className="grid grid-cols-3 items-center gap-4 w-full">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              width={64}
                              height={64}
                              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-sm lg:text-lg font-semibold text-gray-900">
                                {member.name}
                              </h3>
                            </div>
                            <p className="text-xs lg:text-sm text-gray-600 flex items-center gap-2">
                              <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                              {member.email}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          {getStatusBadge(member.status)}
                        </div>

                        <div className="flex justify-end">
                          <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-3 lg:px-4 py-2 text-xs lg:text-sm"
                          >
                            <Link href={`transactions/detail`}>
                              <Eye size={12} className="lg:w-4 lg:h-4 mr-2" />
                              Details
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            NISN Number
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">
                                ID
                              </span>
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.NISN}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            Classroom
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.classroom}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            Tuition Fee
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-pink-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-3 h-3 text-pink-600" />
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.tuitionFee}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {totalPages > 1 && (
                  <Pagination className="mt-6 lg:mt-8 justify-start">
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
                              className={`text-xs sm:text-sm w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 cursor-pointer ${
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

        <TabsContent value="pending" className="mt-4 sm:mt-6">
          <div className="space-y-3 sm:space-y-4">
            {currentMembers.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {currentMembers.map((member: Member) => (
                  <Card
                    key={member.id}
                    className="p-3 sm:p-4 lg:p-6 shadow-sm border border-gray-200 bg-white rounded-lg"
                  >
                    <div className="block sm:hidden space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                              {member.name}
                            </h3>
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {member.email}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(member.status)}
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            NISN Number
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-orange-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">
                                ID
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.NISN}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Classroom
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.classroom}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Tuition Fee
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-3 h-3 text-pink-600" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.tuitionFee}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg w-full h-8"
                      >
                        <Link href={`transactions/detail`}>
                          <Eye size={12} className="mr-2" />
                          <span className="text-xs">Details</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="hidden sm:block">
                      <div className="grid grid-cols-3 items-center gap-4 w-full">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              width={64}
                              height={64}
                              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-sm lg:text-lg font-semibold text-gray-900">
                                {member.name}
                              </h3>
                            </div>
                            <p className="text-xs lg:text-sm text-gray-600 flex items-center gap-2">
                              <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                              {member.email}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          {getStatusBadge(member.status)}
                        </div>

                        <div className="flex justify-end">
                          <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-3 lg:px-4 py-2 text-xs lg:text-sm"
                          >
                            <Link href={`transactions/detail`}>
                              <Eye size={12} className="lg:w-4 lg:h-4 mr-2" />
                              Details
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            NISN Number
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">
                                ID
                              </span>
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.NISN}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            Classroom
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.classroom}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            Tuition Fee
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-pink-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-3 h-3 text-pink-600" />
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.tuitionFee}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {totalPages > 1 && (
                  <Pagination className="mt-6 lg:mt-8 justify-start">
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
                              className={`text-xs sm:text-sm w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 cursor-pointer ${
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

        <TabsContent value="approved" className="mt-4 sm:mt-6">
          <div className="space-y-3 sm:space-y-4">
            {currentMembers.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {currentMembers.map((member: Member) => (
                  <Card
                    key={member.id}
                    className="p-3 sm:p-4 lg:p-6 shadow-sm border border-gray-200 bg-white rounded-lg"
                  >
                    <div className="block sm:hidden space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                              {member.name}
                            </h3>
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {member.email}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(member.status)}
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            NISN Number
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-orange-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">
                                ID
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.NISN}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Classroom
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.classroom}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Tuition Fee
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-3 h-3 text-pink-600" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">
                              {member.tuitionFee}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg w-full h-8"
                      >
                        <Link href={`transactions/detail`}>
                          <Eye size={12} className="mr-2" />
                          <span className="text-xs">Details</span>
                        </Link>
                      </Button>
                    </div>

                    <div className="hidden sm:block">
                      <div className="grid grid-cols-3 items-center gap-4 w-full">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              width={64}
                              height={64}
                              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-sm lg:text-lg font-semibold text-gray-900">
                                {member.name}
                              </h3>
                            </div>
                            <p className="text-xs lg:text-sm text-gray-600 flex items-center gap-2">
                              <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                              {member.email}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          {getStatusBadge(member.status)}
                        </div>

                        <div className="flex justify-end">
                          <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-3 lg:px-4 py-2 text-xs lg:text-sm"
                          >
                            <Link href={`transactions/detail`}>
                              <Eye size={12} className="lg:w-4 lg:h-4 mr-2" />
                              Details
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            NISN Number
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">
                                ID
                              </span>
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.NISN}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            Classroom
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.classroom}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs lg:text-sm text-gray-500 mb-2">
                            Tuition Fee
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-pink-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-3 h-3 text-pink-600" />
                            </div>
                            <span className="text-sm lg:text-base font-semibold text-gray-900">
                              {member.tuitionFee}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {totalPages > 1 && (
                  <Pagination className="mt-6 lg:mt-8 justify-start">
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
                              className={`text-xs sm:text-sm w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 cursor-pointer ${
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
