import React from 'react';
import {
	FaBrain,
	FaBullseye,
	FaComments,
	FaHeart,
	FaLightbulb,
	FaSearch,
	FaSmile,
	FaUserFriends,
	FaUsers
} from 'react-icons/fa';

interface iClaim {
	title: string,
	description: string,
	icon: React.ReactNode
}


const claims: iClaim[] = [
	{
		title: "به دنبال معنا",
		description: "در مسیر زندگی خود به دنبال معنا و اهمیت واقعی زندگی‌تان هستید. شاید از گفته‌های روان‌شناس مشهور و مرموز، کارل یونگ، که می‌فرمایند: «زندگی از چیزی بهتر از ارتباط با چیزهایی بزرگتر از خودتان نیست.» الهام گرفته‌اید و به تعمق بیشتری در خودتان و دنیای اطراف‌تان پرداخته‌اید.",
		icon: <FaSearch className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "پیگیری اهداف",
		description: "در مسیر رشد و پیشرفت شخصی خود به دنبال تعیین اهداف و تحقق آنها هستید. می‌توانید از آموزه‌های واضح و الهام‌بخش ویکتور فرانکل، روان‌شناس برجسته، که معتقد بود «آن که چراغ خود را روشن نگه دارد، هر تاریکی‌ای را می‌تواند نورانی کند»، برای بهترین راه‌بری و پیشروی در زندگی خود الهام بگیرید.",
		icon: <FaBullseye className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "ارزش‌های زندگی",
		description: "در جستجوی ارزش‌هایی هستید که زندگی‌تان را به طور واقعی تحت تأثیر قرار دهند. ممکن است به نقل قول مشهور سیگموند فروید، پدر روان‌تحلیل، تاکید کنید که «شما باید به تحقق آرزوهای ذاتی‌تان پی ببرید تا در زندگی واقعی‌تری دست یابید.»",
		icon: <FaHeart className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "مواجهه با چالش‌ها",
		description: "زمانی که با مشکلات و چالش‌های زندگی مواجه می‌شوید، به دنبال راه‌حل‌هایی هستید که واقعاً به شما کمک کنند. ممکن است از نظرات گسترده و عمیق کارل راجرز، روان‌شناس انسانی و پدر روان‌شناسی انسانی، که می‌فرماید: «وقتی من خودم هستم و تمام توانایی‌هایم را به کار می‌گیرم، خوب و شجاعانه زندگی می‌کنم.» الهام گرفته‌اید.",
		icon: <FaLightbulb className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "مدیریت تنهایی",
		description: "تجربه تنهایی و انزوا برایتان آشناست و به دنبال راه‌حل‌هایی هستید تا از این وضعیت خارج شوید. ممکن است از نظرات بزرگ روان‌شناس و پیشوای موفق، آبراهام ماسلو، که معتقد بود «به چیزهای بزرگ نیازمند تنهایی هستید تا بتوانید بهترین خود را کشف کنید»، الهام بگیرید.",
		icon: <FaUsers className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "بهبود خودآگاهی",
		description: "به دنبال شناخت بهتری از خودتان و بهبود روانی‌تان هستید. ممکن است نقل قول معروف کارل یونگ، که می‌فرماید «همه یاد می‌گیریم، در زندگی باید بر چیزهای بسیاری کنترل داشته باشیم، اما اهمیت واقعی‌ترین کار تمیز کردن منزلی انسانی است.»، به شما الهام دهد.",
		icon: <FaBrain className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "احساسات مثبت",
		description: "در جستجوی راه‌هایی برای تقویت و بهبود احساسات مثبت و خوبی‌های درونی‌تان هستید. شاید از نظرات انریکو هولنس، روان‌شناس و متخصص ارتقاء روانی، که می‌فرماید: «زندگی را از دست ندهید! زندگی با تمام زیبایی‌ها و چالش‌هایش را تجربه کنید.» الهام گرفته‌اید.",
		icon: <FaSmile className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "ارتقاء تعاملات اجتماعی",
		description: "به دنبال بهبود و ارتقاء تعاملات اجتماعی‌تان هستید تا روابط بهتری بسازید. ممکن است از نظرات جان بول‌بی، روان‌شناس و متخصص تعاملات انسانی، که معتقد بود «هدف از تعاملات، آموزش و رشد هر دو طرف است»، الهام بگیرید.",
		icon: <FaComments className="h-8 w-full text-indigo-700"/>,
	},
	{
		title: "خودمراقبتی",
		description: "در تلاش برای مراقبت بهتر از خود و بهبود کیفیت زندگی‌تان هستید. ممکن است از نقل قول مشهور کارل راجرز، که می‌فرماید: «اگر خودتان را دوست داشته باشید و محبت کنید، دنیا نیز این کار را خواهد کرد.»، برای ارتقاء وضعیت روانی و جسمی‌تان استفاده کنید.",
		icon: <FaUserFriends className="h-8 w-full text-indigo-700"/>,
	}
]

export const HavingDoubt = () => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div className="max-w-screen-md mb-8 lg:mb-16">
					<h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">اطمینان ندارم که این روش مناسب من هست یا نه 😕</h3>
					<p className="text-gray-500 sm:text-xl dark:text-gray-400">این روش مناسب شماست اگر طحقق این موارد براتون با ارزش و با اهمیت هست، البته همیشه می‌تونی با من تماس بگیری. 🤙
					</p>
				</div>
				<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
					{
						claims.map((claim, index) => {
							return (
								<div key={claim.title}>
									<div
										className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
										{claim.icon}
									</div>
									<h3 className="mb-2 text-xl font-bold dark:text-white">{claim.title}</h3>
									<p className="text-gray-500 dark:text-gray-400">{claim.description}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}