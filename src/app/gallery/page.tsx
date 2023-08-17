import { SimpleCard } from "./components/SimpleCard";
import { PhotoAlbum } from "./components/PhotoAlbum";
import { Quotes } from "./components/Quotes";

export default function QuoteAndGallery() {
  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">
              <span className="font-medium">گالری تصاویر</span>
            </h2>
            <h3 className="text-lg font-light text-gray-900 md:text-xl md:leading-relaxed lg:w-1/2">
              تصاویری از محیط مطب و جلسات مشاوره را در این قسمت مشاهده می‌کنید.
            </h3>
          </div>
          <PhotoAlbum photos={photos} />
          <h3 className=" mt-10 text-lg font-black leading-3 md:text-3xl ">
            نقل قول
          </h3>
          <p className="my-8 text-base text-gray-900 md:w-10/12 md:text-base ">
            تعدادی از نقل قول های که در جلسات مشاوره فردی و گروهی در طول جلسه
            بیان شده را در ادامه قرار داده ام. نقل قول هایی که در جلسات مشاوره
            فردی و گروهی در طول جلسه بیان شده.
          </p>
          <Quotes
            callbackfn={(item, index) => (
              <SimpleCard
                key={index}
                description={item.description}
                credit={item.credit}
              />
            )}
          />
        </div>
      </div>
    </main>
  );
}

const photos = [
  {
    src: "/img/gallery/1-min.jpg",
    alt: "1",
  },
  {
    src: "/img/gallery/2-min.jpg",
    alt: "2",
  },
  {
    src: "/img/gallery/3-min.jpg",
    alt: "3",
  },
  {
    src: "/img/gallery/4-min.jpg",
    alt: "4",
  },
  {
    src: "/img/gallery/5-min.jpg",
    alt: "5",
  },
  {
    src: "/img/gallery/6-min.jpg",
    alt: "6",
  },
  {
    src: "/img/gallery/7-min.jpg",
    alt: "7",
  },
  {
    src: "/img/gallery/8-min.jpg",
    alt: "8",
  },
  {
    src: "/img/gallery/9-min.jpg",
    alt: "9",
  },
];
