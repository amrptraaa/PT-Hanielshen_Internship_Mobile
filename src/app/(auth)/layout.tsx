// src/app/(auth)/layout.tsx
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // -> p-4 untuk mobile, md:p-0 agar padding diatur oleh halaman anak di desktop
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4 md:p-0">
      {children}
    </main>
  );
}
