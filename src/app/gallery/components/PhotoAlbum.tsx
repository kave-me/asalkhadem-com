import Image from "next/image";

interface photo {
  src: string;
  alt: string;
}

export const PhotoAlbum = ({ photos }: { photos: photo[] }) => {
  return (
    <div className="grid grid-cols-1 gap-12 bg-indigo-50  p-4 md:grid-cols-3">
      {photos.map((photo) => (
        <Image
          src={photo.src}
          alt={photo.alt}
          key={photo.src}
          width={500}
          height={500}
          className=" mx-auto h-auto max-w-full rounded border-2 border-dashed border-indigo-200 border-opacity-30 shadow-xl "
        />
      ))}
    </div>
  );
};
