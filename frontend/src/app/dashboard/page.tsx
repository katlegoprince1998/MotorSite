"use client";

import { useState } from "react";
import { ImageCard, SidebarLeft, SidebarRight } from "@/components";
import DashNavbar from "@/components/dashboard/DashNavbar";
import { COLORS } from "@/constants/constants";

export default function Dashboard() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <div className={`${COLORS.backgroundGradient} ${COLORS.textPrimary} flex flex-col h-screen overflow-hidden scroll-smooth`}>
      {/* Fixed Navbar */}
      <div className="w-full flex justify-center border-b shadow-sm shrink-0">
        <DashNavbar />
      </div>

      {/* Mobile Toggle Buttons */}
      <div className="flex justify-between px-4 py-2 lg:hidden shadow z-20 shrink-0">
        <button onClick={() => setShowLeft(!showLeft)}>
          {showLeft ? "← Hide Left" : "→ Show Left"}
        </button>
        <button onClick={() => setShowRight(!showRight)}>
          {showRight ? "Hide Right →" : "Show Right ←"}
        </button>
      </div>

      {/* Layout Container */}
      <div className="flex flex-1 relative overflow-hidden">
        {/* Sidebar Left */}
        <div
          className={`
            ${showLeft ? "block absolute z-30 left-0 h-full w-48" : "hidden"}
            md:block md:static md:h-full md:w-48
            ${COLORS.backgroundGradient} ${COLORS.textPrimary} border-r shrink-0
          `}
        >
          <SidebarLeft />
        </div>

        {/* Main Scrollable Content */}
        <main className="flex-1 h-full overflow-y-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <ImageCard key={i} />
            ))}
          </div>
        </main>

        {/* Sidebar Right */}
        <div
          className={`
            ${showRight ? "block absolute z-30 right-0 h-full w-64" : "hidden"}
            lg:block lg:static lg:h-full lg:w-64
            ${COLORS.backgroundGradient} ${COLORS.textPrimary} border-l shrink-0
          `}
        >
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}
