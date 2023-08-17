import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalVideoProps } from "components/Video/modalVideoProps";

export function VideoBox({ video, videoWidth, videoHeight }: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className=" group my-12 flex justify-center "
      data-aos="zoom-y-out"
      data-aos-delay="450"
    >
      <button
        className="top-full flex  transform items-center rounded-full bg-indigo-500 p-4 font-medium text-indigo-100 shadow-lg"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <svg
          className="h-6 w-6 shrink-0 fill-current text-red-50 group-hover:text-red-600"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
          <path d="M10 17l6-5-6-5z" />
        </svg>
        <span className="mr-3 text-red-50">مگه من روانی‌ام! (سه دقیقه)</span>
      </button>
      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
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
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
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
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}
