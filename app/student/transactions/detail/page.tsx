"use client";
import { Card } from "@/components/ui/card";
import { useRef, useState } from "react";

import {
  BadgeDollarSign,
  BookText,
  CalendarDays,
  Download,
  FileText,
  MoveLeft,
  Percent,
  Wallet,
} from "lucide-react";
import React from "react";

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // buka file picker
  };

  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleFileChange = (e: FileChangeEvent) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Transaction Details</h1>
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
          <h2 className="text-lg font-semibold">Classroom Details</h2>
          <Card className="p-6 flex items-center gap-4">
            <img
              src={transactions[0].image}
              alt={transactions[0].title}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold">{transactions[0].title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <BookText size={14} />
                Grade {transactions[0].grade}
              </p>
            </div>
          </Card>

          <h2 className="text-lg font-semibold">Transaction Details</h2>
          <Card className="p-6 space-y-3 text-sm">
            {/* Tuition Fee */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Wallet className="w-4 h-4" />
                <span>Tuition Fee</span>
              </div>
              <span className="px-2 py-0.5 text-xs bg-red-100 text-red-600 rounded-full">
                BELUM LUNAS
              </span>
            </div>

            {/* Transaction Date */}
            <div className="flex justify-between items-center border-t pt-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <span>Transaction Date</span>
              </div>
              <span className="font-medium">25/05/2025</span>
            </div>

            {/* Sub Total */}
            <div className="flex justify-between items-center border-t pt-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Sub Total</span>
              </div>
              <div>Rp 179.000</div>
            </div>

            {/* Tax */}
            <div className="flex justify-between items-center border-t pt-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Percent className="w-4 h-4" />
                <span>Tax 11%</span>
              </div>
              <div>Rp 11.000</div>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center border-t pt-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <BadgeDollarSign className="w-4 h-4" />
                <span>Grand Total</span>
              </div>
              <div className="font-semibold text-red-600">Rp 190.000</div>
            </div>
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Transfer Information</h2>
          <Card className="p-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bank Name</span>
              <span className="font-medium flex items-center gap-1">
                <img src="/student/bca.png" alt="BCA" className="w-11" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bank No Account</span>
              <span className="font-medium">242914912</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bank Account Name</span>
              <span className="font-medium">Sunny INC</span>
            </div>

            <div>
              <p className="text-muted-foreground mb-2">Proof of Payment</p>
              <div className="border rounded-lg px-4 py-6 flex items-center justify-between">
                <span>{file ? file.name : "Upload Your File"}</span>
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="text-blue-500 text-sm"
                >
                  Add Photo
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,application/pdf"
                />
              </div>
            </div>

            <button
              disabled={!file}
              className={`w-full mt-2 py-2 rounded-lg text-sm ${
                file
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit Payment
            </button>
          </Card>
        </div>
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
