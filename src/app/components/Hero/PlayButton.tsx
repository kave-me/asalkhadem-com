import { FaPlayCircle } from "react-icons/fa";

export function PlayButton(props: { onClick: () => void }) {
  return (
    <button
      className="group mx-auto -mt-[8rem] mb-16 flex min-w-fit items-center rounded-full  bg-indigo-500 p-4 font-medium text-indigo-100 shadow-lg transition-all duration-700 "
      onClick={props.onClick}
    >
      <div className=" flex items-center justify-center transition-all duration-1000 ease-in-out group-hover:px-0">
        <FaPlayCircle className="h-8 w-8 text-indigo-50 transition-all " />
        <span className=" px-4"> روان درمانی اگزیستانسیال چیست (دو دقیقه)</span>
      </div>
    </button>
  );
}
