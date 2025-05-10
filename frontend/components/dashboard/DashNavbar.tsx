import { HomeIcon, ChatBubbleLeftIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const DashNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10">
      <h1 className="text-xl font-semibold">MyDashboard</h1>
      <div className="flex gap-4">
        <HomeIcon className="h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
        <ChatBubbleLeftIcon className="h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
        <BellIcon className="h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
        <Cog6ToothIcon className="h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
      </div>
    </nav>
  );
};

export default DashNavbar;
