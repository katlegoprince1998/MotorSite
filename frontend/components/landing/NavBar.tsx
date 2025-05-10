'use client';

import { useRouter } from 'next/navigation';
import { COLORS } from "@/constants/constants"


const NavHeader  = () => {
     const router = useRouter();
    {/* Navbar */}
    return(
          <nav className="flex items-center justify-between px-6 md:px-16 py-6">
            <h1 className={`text-3xl font-bold ${COLORS.accentRed} tracking-wide`}>Motor Sport</h1>
            <button
                onClick={() => router.push("/login")}
              className={`${COLORS.buttonPrimary} transition duration-300 px-5 py-2 rounded-full font-medium shadow-lg`}
            >
              Sign In
            </button>
          </nav>
    )
}


export default NavHeader;