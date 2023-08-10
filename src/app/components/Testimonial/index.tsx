function TestimonialCard({quote, name, context, imagePath}: any) {
	return (
		<div className="px-6 pt-16 pb-6 md:px-12 md:pb-10 relative bg-white shadow-sm rounded">
			<div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif">
				“
			</div>
			<div className="relative">
				<blockquote>
					<p className="font-medium text-base leading-8 mb-5">{quote}</p>
					<footer className="flex items-center gap-4">
						<span

							className="rounded-full overflow-hidden w-14 h-14  border-2 border-gray-200 bg-gray-100"
						>
							<svg className=" w-full h-full text-gray-400 " fill="currentColor" viewBox="0 0 20 20"
							     xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								      clipRule="evenodd"></path>
							</svg>
						</span>
						<div>
              <span className="font-semibold text-blue-600 hover:text-blue-400 mb-1">
                {name}
              </span>
							<p className="text-gray-500 font-medium text-sm">{context}</p>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	);
}

export function Testimonial() {
	const data = [
		{
			quote: `من چهار سال است که به بیماری اسکیزوفرنی مبتلا هستم و تقریبا هشت ماه است که به ایشان مراجعه میکنم و در این مدت با تکنیک های مدیتیشن و در لحظه بودن من را از هذیان ها و اضطراب های ذهنم دور کردند`,
			name: "مهدی",
			context: "1401/12/22",
			imagePath: "f1.png",
		},
		{
			quote: `بسیار دلسوز و پیگیر هستن که من با اینکه توو کرج تا الان به چند روانشناس مراجعه کرده بودم، مثلِ ایشون ندیدم... با صحبتها و روش درمانیشون آرامش و حالِ خوب به آدم میدن. من که خیلی دوسشون دارم و سعی میکنم حداقل هفته ای یک جلسه حتما باهاشون بگیرم. شدیدا پیشنهادشون میکنم`,
			name: "ناشناس",
			context: "1401/12/22",
			imagePath: "f2.png",
		},
		{
			quote: `با دانش، دلسوز، حرفه ای هستن خیلیی خوب و درست با مراجع ارتباط میگیرن صداقت دارن و از تکنیکا و متدای مختلف به خوبی استفاده میکنن`,
			name: "مهرداد",
			context: "1401/12/22",
			imagePath: "f3.png",
		},
		{
			quote: `خیلی با حوصله و دلسوزن خوشحالم که با ایشون آشنا شدم بهترینن❤️`,
			name: "سوگول",
			context: "1401/12/22",
			imagePath: "f1.png",
		},
	];

	return (
		<div className="bg-gray-100">
			<div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
				<div className="text-center">
					<div className="text-sm uppercase font-bold tracking-wider mb-5 text-blue-700">
						نظرات مراجعین
					</div>
					<h2 className="text-3xl md:text-4xl font-extrabold mb-auto">
						تجربه مراجعین
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
					{data.map((t) => (
						<TestimonialCard {...t} key={t.name}/>
					))}
				</div>
			</div>
		</div>
	);
}
