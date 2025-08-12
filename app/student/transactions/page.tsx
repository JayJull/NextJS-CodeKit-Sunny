"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookText, Clock, Download, Eye } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // untuk app router

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const transactions = [
  {
    image: "/student/multimedia.png",
    title: "Multimedia 3A",
    grade: 12,
    amount: "190.000",
    status: "pending",
  },
  {
    image: "/student/multimedia.png",
    title: "Multimedia 3Amaksimal",
    grade: 12,
    amount: "190.000",
    status: "paid",
  },
  {
    image: "/student/multimedia.png",
    title: "Multimedia 3A maksimal",
    grade: 12,
    amount: "190.000",
    status: "paid",
  },
  {
    image: "/student/multimedia.png",
    title: "IPS Advanture",
    grade: 12,
    amount: "190.000",
    status: "paid",
  },
  {
    image: "/student/multimedia.png",
    title: "Piyeiku cukk",
    grade: 12,
    amount: "190.000",
    status: "paid",
  },
  {
    image: "/student/multimedia.png",
    title: "Piyeiku cukk",
    grade: 12,
    amount: "190.000",
    status: "paid",
  },
];

export default function page() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const currentData = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 sm:items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            My Tuition Transaction
          </h1>
          <p className="text-gray-500 text-sm">
            View Your Transactions Details
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={16} />
          <span className="sm:inline text-sm font-medium">Import CSV</span>
        </button>
      </div>
      <div className="space-y-4">
        {currentData.map((item, idx) => (
          <Card
  key={idx}
  className="p-5"
>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
    {/* Column 1: Image & Class Info */}
    <div className="md:col-span-1">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900 line-clamp-2 break-words">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mt-1">
            <BookText size={14} />
            Grade {item.grade}
          </p>
        </div>
      </div>
    </div>

    {/* Column 2: Tuition Info */}
    <div className="md:col-span-1 flex flex-col justify-center md:ml-16">
      <span className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mb-1">
        <Clock size={14} /> Tuition Fee
      </span>
      <span className="text-red-600 font-bold text-sm sm:text-base">
        Rp {item.amount}
      </span>
    </div>

    {/* Column 3: Status */}
    <div className="md:col-span-1 flex justify-center md:justify-center md:ml-8">
      {item.status === "pending" ? (
        <span className="bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">
          PENDING
        </span>
      ) : (
        <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">
          PAID
        </span>
      )}
    </div>

    {/* Column 4: Details Button */}
    <div className="md:col-span-1 flex justify-center md:justify-end">
      <Button
        onClick={() => router.push("/student/transactions/detail")}
        className="w-full sm:w-auto bg-[#0f0f1f] hover:bg-[#1c1c2c] text-white rounded-full justify-center text-xs sm:text-sm px-3 sm:px-4 py-2"
      >
        <Eye size={14} className="mr-1 sm:mr-2" />
        Details
      </Button>
    </div>
  </div>
</Card>
        ))}
      </div>
      <div className="mt-6">
        <Pagination className="items-start justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
