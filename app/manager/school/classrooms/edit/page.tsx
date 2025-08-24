"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Sparkles, Image, BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function AddClassroom() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [classroomName, setClassroomName] = useState<string>("Multimedia 3B");
  const [selectedGrade, setSelectedGrade] = useState<string>("Grade 5");
  const [isFocused, setIsFocused] = useState(false);
  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const gradeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        gradeDropdownRef.current &&
        !gradeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsGradeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleCancel = (): void => {
    setSelectedImage(null);
    setClassroomName("");
    setSelectedGrade("");
    setIsGradeDropdownOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    setSelectedImage(
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&crop=center"
    );
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Edit Classroom
            </h1>
            <Link
              href="/manager/school/classrooms"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Manage Classrooms
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

      <div className="mt-5 sm:mt-6 space-y-6 flex-1 pb-6">
        <div>
          <Card className="bg-white border border-gray-200 shadow-sm rounded-2xl">
            <CardTitle className="p-4 sm:p-6 pb-0 text-lg sm:text-xl text-gray-900">
              Complete the Form
            </CardTitle>
            <CardContent className="p-4 sm:p-6 space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Classroom Image
                </Label>
                <div className="flex items-center gap-4 sm:gap-8 flex-1">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center flex-shrink-0">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Classroom preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Image className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-900 text-white hover:bg-gray-700 border-gray-900 px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-xl sm:rounded-2xl text-sm sm:text-base flex-1 sm:flex-initial sm:ml-auto"
                    onClick={handleAddPhotoClick}
                  >
                    Add Photo
                  </Button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-4 sm:pt-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Classroom Name
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isFocused || classroomName
                        ? "-top-2 text-xs text-slate-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter Classroom Name
                  </span>
                  <Input
                    type="text"
                    value={classroomName}
                    onChange={(e) => setClassroomName(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Select Grade
                </Label>
                <div className="relative flex-1" ref={gradeDropdownRef}>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div
                    className="w-full pl-8 sm:pl-10 pr-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 border rounded-xl sm:rounded-2xl bg-white cursor-pointer flex items-center justify-between"
                    onClick={() => setIsGradeDropdownOpen(!isGradeDropdownOpen)}
                  >
                    <span
                      className={
                        selectedGrade ? "text-gray-900" : "text-gray-400"
                      }
                    >
                      {selectedGrade || "Choose Grade"}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isGradeDropdownOpen ? "rotate-180" : ""
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
                  {isGradeDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg z-20 overflow-hidden">
                      <div className="max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {[
                          { value: "grade-1", label: "Grade 1" },
                          { value: "grade-2", label: "Grade 2" },
                          { value: "grade-3", label: "Grade 3" },
                          { value: "grade-4", label: "Grade 4" },
                          { value: "grade-5", label: "Grade 5" },
                        ].map((grade) => (
                          <div
                            key={grade.value}
                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm sm:text-base text-gray-700 bg-white border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                            onClick={() => {
                              setSelectedGrade(grade.label);
                              setIsGradeDropdownOpen(false);
                            }}
                          >
                            {grade.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4">
                <Button
                  className="bg-red-500 text-white hover:bg-red-600 px-4 sm:px-6 py-2 rounded-lg border-red-500 h-10 text-sm sm:text-base w-full sm:w-auto"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center gap-2 h-10 text-sm sm:text-base w-full sm:w-auto">
                  Save Changes
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
