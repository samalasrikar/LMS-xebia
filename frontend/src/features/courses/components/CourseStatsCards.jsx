export default function CourseStatsCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="text-gray-500">Published Courses</h3>
        <p className="text-3xl font-bold">--</p>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <h3 className="text-gray-500">Draft Courses</h3>
        <p className="text-3xl font-bold">--</p>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <h3 className="text-gray-500">Enrollments</h3>
        <p className="text-3xl font-bold">--</p>
      </div>
    </div>
  );
}