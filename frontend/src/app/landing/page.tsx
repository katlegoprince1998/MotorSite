import { Cards, LeftContent, NavHeader, RightContent } from "@/components";
import { COLORS } from "@/constants/constants";

const Landing = () => {
    return (
          <div className={`min-h-screen ${COLORS.backgroundGradient} ${COLORS.textPrimary}`}>
            <NavHeader />
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12">
       <LeftContent />
       <RightContent />
      </div>
      <div className={`px-6 md:px-16 py-12 ${COLORS.sectionBackground} rounded-t-3xl`}>
        <h3 className={COLORS.sectionTitle}>What You Can Do</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Cards />
        </div>
      </div>
    </div>

    )
};

export default Landing;
// This is the main landing page of the application. It imports the NavHeader, LeftContent, RightContent, and Cards components to create a complete landing page layout. The page is styled using Tailwind CSS classes and utilizes constants for colors and styles.