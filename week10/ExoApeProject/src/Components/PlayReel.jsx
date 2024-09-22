import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
function PlayReel() {
  const parent =  useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);


  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        top:"0 0",
        pin:true,
        // markers:true,
        scrub:1
      }
    });
    tl
    .to(videodiv.current,{
      width:"100%",
      height:"100%",
      ease:Power4,
      duration:2
    },'a') //a dene se sb ek sath chlenge ek ke bad ek nhi
    .to(reel.current,{
      x:"-80%",
      scale:1,
      ease:Power4
    },'a')
    .to(play.current,{
      x:"80%",
      scale:1,
      ease:Power4
    },'a')
  })
  return (
    <div ref={parent} className="w-full h-screen overflow-hidden relative bg-black">
      <div ref={videodiv} className="w-40 sm:w-96 aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <video
          muted
          autoPlay
          loop
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full  text-white py-20 flex flex-col justify-between">
        <div className="w-full flex items-center justify-center gap-2 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full flex justify-center gap-24 sm:gap-96 items-center ">
          <div ref={play} className="text-6xl sm:text-9xl font-light">Play</div>
          <div ref={reel} className="text-6xl sm:text-9xl font-light">Reel</div>
        </h1>
        <p className="text-center px-10 text-sm opacity-70">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}
export default PlayReel;
