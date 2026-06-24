import CategoryTable from "../components/CategoryTable";
import CategoryStatsCards from "../components/CategoryStatsCards";

export default function CategoryManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-purple-950">
            Category Management
          </h1>

          <p className="text-gray-500 mt-2">
            Organize and manage course categories.
          </p>
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Add Category
        </button>
      </div>

      <CategoryStatsCards />

      <CategoryTable />
    </div>
  );
}