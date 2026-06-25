import useCategories from "../hooks/useCategories";

export default function CategoryTable() {
  const { categories, loading } = useCategories();

  if (loading) {
    return (
      <div className="bg-white rounded-xl border p-6">
        Loading categories...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Category Name</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Courses</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr
              key={category.id}
              className="border-t"
            >
              <td className="p-4">
                {category.name}
              </td>

              <td className="p-4">
                {category.description}
              </td>

              <td className="p-4">
                {category.courseCount ?? 0}
              </td>

              <td className="p-4">
                Edit | Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}