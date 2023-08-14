import {SimpleCard} from './components/SimpleCard';
import {PhotoAlbum} from './components/PhotoAlbum';
import {Quotes} from './components/Quotes';


export default function QuoteAndGallery() {
	return (
		<main id="page-content" className="flex flex-auto flex-col max-w-full">
			<div className="bg-gray-100">
				<div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
					<div>
						<h2 className="text-3xl md:text-4xl font-extrabold mb-6">
							<span className="font-medium">
							گالری تصاویر
						</span>
						</h2>
						<h3 className="text-lg md:text-xl md:leading-relaxed font-light lg:w-1/2 text-gray-900">
							تصاویری از محیط مطب و جلسات مشاوره را در این قسمت مشاهده می‌کنید.
						</h3>
					</div>
					<PhotoAlbum photos={photos}/>
					<h3
						className=" text-lg md:text-3xl font-black leading-3 mt-10 ">
						نقل قول
					</h3>
					<p className="text-base md:text-base text-gray-900 my-8 md:w-10/12 ">
تعدادی از نقل قول های که در جلسات مشاوره فردی و گروهی در طول جلسه بیان شده را در ادامه قرار داده ام.
						نقل قول هایی که در جلسات مشاوره فردی و گروهی در طول جلسه بیان شده.
					</p>
					<Quotes callbackfn={(item, index) => <SimpleCard key={index} title={item.title} description={item.description}
					                                                 credit={item.credit}/>}/>
				</div>
			</div>

		</main>
	);
}

const photos = [
	{
		src: "/img/gallery/1-min.jpg",
		alt: "1",
	},
	{
		src: "/img/gallery/2-min.jpg",
		alt: "2",
	},
	{
		src: "/img/gallery/3-min.jpg",
		alt: "3",
	},
	{
		src: "/img/gallery/4-min.jpg",
		alt: "4",
	},
	{
		src: "/img/gallery/5-min.jpg",
		alt: "5",
	},
	{
		src: "/img/gallery/6-min.jpg",
		alt: "6",
	},
	{
		src: "/img/gallery/7-min.jpg",
		alt: "7",
	},
	{
		src: "/img/gallery/8-min.jpg",
		alt: "8",
	},
	{
		src: "/img/gallery/9-min.jpg",
		alt: "9",
	},
]

