import { useParams } from "react-router-dom";
import CourseWizard from "../components/CourseWizard";
import CourseForm from "../components/CourseForm";

export default function EditCoursePage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-purple-950">
          Edit Course
        </h1>

        <p className="text-gray-500 mt-2">
          Update course information and settings.
        </p>
      </div>

      <div className="bg-white border rounded-xl p-4">
        <span className="text-sm text-gray-500">
          Course ID:
        </span>

        <span className="font-semibold ml-2">
          {id}
        </span>
      </div>

      <CourseWizard currentStep={1} />

      <CourseForm mode="edit" courseId={id} />
    </div>
  );
}