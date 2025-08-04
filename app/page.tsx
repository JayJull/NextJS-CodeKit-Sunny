"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex overflow-hidden">
      {/* left side */}
      <div className="hidden lg:flex flex-[1.5] bg-gray-50 p-8 overflow-hidden justify-center items-center -mt-5">
        <div className="max-w-2xl w-full h-full max-h-[600px] flex flex-col">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-white rounded-xl pb-8 shadow-sm h-fit animate-pulse-gentle hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-500 text-sm pt-3 px-3">Total Revenue</p>
                <div className="flex items-center gap-2 mb-3 pb-3 px-3">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Rp52.259.205
                  </h1>
                  <span className="text-green-500 text-sm animate-bounce">▲</span>
                </div>

                <div className="relative h-24">
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3B82F6"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20 75 L 60 65 L 100 67 L 140 60 L 180 55 L 220 45 L 260 40 L 300 35 L 340 30 L 380 25"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw-line"
                    />
                    <path
                      d="M 20 75 L 60 65 L 100 67 L 140 60 L 180 55 L 220 45 L 260 40 L 300 35 L 340 30 L 380 25 L 380 85 L 20 85 Z"
                      fill="url(#gradient)"
                    />
                    <circle
                      cx="180"
                      cy="55"
                      r="2"
                      fill="white"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <rect
                      x="130"
                      y="35"
                      width="100"
                      height="15"
                      rx="7"
                      fill="#3B82F6"
                      className="animate-fade-in-up"
                    />
                    <text
                      x="180"
                      y="44"
                      textAnchor="middle"
                      fill="white"
                      fontSize="9"
                      fontWeight="500"
                    >
                      +Rp 520.000
                    </text>
                  </svg>

                  <div className="flex justify-between text-xs text-gray-500 mt-1 px-4">
                    <span className="animate-fade-in" style={{animationDelay: '0.1s'}}>Jan</span>
                    <span className="animate-fade-in" style={{animationDelay: '0.2s'}}>Feb</span>
                    <span className="animate-fade-in" style={{animationDelay: '0.3s'}}>Mar</span>
                    <span className="animate-fade-in" style={{animationDelay: '0.4s'}}>Apr</span>
                    <span className="animate-fade-in" style={{animationDelay: '0.5s'}}>Mei</span>
                    <span className="animate-fade-in" style={{animationDelay: '0.6s'}}>Jun</span>
                    <span className="animate-fade-in" style={{animationDelay: '0.7s'}}>Jul</span>
                    <span className="animate-fade-in" style={{animationDelay: '0.8s'}}>Aug</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm flex-1 animate-slide-in-left hover:shadow-md transition-all duration-300">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Verified Teacher
                </h3>
                <p className="text-gray-600 text-sm mb-3">Teacher Details</p>

                <div className="flex items-center gap-3 mb-4 hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                    alt="Monday S"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900 text-sm">
                        Monday S
                      </span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded animate-pulse">
                        Active
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 animate-bounce"
                        style={{animationDelay: '1s'}}
                      >
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path
                          fillRule="evenodd"
                          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Experience: 10 Years
                    </div>
                  </div>
                  <Image
                    src={"/logo/Owner Badge.png"}
                    alt="Owner Badge"
                    width={32}
                    height={32}
                    className="animate-wiggle"
                  />
                </div>

                <p className="text-gray-600 text-sm mb-3">Classroom List</p>
                <div className="space-y-3">
                  {[0, 1, 2].map((index) => (
                    <div key={index} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-all duration-200 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                      <Image
                        src={index === 2 ? "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=32&h=32&fit=crop" : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=32&h=32&fit=crop"}
                        alt="Class"
                        className="rounded"
                        width={26}
                        height={26}
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {index === 2 ? "IX Art Menakjubkan" : "IX Multimedia Keren"}
                        </p>
                        <div className="text-green-500 text-xs flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 animate-pulse"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                          </svg>
                          80.250 Students
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-xl h-full">
              <div className="bg-white rounded-xl p-4 shadow-sm flex-1 animate-slide-in-right hover:shadow-md transition-all duration-300">
                <p className="text-gray-500 text-sm mb-1">My Dashboard</p>
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Insight
                </h2>

                <div className="space-y-4">
                  {[
                    { amount: "Rp 476.250.000", label: "Monthly Revenue", color: "gray", text: "green"},
                    { amount: "24.240.320", label: "Total Students", color: "gray", text: "red"},
                    { amount: "Rp9.240.000", label: "Total Teachers", color: "gray", text: "purple"}
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-all duration-200 animate-fade-in-up" style={{animationDelay: `${index * 0.3}s`}}>
                      <div>
                        <p className="text-base font-bold text-gray-900">
                          {item.amount}
                        </p>
                        <p className="text-gray-500 text-xs">{item.label}</p>
                      </div>
                      <div className={`w-7 h-7 bg-${item.color}-100 rounded-lg flex items-center justify-center animate-bounce`} style={{animationDelay: `${index * 0.5}s`}}>
                        <span className={`text-${item.text}-600 text-sm`}>
                          {index === 0 && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm flex-1 animate-fade-in  hover:shadow-md transition-all duration-300">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Top Achievers
                </h3>
                <div className="text-green-600 text-sm flex items-center mb-4 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 "
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p className="text-sm text-gray-500">
                    Top 3 Student In School
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Bimore S", points: "2400", rank: "#1", img: "photo-1507003211169-0a1dd7228f2d" },
                    { name: "Chestata R", points: "2350", rank: "#2", img: "photo-1507003211169-0a1dd7228f2d" },
                    { name: "Maudy A", points: "2300", rank: "#3", img: "photo-1438761681033-6461ffad8d80" }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all duration-200 animate-slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                      <Image
                        src={`https://images.unsplash.com/${student.img}?w=40&h=40&fit=crop&crop=face`}
                        alt={student.name}
                        className="rounded-full animate-pulse"
                        width={30}
                        height={30}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">
                          {student.name}
                        </p>
                        <div className="text-red-500 text-xs flex gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4 animate-pulse"
                          >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>
                          <p className="text-gray-500 text-xs">{student.points} Points</p>
                        </div>
                      </div>
                      <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold animate-bounce" style={{animationDelay: `${index * 0.3}s`}}>
                        {student.rank}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white p-4 md:p-8 flex flex-1 flex-col justify-center shadow-xl min-h-screen lg:min-h-auto">
        <div className="mb-6">
          <div className="flex items-center justify-center text-center gap-2 mb-6">
            <span className="text-white font-bold text-xs">
              <Image src="/logo/logo.png" alt="Sunny" width={28} height={28} />
            </span>
            <span className="text-2xl md:text-3xl font-poppins font-extrabold text-gray-900">
              Sunny
            </span>
          </div>

          <h1 className="text-2xl md:text-xl font-bold text-gray-900 mb-2 text-center font-poppins">
            Welcome Back 🫰🏻
          </h1>
          <p className="text-gray-500 text-sm text-center">
            Hop into your account to continue!
          </p>
        </div>

        <div className="w-full max-w-sm mx-auto space-y-6">
          <div className="relative">
            <label
              className={`absolute left-12 transition-all duration-200 pointer-events-none ${
                email
                  ? "-top-2 text-xs text-gray-500 bg-white px-1"
                  : "top-4 text-sm text-gray-400"
              }`}
            >
              Email Address
            </label>
            <Mail className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-black"
            />
          </div>

          <div className="relative">
            <label
              className={`absolute left-12 transition-all duration-200 pointer-events-none ${
                password
                  ? "-top-2 text-xs text-gray-500 bg-white px-1"
                  : "top-4 text-sm text-gray-400"
              }`}
            >
              Password
            </label>
            <Lock className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-4 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="text-right">
            <span className="text-gray-500 hover:text-gray-700 text-sm cursor-pointer">
              Forgot My Password?
            </span>
          </div>

          <button
            onClick={() => {
              console.log("Login clicked:", { email, password });
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-full transition duration-200"
          >
            Sign In Now
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-in-right {
          0% { transform: translateX(20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-in-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        @keyframes wiggle {
          0%, 7% { transform: rotateZ(0); }
          15% { transform: rotateZ(-15deg); }
          20% { transform: rotateZ(10deg); }
          25% { transform: rotateZ(-10deg); }
          30% { transform: rotateZ(6deg); }
          35% { transform: rotateZ(-4deg); }
          40%, 100% { transform: rotateZ(0); }
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-draw-line {
          animation: draw-line 2s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;