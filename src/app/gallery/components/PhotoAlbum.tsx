import Image from 'next/image';

interface photo {
	src: string;
	alt: string;

}

export const PhotoAlbum = ({photos}: { photos: photo[] }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-12  bg-indigo-50 p-4">
			{photos.map((photo) => (
				<Image src={photo.src} alt={photo.alt} key={photo.src} width={500} height={500}
				       className=" h-auto max-w-full rounded shadow-xl border-indigo-200 border-2 border-dashed mx-auto border-opacity-30 "/>))}


		</div>
	)
}