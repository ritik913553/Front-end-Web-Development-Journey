import react from "react";
function Footer() {
  return (
    <div className="w-full  bg-[#080807] ">
      <footer className=" max-w-screen-2xl  text-white mx-auto h-[85vh] sm:h-[100vh] sm:px-36 flex flex-col py-20 sm:py-7  px-5 overflow-hidden ">
        <div className="relative z-[99] ">
          <h1 className="text-6xl sm:text-9xl text-[#E0CCBB]">Our</h1>
          <h1 className="text-6xl sm:text-9xl  text-[#E0CCBB]">Story</h1>
          <div className="background -z-[99] absolute h-44 sm:h-[70vh] aspect-video -top-8 left-14 sm:left-[30%]  ">
            <video
              muted
              autoPlay
              loop
              className="h-full w-full "
              src="https://www.exoape.com/video/video-6.mp4"
            ></video>
          </div>
        </div>
        <p className="text-lg mt-8 opacity-65 leading-[1.2] sm:text-xl sm:w-1/3">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <a className="mt-5 border-b-[1px] sm:hidden w-1/4 pb-0" href="#">
          Our Story
        </a>
        <div className="divider w-full h-[1px] bg-[#E0CCBB] mt-8 sm:mt-16 opacity-70"></div>
        <div className="flex justify-start items-center gap-24 sm:gap-44  mt-5 sm:mt-14">
          <ul className="hidden sm:inline-block">
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
              Willem II Singel 8
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
              6041 HS, Roermond
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
              The Netherlands
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
              hello@exoape.com
              </a>{" "}
            </li>
          </ul>
          <ul className="">
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                Work
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                Studio
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                News
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                Contact
              </a>{" "}
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                Behance
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                Dribble
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                Twitter
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="opacity-55 mt-1 inline-block" href="#">
                Instagram
              </a>{" "}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
