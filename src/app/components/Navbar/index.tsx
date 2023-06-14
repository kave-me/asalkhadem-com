export function Navbar() {
  return (
    <header
      id="page-header"
      className="flex flex-none items-center bg-white py-10"
    >
      <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div>
          <a
            href="javascript:void(0)"
            className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400"
          >
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              ></path>
            </svg>
            <span>Company</span>
          </a>
        </div>
        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
          <nav className="space-x-4 md:space-x-6">
            <a
              href="javascript:void(0)"
              className="font-semibold text-gray-900 hover:text-gray-500"
            >
              <span>Features</span>
            </a>
            <a
              href="javascript:void(0)"
              className="font-semibold text-gray-900 hover:text-gray-500"
            >
              <span>Plans</span>
            </a>
            <a
              href="javascript:void(0)"
              className="font-semibold text-gray-900 hover:text-gray-500"
            >
              <span>About</span>
            </a>
          </nav>
          <div className="flex items-center justify-center space-x-2">
            <a
              href="javascript:void(0)"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <span>Sign In</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
