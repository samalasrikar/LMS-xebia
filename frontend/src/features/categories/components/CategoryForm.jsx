import { useState } from "react";

export default function CategoryForm({ onSubmit, loading = false }) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl border space-y-4"
    >
      <div>
        <label className="block mb-2 font-medium">
          Category Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border rounded-lg p-3"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Saving..." : "Create Category"}
      </button>
    </form>
  );
}