import Image from "next/image";
import backgroundImage from "../../../../public/black.png";

const Container = ({ children = <div />, className = "" }) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export function DraftAboutMeSection() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-bold tracking-tighter text-blue-100 sm:text-5xl">
            بیاید با هم بیشتر آشنا بشیم ... 🤗
          </h2>
          <p className="font-display mt-4 text-xl tracking-tight text-blue-200">
            روانشناسی یک ماجراجویی علمیه که به ما کمک می‌کنه تا دریچه‌های رازهای
            ذهنمون رو باز کنیم، انگار داریم جاسوسی می‌کنیم تو دل خودمون و
            می‌خوایم اسرارهایی رو کشف کنیم که در دل ذهنمون پنهان شدن.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -bottom-32 -top-40 overflow-hidden bg-gray-950">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-900" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-800" />
        </div>
        <Container className="relative">
          <span>test</span>
          {/*<ScheduleTabbed />*/}
          {/*<ScheduleStatic />*/}
        </Container>
      </div>
    </section>
  );
}
