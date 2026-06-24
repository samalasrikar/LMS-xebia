import CourseWizard from "../../courses/components/CourseWizard";
import CurriculumTree from "../components/CurriculumTree";

export default function CurriculumBuilderPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-purple-950">
          Curriculum Builder
        </h1>

        <button className="bg-purple-800 text-white px-6 py-3 rounded-lg">
          Save Draft
        </button>
      </div>

      <CourseWizard currentStep={3} />

      <CurriculumTree />
    </div>
  );
}
