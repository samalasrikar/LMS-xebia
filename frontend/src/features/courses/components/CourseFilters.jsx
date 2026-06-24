export default function CourseFilters() {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="grid grid-cols-3 gap-4">
        <select className="border p-2 rounded">
          <option>All Status</option>
        </select>

        <select className="border p-2 rounded">
          <option>All Categories</option>
        </select>

        <input
          type="text"
          placeholder="Search course..."
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
}