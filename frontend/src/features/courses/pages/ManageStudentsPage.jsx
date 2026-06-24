import StudentTable from "../components/StudentTable";

export default function ManageStudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-purple-950">
            Manage Students
          </h1>

          <p className="text-gray-500 mt-2">
            View and manage enrolled learners.
          </p>
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Enroll Students
        </button>
      </div>

      <StudentTable />
    </div>
  );
}