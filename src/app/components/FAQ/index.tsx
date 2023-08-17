const faqData = [
  {
    question: "آیا می‌توانم به صورت آنلاین مشاوره بگیرم؟",
    answer: "بله، می‌توانید به صورت آنلاین مشاوره بگیرید. 👍 ",
  },
  {
    question: "نگران این هستم که مشاوره آنلاین مفید نباشد؟ ",
    answer:
      "نگران نباشید، به صورت کلی مشاوره آنلاین نیز مفید است اما اگر نتیجه مورد انتظار حاصل نشد نوع جلسات را تغییر می‌دهیم. 🌞",
  },
  {
    question: "جلسات مشاوره و اطلاعات من محرمانه است؟",
    answer:
      "بله، تمامی اطلاعات شما محرمانه است و به هیچ شخص یا سازمانی ارائه نمی‌شود. 🤫",
  },
  {
    question: "آیا میتوانم برای شخص دیگری مشاوره بگیرم؟",
    answer:
      "بله، می‌توانید برای اعضای خانواده‌تان یا دوستانتان هم وقت مشاوره بگیرید. 👌",
  },
];

export function FaqSection() {
  return (
    <div className="bg-white">
      <div className="container  mx-auto space-y-16 px-4 py-16 lg:flex lg:justify-between lg:space-x-8 lg:space-y-0 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="text-center lg:text-right">
          {/*<div className="text-sm uppercase font-bold tracking-wider mb-2 text-indigo-700">*/}
          {/*	سوالات متداول*/}
          {/*</div>*/}
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            <span className="text-indigo-600">سوالات </span>
            متداول
          </h2>
          <h3 className="pl-4 text-lg text-gray-600 md:text-base md:leading-relaxed">
            شما هم این سوال‌ها رو دارید؟ 🤔
          </h3>
        </div>

        <div className="space-y-8 lg:w-3/5 lg:flex-none">
          {faqData.map((item, index) => (
            <div className={"prose prose-indigo"} key={index}>
              <h4 className="font-black">{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
