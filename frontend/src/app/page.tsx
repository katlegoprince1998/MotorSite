

"use client"; 

import { useState } from "react";  
import LandingScreen from "@/components/LandingScreen";
import LoginScreen from "./login/LoginScreen ";


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  return (
    <main className="overflow-hidden">
      {/* Conditionally render LandingScreen or LoginScreen */}
      {isLoggedIn ? (
        <LandingScreen />
      ) : (
        <LoginScreen />
      )}
    </main>
  );
}
