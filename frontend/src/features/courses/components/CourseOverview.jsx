export default function CourseOverview() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Total Enrollments
        </h3>

        <p className="text-3xl font-bold mt-2">
          --
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Completion Rate
        </h3>

        <p className="text-3xl font-bold mt-2">
          --
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Average Score
        </h3>

        <p className="text-3xl font-bold mt-2">
          --
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Active Learners
        </h3>

        <p className="text-3xl font-bold mt-2">
          --
        </p>
      </div>
    </div>
  );
}