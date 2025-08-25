"use client";
import {
  BadgeCheck,
  Book,
  Calendar,
  Download,
  GraduationCap,
  Phone,
  School,
  Venus,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeachersOverview() {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-6 sm:items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500 text-sm">View Your Profile Details</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={16} />
          <span className="sm:inline text-sm font-medium">Import CSV</span>
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-h-[400px">
          {/* Card Profile */}

          <Card className="p-4 w-full flex flex-col items-center justify-center">
            <div className="relative">
              <img
                src="/student/profile.png" // ganti dengan path gambar kamu
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
              />
              {/* Check icon */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-600 rounded-full p-1 shadow-md">
                <BadgeCheck className="text-white w-4 h-4" />
              </div>
            </div>
            <h3 className="mt-4 font-semibold text-lg">Shen Woaini</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <Mail size={14} /> shen@sunny.com
            </div>

            <div className="mt-4 w-full bg-white rounded-xl border text-center grid grid-cols-2 divide-x">
              {/* School Grade */}
              <div className="flex flex-col items-center justify-center p-3">
                <p className="text-sm text-muted-foreground">Role Model</p>
                <div className="flex items-center gap-2 mt-1 font-semibold text-black">
                  <GraduationCap size={16} className="text-orange-500" />
                  <span>Teacher</span>
                </div>
              </div>

              {/* Gender */}
              <div className="flex flex-col items-center justify-center p-3">
                <p className="text-sm text-muted-foreground">Gender</p>
                <div className="flex items-center gap-2 mt-1 font-semibold text-black">
                  <Venus size={16} className="text-violet-600" />
                  <span>Female</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Card Community */}
          <Card className="relative overflow-hidden w-full h-[300px] sm:h-[360px] md:h-[420px]">
            <img
              src="/student/image.png"
              alt="Join Community"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <CardContent className="relative z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white p-6 flex flex-col justify-end h-full">
              <div className="flex items-end justify-between w-full">
                {/* Kiri: Judul dan Deskripsi */}
                <div>
                  <h3 className="text-lg font-semibold">Join Community</h3>
                  <p className="text-sm text-white/80">Connect and Grow 🙌</p>
                </div>

                {/* Kanan: Tombol */}
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="secondary"
                    className="rounded-full px-4 py-2 text-sm"
                  >
                    Join Now
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <h3 className="text-sm font-semibold mb-4 text-black mt-4">
        Personal Information
      </h3>
      <Card className="w-full bg-white mt-4">
        <CardContent className="p-4">
          <div className="grid gap-4 text-sm">
            {/* NISN */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Book size={16} /> License ID
              </div>
              <span className="font-semibold text-black">4355211</span>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} /> Phone Number
              </div>
              <span className="text-black">08192005000</span>
            </div>

            {/* Education */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <School size={16} /> Education
              </div>
              <span className="text-black font-medium">Oxford University</span>
            </div>

            {/* Joined At */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} /> Joined at
              </div>
              <span className="text-black font-semibold">22/05/2025</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
