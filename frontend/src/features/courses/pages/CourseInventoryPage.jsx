import CourseFilters from "../components/CourseFilters";
import CourseStatsCards from "../components/CourseStatsCards";
import CourseTable from "../components/CourseTable";

export default function CourseInventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-purple-950">
            Course Inventory
          </h1>

          <p className="text-gray-500">
            Manage and monitor all courses
          </p>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Create Course
        </button>
      </div>

      <CourseFilters />

      <CourseTable />

      <CourseStatsCards />
    </div>
  );
}