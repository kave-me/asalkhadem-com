import Image from "next/image";

interface HeadProps {
  heading: string;
  subHead: string;
}

function AboutMeTop({ heading }: HeadProps) {
  return (
    <header className="text-center ">
      <div className="mb-1 animate-bounce text-base font-bold uppercase tracking-wider text-yellow-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hi-solid hi-terminal mb-2 inline-block h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      </div>
      <h2 className="mb-8 font-sans text-2xl font-black md:text-4xl">
        {heading}
      </h2>
      <h3 className="mx-auto text-lg font-medium text-gray-600 md:text-base md:leading-relaxed lg:w-2/3">
        {/*	<p className="text-justify">*/}
        سلام! من یک مشاور و مربی روانشناسی هستم، بهتون کمک می‌کنم تا با احساسات
        و افکار منفی خود کنار بیایید و به زندگی مطلوب خود برسید.
      </h3>
      <div className="relative mx-auto my-10 aspect-[4/1] max-w-2xl rounded-lg bg-white p-2 transition hover:bg-indigo-500 ">
        <Image
          src="/img/hero.png"
          alt="hero"
          fill={true}
          sizes={"100%"}
          className={
            "aspect-[4/3] h-full w-full cursor-pointer rounded-lg bg-black  bg-opacity-5 object-cover object-center opacity-90 shadow-lg drop-shadow-lg transition hover:scale-105 hover:opacity-100 active:scale-95 "
          }
        />
      </div>

      <h4 className="mx-auto text-lg font-bold tracking-tighter text-gray-700 md:text-xl md:leading-relaxed lg:w-2/3">
        روانشناس و روان درمانگر
      </h4>

      <div className="mx-auto max-w-3xl text-base leading-loose tracking-tight text-gray-900 ">
        <p className="my-2 text-justify">
          از سال ۱۳۹۲ تا کنون در زمینه مشاوره و مربیگری روانشناسی فعالیت می‌کنم.
          در این مدت به بیش از ۱۰۰۰ نفر کمک کرده‌ام تا به اهدافشان برسند.
        </p>
        <p className="text-justify">
          برای این کار از روش‌های مختلفی استفاده می‌کنم که در ادامه به برخی از
          آن‌ها اشاره می‌کنم.
        </p>
        <p className="text-justify">
          تخصص اصلی من در رواندرمانی وجودی یا وجودگرایی است. در این روش با
          احساسات و افکار منفی خود کنار می‌آییم و به زندگی مطلوب خود می‌رسیم.
        </p>
      </div>
    </header>
  );
}

interface CardProps {
  title: string;
  description: JSX.Element;
  imgAddr: string;
}

function Card({ title, description, imgAddr }: CardProps) {
  return (
    <article className="py-5" key={title}>
      <div className="relative mb-8 aspect-[4/3] rounded-lg bg-white p-2 transition hover:bg-indigo-500 ">
        <Image
          src={imgAddr}
          alt={title}
          fill={true}
          sizes={"100%"}
          className={
            "aspect-[4/3] h-full w-full cursor-pointer rounded-lg bg-black  bg-opacity-5 object-cover object-center opacity-90 shadow-lg drop-shadow-lg transition hover:scale-105 hover:opacity-100 active:scale-95 "
          }
        />
      </div>
      <h4 className="mb-2 text-lg font-bold">{title}</h4>
      <div
        className="mb-3 text-justify text-xs leading-relaxed tracking-tight text-gray-600"
        role="paragraph"
      >
        {description}
      </div>
    </article>
  );
}

export function AboutMeSection() {
  const cards = [
    {
      title: "تحصیلات",
      imgAddr: "/img/about-me-eduction.png",
      description: (
        <ul className="list-inside list-disc">
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
        <ul className="list-inside list-disc">
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
  const heading = "من کی هستم؟";

  const subHead =
    "سلام! من یک مشاور و مربی روانشناسی هستم، بهتون کمک می‌کنم تا با احساسات و افکار منفی خود کنار بیایید و به زندگی مطلوب خود برسید.";

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto space-y-10  border-2 border-dashed border-indigo-200 bg-gray-200 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <AboutMeTop heading={heading} subHead={subHead} />
        <div className="grid grid-cols-1 gap-4 rounded-b-lg border-b-2 border-l-2 border-dashed border-indigo-500/10 bg-gradient-to-b from-gray-100 to-indigo-100/30 p-4  md:grid-cols-3 md:gap-8 ">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
