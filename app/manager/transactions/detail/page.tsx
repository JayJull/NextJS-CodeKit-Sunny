"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  UploadCloud,
  Eye,
  Calendar,
  Receipt,
  Percent,
  DollarSign,
  CheckCircle,
  X,
  ZoomIn,
  School,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TransactionDetails() {
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Transaction Details
            </h1>
            <Link href={"/manager/transactions"}>
              <Button
                variant="link"
                className="text-sm text-gray-500 mt-1 flex items-center gap-1 hover:underline p-0 h-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="sm:inline">Manage Transactions</span>
              </Button>
            </Link>
          </div>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl w-full sm:w-auto text-sm"
          >
            <UploadCloud className="w-4 h-4" />
            <span className="hidden sm:inline">Import .CSV</span>
            <span className="sm:hidden">Import</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                Student Details
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
                        alt="Student"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 truncate">
                        Shen Woaini
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2 truncate">
                        <Mail className="h-4 w-4" />{" "}
                        <span className="truncate">shen@sunny.com</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start sm:justify-end">
                    <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800">
                      PENDING
                    </span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">
                          ID
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 truncate">
                        NISN Number
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      52004000
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <School className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 truncate">
                        Classroom
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      Multimedia 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                Transaction Details
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative group">
                  <div
                    className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={() => setIsImagePreviewOpen(true)}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
                      alt="Transaction Receipt"
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="bg-white bg-opacity-90 rounded-full p-3">
                          <ZoomIn className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsImagePreviewOpen(true)}
                    variant="secondary"
                    size="sm"
                    className="absolute top-3 right-3 bg-white bg-opacity-90 hover:bg-opacity-95 text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1.5"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    PREVIEW
                  </Button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 truncate">
                        Transaction Date
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      25/05/2025
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <Receipt className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 truncate">
                        Sub Total
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      Rp 179.000
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 truncate">
                        Tax 11%
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      Rp 11.000
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-medium text-gray-900 truncate">
                        Grand Total
                      </span>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-red-500">
                      Rp 190.000
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 sm:py-3 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Mark as Paid
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isImagePreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              onClick={() => setIsImagePreviewOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute -top-10 right-0 text-white hover:text-gray-300 hover:bg-transparent"
            >
              <X className="w-8 h-8" />
            </Button>
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
              alt="Transaction Receipt - Full Size"
              width={800}
              height={600}
              className="max-w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white bg-opacity-90 rounded-full px-4 py-2">
                <p className="text-sm font-medium text-gray-700">
                  Transaction Receipt
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
