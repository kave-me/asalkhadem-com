export function Features() {
  let heading = "لورم ایپسوم";
  let subHead =
    "        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود";
  return (
    <div className="bg-gray-100">
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
            {/*<svg*/}
            {/*  fill="currentColor"*/}
            {/*  viewBox="0 0 20 20"*/}
            {/*  xmlns="http://www.w3.org/2000/svg"*/}
            {/*  className="hi-solid hi-terminal inline-block w-10 h-10"*/}
            {/*>*/}
            {/*  <path*/}
            {/*    fillRule="evenodd"*/}
            {/*    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"*/}
            {/*    clipRule="evenodd"*/}
            {/*  ></path>*/}
            {/*</svg>*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hi-solid hi-terminal inline-block w-10 h-10 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            {heading}
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            {subHead}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="py-5">
            <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
              <img
                src="f1.png"
                alt="Preview Feature Image"
                className="rounded-lg aspect-[4/3] object-cover"
              />
            </div>
            <h4 className="text-lg font-bold mb-2">لورم ایپسوم متن ساختگی</h4>
            <p className="leading-relaxed text-gray-600 mb-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </p>
          </div>
          <div className="py-5">
            <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
              <img
                src="f2.png"
                alt="Preview Feature Image"
                className="rounded-lg aspect-[4/3] object-cover"
              />
            </div>
            <h4 className="text-lg font-bold mb-2">لورم ایپسوم متن ساختگی</h4>
            <p className="leading-relaxed text-gray-600 mb-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </p>
          </div>
          <div className="py-5">
            <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
              <img
                src="f3.png"
                alt="Preview Feature Image"
                className="rounded-lg aspect-[4/3] object-cover"
              />
            </div>
            <h4 className="text-lg font-bold mb-2">لورم ایپسوم متن ساختگی</h4>
            <p className="leading-relaxed text-gray-600 mb-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
