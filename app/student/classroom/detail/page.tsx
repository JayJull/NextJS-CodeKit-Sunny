"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

import {
  AlertCircle,
  BadgeCheck,
  BadgeDollarSign,
  BarcodeIcon,
  Book,
  BookOpen,
  BookOpenCheck,
  BookText,
  Calendar,
  CalendarDays,
  ChartBarDecreasingIcon,
  Check,
  CheckCircle2,
  Code2,
  Download,
  DownloadCloud,
  DownloadIcon,
  FileDown,
  FileQuestionIcon,
  FileText,
  Flag,
  Globe,
  KeyRound,
  Mail,
  MessageSquare,
  MoveLeft,
  Percent,
  PhoneCall,
  ToolCase,
  Upload,
  UploadCloud,
  Users,
  Wallet,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation"; // untuk app router

const transactions = [
  {
    image: "/student/multimedia.png",
    title: "Multimedia 3A",
    grade: 12,
    amount: "190.000",
    status: "pending",
  },
];

export default function page() {
  const router = useRouter();
  // state untuk file & status upload
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus(null); // reset alert kalau ganti file
  };

  const handleSubmit = () => {
    if (file) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Subject Details</h1>
          <p className="text-muted-foreground">
            <MoveLeft className="inline-block mr-2" />
            Classroom Details
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Download size={16} />
          Import .CSV
        </button>
      </div>

      {/* Grid: Classroom & Transfer Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Exam Details</h2>
          <Card className="p-6 flex flex-col gap-4 rounded-xl shadow-sm">
            {/* Thumbnail */}
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-xl border border-gray-300 bg-white  flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-gray-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Basic Challenge Pro
                </h2>
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <FileText className="w-4 h-4" />
                  33 Submissions
                </p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-around gap-6 py-6 px-4 sm:px-6 md:px-8 border border-gray-200 rounded-lg bg-white">
              {/* Created At */}
              <div className="text-lg">
                <p className="text-gray-500 mb-1">Created at</p>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">
                    21 May 2025
                  </span>
                </div>
              </div>

              {/* Curriculum */}
              <div className="text-lg">
                <p className="text-gray-500 mb-1">Curriculum</p>
                <div className="flex items-center gap-2">
                  <Book className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-gray-900">
                    Up-to-date
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-sm text-muted-foreground leading-relaxed">
              <h3>Subject Description</h3>
              <p className="mt-2 text-sm font-semibold">
                In this lesson, you’ll learn how to build the basic structure of
                a web page using HTML (HyperText Markup Language), making it
                perfect for beginners who want to understand how to structure a
                page, add images, create links, and write clean, organized code.
                We’ll cover everything from essential HTML tags and page layout
                to developing good coding habits that will help you create
                readable and well-structured websites from the very beginning.
              </p>
            </div>

            {/* Footer Section */}
            <div className="flex gap-2">
              {/* Left Button */}
              <Button
                disabled
                className="bg-red-200 hover:bg-red-100 text-red-700 px-4 py-6"
              >
                <Flag className="w-6 h-6" />
              </Button>

              {/* Right Button */}
              <Button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-6 justify-center gap-2">
                <DownloadIcon className="w-4 h-4" />
                Download Exam
              </Button>
            </div>

            {/* Warning Section */}
            <div className="flex items-center text-muted-foreground text-xs gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Pay tuition to download material.</span>
            </div>
          </Card>

        <h2 className="text-base font-semibold">Submit Your Submission</h2>
          <Card className="rounded-xl shadow-md p-4 max-w-md">
      <CardContent className="space-y-4">
        {/* Title */}
        <div className="space-y-2">
      {/* Label */}
      <p className="text-sm text-gray-500">Upload File</p>

      {/* Upload Box */}
      <div className="flex items-center justify-between bg-gray-50 border rounded-lg p-3">
        <div className="flex items-center gap-2">
          <Upload className="w-5 h-5 text-gray-500" />
          <span className="font-medium text-gray-800">
            {file ? file.name : "Upload Your File"}
          </span>
        </div>

        {/* Custom Button */}
        <label
          htmlFor="file-upload"
          className="text-blue-600 text-sm font-medium cursor-pointer hover:underline"
        >
          {file ? "Change File" : "Add File"}
        </label>

        {/* Hidden Input */}
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 py-5"
        >
          <Upload className="w-4 h-4" />
          Submit Submission
        </Button>

        {/* Alert */}
        {status === "success" && (
          <div className="mt-3 p-3 rounded-lg border border-green-500 text-green-700 text-sm">
            ✅ Your submission has been uploaded successfully.
          </div>
        )}
        {status === "error" && (
          <div className="mt-3 p-3 rounded-lg border border-red-500 text-red-700 text-sm">
            ⚠️ Please select a file before submitting.
          </div>
        )}
      </CardContent>
    </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Teacher Information</h2>
          <Card className="p-6 w-full flex flex-col items-center space-y-4 text-sm rounded-xl shadow-md">
            {/* Profile Photo with Blue Border */}
            <div className="relative">
              <img
                src="/classroom/teacher.png" // ganti dengan path gambar kamu
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
              />
              {/* Check icon */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-600 rounded-full p-1 shadow-md">
                <BadgeCheck className="text-white w-4 h-4" />
              </div>
            </div>

            {/* Name and ID */}
            <div className="text-center">
              <h3 className="font-semibold text-lg">Shen Woaini</h3>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                <BarcodeIcon size={14} className="text-muted-foreground" />
                52053200
              </p>
            </div>

            {/* Buttons */}
            <Button
              variant="outline"
              className="gap-2 w-3/4 justify-center text-muted-foreground"
            >
              <PhoneCall size={16} />
              Call
            </Button>

            <Button
              variant="outline"
              className="gap-2 w-3/4 justify-center text-muted-foreground"
            >
              <MessageSquare size={16} />
              Message
            </Button>
          </Card>

          <Card className="p-3 w-full flex items-center gap-4 text-sm rounded-xl shadow-md">
            {/* Kiri: Image */}
            <img
              src="/student/multimedia.png"
              alt="Classroom"
              className="w-28 h-20 rounded-md object-cover"
            />

            {/* Kanan: Text */}
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-gray-900">
                Learn Basics HTML
              </h3>
              <p className="flex items-center gap-2 text-gray-600">
                <ToolCase className="w-4 h-4" />
                <span className="font-semibold">Computer Science</span>
              </p>
            </div>
          </Card>

          <h2 className="text-lg font-semibold">Classroom Details</h2>
          <Card className="w-full rounded-2xl shadow-md p-4">
            {/* Header: Image + Badge + Text */}
            <div className="flex justify-between items-start mb-3">
              {/* Kiri: Image */}
              <img
                src="/student/multimedia.png"
                alt="Classroom"
                className="w-30 h-30 rounded-md object-cover"
              />

              {/* Kanan: Badge */}
              <Badge className="bg-yellow-400 text-black text-xs rounded-full px-3 py-1">
                IN PROGRESS
              </Badge>
            </div>

            {/* Judul dan Subjudul */}
            <div className="mb-4">
              <CardTitle className="text-base font-semibold">
                IPS Adventure
              </CardTitle>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <BookOpenCheck className="h-4 w-4 mr-1" />
                Grade 10
              </div>
            </div>

            <div className="w-full rounded-xl border p-4 space-y-4">
              {/* Tuition Fee Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Globe className="h-4 w-4 mr-2" />
                  Tuition Fee
                </div>
                <Badge className="bg-green-300 text-black px-3 py-1 text-xs rounded-full font-bold">
                  PAID
                </Badge>
              </div>

              {/* Divider */}
              <hr className="border-t border-gray-200" />

              {/* Total Student Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  Total Student
                </div>
                <span className="font-bold text-lg text-black">240.000</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
