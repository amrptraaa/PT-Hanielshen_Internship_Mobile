"use client";

import React, { useState, useEffect } from "react";
import { HistoryIcon, LogoutIcon } from "@/components/ui/icons"; // Pastikan path ini benar

// Tipe data untuk riwayat absensi agar lebih terstruktur
type AttendanceRecord = {
  day: string;
  date: string;
  checkIn: string;
  checkOut: string;
  isLate: boolean;
};

// Data statis untuk riwayat absensi (sesuai desain)
const attendanceHistoryData: AttendanceRecord[] = [
  {
    day: "Mon",
    date: "18 April 2023",
    checkIn: "08:00",
    checkOut: "05:00 PM",
    isLate: false,
  },
  {
    day: "Fri",
    date: "15 April 2023",
    checkIn: "08:52",
    checkOut: "05:00 PM",
    isLate: true,
  },
  {
    day: "Thu",
    date: "14 April 2023",
    checkIn: "07:45",
    checkOut: "05:00 PM",
    isLate: false,
  },
  {
    day: "Wed",
    date: "13 April 2023",
    checkIn: "07:55",
    checkOut: "05:00 PM",
    isLate: false,
  },
  {
    day: "Tue",
    date: "12 April 2023",
    checkIn: "08:48",
    checkOut: "05:00 PM",
    isLate: true,
  },
  {
    day: "Mon",
    date: "11 April 2023",
    checkIn: "07:52",
    checkOut: "05:00 PM",
    isLate: false,
  },
];

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect untuk mengupdate jam setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(timer);
  }, []);

  // Fungsi untuk format waktu (HH:MM AM/PM)
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Fungsi untuk format tanggal (Contoh: Senin, 18 April 2023)
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("id-ID", {
      // 'id-ID' untuk format bahasa Indonesia
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleClockIn = () => {
    alert("Simulasi: Anda berhasil Clock In!");
  };

  const handleClockOut = () => {
    alert("Simulasi: Anda berhasil Clock Out!");
  };

  const handleLogout = () => {
    alert("Simulasi: Anda berhasil Logout!");
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Pengguna */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/60x60/E2E8F0/4A5568?text=JJ"
            alt="Foto Profil Jacob Jones"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Jacob Jones</h1>
            <p className="text-sm text-gray-500">
              12345678 - Junior UX Designer
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Logout"
        >
          <LogoutIcon className="w-6 h-6" />
        </button>
      </header>

      {/* Kartu Absensi Live */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 text-center">
        <p className="text-sm text-gray-500 mb-2">Live Attendance</p>
        <h2 className="text-5xl font-bold text-gray-800 tracking-tight">
          {formatTime(currentTime)}
        </h2>
        <p className="text-gray-600 mt-2">{formatDate(currentTime)}</p>

        <div className="mt-6 border-t pt-4">
          <p className="text-sm text-gray-500">Office Hours</p>
          <p className="text-lg font-semibold text-gray-700">
            08:00 AM - 05:00 PM
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <button
            onClick={handleClockIn}
            className="w-full px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            Clock In
          </button>
          <button
            onClick={handleClockOut}
            className="w-full px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            Clock Out
          </button>
        </div>
      </div>

      {/* Judul Riwayat Absensi */}
      <div className="flex items-center mb-4">
        <HistoryIcon className="w-6 h-6 text-gray-600 mr-3" />
        <h3 className="text-xl font-bold text-gray-800">Attendance History</h3>
      </div>

      {/* Daftar Riwayat Absensi */}
      <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 space-y-2">
        {attendanceHistoryData.map((record, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                {record.day}, {record.date}
              </p>
            </div>
            <div>
              <p
                className={`font-semibold text-right text-sm sm:text-base ${
                  record.isLate ? "text-red-500" : "text-gray-600"
                }`}
              >
                {record.checkIn} - {record.checkOut}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
