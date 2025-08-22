"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useState } from "react";

import {
  AlertCircle,
  BadgeCheck,
  BadgeDollarSign,
  BarcodeIcon,
  Book,
  BookOpen,
  BookOpenCheck,
  BookText,
  CalendarDays,
  Check,
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
  Users,
  Wallet,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const transactions = [
  {
    image: "/student/multimedia.png",
    title: "Multimedia 3A",
    grade: 12,
    amount: "190.000",
    status: "pending",
  },
];
const exams = [
  { title: "HTML Tag Explorer", submissions: 33, date: "21 May 2025" },
  { title: "Structure & Syntax Drill", submissions: 33, date: "21 May 2025" },
  { title: "Web Layout Builder", submissions: 33, date: "21 May 2025" },
  { title: "Clean Code Practice", submissions: 33, date: "21 May 2025" },
  { title: "Basic Challenge Pro", submissions: 33, date: "21 May 2025" },
];

export default function page() {
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
          <h2 className="text-lg font-semibold">Subject Details</h2>
          <Card className="p-6 flex flex-col gap-4 rounded-xl shadow-sm">
            {/* Thumbnail */}
            <img
              src="/classroom/image.png" // Ganti path dengan milikmu
              alt="Learn Basics HTML"
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Title and Subject */}
            <div>
              <h3 className="text-xl font-semibold">Learn Basics HTML</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <BookText size={14} />
                Computer Science
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <FileQuestionIcon size={14} />
                Quizez
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <KeyRound size={14} />
                Rewards
              </p>
            </div>

            {/* Tabs / Badges */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">

  <button className="border border-gray-300 text-black font-bold px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">
    ABOUT
  </button>

</div>


            {/* Description */}
            <div className="text-sm text-muted-foreground leading-relaxed">
              <h3>Subject Description</h3>
              <p>
                In this lesson, you’ll learn how to build the basic structure of a web page using HTML (HyperText Markup Language), making it perfect for beginners who want to understand how to structure a page, add images, create links, and write clean, organized code.
We’ll cover everything from essential HTML tags and page layout to developing good coding.
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
              <Button
                className="flex-1 bg-blue-600 hover:bg-gray-200 text-white px-4 py-6 justify-center gap-2"
              >
                <DownloadIcon className="w-4 h-4" />
                Download Lesson
              </Button>
            </div>

            {/* Warning Section */}
            <div className="flex items-center text-muted-foreground text-xs gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Pay tuition to download material.</span>
            </div>
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
                <Badge className="bg-green-600 text-black px-3 py-1 text-xs rounded-full font-bold">
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

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Subject Exams</h2>

        {exams.map((exam, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-3 md:items-center bg-white border rounded-xl p-4 shadow-sm space-y-3 md:space-y-0"
          >
            {/* Kiri: Icon + Judul + Submissions */}
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-md bg-gray-100">
                <FileText className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">{exam.title}</p>
                <p className="text-sm text-muted-foreground">
                  {exam.submissions} Submissions
                </p>
              </div>
            </div>

            {/* Tengah: Tanggal */}
            <div className="flex flex-col text-sm text-left md:justify-center md:items-start">
              <span className="text-muted-foreground mb-1">Created at</span>
              <div className="flex items-center space-x-2">
                <CalendarDays className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-black">{exam.date}</span>
              </div>
            </div>

            {/* Kanan: Tombol */}
            <div className="flex justify-start md:justify-end">
              <Button className="bg-[#0F0F2D] text-white rounded-full px-6 py-1 text-sm">
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import React from 'react'

// export default function page() {
//   return (
//     <div>

//     </div>
//   )
// }
