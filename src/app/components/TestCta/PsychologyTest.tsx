import Link from "next/link";
import { FaWalking } from "react-icons/fa";

const TestButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="inline-flex w-full items-center  justify-center rounded-lg bg-indigo-800 px-8 py-4 text-gray-100 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 sm:w-auto "
    >
      <span className="text-right">{text}</span>
    </Link>
  );
};

function ButtonGroup() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <TestButton text={"شروع تست"} href={"/anxiety-test"} />
      <TestButton text={"نتیجه ی این تست معتبره؟ 🤔"} href={"/anxiety-test"} />
    </div>
  );
}

function PsyTestEvaluation() {
  return (
    <div className="mx-auto my-16 flex h-48 w-1/2 cursor-pointer flex-col-reverse items-center justify-center rounded-lg border-4 border-dashed border-orange-400/50 bg-gray-700 text-center ">
      <h5 className="text-base font-light text-orange-50">در دست ساخت</h5>
      <div className="relative">
        <FaWalking className={"mx-auto h-12 text-4xl text-orange-300 "} />
        <FaWalking
          className={
            "relative -top-12 mx-auto h-12 animate-pulse text-4xl text-orange-400 "
          }
        />
      </div>
    </div>
  );
}

export function PsychologyTest() {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-gray-900 p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8  ">
      <h5 className="mb-2 text-3xl font-bold text-gray-100 dark:text-white ">
        تست افسردگی
      </h5>
      <PsyTestEvaluation />
      <ButtonGroup />
    </div>
  );
}
