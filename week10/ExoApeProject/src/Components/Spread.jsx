import { motion } from "framer-motion";
import react from "react";
function Spread() {
  return (
    <div className="w-full bg-white py-20 ">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10">
        <div className="svg flex gap-2  justify-center items-center">
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
          <h3>In the media</h3>
        </div>
        <div className="text mt-10 text-center">
          <h1 className="text-6xl sm:text-9xl tracking-tighter overflow-hidden">
            <motion.span
              initial={{ rotate: "70deg", y: "40%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }} //kewl ek bar chlega animation
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
              className="inline-block origin-left "
            >
              Spread
            </motion.span>
          </h1>
          <h1 className="text-6xl sm:text-9xl  tracking-tighter">
            <motion.span
              initial={{ rotate: "70deg", y: "40%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }} //kewl ek bar chlega animation
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
              className="inline-block origin-left "
            >
              the News
            </motion.span>
          </h1>
          <p className="w-5/6 mx-auto mt-8 text-lg sm:text-2xl opacity-75 sm:w-2/5 sm:mt-10 leading-[1.3]">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className="inline-block border-b-[1px] opacity-80 sm:mt-10 border-zinc-800   mt-7 p-0 "
            href="#"
          >
            Browse all news
          </a>
        </div>
      </div>
    </div>
  );
}
export default Spread;
