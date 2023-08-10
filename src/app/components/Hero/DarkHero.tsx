import Link from 'next/link';

function HeroDescription() {
	return <h2 className="text-lg md:text-xl md:leading-tight font-medium text-indigo-200 text-center my-10">
		<span>دکترای تخصصی روانشناسی سلامت</span>
		<br/>
		روانشناس و روان درمانگر
	</h2>;
}

export const DarkHero = () => {
	const H1 = "عسل خادم";
	return (
		<>
			<div
				className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-right container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 bg-gray-800 overflow-hidden font-sans">
				<div className="lg:w-1/2 lg:flex lg:items-center">
					<div>
						<h1 className="text-3xl md:text-6xl font-sans font-black mb-16 text-white">
							دکتر <span className="text-indigo-300">{H1}</span>
						</h1>
						<HeroDescription/>
						<div
							className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:gap-2 pt-10 pb-16 text-lg">
							<Link
								href="about"
								className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
							>
								<span>درباره من</span>
							</Link>
							<a
								href="https://pezeshkekhoob.com/doctor/51213-asal-khadem"
								target="_blank"
								className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
								rel="noopener noreferrer"
							>
								<span className={"px-2"}>دریافت نوبت</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 animate-pulse"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
					<div className="lg:w-96 mx-5 relative">
						<div
							className="absolute pattern-dots-xl top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3 scale-[800%] opacity-20 saturate-150 duration-500 filter blur-xl text-green-500"></div>
						<div
							className="absolute pattern-dots-xl text-indigo-800 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
						<div
							className="absolute pattern-dots-xl text-indigo-800 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
						<div
							className="absolute inset-0 rounded-xl bg-gray-600 bg-opacity-20 -m-4 transform rotate-2 hover:rotate-3 transition-all duration-1000 hover:scale-110"></div>
						<div
							className="absolute inset-0 rounded-xl bg-gray-600 bg-opacity-25 -m-4 transform -rotate-2 hover:-rotate-3 transition-all duration-1000 hover:scale-105"></div>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="1.png"
							alt="Doctor Asal Khadem"
							className="relative rounded-lg mx-auto shadow-lg transition-all duration-300 cursor-pointer filter grayscale-[40%] hover:grayscale-[25%] hover:scale-[102%] active:scale-95"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
