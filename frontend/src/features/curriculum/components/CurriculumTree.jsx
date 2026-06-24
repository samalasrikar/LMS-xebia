import ModuleCard from "./ModuleCard";

export default function CurriculumTree() {
  return (
    <div className="space-y-6">
      <ModuleCard />

      <div className="flex justify-center">
        <button className="bg-purple-800 text-white px-8 py-4 rounded-xl">
          + Add New Section
        </button>
      </div>

      <div className="flex justify-end gap-4">
        <button className="border px-6 py-3 rounded-lg">
          Preview
        </button>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Next: Review
        </button>
      </div>
    </div>
  );
}