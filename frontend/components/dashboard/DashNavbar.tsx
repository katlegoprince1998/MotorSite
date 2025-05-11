import { COLORS } from "@/constants/constants";
import { HomeIcon, ChatBubbleLeftIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const DashNavbar = () => {
  return (
    <nav className={`text-red-600 flex justify-between items-center px-6 py-4  sticky top-0 z-10`}>
      <div className="flex gap-4">
        <HomeIcon className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
        <ChatBubbleLeftIcon className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
        <BellIcon className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
        <Cog6ToothIcon className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
      </div>
    </nav>
  );
};

export default DashNavbar;
