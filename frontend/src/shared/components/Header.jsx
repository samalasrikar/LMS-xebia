export default function Header() {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6">
      <input
        type="text"
        placeholder="Search courses..."
        className="border rounded-lg px-4 py-2 w-96"
      />

      <div className="flex items-center gap-4">
        <button>🔔</button>

        <div className="text-right">
          <p className="font-semibold">Admin User</p>
          <p className="text-xs text-gray-500">System Admin</p>
        </div>
      </div>
    </header>
  );
}