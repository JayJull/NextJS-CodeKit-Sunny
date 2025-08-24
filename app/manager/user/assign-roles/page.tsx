"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Sparkles,
  User,
  Users,
  CheckCircle,
} from "lucide-react";

export default function AssignRoles() {
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [selectedRoleId, setSelectedRoleId] = useState<string>("");
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const userDropdownRef = useRef<HTMLDivElement>(null);
  const roleDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
      if (
        roleDropdownRef.current &&
        !roleDropdownRef.current.contains(event.target as Node)
      ) {
        setIsRoleDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCancel = (): void => {
    setSelectedUserId("");
    setSelectedRoleId("");
    setIsUserDropdownOpen(false);
    setIsRoleDropdownOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Assign Role to User
            </h1>
            <p
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 "
            >
              View & update your Classrooms
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              size="lg"
              className="rounded-full w-full sm:w-auto h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base text-white font-semibold bg-gradient-to-r from-[#1a0845] via-[#21337b] to-[#1a0845] hover:from-[#082245] hover:via-[#3955c2] hover:to-[#082245] transition-all duration-500 ease-in-out"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Auto-Fill with AI
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-6 space-y-6">
        <div>
          <Card className="bg-white border border-gray-200 shadow-sm rounded-2xl">
            <CardTitle className="p-4 sm:p-6 pb-0 text-lg sm:text-xl text-gray-900">
              Complete the Form
            </CardTitle>
            <CardContent className="p-4 sm:p-6 space-y-6 sm:space-y-8">
              {/* Select User ID Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-32 sm:flex-shrink-0">
                  Select User ID
                </Label>
                <div className="relative flex-1" ref={userDropdownRef}>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div
                    className="w-full pl-8 sm:pl-10 pr-10 py-4 sm:py-5 text-sm sm:text-base border-gray-300 focus:border-blue-500 border rounded-lg bg-white cursor-pointer flex items-center justify-between hover:border-gray-400 transition-colors"
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  >
                    <span
                      className={
                        selectedUserId ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {selectedUserId || "Choose User ID"}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isUserDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {isUserDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                      {[
                        {
                          value: "user001",
                          label: "User ID: 001 - John Smith",
                        },
                        {
                          value: "user002",
                          label: "User ID: 002 - Jane Doe",
                        },
                        {
                          value: "user003",
                          label: "User ID: 003 - Michael Johnson",
                        },
                        {
                          value: "user004",
                          label: "User ID: 004 - Sarah Wilson",
                        },
                        {
                          value: "user005",
                          label: "User ID: 005 - David Brown",
                        },
                        {
                          value: "user006",
                          label: "User ID: 006 - Emily Davis",
                        },
                      ].map((user) => (
                        <div
                          key={user.value}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm sm:text-base text-gray-700 bg-white border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => {
                            setSelectedUserId(user.label);
                            setIsUserDropdownOpen(false);
                          }}
                        >
                          {user.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Select Role ID Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-32 sm:flex-shrink-0">
                  Select Role ID
                </Label>
                <div className="relative flex-1" ref={roleDropdownRef}>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div
                    className="w-full pl-8 sm:pl-10 pr-10 py-4 sm:py-5 text-sm sm:text-base border-gray-300 focus:border-blue-500 border rounded-lg bg-white cursor-pointer flex items-center justify-between hover:border-gray-400 transition-colors"
                    onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  >
                    <span
                      className={
                        selectedRoleId ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {selectedRoleId || "Choose Role ID"}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isRoleDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {isRoleDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                      {[
                        {
                          value: "role001",
                          label: "Role ID: 001 - Teacher",
                        },
                        {
                          value: "role002",
                          label: "Role ID: 002 - Senior Teacher",
                        },
                        {
                          value: "role003",
                          label: "Role ID: 003 - Subject Head",
                        },
                        {
                          value: "role004",
                          label: "Role ID: 004 - Department Head",
                        },
                        {
                          value: "role005",
                          label: "Role ID: 005 - Assistant Principal",
                        },
                        {
                          value: "role006",
                          label: "Role ID: 006 - Principal",
                        },
                      ].map((role) => (
                        <div
                          key={role.value}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm sm:text-base text-gray-700 bg-white border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => {
                            setSelectedRoleId(role.label);
                            setIsRoleDropdownOpen(false);
                          }}
                        >
                          {role.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6">
                <Button
                  className="bg-red-500 text-white hover:bg-red-600 px-6 py-3 rounded-lg border-red-500 h-12 text-sm sm:text-base w-full sm:w-auto font-medium"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2 h-12 text-sm sm:text-base w-full sm:w-auto font-medium">
                  Assign Now
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}