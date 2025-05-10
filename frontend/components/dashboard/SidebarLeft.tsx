const SidebarLeft = () => {
  return (
    <aside className="flex flex-col w-48 bg-white p-4 border-r h-full overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <ul className="space-y-2">
        {["All", "Photos", "Videos", "Saved", "Liked", "Recent", "Tagged"].map((filter, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-blue-600 text-gray-700"
          >
            {filter}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarLeft;
