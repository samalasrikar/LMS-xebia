import CourseFilters from "../components/CourseFilters";
import CourseStatsCards from "../components/CourseStatsCards";
import CourseTable from "../components/CourseTable";
import { useNavigate } from "react-router-dom";
export default function CourseInventoryPage() {
  const navigate = useNavigate();
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

        <button
  onClick={() => navigate("/courses/create")}
  className="bg-orange-500 text-white px-4 py-2 rounded-lg"
>
  Create Course
</button>
      </div>

      <CourseFilters />

      <CourseTable />

      <CourseStatsCards />
    </div>
  );
}