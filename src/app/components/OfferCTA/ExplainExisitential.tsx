import {HavingDoubt} from 'components/OfferCTA/HavingDoubt';

function VideoTutorial() {
	return (<iframe
		width="640"
		height="360"
		className="rounded-lg shadow-lg"
		sandbox="allow-scripts allow-same-origin"
		src="https://www.aparat.com/video/video/embed/videohash/t9UBw/vt/frame?isamp"
		title="اگزیستانسیالیسم چیست؟"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen></iframe>);
}

export function ExplainExisitential() {
	return (<div className="bg-gray-100 overflow-hidden">
		<div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
			<div className="relative">
				<div
					className="pattern-dots-lg text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-12 -translate-y-16"></div>
				<div
					className="pattern-dots-lg text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-12 translate-y-16"></div>
				<div className="p-10 lg:py-12 lg:px-16 bg-white rounded shadow text-center relative">
					<div className="space-y-10">
						<div className="text-center">
							<p className="text-sm  font-bold  my-7 text-blue-700 opacity-80 ">
								درمان اگزیستانسیال
							</p>
						</div>
						<div className="text-center">
							<h2 className="text-3xl md:text-4xl font-extrabold mb-4">درمان {" "}<span
								className="text-indigo-600">اگزیستانسیال</span>{" "}چیست؟
							</h2>
							<h3 className="text-lg md:text-lg md:leading-relaxed font-medium text-gray-600 py-8">این درمان به شما کمک
								می‌کند تا بتوانید در مواجهه با انتخابات مهم و تصمیمات زندگی خود، تحمل اضطراب و استرس را تجربه کنید و با
								شرایط پیچیده و آشفته زندگی، به خوبی سازگار شوید.
							</h3>
							{/* Space */}
							<div className="py-8 mx-auto flex justify-center">
								<VideoTutorial/>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-8">
								<a
									target="_blank"
									href="https://fa.wikipedia.org/wiki/%D8%AF%D8%B1%D9%85%D8%A7%D9%86_%D9%88%D8%AC%D9%88%D8%AF%DB%8C"
									className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200 lg:w-1/4 xs:w-1/3"
								>
									<span className={"text-gray-500 mx-2"}>مقاله ویکیپدیا</span>
									<svg
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										className="opacity-50 hi-solid hi-information-circle inline-block w-5 h-5"
									>
										<path
											fillRule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
											clipRule="evenodd"
										></path>
									</svg>
								</a>
							</div>
						</div>
						{/* divider */}
					</div>
				</div>

				{/*<HavingDoubt/>*/}
			</div>
		</div>
	</div>);
}

