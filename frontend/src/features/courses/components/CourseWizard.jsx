const steps = [
  "Basic Info",
  "Settings",
  "Curriculum",
  "Review"
];

export default function CourseWizard({ currentStep }) {
  return (
    <div className="bg-white rounded-xl border p-8">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const stepNo = index + 1;

          return (
            <div
              key={step}
              className="flex flex-col items-center flex-1"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                ${
                  stepNo === currentStep
                    ? "bg-orange-500 text-white"
                    : stepNo < currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {stepNo}
              </div>

              <span className="mt-2 text-sm">
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}