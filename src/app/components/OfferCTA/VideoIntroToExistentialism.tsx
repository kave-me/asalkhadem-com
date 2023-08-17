function VideoTutorial() {
  return (
    <iframe
      width="640"
      height="360"
      className="rounded-lg shadow-lg"
      sandbox="allow-scripts allow-same-origin"
      src="https://www.aparat.com/video/video/embed/videohash/t9UBw/vt/frame?isamp"
      title="اگزیستانسیالیسم چیست؟"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export function VideoIntroToExistentialism() {
  return (
    <div className="overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="relative">
          <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-12 transform text-gray-300 pattern-dots-lg lg:h-48 lg:w-48"></div>
          <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-12 translate-y-16 transform text-gray-300 pattern-dots-lg lg:h-48 lg:w-48"></div>
          <div className="relative rounded bg-white p-10 text-center shadow lg:px-16 lg:py-12">
            <div className="space-y-10">
              <div className="text-center">
                <p className="mb-4  text-sm  font-bold text-blue-700 opacity-80 ">
                  گزیده ای از اگزیستانسیالیسم
                </p>
              </div>
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
                  درمان <span className="text-indigo-600">اگزیستانسیال</span>{" "}
                  چیست؟
                </h2>
                <h3 className="py-8 text-lg font-medium text-gray-600 md:text-lg md:leading-relaxed">
                  این درمان به شما کمک می‌کند تا بتوانید در مواجهه با انتخابات
                  مهم و تصمیمات زندگی خود، تحمل اضطراب و استرس را تجربه کنید و
                  با شرایط پیچیده و آشفته زندگی، به خوبی سازگار شوید.
                </h3>
                <div className="mx-auto flex justify-center py-8">
                  <VideoTutorial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
