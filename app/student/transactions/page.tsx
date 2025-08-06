"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookText, Clock, Download, Eye } from "lucide-react";
import React from "react";
import { useState } from "react";

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
    title: "Multimedia 3A",
    grade: 12,
    amount: "190.000",
    status: "paid",
  },
  {
    image: "/student/multimedia.png",
    title: "Multimedia 3A",
    grade: 12,
    amount: "190.000",
    status: "paid",
  },
  {
    image: "/student/multimedia.png",
    title: "Multimedia 3A",
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
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            My Tuition Transactions
          </h1>
          <p className="text-gray-500 text-sm">
            View Your Transactions Details
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={16} />
          <span className="text-sm font-medium">Import CSV</span>
        </button>
      </div>
      <div className="space-y-4">
        {currentData.map((item, idx) => (
          <Card
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5"
          >
            {/* Left: Image & Class Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center sm:justify-start">
                  <BookText size={14} />
                  Grade {item.grade}
                </p>
              </div>
            </div>

            {/* Tuition Fee + Status on the left (below class info in mobile) */}
            <div className="flex flex-col items-start sm:items-center sm:text-center">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock size={14} /> Tuition Fee
              </span>
              <span className="text-red-600 font-bold mb-1">
                Rp {item.amount}
              </span>

              {item.status === "pending" ? (
                <span className="bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
                  PENDING
                </span>
              ) : (
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full">
                  PAID
                </span>
              )}
            </div>

            {/* Button: Full width on mobile, right aligned on desktop */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-4 sm:mt-0">
              <Button className="w-full sm:w-auto bg-[#0f0f1f] hover:bg-[#1c1c2c] text-white rounded-full">
                <Eye size={16} className="mr-2" />
                Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 ">
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
