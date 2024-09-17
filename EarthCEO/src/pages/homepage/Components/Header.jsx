import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div>
      <header className="sticky top-[20px]">
        <nav className="bg-[black] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 pt-[12px]">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl border-b-[0.3px] border-[#1a1a1a] pb-4">
            <Link to="/">
              <a className="flex items-center">
                <h2 className="mr-3 h-6 sm:h-9 font-Poppins md:text-[1.5vw] text-[8vw] text-[#B6DB64] font-semibold">
                  Grounded
                </h2>
              </a>
            </Link>
            <div className="lg:hidden flex items-center lg:order-2">
              <a
                href="#"
                className="hidden bg-[#C0DC61] text-gray-700 font-Poppins hover:text-gray-300 dark:text-white hover:bg-[#1d1d1d] focus:ring-4 focus:ring-gray-300 font-medium rounded-[20px] text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 duration-300 ease-in-out transition"
              >
                Log in
              </a>

              <button
                onClick={handleClick}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`  ${
                mobileMenu ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-1 lg:mt-0 ">
                <li className="bg-black hover:bg-[#1d1d1d] px-4 py-2 rounded-[30px] transition ease-in-out duration-300">
                  <Link to="/">
                    <a
                      className="font-Poppins block py-2 pr-4 pl-3 text-gray-300 hover:text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="bg-black hover:bg-[#1d1d1d] px-4 py-2 rounded-[30px] transition ease-in-out duration-300">
                  <Link to="/exploreland">
                    <a className=" font-Poppins block py-2 pr-4 pl-3 text-gray-300 hover:text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      Explore Land
                    </a>
                  </Link>
                </li>
                <li className="bg-black hover:bg-[#1d1d1d] px-4 py-2 rounded-[30px] transition ease-in-out duration-300">
                  <Link to="/aboutpage">
                    <a className="font-Poppins block py-2 pr-4 pl-3 text-gray-300 hover:text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      About USDL
                    </a>
                  </Link>
                </li>
                <li className="bg-black hover:bg-[#1d1d1d] px-4 py-2 rounded-[30px] transition ease-in-out duration-300">
                  <a
                    href="#"
                    className="font-Poppins block py-2 pr-4 pl-3 text-gray-300 hover:text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    How It Works
                  </a>
                </li>

                <li className="bg-black hover:bg-[#1d1d1d] px-4 py-2 rounded-[30px] transition ease-in-out duration-300">
                  <Link to="/contactpage">
                    <a className="font-Poppins block py-2 pr-4 pl-3 text-gray-300 hover:text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
