import useCategories from "../hooks/useCategories";

export default function CategoryStatsCards() {
  const { categories, loading } = useCategories();

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white border rounded-xl p-6">
          Loading...
        </div>
      </div>
    );
  }

  const totalCategories = categories.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Total Categories
        </h3>

        <p className="text-3xl font-bold mt-2">
          {totalCategories}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Active Categories
        </h3>

        <p className="text-3xl font-bold mt-2">
          {totalCategories}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-gray-500">
          Courses Mapped
        </h3>

        <p className="text-3xl font-bold mt-2">
          {categories.reduce(
            (sum, category) =>
              sum + (category.courseCount || 0),
            0
          )}
        </p>
      </div>
    </div>
  );
}