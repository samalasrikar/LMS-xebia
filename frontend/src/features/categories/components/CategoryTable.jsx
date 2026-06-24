export default function CategoryTable() {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">
              Category Name
            </th>

            <th className="p-4 text-left">
              Description
            </th>

            <th className="p-4 text-left">
              Courses
            </th>

            <th className="p-4 text-left">
              Actions
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