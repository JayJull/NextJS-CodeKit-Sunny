"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Sparkles,
  User,
  Phone,
  Mail,
  Lock,
  Venus,
  Mars,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

export default function EditUser() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>("Gilang Zole");
  const [gender, setGender] = useState<string>("male");
  const [phoneNumber, setPhoneNumber] = useState<string>("888372881992");
  const [emailAddress, setEmailAddress] = useState<string>("langze@sunny.com");
  const [password, setPassword] = useState<string>("dasdsa");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("dasdsa");
  const [isFocused, setIsFocused] = useState<{ [key: string]: boolean }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setFullName("");
    setGender("");
    setPhoneNumber("");
    setEmailAddress("");
    setPassword("");
    setPasswordConfirmation("");
    setIsFocused({});
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFocus = (field: string) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  useEffect(() => {
    setSelectedImage(
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    );
  }, []);

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Edit User
            </h1>
            <Link
              href="/manager/user/user-lists"
              className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Manage Users
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
              {/* User Profile Image */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  User Profile
                </Label>
                <div className="flex items-center gap-4 sm:gap-8 flex-1">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center flex-shrink-0">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="User profile preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
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

              {/* Full Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-4 sm:pt-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Full Name
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isFocused.fullName || fullName
                        ? "-top-2 text-xs text-slate-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter Full Name
                  </span>
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onFocus={() => handleFocus("fullName")}
                    onBlur={() => handleBlur("fullName")}
                    className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 bg-white"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Gender
                </Label>

                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* Male Container */}
                  <div
                    className="flex items-center pl-4 pr-4 py-4 sm:py-6 text-sm sm:text-base 
    border border-gray-200 rounded-xl sm:rounded-2xl bg-white cursor-pointer flex-1"
                    onClick={() => setGender("male")}
                  >
                    <div className="flex items-center text-gray-500">
                      <Mars className="w-5 h-5" />
                      <div className="h-5 w-px bg-gray-300 mx-3"></div>
                    </div>
                    <label
                      htmlFor="male"
                      className="text-sm sm:text-base text-gray-700 cursor-pointer"
                    >
                      Male
                    </label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="ml-auto w-4 h-4 appearance-none rounded-full border border-gray-400 
                 checked:bg-gray-700 checked:ring-1 checked:ring-gray-500"
                    />
                  </div>

                  {/* Female Container */}
                  <div
                    className="flex items-center pl-4 pr-4 py-4 sm:py-6 text-sm sm:text-base 
    border border-gray-200 rounded-xl sm:rounded-2xl bg-white cursor-pointer flex-1"
                    onClick={() => setGender("female")}
                  >
                    <div className="flex items-center text-gray-500">
                      <Venus className="w-5 h-5" />
                      <div className="h-5 w-px bg-gray-300 mx-3"></div>
                    </div>
                    <label
                      htmlFor="female"
                      className="text-sm sm:text-base text-gray-700 cursor-pointer"
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="ml-auto w-4 h-4 appearance-none rounded-full border border-gray-400 
                 checked:bg-gray-700 checked:ring-1 checked:ring-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Phone Number
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isFocused.phoneNumber || phoneNumber
                        ? "-top-2 text-xs text-slate-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter your Phone Number
                  </span>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onFocus={() => handleFocus("phoneNumber")}
                    onBlur={() => handleBlur("phoneNumber")}
                    className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 bg-white"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Email Address
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isFocused.emailAddress || emailAddress
                        ? "-top-2 text-xs text-slate-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter your Email Address
                  </span>
                  <Input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    onFocus={() => handleFocus("emailAddress")}
                    onBlur={() => handleBlur("emailAddress")}
                    className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 bg-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Password
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isFocused.password || password
                        ? "-top-2 text-xs text-slate-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter your Password
                  </span>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => handleFocus("password")}
                    onBlur={() => handleBlur("password")}
                    className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 bg-white"
                  />
                </div>
              </div>

              {/* Password Confirmation */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                  Password Confirmation
                </Label>
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10 flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span
                    className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                      isFocused.passwordConfirmation || passwordConfirmation
                        ? "-top-2 text-xs text-slate-500"
                        : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                    }`}
                  >
                    Enter your Password Confirmation
                  </span>
                  <Input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    onFocus={() => handleFocus("passwordConfirmation")}
                    onBlur={() => handleBlur("passwordConfirmation")}
                    className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 bg-white"
                  />
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
