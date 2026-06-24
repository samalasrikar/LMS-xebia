export default function CategoryStatsCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Total Categories
        </h3>

        <p className="text-3xl font-bold mt-2">
          --
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Active Categories
        </h3>

        <p className="text-3xl font-bold mt-2">
          --
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Courses Mapped
        </h3>

        <p className="text-3xl font-bold mt-2">
          --
        </p>
      </div>
    </div>
  );
}