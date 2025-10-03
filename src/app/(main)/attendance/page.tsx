"use client";

import React, { useState, useEffect } from "react";
import { Clock, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const AttendancePage = () => {
  const [time, setTime] = useState(new Date());
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const attendanceHistory = [
    { date: "Mon, 18 April 2023", time: "08:00 - 05:00 PM", late: false },
    { date: "Fri, 15 April 2023", time: "08:52 - 05:00 PM", late: true },
    { date: "Thu, 14 April 2023", time: "07:45 - 05:00 PM", late: false },
    { date: "Wed, 13 April 2023", time: "07:55 - 05:00 PM", late: false },
    { date: "Tue, 12 April 2023", time: "08:48 - 05:00 PM", late: true },
    { date: "Mon, 11 April 2023", time: "07:52 - 05:00 PM", late: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-500 text-white p-6 rounded-b-2xl shadow-md flex items-center gap-4">
        {/* Tombol Back */}
        <button
          onClick={() => router.push("/home")}
          className="p-2 rounded-full hover:bg-blue-600"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div>
          <h2 className="font-semibold">Budi Irawan</h2>
          <p className="text-sm">Pekreja</p>
        </div>
      </div>

      {/* Live Attendance */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="font-semibold text-gray-600">Live Attendance</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">
            {formattedTime}
          </p>
          <p className="text-sm text-gray-500">{formattedDate}</p>

          <hr className="my-4" />

          <p className="text-gray-600">Office Hours</p>
          <p className="font-bold text-gray-900">08:00 AM - 05:00 PM</p>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => router.push("/attendance/clock-in")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Clock In
            </button>
            <button
              onClick={() => router.push("/attendance/clock-out")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Clock Out
            </button>
          </div>
        </div>
      </div>

      {/* Attendance History */}
      <div className="max-w-md mx-auto px-4 mt-6 pb-20">
        <h4 className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
          <Clock className="w-4 h-4" />
          Attendance History
        </h4>

        <div className="bg-white rounded-2xl shadow-md divide-y">
          {attendanceHistory.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center px-4 py-3 text-sm"
            >
              <span className="text-gray-700">{item.date}</span>
              <span
                className={`font-medium ${
                  item.late ? "text-red-500" : "text-gray-800"
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
