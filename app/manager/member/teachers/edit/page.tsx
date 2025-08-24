"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Sparkles,
  CirclePlus,
  User,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function AddMember() {
  const [selectedUserId, setSelectedUserId] = useState<string>(
    "User ID: 001 - John Smith"
  );
  const [licenseNumber, setLicenseNumber] = useState<string>("01229332");
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLicenseFocused, setIsLicenseFocused] = useState(false);

  const userDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCancel = (): void => {
    setSelectedUserId("");
    setLicenseNumber("");
    setIsUserDropdownOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Edit Teacher
            </h1>
            <Link
              href="/manager/member/teachers"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Manage Teachers
            </Link>
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

              {/* License Number Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-32 sm:flex-shrink-0">
                  License Number
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isLicenseFocused || licenseNumber
                        ? "-top-2 text-xs text-gray-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-500"
                    }`}
                  >
                    Type License Number
                  </span>
                  <Input
                    type="text"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    onFocus={() => setIsLicenseFocused(true)}
                    onBlur={() => setIsLicenseFocused(false)}
                    className="pl-8 sm:pl-10 py-4 sm:py-5 text-sm sm:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-lg focus:outline-none focus:ring-2 bg-white hover:border-gray-400 transition-colors"
                  />
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
                  Create Now
                  <CirclePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
