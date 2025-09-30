// src/app/(main)/home/layout.tsx
import React from "react";

// Komponen layout HARUS menerima dan me-render 'children'
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'children' ini adalah konten dari page.tsx Anda
    <section>{children}</section>
  );
}
