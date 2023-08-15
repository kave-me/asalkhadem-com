import Link from 'next/link';
import {FaWalking} from 'react-icons/fa';

const TestButton = ({text, href}: { text: string, href: string }) => {
	return <Link href={href} className="w-full sm:w-auto bg-indigo-800  hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 text-gray-100 rounded-lg inline-flex items-center justify-center px-8 py-4 ">
		<span className="text-right">
			{text}
		</span>
	</Link>;
}

function ButtonGroup() {
	return <div className="items-center justify-center flex flex-wrap gap-5">
		<TestButton text={"شروع تست"} href={"/anxiety-test"}/>
		<TestButton text={"نتیجه ی این تست معتبره؟ 🤔"} href={"/anxiety-test"}/>
	</div>
}

function PsyTestEvaluation() {
	return (<div
			className="w-1/2 mx-auto my-16 h-48 bg-gray-700 border-4 border-orange-400/50 border-dashed rounded-lg text-center cursor-pointer flex justify-center items-center flex-col-reverse ">
			<h5 className="text-base font-light text-orange-50">در دست ساخت</h5>
			<div className="relative">
				<FaWalking className={"text-4xl text-orange-300 mx-auto h-12 "}/>
				<FaWalking className={"text-4xl text-orange-400 mx-auto h-12 animate-pulse relative -top-12 "}/>
			</div>
		</div>
	)
}

export function PsychologyTest() {
	return (
		<div
			className="w-full p-4 text-center bg-gray-900 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700  ">
			<h5 className="mb-2 text-3xl font-bold text-gray-100 dark:text-white ">تست افسردگی</h5>
			<PsyTestEvaluation/>
			<ButtonGroup/>
		</div>
	)
}
