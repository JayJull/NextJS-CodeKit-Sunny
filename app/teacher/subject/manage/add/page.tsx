"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  UploadCloud,
  Users,
  School,
  CirclePlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function AddExam() {
  const [topicName, setTopicName] = useState<string>("");
  const [subjectDescriptions, setSubjectDescriptions] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfFileInputRef = useRef<HTMLInputElement>(null);

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAddFileClick = (): void => {
    pdfFileInputRef.current?.click();
  };

  const handleCancel = (): void => {
    setTopicName("");
    setSubjectDescriptions("");
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (pdfFileInputRef.current) {
      pdfFileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Add New Exam
            </h1>
            <Link
              href="/teacher/subject/manage"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Subject Assigned
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full sm:w-auto bg-white border-gray-200"
            >
              <UploadCloud className="w-4 h-4" />
              Import .CSV
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 relative">
                <Image
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=80&h=80&fit=crop"
                  alt="Object Sketching"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  Object Sketching
                </h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-4 h-4 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12 2L13.09 8.26L20.5 7L19.3 13.3L22 18.5L15.7 19.7L12 22L8.3 19.7L2 18.5L4.7 13.3L3.5 7L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <span className="text-sm">Visual Design</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-1">Total Students</p>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    240.520
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-1">Classrooms</p>
                <div className="flex items-center gap-2">
                  <School className="w-5 h-5 text-orange-500" />
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    6.450
                  </span>
                </div>
              </div>
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Exam Name
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
                      isFocused || topicName
                        ? "-top-2 text-xs text-slate-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter Exam Name
                  </span>
                  <Input
                    type="text"
                    value={topicName}
                    onChange={(e) => setTopicName(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0 pt-2">
                  Subject Descriptions
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
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
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isDescriptionFocused || subjectDescriptions
                        ? "-top-2 text-xs text-slate-500"
                        : "top-4 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter Subject Descriptions
                  </span>
                  <textarea
                    value={subjectDescriptions}
                    onChange={(e) => setSubjectDescriptions(e.target.value)}
                    onFocus={() => setIsDescriptionFocused(true)}
                    onBlur={() => setIsDescriptionFocused(false)}
                    className="w-full min-h-[120px] pl-8 sm:pl-10 pr-4 py-4 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 resize-none bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Exam File (.PDF)
                </Label>
                <div className="flex items-center gap-4 flex-1">
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
                    <div className="w-full pl-8 sm:pl-10 pr-4 py-4 sm:py-6 text-sm sm:text-base text-gray-400 border-gray-200 border rounded-xl sm:rounded-2xl bg-white">
                      {selectedFile ? selectedFile.name : "Upload Your File"}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:border-blue-700 px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-xl sm:rounded-2xl text-sm sm:text-base bg-white"
                    onClick={handleAddFileClick}
                  >
                    Add File
                  </Button>
                </div>
                <input
                  ref={pdfFileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handlePdfUpload}
                  className="hidden"
                />
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4">
                <Button
                  className="bg-red-500 text-white hover:bg-red-600 px-4 sm:px-6 py-2 rounded-lg border-red-500 h-10 text-sm sm:text-base w-full sm:w-auto"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center gap-2 h-10 text-sm sm:text-base w-full sm:w-auto">
                  Create Now
                  <CirclePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}
