function TestimonialCard({ quote, name, context: time }: any) {
  return (
    <div className="px-6 pt-14 pb-6 md:px-8 md:pb-6 relative bg-white shadow-sm rounded">
      <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif">
        “
      </div>
      <div className="relative h-full">
        <blockquote className="flex flex-col h-full justify-between items-start ">
          <p className=" font-medium drop-shadow-sm text-[13px] text-gray-700 leading-8 mb-4 line-clamp-none">
            {quote}
          </p>
          <footer className="flex items-center gap-4 md:-mr-2.5 md:-mb-1 ">
            <span className="rounded-full overflow-hidden w-12 h-12  border-2 border-gray-100 bg-gray-50">
              <svg
                className=" w-full h-full text-gray-300 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div>
              <p className="font-semibold text-blue-600 hover:text-blue-400 mb-1 text-sm opacity-80 ">
                {name}
              </p>
              <p className="text-gray-400 font-light text-xs opacity-80 ">
                {time}
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  show?: number;
}

export function Testimonial({ show = 4 }: TestimonialCardProps) {
  const data = [
    {
      quote: `من چهار سال است که به بیماری اسکیزوفرنی مبتلا هستم و تقریبا هشت ماه است که به ایشان مراجعه میکنم و در این مدت با تکنیک های مدیتیشن و در لحظه بودن من را از هذیان ها و اضطراب های ذهنم دور کردند.`,
      name: "مهدی",
      context: "1401/12/22",
    },
    {
      quote: `بسیار دلسوز و پیگیر هستن که من با اینکه توو کرج تا الان به چند روانشناس مراجعه کرده بودم، مثلِ ایشون ندیدم... با صحبتها و روش درمانیشون آرامش و حالِ خوب به آدم میدن. من که خیلی دوسشون دارم و سعی میکنم حداقل هفته ای یک جلسه حتما باهاشون بگیرم. شدیدا پیشنهادشون میکنم.`,
      name: "ناشناس",
      context: "1401/12/22",
    },
    {
      quote: "مورد اعتماد و حرفه ایی.",
      name: "مهدی",
      context: "1401/12/22",
    },
    {
      quote: `با دانش، دلسوز، حرفه ای هستن خیلیی خوب و درست با مراجع ارتباط میگیرن صداقت دارن و از تکنیکا و متدای مختلف به خوبی استفاده میکنن.`,
      name: "مهرداد",
      context: "1401/12/22",
    },
    {
      quote: `خیلی با حوصله و دلسوزن خوشحالم که با ایشون آشنا شدم بهترینن❤️`,
      name: "سوگول",
      context: "1401/12/22",
    },

    {
      quote:
        "عملکرد ایشون رو دوست دارم ،من در طول جلسه احساس آرامش دارم و احساس فشار یا اذیت شدن ندارم و میتونم در زمان مناسب حرف هامو بیان کنم. ",
      name: "مهرانا",
      context: "1402/05/13",
    },
    {
      quote:
        "من برای اضطراب شدید داشتم مراجعه کردم و با صحبت و راهکارهایی که دادن الان خیلی بهتر شدم بسیار خوش اخلاق، شنونده خوب و با حوصله راهکارهای خیلی خوب و کاربردی رو ارائه میدن. ",
      name: "ناشناس",
      context: "1401/05/12",
    },
    {
      quote:
        "خانم دکتر بسیار دلسوز و حاذق هستند در طول جلسه تمامیت ایشون برای مراجع کاملا قابل لمسه منفعل و تنها شنونده نیستند نظرات متخصصانه ی ایشون من را به خودم خیلی آگاه کرد و با همراهی و پیگیری های ایشون تونستم از پس مشکلاتم بگذرم پر از حس امنیت ، آرامش، اعتماد بودند سپاسگذارم.",
      name: "منصوره",
      context: "1402/05/12",
    },
    {
      quote:
        "من بعد از کلی پرس و جو و خواندن رزومه بیش از 10 نفر دکتر روانشناس و همچنین بعد از دو جلسه با دو دکتر مختلف، ایشان رو انتخاب کردم، دلیل اول ایشون در کارشون حرفه ای هستن، دوم اینکه دقت بالایی دارند و در طول جلسه تمام حواسشون به من هست ( به دلیل راه دور من با ایشان انلاین و تصویری صحبت می کنم) و اینکه ایشان فقط شنونده نیستن و در آخر بی نهایت دوست داشتنی هستن و من ایشان رو پی شنهاد می کنم.... ",
      name: "ماریانا",
      context: "1401/11/08",
    },
    {
      quote:
        "از نظر شروع جلسه و ارتباط برقرار شدن و ایجاد حس امنیت و راحتی که خیلییی مهمه بسیار عالییی بودند از همون جلسه اول بسیار راضی و تاثیرات بسیار خوب توی تجربه روان درمانگری که حین ۲سال داشتم ایشون بهترین روان درمانگری بودن که شناختم و خوشحالم ازین بابت تشکر از تراپیست عزیزم ",
      name: "ناشناس",
      context: "1402/05/16",
    },
  ];

  return (
    <div className="bg-[conic-gradient(at_right_center,_var(--tw-gradient-stops))] from-green-100 via-blue-50 via to-indigo-100 via border-y-2 border-dashed border-indigo-200 ">
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <p className="text-sm  font-bold  mb-7 text-blue-700 opacity-80 ">
            نظرات مراجعین
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900/95 drop-shadow-xl ">
            تجربه دیگران از مشاوره
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {data.map((item, index) => {
            if (index < show) {
              return <TestimonialCard key={index} {...item} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
