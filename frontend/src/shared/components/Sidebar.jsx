import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Course Inventory", path: "/courses" },
  { label: "Curriculum Builder", path: "/curriculum" },
  { label: "Users & Roles", path: "/users" },
  { label: "Analytics", path: "/analytics" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-purple-950 text-white min-h-screen">
      <div className="p-6 border-b border-purple-800">
        <h1 className="text-2xl font-bold">Xebia LMS</h1>
        <p className="text-sm text-gray-300">Enterprise Admin</p>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-6 py-4 ${
                isActive
                  ? "bg-purple-800 border-l-4 border-orange-500"
                  : "hover:bg-purple-900"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}