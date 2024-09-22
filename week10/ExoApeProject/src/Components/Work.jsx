import { motion } from "framer-motion";
import react, { useState } from "react";
function Work() {
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-20">
        <div className="featured flex gap-2 sm:hidden">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="capitalize">featured projects</h3>
        </div>
        <h1 className="text-6xl mt-5 sm:text-[16vw] sm:font-semibold sm:px-36 overflow-hidden">
          <motion.span
            initial={{ rotate: "70deg", y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }} //kewl ek bar chlega animation
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
            className="inline-block origin-left "
          >
            Work
          </motion.span>
        </h1>
        <p className="mt-5 text-lg   leading-1 sm:hidden ">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:gap-2 mt-10 sm:pl-20 sm:pr-10 sm:h-[150vh] ">
          <div className="elem  w-full mt-10 sm:w-[65%]  sm:px-20 ">
            <div className="video relative overflow-hidden w-full h-[104vw] sm:h-[50vw] sm:w-[95%]  ">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.5"
                className="hidden sm:absolute sm:block sm:top-0 sm:left-0  w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              {/* what happen to give block : The element will automatically
                  take up the full width of its parent container, unless a
                  specific width is set. */}
              <video
                autoPlay
                muted
                loop
                className="block  z-[-1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
              ></video>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">PixelFlakes</h3>
              <h3 className="capitalize opacity-50">
                Architectural Marketing Agenncy
              </h3>
            </div>
          </div>
          <div className="elem w-full sm:w-[35%]  mt-10">
            <div className="hidden sm:flex sm:gap-2">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon w-4"
                data-v-669b4a84=""
              >
                <path
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                  data-v-669b4a84=""
                ></path>
              </svg>
              <h3 className="capitalize">featured projects</h3>
            </div>
            <p className="hidden sm:block mt-10 text-[1.6vw] leading-[1.2] ">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>
            <div className="video relative overflow-hidden w-full  h-[104vw] sm:h-[30vw] sm:mt-52">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.2"
                className="hidden sm:block w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                alt=""
              />

              <video
                autoPlay
                muted
                loop
                className="block z-[-1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
              ></video>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Rino & Pelle</h3>
              <h3 className="capitalize opacity-50">
                Effortless chic lifestyle
              </h3>
            </div>
          </div>
        </div>
        <div className="elems sm:flex sm:gap-2 mt-10 sm:pl-20 sm:pr-10 sm:h-[160vh] ">
          <div className="elem  w-full mt-10 sm:w-[50%]  sm:flex flex-col justify-end sm:mb-52  sm:px-20 ">
            <div className="video relative overflow-hidden w-full h-[104vw] sm:h-[23vw] sm:w-[100%]  ">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.2"
                className="hidden sm:block w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg"
                alt=""
              />

              <video
                autoPlay
                muted
                loop
                className="block z-[-1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
              ></video>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">PixelFlakes</h3>
              <h3 className="capitalize opacity-50">
                Architectural Marketing Agenncy
              </h3>
            </div>
          </div>
          <div className="elem w-full sm:w-2/3  mt-10">
            <div className="video relative overflow-hidden w-full  h-[104vw] sm:w-[70%] sm:h-[45vw]">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.2"
                className="hidden sm:block w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                alt=""
              />

              <video
                autoPlay
                muted
                loop
                className="block z-[-1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
              ></video>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Rino & Pelle</h3>
              <h3 className="capitalize opacity-50">
                Effortless chic lifestyle
              </h3>
            </div>
            <a
              className="border-b-[1px] text-center w-1/3 mx-auto block mt-16 border-zinc-400 sm:mt-60 sm:w-1/5 text-zinc-500 sm:ml-[50%]"
              href="#"
            >
              Browse all work
            </a>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Work;
