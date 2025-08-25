"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  UploadCloud,
  FileText,
  Mail,
  Phone,
  Download,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubmissionDetails() {
  const [score, setScore] = React.useState("100");

  const studentData = {
    name: "Rain Senorita",
    email: "mazda@sunny.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    verified: true,
    submissionStatus: "FINISHED",
  };

  const examData = {
    title: "Basic Pro Challenge",
    subject: "Objecting Sketching",
    totalSubmissions: 33,
  };

  const handleScoreSubmit = () => {
    console.log("Submitted score:", score);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleScoreSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Submission Details
            </h1>
            <Link
              href="/teacher/subject/manage/detail-exam"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Exam For Subject Details
            </Link>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-gray-200 text-gray-600"
          >
            <UploadCloud className="w-4 h-4" />
            Import .CSV
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {examData.title}
              </h2>
              <p className="text-gray-500">{examData.subject}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FileText className="w-4 h-4" />
              <span>{examData.totalSubmissions} Submissions</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 sm:mb-6">
              Student Details
            </h3>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="space-y-4 mb-6">                
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={studentData.avatar}
                      alt={studentData.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-gray-600 border-gray-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Call Parent</span>
                    <span className="sm:hidden">Call</span>
                  </Button>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {studentData.name}
                    </h4>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">{studentData.email}</span>
                    </div>
                  </div>

                  {studentData.verified && (
                    <div className="flex items-center gap-1 text-blue-600 font-medium text-sm ml-4">
                      <BadgeCheck className="w-4 h-4" />
                      <span>VERIFIED</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h5 className="font-medium text-gray-900">Submission Exam</h5>
                  <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
                    <BadgeCheck className="w-4 h-4" />
                    <span>{studentData.submissionStatus}</span>
                  </div>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 rounded-xl text-white flex items-center justify-center gap-2 mb-3 py-2.5">
                  <Download className="w-4 h-4" />
                  Download Submissions
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  The student has submitted the exam
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 sm:mb-6">
              Submission Score
            </h3>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-12">
              <div className="text-center space-y-6 sm:space-y-8">
                <div>
                  <Input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={score}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      if (
                        value === "" ||
                        (parseInt(value) >= 0 && parseInt(value) <= 100)
                      ) {
                        setScore(value);
                      }
                    }}
                    onKeyPress={handleKeyPress}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center border-none text-gray-900 p-2 sm:p-4 h-auto focus-visible:ring-0 shadow-none bg-transparent leading-none min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                    placeholder="0"
                  />
                  <p className="text-gray-500 mt-2 sm:mt-4 text-base sm:text-lg">Exam Score</p>
                </div>

                <Button
                  onClick={handleScoreSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-base sm:text-lg font-medium"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Update Score
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}