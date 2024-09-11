import React from "react";
function Music({values,handleSongAdd,index}){


    const {image,name, artist,added} = values;


    return (
        <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-5 pb-7 relative mt-10">
            <div className="w-20 h-20 bg-orange-300 rounded-md">
                <img className="h-full w-full object-cover rounded-md" src={image} alt="" />
            </div>
            <div className="" >
                <h3 className="text-xl leading-none font-semibold">{name}</h3>
                <h6 className="text-sm ">{artist}</h6>
            </div>
            <button onClick={()=>handleSongAdd(index)} className={`px-3 py-2 whitespace-nowrap ${added ? "bg-teal-500" : "bg-orange-500"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]  text-white text-xs  rounded-full `}>{added ? "Added" : "Add to Favourite"}</button>
        </div>
    )
}

export default Music;

//Notes Part

    // In Tailwind CSS, the leading-none utility class sets the line height to 1, which means the height of the text is equal to its font size,