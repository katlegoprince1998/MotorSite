import { COLORS } from "@/constants/constants"

const LeftContent = () => {
      {/* Left Content */}
    return (
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Feel the <span className={COLORS.accentRed}>Rush</span> of Speed
                  </h2>
                  <p className={`text-lg ${COLORS.textSecondary} mb-6`}>
                    Discover the electrifying world of motorsports – from the latest race highlights to behind-the-scenes insights. Join the ride and never miss a moment.
                  </p>
                  <button
                   
                    className={`${COLORS.buttonPrimary} transition duration-300 px-6 py-3 rounded-full text-lg font-semibold shadow-md`}
                  >
                    Get Started
                  </button>
                </div>
    )
}

export default LeftContent