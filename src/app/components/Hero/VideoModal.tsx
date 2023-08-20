import { ModalVideoProps } from "components/Video/modalVideoProps";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlayCircle } from "react-icons/fa";

export function VideoModal({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      {/* Video thumbnail */}
      <div>
        <div
          className="relative mb-8 flex justify-center"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <button
            className="group absolute top-full flex -translate-y-20 items-center rounded-full bg-indigo-500 p-4 font-medium text-indigo-100 shadow-lg"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <FaPlayCircle className="h-8 w-8 fill-current text-indigo-50 group-hover:text-blue-600" />
            <span className="mr-3">ویدیو معرفی (دو دقیقه)</span>
          </button>
        </div>
      </div>

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          <Transition.Child
            className="fixed inset-0 z-[99999] flex transform items-center justify-center overflow-hidden px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="mx-auto flex h-full max-w-6xl items-center">
              <Dialog.Panel className="aspect-video max-h-full w-full overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  width={videoWidth}
                  height={videoHeight}
                  loop
                  controls
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
