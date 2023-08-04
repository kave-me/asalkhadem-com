export function Services() {
	return <section
		className="text-md md:text-md md:leading-relaxed font-medium text-gray-300 flex flex-wrap  bg-gray-800/50 my-8 py-12">
		<h2 className="text-5xl font-black text-center text-indigo-50  mb-8 w-full ">خدمات</h2>

		<div
			className="w-full flex max-w-2xl justify-between mx-auto bg-amber-50/5 border-dashed border-amber-500/30 border-2 px-8 py-12 rounded">

			<article className="min-w-max">
				<h3 className="font-sans font-bold text-xl pb-2 text-amber-100/95">روان درمانی فردی:</h3>
				<ul className="list-disc list-inside ">
					<li className="pr-4">اضطراب و افسردگی</li>
					<li className="pr-4">احساس پوچی و بی هدفی (خلاء وجودی)</li>
				</ul>
			</article>

			<article className="min-w-max">
				<h3 className="font-sans font-bold text-xl pb-2 text-amber-100/95"> روان درمانی بین فردی و گروهی:</h3>
				<ul className="list-disc list-inside ">
					<li className="pr-4">اضطراب اجتماعی</li>
					<li className="pr-4">گروه درمانی اگزیستانسیال</li>
				</ul>
			</article>
		</div>
	</section>

}