import CourseOverview from "../components/CourseOverview";
import EnrollmentTable from "../components/EnrollmentTable";

export default function CourseDetailsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border p-6">
        <div className="flex justify-between">
          <div>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded">
              ACTIVE
            </span>

            <h1 className="text-4xl font-bold text-purple-950 mt-4">
              Advanced Cloud Infrastructure
            </h1>

            <p className="text-gray-500 mt-2">
              Comprehensive cloud architecture training.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded-lg">
              Edit
            </button>

            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg">
              Manage Students
            </button>
          </div>
        </div>
      </div>

      <CourseOverview />

      <EnrollmentTable />
    </div>
  );
}