import Link from 'next/link';
import {FaConfluence} from 'react-icons/fa';

const TestButton = ({text, href}: { text: string, href: string }) => {
	return <Link href={href}
	             className="w-full sm:w-auto bg-indigo-800  hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 text-gray-100 rounded-lg inline-flex items-center justify-center px-8 py-4 ">
		<span className="text-right">
			{text}
		</span>
	</Link>;
}

function Buttons() {
	return <div className="items-center justify-center flex flex-wrap gap-5">
		<TestButton text={"شروع تست"} href={"/anxiety-test"}/>


		<TestButton text={"نتیجه ی این تست معتبره؟ 🤔"} href={"/anxiety-test"}/>

	</div>
}

function PsyTestEvaluation() {
	// place holder
	return (
		<div
			className="w-1/2 mx-auto my-16 h-48 bg-gray-700 border-2 border-gray-200 rounded-lg text-center cursor-pointer">
			<FaConfluence className={"text-4xl text-gray-50 mx-auto h-full animate-spin "}/>
		</div>
	)
}

export function PsychologyTest() {
	return (
		<div
			className="w-full p-4 text-center bg-gray-900 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700  ">
			<h5 className="mb-2 text-3xl font-bold text-gray-100 dark:text-white ">تست افسردگی</h5>
			{/*<p className="mb-5 text-base text-gray-200 sm:text-lg  ">*/}
			{/*	 			با تست کردن خصوصیت های شخصیتی خود می توانید از میزان اضطراب و استرس خود آگاه شوید و با کمک راهنمایی که دریافت خواهید کرد می توانید این میزان را کاهش دهید.*/}
			{/*</p>*/}
			<PsyTestEvaluation/>
			<Buttons/>
		</div>
	)
	// return <article className="flex-none h-screen bg-gray-900">
	// 	<div
	// 		className="flex flex-col items-center justify-center py-16 text-center text-gray-100 ">
	// 		<h2 className="mb-4 text-3xl font-bold leading-tight text-center text-gray-100 md:text-4xl">
	// 			تست اضطراب بک </h2>
	// 		<p className="mb-6 text-lg text-gray-200">
	// 			با تست کردن خصوصیت های شخصیتی خود می توانید از میزان اضطراب و استرس خود آگاه شوید و با کمک راهنمایی که دریافت
	// 			خواهید کرد می توانید این میزان را کاهش دهید.
	// 		</p>
	// 		<button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded shadow hover:bg-blue-700">
	// 			تست رایگان
	// 		</button>
	// 		<figure className="mt-16">
	// 			<Image
	// 				className="object-cover rounded shadow-md"
	// 				src="/img/psychology-test.jpg"
	// 				alt="Psychology test"
	// 				width={720}
	// 				height={1080}
	// 			/>
	// 			<figcaption className={"mt-16"} >
	// 			Psychology Test
	// 			</figcaption>
	// 		</figure>
	// 	</div>
	// </article>
}