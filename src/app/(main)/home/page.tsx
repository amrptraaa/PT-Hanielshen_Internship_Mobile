"use client";

import React from "react";
import { Calendar } from "lucide-react";
import BottomNavBar from "@/components/layout/bottomNavBar";

export default function HomePage() {
  const tasks = [
    {
      title: "Candidate Management",
      project: "Zoho Project",
      teammates: [
        "https://i.pravatar.cc/40?img=1",
        "https://i.pravatar.cc/40?img=2",
        "https://i.pravatar.cc/40?img=3",
      ],
      dueDate: "June 6, 2022",
      progress: 88,
    },
    {
      title: "Candidate Management",
      project: "hrSense Project",
      teammates: [
        "https://i.pravatar.cc/40?img=4",
        "https://i.pravatar.cc/40?img=5",
        "https://i.pravatar.cc/40?img=6",
      ],
      dueDate: "June 6, 2022",
      progress: 88,
    },
  ];

  const dates = [
    { day: "Mon", date: "4" },
    { day: "Tue", date: "5" },
    { day: "Wed", date: "6" },
    { day: "Thr", date: "7" },
    { day: "Fri", date: "8" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-500 text-white p-6 rounded-b-3xl">
        <p className="text-sm"> Selamat Bekerja!</p>
        <h1 className="text-2xl font-bold">Budi Irawan</h1>
      </div>

      {/* Select date */}
      <div className="px-6 mt-4">
        <p className="text-gray-700 font-semibold mb-3">Pilih Tanggal</p>
        <div className="flex space-x-3 overflow-x-auto">
          {dates.map((d, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center rounded-2xl px-4 py-2 min-w-[60px] ${
                i === 0 ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <p className="text-sm font-medium">{d.day}</p>
              <p className="text-lg font-bold">{d.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing tasks */}
      <div className="px-6 mt-6 flex-1">
        <p className="text-gray-700 font-semibold mb-3">
          Tugas yang sedang berlangsung
        </p>
        <div className="space-y-4">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl shadow flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-500">For - {task.project}</p>
                <div className="flex items-center mt-3 space-x-2">
                  {task.teammates.slice(0, 2).map((src, j) => (
                    <img
                      key={j}
                      src={src}
                      alt="avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                    +3
                  </span>
                </div>
                <div className="flex items-center mt-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {task.dueDate}
                </div>
              </div>
              {/* Progress circle */}
              <div className="mt-4 sm:mt-0">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="28"
                      stroke="#E5E7EB"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="28"
                      stroke="#F97316"
                      strokeWidth="6"
                      strokeDasharray={2 * Math.PI * 28}
                      strokeDashoffset={
                        2 * Math.PI * 28 * (1 - task.progress / 100)
                      }
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">
                      {task.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
