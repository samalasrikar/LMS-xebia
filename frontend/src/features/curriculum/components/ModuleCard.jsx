import LessonCard from "./LessonCard";

export default function ModuleCard() {
  return (
    <div className="bg-white border rounded-xl">
      <div className="p-6 border-b flex justify-between">
        <h2 className="text-2xl font-semibold">
          Section 1: Introduction
        </h2>

        <button className="text-red-500">
          Delete
        </button>
      </div>

      <div className="p-6 space-y-4">
        <LessonCard
          title="Overview of Infrastructure"
          type="Video"
        />

        <LessonCard
          title="Architecture Knowledge Check"
          type="Quiz"
        />

        <button className="w-full border-2 border-dashed rounded-lg py-4">
          + Add Lesson
        </button>
      </div>
    </div>
  );
}