import { useState } from "react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.value);

  const [openCover, setOpenCover] = useState(false);

  const [openBlogList, setOpenBlogList] = useState(false);

  const handleToggleCover = () => {
    setOpenCover(!openCover); // Toggle between open and closed
  };

  const openBlogNavDropDown = () => {
    setOpenBlogList(!openBlogList);
  };

  return (
    <div className="flex p-4 justify-between items-center  text-white h-20 bg-black">
      {/* <!-- logo Icon --> */}
      <div>Logo</div>

      <div className="lg:flex items-center gap-10 hidden">
        <a href="">Home</a>

        <a href="/about" className="flex items-center group relative">
          About
        </a>

        <div className="flex items-center relative group hover:cursor-pointer  py-3 z-1">
          Blog
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down w-5 h-5 group-hover:rotate-180 transition delay-300 duration-1000 ease-in-out"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
          <div className="absolute top-10 py-4 -left-[60%] rounded-lg text-center px-2 flex-col  text-white group-hover:flex hidden items-start gap-2 bg-black">
            <a href="/categories/iusdhfukh" className="">
              HTML/CSS
            </a>

            <a href="/categories/iusdhfukh" className="">
              React
            </a>

            <a href="/categories/iusdhfukh" className="">
              Django
            </a>

            <a href="/categories/iusdhfukh" className="">
              DataBase
            </a>

            <a href="/categories/iusdhfukh" className="">
              CyberSecurity
            </a>
          </div>
        </div>

        {user ? (
          <>
            <a href="/dashboard">{user?.username}</a>
            <a href="/logout">Logout</a>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}

        <a href="/categories">Category</a>

        <a href="/posts">Post</a>
        <a href="">Text</a>

        <a href="" className="flex items-center group">
          huh
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down w-5 h-5 group-hover:rotate-180 transition delay-300 duration-1000 ease-in-out"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </a>

        <a href="" className="flex items-center group">
          sdf
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down w-5 h-5 group-hover:rotate-180 transition delay-300 duration-800 ease-in-out"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </a>

        <a href="">Test</a>
        <Button className="bg-blue-500 px-8 py-2">Hello</Button>
      </div>

      {/* <!-- Hamberg Icon --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-menu-icon lucide-menu lg:hidden"
        onClick={handleToggleCover}
      >
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <path d="M4 6h16" />
      </svg>

      {/* OncLick Show That  */}
      {/* <!-- Mobile Screen  --> */}
      {openCover && (
        <div
          className={`fixed  text-white top-0 right-0 left-0 bottom-0  z-1 lg:hidden bg-black   px-4 py-2 transition-all delay-1000`}
        >
          <div className="flex items-center justify-between">
            <div className="py-5">Logo</div>
            {/* <!-- Cross Icon --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="fill-white w-20 h-10 pl-13"
              onClick={handleToggleCover}
            >
              <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z" />
            </svg>
          </div>

          <div className="py-30">
            <a href="/" className="flex flex-col pb-2">
              Home
            </a>

            <a href="/about" className="flex flex-col pb-2">
              About
            </a>

            <div
              className="flex hover:cursor-pointer items-center text-red pb-2"
              onClick={openBlogNavDropDown}
            >
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down w-5 h-5 group-hover:rotate-180 transition delay-300 duration-1000 ease-in-out"
                aria-hidden="true"
                onClick={openBlogNavDropDown}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>

            {openBlogList && (
              <div className="flex flex-col bg-black pl-10 ">
                <a href="./category.html" className="">
                  HTML/CSS
                </a>

                <a href="./category.html" className="">
                  React
                </a>

                <a href="./category.html" className="">
                  Django
                </a>

                <a href="./category.html" className="">
                  DataBase
                </a>

                <a href="./category.html" className="">
                  CyberSecurity
                </a>
              </div>
            )}

            {user ? (
              <a href="/login" className="flex flex-col pb-2">
                {user.username}
              </a>
            ) : (
              <a href="/login" className="flex flex-col pb-2">
                Loginjkdfnjk
              </a>
            )}

            <a href="/register" className="flex flex-col pb-2">
              Register
            </a>

            <a href="/post" className="flex flex-col pb-2">
              Post
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
