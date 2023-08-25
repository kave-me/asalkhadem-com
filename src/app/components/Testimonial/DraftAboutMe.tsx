import { FaBrain } from "react-icons/fa";

export function DraftAboutMeSection() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="mt-32 h-[500px] min-h-[200px] bg-gray-900 "
    >
      <div
        className={
          " flex h-full w-full flex-col items-center justify-center   "
        }
      >
        <FaBrain
          className={
            "drop-shadow-indigo-300   mx-auto h-24  w-24 text-center  text-yellow-200 shadow-amber-500 blur-[70px] drop-shadow-lg filter "
          }
        />
        <FaBrain
          className={
            " drop-shadow-indigo-400 relative -top-24   mx-auto h-24  w-24 text-center  text-yellow-50 shadow-amber-500 drop-shadow-lg filter "
          }
        />
      </div>
    </section>
  );
}
