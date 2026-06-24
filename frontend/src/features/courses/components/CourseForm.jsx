import { useState } from "react";

export default function CourseForm({
  mode = "create",
  courseId,
}) {
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    shortDescription: "",
    fullDescription: "",
    categoryId: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "edit") {
        console.log("Updating Course:", courseId);
        console.log(formData);

        // await updateCourse(courseId, formData);
      } else {
        console.log("Creating Course");
        console.log(formData);

        // await createCourse(formData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-2">
            Course Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course title"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Course Code
          </label>

          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="JAVA-101"
            className="w-full border rounded-lg p-3"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block font-medium mb-2">
          Short Description
        </label>

        <textarea
          rows={3}
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="Brief summary of the course"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="mt-6">
        <label className="block font-medium mb-2">
          Full Description
        </label>

        <textarea
          rows={6}
          name="fullDescription"
          value={formData.fullDescription}
          onChange={handleChange}
          placeholder="Detailed course description"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block font-medium mb-2">
            Category
          </label>

          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">
              Select Category
            </option>

            {/* API Categories */}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Tags
          </label>

          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="React, Java, Spring Boot"
            className="w-full border rounded-lg p-3"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button
          type="button"
          className="px-6 py-3 border rounded-lg hover:bg-gray-50"
        >
          Save Draft
        </button>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          {mode === "edit"
            ? "Update Course"
            : "Save & Next"}
        </button>
      </div>
    </form>
  );
}