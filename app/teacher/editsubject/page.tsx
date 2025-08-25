"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ChevronDown,
  Check,
  Sparkles,
  FileCheck2,
} from "lucide-react";
import Link from "next/link";

export default function EditSubjectForm() {
  // Mock data for all subjects
  const className = new URLSearchParams("subject") || "Subject Tidak Ditemukan";
  const subjectData = {
    "Learning Basic HTML": {
      name: "Learning Basic HTML",
      category: "Computer Science",
      image: "/teacher/3.jpg",
      description:
        "Learn how to build the structure of a web page using HTML. Perfect for beginners, this course covers essential tags, page layout, links, images, and clean coding practices.",
      teacher: "Budi Zuckerberg",
      examFile: "basichtml.PDF",
    },
    "Object Sketching": {
      name: "Object Sketching",
      category: "Visual Design",
      image: "/teacher/1.jpg",
      description:
        "Learn fundamental sketching techniques for various objects. Master the art of observation, proportion, shading, and detail work to create realistic drawings.",
      teacher: "Sarah Johnson",
      examFile: "object-sketching-exam.PDF",
    },
  };

  const currentSubject = subjectData["Learning Basic HTML"];

  const [subjectName, setSubjectName] = React.useState(currentSubject.name);
  const [subjectDescription, setSubjectDescription] = React.useState(
    currentSubject.description
  );
  const [selectedTopic, setSelectedTopic] = React.useState(
    currentSubject.category
  );
  const [selectedTeacher, setSelectedTeacher] = React.useState(
    currentSubject.teacher
  );
  const [fileName, setFileName] = React.useState(currentSubject.examFile);
  const [subjectImage, setSubjectImage] = React.useState(currentSubject.image);

  const [showTopicDropdown, setShowTopicDropdown] = React.useState(false);
  const [showTeacherDropdown, setShowTeacherDropdown] = React.useState(false);

  const topics = [
    "Visual Design",
    "Business Marketing",
    "Mathematics",
    "Language Arts",
    "Computer Science",
    "Science",
  ];
  const teachers = [
    "Sarah Johnson",
    "Mike Thompson",
    "Lisa Anderson",
    "David Wilson",
    "Budi Zuckerberg",
  ];

  const handleSaveChanges = () => {
    console.log("Saving changes...");
  };

  const handleCancel = () => {
    console.log("Cancelling changes...");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };
  interface FormFieldProps {
    label: string;
    children: React.ReactNode;
    highlighted?: boolean;
  }
  const FormField: React.FC<FormFieldProps> = ({
    label,
    children,
    highlighted = false,
  }) => (
    <div
      className={`${
        highlighted
          ? "border-2 border-dashed border-blue-300 bg-blue-50 p-3 rounded-lg"
          : ""
      }`}
    >
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        {label}
      </label>
      {children}
    </div>
  );
  return (
    <div className="p-3 sm:p-6 min-h-screen bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Link href="/teacher/subject" passHref>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Edit Subject
              </h1>
            </div>
          </Link>
          <Button
            size="lg"
            className="rounded-full w-full sm:w-auto h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base text-white font-semibold bg-gradient-to-r from-[#1a0845] via-[#21337b] to-[#1a0845] hover:from-[#082245] hover:via-[#3955c2] hover:to-[#082245] transition-all duration-500 ease-in-out"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Auto-Fill with AI
          </Button>
        </div>

        <div className="flex items-center mb-6">
          <Link href={`/teacher/subject?subject=${encodeURIComponent}`}>
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium text-gray-500">
                Subject Assigned
              </span>
            </Button>
          </Link>
        </div>

        {/* Main Card */}
        <Card className="bg-white shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Complete the Form
            </h2>

            <div className="space-y-6">
              {/* Subject Image */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="text-sm font-medium text-gray-700">
                  Subject Image
                </label>
                <div className="sm:col-span-2 flex items-center gap-4">
                  <img
                    src={subjectImage}
                    alt="Subject"
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200 mx-auto"
                  />
                  <Button
                    variant="outline"
                    className="bg-gray-900 text-white hover:bg-gray-600 px-6 text-sm ml-auto"
                  >
                    Change Photo
                  </Button>
                </div>
              </div>

              {/* Subject Name */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Subject Name
                </label>
                <div className="sm:col-span-2">
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">
                      Enter Subject Name
                    </p>
                    <input
                      type="text"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                      className="w-full text-sm font-medium text-gray-900 bg-transparent border-none outline-none"
                      placeholder="Enter subject name..."
                    />
                  </div>
                </div>
              </div>

              {/* Subject Description */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-sm font-medium text-gray-700 flex items-start pt-3">
                  Subject Descriptions
                </label>
                <div className="sm:col-span-2">
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">
                      Enter Subject Descriptions
                    </p>
                    <textarea
                      value={subjectDescription}
                      onChange={(e) => setSubjectDescription(e.target.value)}
                      className="w-full text-sm text-gray-900 bg-transparent border-none outline-none resize-none"
                      rows={3}
                      placeholder="Enter subject description..."
                    />
                  </div>
                </div>
              </div>

              {/* Select Topic */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Select Topic
                </label>
                <div className="sm:col-span-2 relative">
                  <button
                    onClick={() => setShowTopicDropdown(!showTopicDropdown)}
                    className="w-full p-3 border border-gray-200 rounded-lg text-left"
                  >
                    <div>
                      <p className="text-xs text-gray-500">Choose Topic</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {selectedTopic}
                        </p>
                        <ChevronDown size={16} className="text-gray-500" />
                      </div>
                    </div>
                  </button>
                  {showTopicDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => {
                            setSelectedTopic(topic);
                            setShowTopicDropdown(false);
                          }}
                          className="w-full p-3 text-left hover:bg-gray-50 flex items-center justify-between text-base"
                        >
                          <span>{topic}</span>
                          {selectedTopic === topic && (
                            <Check size={16} className="text-blue-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Select Teacher */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Select Teacher
                </label>
                <div className="sm:col-span-2 relative">
                  <button
                    onClick={() => setShowTeacherDropdown(!showTeacherDropdown)}
                    className="w-full p-3 border border-gray-200 rounded-lg text-left "
                  >
                    <div>
                      <p className="text-xs text-gray-500">Choose Teacher</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {selectedTeacher}
                        </p>
                        <ChevronDown size={16} className="text-gray-500" />
                      </div>
                    </div>
                  </button>
                  {showTeacherDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {teachers.map((teacher) => (
                        <button
                          key={teacher}
                          onClick={() => {
                            setSelectedTeacher(teacher);
                            setShowTeacherDropdown(false);
                          }}
                          className="w-full p-3 text-left hover:bg-gray-50 flex items-center justify-between text-base"
                        >
                          <span>{teacher}</span>
                          {selectedTeacher === teacher && (
                            <Check size={16} className="text-blue-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Exam File */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Exam File (.PDF)
                </label>
                <div className="sm:col-span-2">
                  <div className="p-3 border border-gray-200 rounded-lg ">
                    <p className="text-xs text-gray-500 mb-1">
                      Upload Your File
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">
                        {fileName}
                      </span>
                      <label className="cursor-pointer">
                        <span className="text-blue-500 hover:text-blue-600 text-sm font-normal">
                          Change File
                        </span>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:justify-end">
                <Button
                  variant="destructive"
                  onClick={handleCancel}
                  className="w-full sm:w-auto px-8 border-red-300 text-white hover:bg-red-600 text-base"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveChanges}
                  className="w-full sm:w-auto px-8 bg-blue-600 hover:bg-blue-700 text-white text-base"
                >
                  Save Changes
                  <Check size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
