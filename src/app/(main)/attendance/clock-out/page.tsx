// app/(main)/attendance/clock-out/page.tsx
"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ClockOutPage() {
  const [note, setNote] = useState("");

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      {/* Header Map Section */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200">
        {/* Map Embed */}
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Universitas%20Indonesia&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
        <div className="absolute top-4 left-0 right-0 text-center text-white text-lg font-semibold">
          09:41 AM
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-md -mt-12 px-4">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 flex flex-col gap-4">
            <h2 className="text-center font-medium text-blue-600">Keluar</h2>

            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 text-blue-600" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Your Location</span>
                <br />
                Jl. Citra Indah Utama No.18
                <br />
                RT.04/RW.019, Desa Sukamaju,
                <br />
                Kecamatan Jonggol, Kabupaten Bogor,
                <br />
                Jawa Barat 16830
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">
                Note (Optional)
              </label>
              <Textarea
                placeholder="Tambahkan catatan..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              Clock Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
