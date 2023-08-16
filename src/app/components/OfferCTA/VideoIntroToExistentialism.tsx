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
    <div className="bg-gray-100 overflow-hidden">
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="relative">
          <div className="pattern-dots-lg text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-12 -translate-y-16"></div>
          <div className="pattern-dots-lg text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-12 translate-y-16"></div>
          <div className="p-10 lg:py-12 lg:px-16 bg-white rounded shadow text-center relative">
            <div className="space-y-10">
              <div className="text-center">
                <p className="text-sm  font-bold  mb-4 text-blue-700 opacity-80 ">
                  گزیده ای از اگزیستانسیالیسم
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  درمان <span className="text-indigo-600">اگزیستانسیال</span>{" "}
                  چیست؟
                </h2>
                <h3 className="text-lg md:text-lg md:leading-relaxed font-medium text-gray-600 py-8">
                  این درمان به شما کمک می‌کند تا بتوانید در مواجهه با انتخابات
                  مهم و تصمیمات زندگی خود، تحمل اضطراب و استرس را تجربه کنید و
                  با شرایط پیچیده و آشفته زندگی، به خوبی سازگار شوید.
                </h3>
                <div className="py-8 mx-auto flex justify-center">
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
