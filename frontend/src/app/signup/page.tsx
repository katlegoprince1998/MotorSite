
'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { COLORS } from "../../../constants/constants.js";

const RegisterScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fullnames, setFullnames] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard"); 
  };

  return (
    <div className={`min-h-screen ${COLORS.backgroundGradient} ${COLORS.textPrimary}`}>
      <nav className="flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className={`text-3xl font-bold ${COLORS.accentRed} tracking-wide`}>Motor Sport</h1>
      </nav>

      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={handleSignUp}
          className={`${COLORS.backgroundGradient} ${COLORS.textPrimary} p-8 rounded-xl shadow-xl w-full max-w-md`}
        >
          <h2 className="text-2xl font-extrabold mb-6 text-center text-red-600">Sign UP</h2>

           <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Full Names
            </label>
            <input
              id="fullnames"
              type="text"
              value={fullnames}
              onChange={(e) => setFullnames(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-gradient-to-b from-black via-zinc-900 to-black"
              placeholder="Katlego Mashego"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-gradient-to-b from-black via-zinc-900 to-black"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-gradient-to-b from-black via-zinc-900 to-black"
              placeholder="********"
            />
          </div>

            <div className="mb-6">
            <label htmlFor="password" className="block text-lg mb-2">
              Repeat password
            </label>
            <input
              id="password"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-gradient-to-b from-black via-zinc-900 to-black"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className={`${COLORS.buttonPrimary} w-full py-3 rounded-full text-lg font-semibold shadow-md`}
          >
            Sign Up
          </button>

          <div className="mt-6 text-center">
            <p className="text-lg">
              Already have an account?{" "}
              <button
                onClick={() => router.push("/login")}
                type="button"
                className="hover:underline text:lg font-semibold text-red-600" 
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
