"use client";

import { useState } from "react";
import { ImageCard, SidebarLeft, SidebarRight } from "@/components";
import DashNavbar from "@/components/dashboard/DashNavbar";

export default function Dashboard() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashNavbar />

      {/* Mobile Toggle Buttons */}
      <div className="flex justify-between px-4 py-2 lg:hidden bg-white shadow z-20">
        <button onClick={() => setShowLeft(!showLeft)}>
          {showLeft ? "← Hide Left" : "→ Show Left"}
        </button>
        <button onClick={() => setShowRight(!showRight)}>
          {showRight ? "Hide Right →" : "Show Right ←"}
        </button>
      </div>

      <div className="relative flex-1">
        {/* Fixed Sidebar Left */}
        {(showLeft || typeof window === "undefined") && (
          <div className="fixed top-0 left-0 hidden md:flex w-48 h-screen z-10 bg-white border-r">
            <SidebarLeft />
          </div>
        )}

        {/* Fixed Sidebar Right */}
        {(showRight || typeof window === "undefined") && (
          <div className="fixed top-0 right-0 hidden lg:flex w-64 h-screen z-10 bg-white border-l">
            <SidebarRight />
          </div>
        )}

        {/* Main Scrollable Area */}
        <main
          className={`
            overflow-y-auto h-screen p-4
            ${showLeft ? "md:ml-48" : ""}
            ${showRight ? "lg:mr-64" : ""}
            transition-all
          `}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <ImageCard key={i} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
