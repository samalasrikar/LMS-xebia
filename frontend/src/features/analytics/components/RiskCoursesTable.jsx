export default function RiskCoursesTable() {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">
          At Risk Courses
        </h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">
              Course
            </th>

            <th className="p-4 text-left">
              Completion %
            </th>

            <th className="p-4 text-left">
              Risk Score
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