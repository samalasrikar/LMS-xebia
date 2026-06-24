import CourseWizard from "../components/CourseWizard";
import CourseForm from "../components/CourseForm";

export default function CreateCoursePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-purple-950">
          Create New Course
        </h1>

        <p className="text-gray-500 mt-2">
          Configure and publish a new course.
        </p>
      </div>

      <CourseWizard currentStep={1} />

      <CourseForm />
    </div>
  );
}