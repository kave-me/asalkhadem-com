const faqData = [{
	question: "آیا می‌توانم به صورت آنلاین مشاوره بگیرم؟", answer: "بله، می‌توانید به صورت آنلاین مشاوره بگیرید."
}, {
	question: "نگران این هستم که مشاوره آنلاین مفید نباشد؟",
	answer: "نگران نباشید، به صورت کلی مشاوره آنلاین نیز مفید است اما اگر نتیجه مورد انتظار حاصل نشد نوع جلسات را تغییر می‌دهیم."

}, {
	question: "جلسات مشاوره و اطلاعات من محرمانه است؟",
	answer: "بله، تمامی اطلاعات شما محرمانه است و به هیچ شخص یا سازمانی ارائه نمی‌شود."
}, {
	question: "آیا میتوانم برای شخص دیگری مشاوره بگیرم؟",
	answer: "بله، می‌توانید برای اعضای خانواده‌تان یا دوستانتان هم وقت مشاوره بگیرید."
}


]


export function FAQ() {
	return (<div className="bg-white">

		<div
			className="lg:flex  space-y-16 lg:justify-between lg:space-x-8 lg:space-y-0 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">

			<div className="text-center lg:text-right">
				<div className="text-sm uppercase font-bold tracking-wider mb-2 text-indigo-700">
					سوالات متداول
				</div>
				<h2 className="text-3xl md:text-4xl font-extrabold mb-4">
					سوالاتی که ممکن است داشته باشید
				</h2>
				<h3 className="text-lg md:text-base md:leading-relaxed font-sans text-gray-600">
					سعی کردیم تا سوالاتی که ممکن است داشته باشید را پاسخ دهیم. در صورتی که سوالی دارید که در اینجا به آن اشاره
					نشده است با ما تماس بگیرید.
				</h3>
			</div>

			<div className="space-y-8 lg:w-3/5 lg:flex-none">
				{faqData.map((item, index) => (<div className={"prose prose-indigo"} key={index}>
					<h4 className="font-black">
						{item.question}
					</h4>
					<p>
						{item.answer}
					</p>
				</div>))}
			</div>
		</div>
	</div>);
}
