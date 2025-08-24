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
  BookOpen,
  Banknote,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function AddGrade() {
  const [gradeName, setGradeName] = useState<string>("");
  const [gradePrice, setGradePrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [isGradeNameFocused, setIsGradeNameFocused] = useState(false);
  const [isGradePriceFocused, setIsGradePriceFocused] = useState(false);
  const [isDurationFocused, setIsDurationFocused] = useState(false);

  const handleCancel = (): void => {
    setGradeName("");
    setGradePrice("");
    setDuration("");
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Add New School Grade
            </h1>
            <Link
              href="/manager/school/grades"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Manage School Grades
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
              {/* Grade Name Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-32 sm:flex-shrink-0">
                  Grade Name
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isGradeNameFocused || gradeName
                        ? "-top-2 text-xs text-gray-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-500"
                    }`}
                  >
                    Enter Grade Name
                  </span>
                  <Input
                    type="text"
                    value={gradeName}
                    onChange={(e) => setGradeName(e.target.value)}
                    onFocus={() => setIsGradeNameFocused(true)}
                    onBlur={() => setIsGradeNameFocused(false)}
                    className="pl-8 sm:pl-10 py-4 sm:py-5 text-sm sm:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-2xl focus:outline-none focus:ring-2 bg-white hover:border-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Grade Price Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-32 sm:flex-shrink-0">
                  Grade Price
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isGradePriceFocused || gradePrice
                        ? "-top-2 text-xs text-gray-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-500"
                    }`}
                  >
                    Enter Tuition Fee
                  </span>
                  <Input
                    type="text"
                    value={gradePrice}
                    onChange={(e) => setGradePrice(e.target.value)}
                    onFocus={() => setIsGradePriceFocused(true)}
                    onBlur={() => setIsGradePriceFocused(false)}
                    className="pl-8 sm:pl-10 py-4 sm:py-5 text-sm sm:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-2xl focus:outline-none focus:ring-2 bg-white hover:border-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Duration in Month Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-32 sm:flex-shrink-0">
                  Duration in Month
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isDurationFocused || duration
                        ? "-top-2 text-xs text-gray-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-500"
                    }`}
                  >
                    Enter Duration
                  </span>
                  <Input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    onFocus={() => setIsDurationFocused(true)}
                    onBlur={() => setIsDurationFocused(false)}
                    className="pl-8 sm:pl-10 py-4 sm:py-5 text-sm sm:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-2xl focus:outline-none focus:ring-2 bg-white hover:border-gray-400 transition-colors"
                  />
                  <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 font-medium">
                    Month
                  </div>
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