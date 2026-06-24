export default function KPISection() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl border">
        <h3>Total Courses</h3>
        <p className="text-3xl font-bold">--</p>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <h3>Total Enrollments</h3>
        <p className="text-3xl font-bold">--</p>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <h3>Completion Rate</h3>
        <p className="text-3xl font-bold">--</p>
      </div>

      <div className="bg-white p-6 rounded-xl border">
        <h3>Active Learners</h3>
        <p className="text-3xl font-bold">--</p>
      </div>
    </div>
  );
}