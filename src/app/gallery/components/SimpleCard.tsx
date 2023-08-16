export function SimpleCard({
  title = "عنوان",
  description = "توضیحات",
  credit = "عسل خادم",
}) {
  return (
    <div>
      <p className="leading-relaxed text-gray-700">
        <span className="text-gray-600 leading-tight tracking-tight text-base ">
          «{description}»
        </span>
      </p>
      <p className="leading-tight tracking-tight text-xs text-gray-500 pt-1">
        {" "}
        ~ {credit}
      </p>
    </div>
  );
}
