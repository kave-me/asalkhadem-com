import {AboutMeSection} from 'components/AboutMe';

export default function About() {
	return (
		<main id="page-content" className="flex flex-auto flex-col max-w-full">
			<div className="bg-gray-900">
				<div className="space-y-8 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:pb-32 lg:pt-12  border-x-2 border-dashed border-gray-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900">
						<h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-100  ">
							سلام! من <span className="text-indigo-600">عسل خادم</span> هستم
						</h2>
						<h3 className="text-lg md:text-xl md:leading-relaxed font-medium lg:w-1/2 text-gray-200">
							خب حالا بیاید کمی  بیشتر با هم آشنا بشیم 🥰
						</h3>


					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-8">
						<VideoAboutMe/>
					</div>
					<p className="text-gray-200 text-sm mt-4 max-w-prose bg-gray-800 p-8 rounded shadow mx-auto leading-relaxed  ">
						 دکترای تخصصی روانشناسی سلامت، روانشناس و روان درمانگر
						و روان درمانی فردی و گروهی اگزیستانسیال
						<br/>
						اینجا هستم برای کمک به شما. برای اینکه بتوانید در مواجهه با انتخابات
						مهم و تصمیمات زندگی خود، تحمل اضطراب و استرس کنار بیاید و با شرایط
						پیچیده و آشفته زندگی، به خوبی سازگار بشید.
					</p>

				</div>
				<AboutMeSection/>

			</div>
		</main>
	);
}

function VideoAboutMe() {
	return (<iframe
		className="rounded-lg shadow-lg"
		width="640"
		height="360"
		sandbox="allow-scripts allow-same-origin"
		src="https://www.aparat.com/video/video/embed/videohash/3PcVm/vt/frame?isamp"
		title="من کی هستم"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen></iframe>);
}