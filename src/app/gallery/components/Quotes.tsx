export function Quotes(props: { callbackfn: (item: any, index: number) => any }) {
	return <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
		{
			[
				{
					title: 'ابراز علاقه',
					description: 'نمی خواهم فقط دوستم بدارند، بلکه می خواهم دوست داشتن را به من ابراز کنند.',
					credit: 'رضا'
				},
				{
					title: 'پذیرش',
					description: 'هر لحظه و هر ثانیه دوست داشتنی تر می‌شوی',
					credit: 'مریم'
				},
				{
					title: 'شجاعت',
					description: 'ترسوها توانایی ابراز عشق ندارند، این قابلیت منحصر به فرد افراد شجاع است.',
					credit: 'محمد'
				},
				{
					title: 'توانایی',
					description: 'توانایی ابراز عشق یکی از مهمترین مهارت‌های زندگی است.',
					credit: 'هستی'
				}
			].map(props.callbackfn)
		}

	</div>;
}