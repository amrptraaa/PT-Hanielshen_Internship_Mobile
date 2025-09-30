// src/app/page.tsx
import { redirect } from "next/navigation";

export default function HomePage() {
  // Langsung arahkan pengguna ke halaman login saat mereka mengunjungi halaman utama
  redirect("/login");

  // Tidak ada JSX yang akan dirender karena redirect terjadi di server
  return null;
}
