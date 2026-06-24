import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryForm from "../components/CategoryForm";
import { createCategory } from "../services/categoryService";

export default function CreateCategoryPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleCreate = async (formData) => {
    try {
      setLoading(true);

      await createCategory(formData);

      navigate("/categories");
    } catch (error) {
      console.error("Failed to create category", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-purple-950">
          Create Category
        </h1>

        <p className="text-gray-500 mt-2">
          Add a new category for course organization.
        </p>
      </div>

      <CategoryForm
        onSubmit={handleCreate}
        loading={loading}
      />
    </div>
  );
}