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
  Edit,
  Plus,
  Trash2,
  UploadCloud,
  AlertTriangle,
  User,
  FileText,
  Check,
  X,
  Mail,
} from "lucide-react";
import Link from "next/link";

interface Member {
  id: number;
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
  licenseId: string;
  userRole: string;
  gender: string;
  userStatus: "Active" | "Inactive";
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

export default function MembersPage() {
  const members: Member[] = [
    {
      id: 1,
      name: "Marry Zola",
      email: "marry@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      verified: false,
      licenseId: "5200400",
      userRole: "N/A",
      gender: "Female",
      userStatus: "Inactive",
    },
    {
      id: 2,
      name: "Gilang Zole",
      email: "langze@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      licenseId: "5200400",
      userRole: "Teacher",
      gender: "Male",
      userStatus: "Active",
    },
    {
      id: 3,
      name: "Shen Woaini",
      email: "shen@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true,
      licenseId: "5200400",
      userRole: "Student",
      gender: "Female",
      userStatus: "Active",
    },
    {
      id: 4,
      name: "Armin Yeager",
      email: "armin@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      verified: true,
      licenseId: "5200400",
      userRole: "Teacher",
      gender: "Female",
      userStatus: "Active",
    },
    {
      id: 5,
      name: "Galang Zule",
      email: "langzeu@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      licenseId: "5200400",
      userRole: "Teacher",
      gender: "Male",
      userStatus: "Active",
    },
    {
      id: 6,
      name: "John Inactive",
      email: "john@sunny.com",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: false,
      licenseId: "5200400",
      userRole: "Teacher",
      gender: "Male",
      userStatus: "Inactive",
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("published");
  const itemsPerPage: number = 5;

  const filteredMembers = members.filter((member) => {
    if (activeTab === "published") {
      return member.userStatus === "Active";
    } else if (activeTab === "deactivated") {
      return member.userStatus === "Inactive";
    }
    return true;
  });
  const totalPages: number = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentMembers: Member[] = filteredMembers.slice(startIndex, endIndex);

  const handleDeleteMember = (memberId: number, memberName: string): void => {
    console.log(`Deleting member: ${memberName} with ID: ${memberId}`);
  };

  return (
    <div className="p-4 sm:p-2 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Manage Teacher
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View & update your teachers
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
            <Link href="user-lists/add">
              Add Member <Plus className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full sm:w-auto bg-white border border-gray-200 rounded-lg p-1">
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
            {currentMembers.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {currentMembers.map((member: Member) => (
                  <Card
                    key={member.id}
                    className="p-6 shadow-sm border border-gray-200 bg-white rounded-lg"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="relative">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {member.name}
                            </h3>
                            {member.verified && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-md">
                                <BadgeCheck className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-medium text-blue-600 uppercase">
                                  Verified
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <Mail className="w-4 h-4"/>
                            {member.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
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
                                Hapus Member
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-sm text-gray-600 leading-relaxed">
                                Apakah Anda yakin ingin menghapus member{" "}
                                <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                                  "{member.name}"
                                </span>
                                ?
                                <br />
                                <br />
                                <span className="text-red-600 font-medium">
                                  Tindakan ini tidak dapat dibatalkan
                                </span>{" "}
                                dan akan menghapus member ini secara permanen.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                              <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                                Batal
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium"
                                onClick={() =>
                                  handleDeleteMember(member.id, member.name)
                                }
                              >
                                Ya, Hapus Member
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <Link href={"user-lists/edit"}>
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

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-2">
                          User Role
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-purple-600" />
                          </div>
                          <span
                            className={`font-semibold ${
                              member.userRole === "N/A"
                                ? "text-purple-600"
                                : "text-gray-900"
                            }`}
                          >
                            {member.userRole}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-2">
                          User Status
                        </span>
                        <div className="flex items-center gap-2">
                          {member.userStatus === "Active" ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <X className="w-5 h-5 text-red-600" />
                          )}
                          <span
                            className={`font-semibold ${
                              member.userStatus === "Active"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {member.userStatus}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-2">
                          Gender
                        </span>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              member.gender === "Female"
                                ? "bg-pink-100"
                                : "bg-blue-100"
                            }`}
                          >
                            <User
                              className={`w-3 h-3 ${
                                member.gender === "Female"
                                  ? "text-pink-600"
                                  : "text-blue-600"
                              }`}
                            />
                          </div>
                          <span className="font-semibold text-gray-900">
                            {member.gender}
                          </span>
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
            {currentMembers.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {currentMembers.map((member: Member) => (
                  <Card
                    key={member.id}
                    className="p-6 shadow-sm border border-gray-200 bg-white rounded-lg opacity-75"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="relative">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover grayscale"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {member.name}
                            </h3>
                            {member.verified ? (
                              <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-md">
                                <BadgeCheck className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-medium text-blue-600 uppercase">
                                  Verified
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 px-2 py-1 bg-red-50 rounded-md">
                                <span className="text-xs font-medium text-red-600 uppercase">
                                  Deactivated
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <Mail className="w-4 h-4"/>
                            {member.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
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
                                Hapus Member
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-sm text-gray-600 leading-relaxed">
                                Apakah Anda yakin ingin menghapus member{" "}
                                <span className="font-semibold text-gray-900 inline-block px-2 py-1 bg-gray-100 rounded">
                                  "{member.name}"
                                </span>
                                ?
                                <br />
                                <br />
                                <span className="text-red-600 font-medium">
                                  Tindakan ini tidak dapat dibatalkan
                                </span>{" "}
                                dan akan menghapus member ini secara permanen.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                              <AlertDialogCancel className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg py-2.5 font-medium">
                                Batal
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg py-2.5 font-medium"
                                onClick={() =>
                                  handleDeleteMember(member.id, member.name)
                                }
                              >
                                Ya, Hapus Member
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <Button
                          variant="default"
                          size="sm"
                          className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2"
                        >
                          <Edit size={14} className="mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-2">
                          User Role
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-purple-600" />
                          </div>
                          <span
                            className={`font-semibold ${
                              member.userRole === "N/A"
                                ? "text-purple-600"
                                : "text-gray-900"
                            }`}
                          >
                            {member.userRole}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-2">
                          User Status
                        </span>
                        <div className="flex items-center gap-2">
                          {member.userStatus === "Active" ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <X className="w-5 h-5 text-red-600" />
                          )}
                          <span
                            className={`font-semibold ${
                              member.userStatus === "Active"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {member.userStatus}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-2">
                          Gender
                        </span>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              member.gender === "Female"
                                ? "bg-pink-100"
                                : "bg-blue-100"
                            }`}
                          >
                            <User
                              className={`w-3 h-3 ${
                                member.gender === "Female"
                                  ? "text-pink-600"
                                  : "text-blue-600"
                              }`}
                            />
                          </div>
                          <span className="font-semibold text-gray-900">
                            {member.gender}
                          </span>
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
