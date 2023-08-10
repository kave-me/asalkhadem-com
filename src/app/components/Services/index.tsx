import Image from "next/image";

interface HeadProps {
	heading: string;
	subHead: string;
}

function Head({heading, subHead}: HeadProps) {
	return (
		<header className="text-center">
			<div className="text-base uppercase font-bold tracking-wider mb-1 text-yellow-400 animate-bounce">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="hi-solid hi-terminal inline-block w-10 h-10 mb-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
					/>
				</svg>
			</div>
			<h2 className="text-2xl md:text-3xl font-extrabold mb-6">{heading}</h2>
			<h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
				{subHead}
			</h3>
		</header>
	);
}

interface CardProps {
	title: string;
	description: JSX.Element;
	imgAddr: string;
}

function Card({title, description, imgAddr}: CardProps) {
	return (
		<article className="py-5" key={title}>
			<div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition relative aspect-[4/3] ">
				<Image
					src={imgAddr}
					alt={title}
					fill={true}
					sizes={"100%"}
					className={"rounded-lg aspect-[4/3] object-cover object-center w-full h-full  shadow-lg drop-shadow-lg bg-black bg-opacity-5 opacity-90 hover:opacity-100 transition cursor-pointer hover:scale-105 active:scale-95 "}
				/>
			</div>
			<h4 className="text-lg font-bold mb-2">{title}</h4>
			<div
				className="leading-relaxed text-gray-600 mb-3 text-base"
				role="paragraph"
			>
				{description}
			</div>
		</article>
	);
}

export function Services() {
	const heading = "من کی هستم؟";
	const subHead =
		"سلام! من یک مشاور و مربی روانشناسی هستم، بهتون کمک می‌کنم تا با احساسات و افکار منفی خود کنار بیایید و به زندگی مطلوب خود برسید.";

	const cards = [
		{
			title: "تحصیلات",
			imgAddr: "/img/about-me-eduction.png",
			description: (
				<ul className="list-disc list-inside">
					<li>عضو سازمان پزشکی ایران</li>
					<li>دکترای روانشناسی سلامت</li>
					<li>کارشناسی ارشد روانشناسی بالینی</li>
					<li>کارشناسی روانشناسی عمومی</li>
				</ul>
			),
		},
		{
			title: "تجربه",
			imgAddr: "/img/about-me-experience.png",
			description: (
				<p>
					۱۰ سال تجربه در زمینه روانشناسی دارم و در حال حاضر در دانشگاه‌ها و
					کارگاه‌های مختلف تدریس می‌کنم.
				</p>
			),
		},
		{
			title: "کارگاه‌ها",
			imgAddr: "/img/about-me-workshops.png",
			description: (
				<ul className="list-disc list-inside">
					<li>رواندرمانی وجودی (اگزیستانسیال)</li>
					<li>رواندرمانی اگزیستانسیال و پدیدارشناسی</li>
					<li>روانپویشی کوتاه مدت (ISTDP)</li>
					<li>سکس تراپی و سکسولوژی</li>
					<li>تحلیل رفتار متقابل ۱۰۱ (TA)</li>
					<li>درمان مبتنی بر پذیرش و تعهد (اکت)</li>
				</ul>
			),
		},
	];

	return (
		<div className="bg-gray-100">
			<div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
				<Head heading={heading} subHead={subHead}/>
				<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
					{cards.map((card, index) => (
						<Card
							key={index}
							title={card.title}
							imgAddr={card.imgAddr}
							description={card.description}
						/>
					))}
				</section>
			</div>
		</div>
	);
}
