"use client";
import Image from "next/image";
import Navigation from "./Navigation";


export default function Header() {
  return (
    <>
      <header className=" bg-red-700 text-white w-full">
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo + slogan */}
          <div>
            <h1 className="text-2xl font-bold">GO-MAKKAH</h1>
            <p className="text-sm">Quand foi et prestige se rencontrent</p>
          </div>

          {/* Contact info */}
          <div className="text-right">
            <p className="font-semibold text-lg">01 49 87 70 21</p>
            <p className="text-sm">32 avenue Pierre Semarde, 94200</p>
          </div>
        </div>

        {/* Navigation */}
        <Navigation />
        {/* Image section */}
        <div className="relative w-full h-48 md:h-32 lg:h-36">
          <Image
            src="/image.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>
    </>
  );
}