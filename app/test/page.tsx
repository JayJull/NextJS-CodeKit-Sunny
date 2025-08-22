"use client";
import { Mail, User, Home, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="mb-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center text-center gap-2 mb-6 mt-7">
          <span className="text-2xl md:text-3xl font-poppins font-extrabold text-gray-900">
            Form
          </span>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-full max-w-sm mx-auto space-y-5 border border-gray-200 p-6 rounded-xl bg-white shadow-md">
          {/* Nama */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Nama Lengkap
            </label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-black"
              />
            </div>
          </div>

          {/* Alamat */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Alamat
            </label>
            <div className="relative">
              <Home className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-black"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
              <input
                type="email"
                className="w-full pl-12 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-black"
              />
            </div>
          </div>

          {/* Nomor HP */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Nomor HP
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                className="w-full pl-12 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-black"
              />
            </div>
          </div>

          {/* Tombol Submit */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-full transition duration-200">
            Kirim Data
          </button>
        </div>
      </motion.div>
    </div>
  );
}
