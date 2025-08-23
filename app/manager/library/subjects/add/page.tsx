"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Sparkles, Image, CirclePlus, Pocket } from "lucide-react";
import Link from "next/link";

export default function AddSubject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [topicName, setTopicName] = useState<string>("");
  const [subjectDescriptions, setSubjectDescriptions] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const [isTeacherDropdownOpen, setIsTeacherDropdownOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfFileInputRef = useRef<HTMLInputElement>(null);
  const topicDropdownRef = useRef<HTMLDivElement>(null);
  const teacherDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        topicDropdownRef.current &&
        !topicDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTopicDropdownOpen(false);
      }
      if (
        teacherDropdownRef.current &&
        !teacherDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTeacherDropdownOpen(false);
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

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAddPhotoClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleAddFileClick = (): void => {
    pdfFileInputRef.current?.click();
  };

  const handleCancel = (): void => {
    setSelectedImage(null);
    setTopicName("");
    setSubjectDescriptions("");
    setSelectedTopic("");
    setSelectedTeacher("");
    setSelectedFile(null);
    setIsTopicDropdownOpen(false);
    setIsTeacherDropdownOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (pdfFileInputRef.current) {
      pdfFileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Add New Subjects
            </h1>
            <Link
              href="/manager/library/subjects"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Manage Subjects
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Subject Image
                </Label>
                <div className="flex items-center gap-4 sm:gap-8 flex-1">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center flex-shrink-0">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Topic preview"
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
                  Subject Name
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
                    Enter Subject Name
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
                  Select Topic
                </Label>
                <div className="relative flex-1" ref={topicDropdownRef}>
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
                    onClick={() => setIsTopicDropdownOpen(!isTopicDropdownOpen)}
                  >
                    <span
                      className={
                        selectedTopic ? "text-gray-900" : "text-gray-400"
                      }
                    >
                      {selectedTopic || "Choose Topic"}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isTopicDropdownOpen ? "rotate-180" : ""
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
                  {isTopicDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg z-20 max-h-48 overflow-y-auto">
                      {[
                        { value: "mathematics", label: "Mathematics" },
                        { value: "science", label: "Science" },
                        { value: "history", label: "History" },
                        { value: "english", label: "English" },
                        { value: "physics", label: "Physics" },
                        { value: "chemistry", label: "Chemistry" },
                        { value: "biology", label: "Biology" },
                      ].map((topic) => (
                        <div
                          key={topic.value}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm sm:text-base text-gray-700 bg-white border-b border-gray-100 last:border-b-0 first:rounded-t-xl last:rounded-b-xl"
                          onClick={() => {
                            setSelectedTopic(topic.label);
                            setIsTopicDropdownOpen(false);
                          }}
                        >
                          {topic.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Select Teacher
                </Label>
                <div className="relative flex-1" ref={teacherDropdownRef}>
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div
                    className="w-full pl-8 sm:pl-10 pr-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 border rounded-xl sm:rounded-2xl bg-white cursor-pointer flex items-center justify-between"
                    onClick={() =>
                      setIsTeacherDropdownOpen(!isTeacherDropdownOpen)
                    }
                  >
                    <span
                      className={
                        selectedTeacher ? "text-gray-900" : "text-gray-400"
                      }
                    >
                      {selectedTeacher || "Choose Teacher"}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isTeacherDropdownOpen ? "rotate-180" : ""
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
                  {isTeacherDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg z-20 max-h-48 overflow-y-auto">
                      {[
                        { value: "john-smith", label: "John Smith" },
                        { value: "jane-doe", label: "Jane Doe" },
                        { value: "michael-johnson", label: "Michael Johnson" },
                        { value: "sarah-wilson", label: "Sarah Wilson" },
                        { value: "david-brown", label: "David Brown" },
                        { value: "emily-davis", label: "Emily Davis" },
                      ].map((teacher) => (
                        <div
                          key={teacher.value}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm sm:text-base text-gray-700 bg-white border-b border-gray-100 last:border-b-0 first:rounded-t-xl last:rounded-b-xl"
                          onClick={() => {
                            setSelectedTeacher(teacher.label);
                            setIsTeacherDropdownOpen(false);
                          }}
                        >
                          {teacher.label}
                        </div>
                      ))}
                    </div>
                  )}
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
  );
}
