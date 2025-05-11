import { COLORS } from "@/constants/constants";

const SidebarRight = () => {
  return (
    <aside className={`flex flex-col w-64 ${COLORS.backgroundGradient} text-red-600  p-4 border-l h-full overflow-hidden`}>
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-300 mb-2" />
        <p className="text-sm font-medium text-red-600">John Doe</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Top Friends</h3>
        <ul className="space-y-2 mb-4">
          {["Alice", "Bob", "Charlie"].map((name) => (
            <li key={name} className="text-sm text-white">{name}</li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2 ">Friend Requests</h3>
        <div className="text-sm text-white-500 cursor-pointer mb-4">View all</div>

        <h3 className="font-semibold mb-2">Settings</h3>
        <div className="text-sm white-blue-500 cursor-pointer">Manage</div>
      </div>
    </aside>
  );
};

export default SidebarRight;
