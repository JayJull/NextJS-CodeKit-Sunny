"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Sparkles, Image, Pocket, BadgeCheck } from "lucide-react";

export default function AddTopic() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [topicName, setTopicName] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  );
  const [isFocused, setIsFocused] = useState(false);
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
    setTopicName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    setSelectedImage("/logo/logo.png");
  }, []);

  return (
    <div className="p-4 sm:p-2 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Edit Topics
          </h1>
          <a
            href="/manager/library/topics"
            className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Manage Topics
          </a>
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

      <div>
        <Card>
          <CardTitle className="p-4 sm:p-6 pb-0 text-lg sm:text-xl">
            Complete the Form
          </CardTitle>
          <CardContent className="p-4 sm:p-6 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <Label className="flex-1 text-sm font-medium text-gray-600 sm:w-24 sm:flex-shrink-0">
                Topic Image
              </Label>
              <div className="flex items-center gap-4 sm:gap-8 flex-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center flex-shrink-0">
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
                  className="bg-gray-900 text-white hover:bg-gray-500 px-4 sm:px-6 py-2 h-10 sm:h-12 rounded-xl sm:rounded-2xl text-sm sm:text-base flex-1 sm:flex-initial sm:ml-auto"
                  onClick={handleAddPhotoClick}
                >
                  Change Photo
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
                Topic Name
              </Label>
              <div className="relative flex-1">
                <Pocket className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 z-10" />
                <span
                  className={`absolute left-8 sm:left-10 transition-all duration-300 ease-in-out pointer-events-none z-10 bg-white px-1 ${
                    isFocused || topicName
                      ? "-top-2 text-xs text-slate-500"
                      : "top-1/2 transform -translate-y-1/2 text-sm sm:text-base text-gray-400"
                  }`}
                >
                  Enter Topic Name
                </span>
                <Input
                  type="text"
                  value={topicName}
                  onChange={(e) => setTopicName(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="pl-8 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2"
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
  );
}
