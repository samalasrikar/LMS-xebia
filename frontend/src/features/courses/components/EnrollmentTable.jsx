export default function EnrollmentTable() {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">
          Enrolled Students
        </h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">
              Student
            </th>

            <th className="p-4 text-left">
              Enrollment Date
            </th>

            <th className="p-4 text-left">
              Progress
            </th>

            <th className="p-4 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {/* API Data */}
        </tbody>
      </table>
    </div>
  );
}