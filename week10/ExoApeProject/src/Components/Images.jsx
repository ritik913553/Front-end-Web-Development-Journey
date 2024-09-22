import { useGSAP } from "@gsap/react";
import { marker } from "framer-motion/client";
import gsap, { Linear, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import react, { useRef } from "react";
function Images() {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        // markers: true,
        scrub: 1,
      },
    });
    t2.to(
      first.current,
      {
        x: "40%",
        ease: Linear,
      },
      "a"
    )
      .to(
        third.current,
        {
          x: "-50%",
          ease: Linear,
        },
        "a"
      )
      .to(
        second.current,
        {
          x: "-30%",
          ease: Linear,
        },
        "a"
      )
      .to(
        fourth.current,
        {
          x: "90%",
          ease: Linear,
        },
        "a"
      );
  });

  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[120vh] bg-white flex justify-center items-center overflow-hidden"
    >
      <div className="w-[40%] sm:w-[25%] sm:h-[70%] h-1/2 relative ">
        <div
          ref={first}
          className="absolute w-16 sm:w-32 h-[6rem] sm:h-[13rem] -right-1/3 top-6 "
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute w-32 sm:w-80 aspect-video top-1/3 -left-2/3 sm:-left-[85%] overflow-hidden  "
        >
          <video
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-[9rem] sm:w-[22rem] aspect-video -left-[95%] -bottom-10 sm:-bottom-32 -right-28  "
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute w-[10rem] sm:w-[17rem] aspect-[1.5/1.1] -right-[70%] sm:-right-[50%] -bottom-[37%] sm:-bottom-[20%] "
        >
          <video
            muted
            autoPlay
            loop
            className="w-full h-full scale-x-[1.7]"
            src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
          ></video>
        </div>

        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
export default Images;
