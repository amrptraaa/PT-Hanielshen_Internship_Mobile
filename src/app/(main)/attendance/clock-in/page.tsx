// app/(main)/attendance/clock-in/page.tsx
"use client";

import { useState, useRef } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function ClockInPage() {
  const [note, setNote] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOpenCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      setShowCamera(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Camera access denied:", error);
    }
  };

  const handleClockIn = () => {
    // Matikan kamera biar gak nyedot RAM selamanya
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setShowCamera(false);
    setShowSuccess(true);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      {/* Header Map Section */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200">
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
            <h2 className="text-center font-medium text-blue-600">Masuk</h2>

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

            <Button
              onClick={handleOpenCamera}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Masuk
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Camera Modal */}
      <Dialog open={showCamera} onOpenChange={setShowCamera}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Ambil Absensi</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="rounded-lg w-full"
            />
            <Button
              onClick={handleClockIn}
              className="bg-green-600 hover:bg-green-700 text-white rounded-xl"
            >
              Masuk
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Popup */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Absen Berhasil</DialogTitle>
          </DialogHeader>
          <p className="text-center text-gray-700">
            Absensi masuk sudah tercatat. Silakan lanjut bekerja.
          </p>
          <DialogFooter>
            <Button
              onClick={() => setShowSuccess(false)}
              className="bg-blue-600 text-white rounded-xl"
            >
              Oke
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
