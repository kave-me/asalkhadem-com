import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";
import { classNames } from "components/AboutMe/classNames";

interface ITestimonialCard {
  quote: string;
  name: string;
  time: string;
  blur?: boolean;
}

function TestimonialCard({
  blur = false,
  name,
  quote,
  time,
}: ITestimonialCard) {
  return (
    <div className="relative rounded bg-white px-6 pb-6 pt-14 shadow md:px-8 md:pb-6">
      <div className="absolute right-0 top-0 mr-5 mt-2 font-serif text-8xl text-gray-200 opacity-75">
        “
      </div>
      <div className="relative h-full">
        <blockquote className="flex h-full flex-col items-start justify-between ">
          <p className=" mb-4 line-clamp-none text-[14px] font-medium leading-8 text-gray-700 drop-shadow-sm">
            {quote}
          </p>
          <footer className="flex items-center gap-4 md:-mb-1 md:-mr-2.5 ">
            <span className="h-12 w-12 overflow-hidden rounded-full  border-2 border-gray-100 bg-gray-50">
              <svg
                className=" h-full w-full text-gray-300 "
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
              <p className="mb-1 text-sm font-semibold text-blue-600 opacity-80 hover:text-blue-400 ">
                {name}
              </p>
              <p className="text-xs font-light text-gray-400 opacity-80 ">
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
      time: "1401/12/22",
    },
    {
      quote: `بسیار دلسوز و پیگیر هستن که من با اینکه توو کرج تا الان به چند روانشناس مراجعه کرده بودم، مثلِ ایشون ندیدم... با صحبتها و روش درمانیشون آرامش و حالِ خوب به آدم میدن. من که خیلی دوسشون دارم و سعی میکنم حداقل هفته ای یک جلسه حتما باهاشون بگیرم. شدیدا پیشنهادشون میکنم.`,
      name: "ناشناس",
      time: "1401/12/22",
    },
    {
      quote: "مورد اعتماد و حرفه ایی.",
      name: "مهدی",
      time: "1401/12/22",
    },
    {
      quote: `با دانش، دلسوز، حرفه ای هستن خیلیی خوب و درست با مراجع ارتباط میگیرن صداقت دارن و از تکنیکا و متدای مختلف به خوبی استفاده میکنن.`,
      name: "مهرداد",
      time: "1401/12/22",
    },
    {
      quote: `خیلی با حوصله و دلسوزن خوشحالم که با ایشون آشنا شدم بهترینن❤️`,
      name: "سوگول",
      time: "1401/12/22",
    },

    {
      quote:
        "عملکرد ایشون رو دوست دارم ،من در طول جلسه احساس آرامش دارم و احساس فشار یا اذیت شدن ندارم و میتونم در زمان مناسب حرف هامو بیان کنم. ",
      name: "مهرانا",
      time: "1402/05/13",
    },
    {
      quote:
        "من برای اضطراب شدید داشتم مراجعه کردم و با صحبت و راهکارهایی که دادن الان خیلی بهتر شدم بسیار خوش اخلاق، شنونده خوب و با حوصله راهکارهای خیلی خوب و کاربردی رو ارائه میدن. ",
      name: "ناشناس",
      time: "1401/05/12",
    },
    {
      quote:
        "خانم دکتر بسیار دلسوز و حاذق هستند در طول جلسه تمامیت ایشون برای مراجع کاملا قابل لمسه منفعل و تنها شنونده نیستند نظرات متخصصانه ی ایشون من را به خودم خیلی آگاه کرد و با همراهی و پیگیری های ایشون تونستم از پس مشکلاتم بگذرم پر از حس امنیت ، آرامش، اعتماد بودند سپاسگذارم.",
      name: "منصوره",
      time: "1402/05/12",
    },
    {
      quote:
        "من بعد از کلی پرس و جو و خواندن رزومه بیش از 10 نفر دکتر روانشناس و همچنین بعد از دو جلسه با دو دکتر مختلف، ایشان رو انتخاب کردم، دلیل اول ایشون در کارشون حرفه ای هستن، دوم اینکه دقت بالایی دارند و در طول جلسه تمام حواسشون به من هست ( به دلیل راه دور من با ایشان انلاین و تصویری صحبت می کنم) و اینکه ایشان فقط شنونده نیستن و در آخر بی نهایت دوست داشتنی هستن و من ایشان رو پی شنهاد می کنم.... ",
      name: "ماریانا",
      time: "1401/11/08",
    },
    {
      quote:
        "از نظر شروع جلسه و ارتباط برقرار شدن و ایجاد حس امنیت و راحتی که خیلییی مهمه بسیار عالییی بودند از همون جلسه اول بسیار راضی و تاثیرات بسیار خوب توی تجربه روان درمانگری که حین ۲سال داشتم ایشون بهترین روان درمانگری بودن که شناختم و خوشحالم ازین بابت تشکر از تراپیست عزیزم ",
      name: "ناشناس",
      time: "1402/05/16",
    },
  ];
  const [parent, enableAnimations] = useAutoAnimate({
    duration: 300,
    easing: "ease-in",
  });
  useEffect(() => {
    enableAnimations(true);
  }, []);
  return (
    <div className=" border-t-2 border-dashed border-indigo-200 bg-[conic-gradient(at_right_center,_var(--tw-gradient-stops))] from-green-100 via-white to-indigo-100 ">
      <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:pb-32 lg:pt-16 xl:max-w-7xl">
        <div className="text-center">
          <p className="mb-7  text-sm  font-bold text-blue-700 opacity-80 ">
            نظرات مراجعین
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900/95 drop-shadow-xl md:text-5xl ">
            تجربه دیگران از مشاوره
          </h2>
        </div>

        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"
          ref={parent}
        >
          {data.map((item, index) => {
            if (index < show) {
              return (
                <TestimonialCard
                  key={item.quote}
                  time={item.time}
                  quote={item.quote}
                  name={item.name}
                  blur={(() => {
                    if (index + 1 > show - 2) {
                      return true;
                    }
                    return false;
                  })()}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
