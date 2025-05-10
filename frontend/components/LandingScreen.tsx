// src/components/LandingScreen.tsx

"use client";  // Ensure this is a client-side component

import Image from "next/image";
import { useRouter } from "next/navigation";  // useRouter from next/navigation
import { COLORS } from "../constants/constants.js";

const LandingScreen = () => {
  const router = useRouter();

  // Navigate to the Login page when either button is clicked
  const handleNavigateToLogin = () => {
    router.push("/login");
  };

  return (
    <div className={`min-h-screen ${COLORS.backgroundGradient} ${COLORS.textPrimary}`}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className={`text-3xl font-bold ${COLORS.accentRed} tracking-wide`}>Motor Sport</h1>
        <button
          onClick={handleNavigateToLogin}
          className={`${COLORS.buttonPrimary} transition duration-300 px-5 py-2 rounded-full font-medium shadow-lg`}
        >
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Feel the <span className={COLORS.accentRed}>Rush</span> of Speed
          </h2>
          <p className={`text-lg ${COLORS.textSecondary} mb-6`}>
            Discover the electrifying world of motorsports – from the latest race highlights to behind-the-scenes insights. Join the ride and never miss a moment.
          </p>
          <button
            onClick={handleNavigateToLogin}
            className={`${COLORS.buttonPrimary} transition duration-300 px-6 py-3 rounded-full text-lg font-semibold shadow-md`}
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1592948708948-2f7141588b12?w=800&q=80"
            alt="Racing Car"
            width={480}
            height={360}
            className="rounded-xl shadow-2xl object-cover"
            priority
          />
        </div>
      </div>

      {/* Feature Highlights */}
      <div className={`px-6 md:px-16 py-12 ${COLORS.sectionBackground} rounded-t-3xl`}>
        <h3 className={COLORS.sectionTitle}>What You Can Do</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className={`p-6 rounded-xl ${COLORS.cardBackground} ${COLORS.shadow}`}>
            <h4 className={`text-xl font-semibold mb-2 ${COLORS.featureText}`}>Add Your Favorite Cars</h4>
            <p className={COLORS.cardText}>Create your personal garage and share your passion.</p>
          </div>
          <div className={`p-6 rounded-xl ${COLORS.cardBackground} ${COLORS.shadow}`}>
            <h4 className={`text-xl font-semibold mb-2 ${COLORS.featureText}`}>Rate & Comment</h4>
            <p className={COLORS.cardText}>Give your opinion, rate cars, and join the conversation.</p>
          </div>
          <div className={`p-6 rounded-xl ${COLORS.cardBackground} ${COLORS.shadow}`}>
            <h4 className={`text-xl font-semibold mb-2 ${COLORS.featureText}`}>View Top Rated Cars</h4>
            <p className={COLORS.cardText}>See the best-rated cars of the week, month, and year.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
