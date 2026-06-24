export default function StudentTable() {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Student</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Progress</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* API Data */}
        </tbody>
      </table>
    </div>
  );
}