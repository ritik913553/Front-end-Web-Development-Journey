import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
function Card4(){
    const [val,setVal]=useState(false);
    return (
        <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
           <div className=" relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden ">
                <img className={`shrink-0 transition-transform duration-700 ease-in-out  ${val == false ? "-translate-x-[0%]":"-translate-x-[100%]"}  w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1720886075793-62e669a3f6f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val == false ? "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1721215499494-d7ca2147fe80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span id="btn" onClick={()=>setVal(()=>!val)} className="w-8 h-8 bg-[#dadada8b] absolute bottom-[15%] left-1/2 -traslate-x-[50%] -traslate-y-[50%] flex items-center justify-center rounded-full cursor-pointer ">
                    <GoArrowRight size={".8em"} />
                </span>
           </div>
        </div>
    )
}
export default Card4;