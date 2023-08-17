export function SimpleCard({
  title = "عنوان",
  description = "توضیحات",
  credit = "عسل خادم",
}) {
  return (
    <div>
      <p className="leading-relaxed text-gray-700">
        <span className="text-base leading-tight tracking-tight text-gray-600 ">
          «{description}»
        </span>
      </p>
      <p className="pt-1 text-xs leading-tight tracking-tight text-gray-500">
        {" "}
        ~ {credit}
      </p>
    </div>
  );
}
