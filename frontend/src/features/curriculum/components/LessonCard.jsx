export default function LessonCard({
  title,
  type,
}) {
  return (
    <div className="border rounded-lg p-4 flex justify-between">
      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-gray-500 text-sm">
          {type}
        </p>
      </div>

      <button className="text-red-500">
        Remove
      </button>
    </div>
  );
}