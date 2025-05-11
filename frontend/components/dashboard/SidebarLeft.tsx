import { COLORS } from "@/constants/constants";

const SidebarLeft = () => {
  return (
    <aside className={`${COLORS.backgroundGradient} text-red-600  flex flex-col w-48 p-4 border-r h-full overflow-hidden`}>
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <ul className="space-y-2">
        {["All", "Photos", "Videos", "Saved", "Liked", "Recent", "Tagged"].map((filter, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-blue-600 text-white"
          >
            {filter}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarLeft;
