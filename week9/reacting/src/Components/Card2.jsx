//  Card2 for understand handling events

import React from "react";
function Card2(){
    const data =[
        {name:"Mahiya Ve" ,description:"Lorem ipsum dolor sit amet consectetur."},
        {name:"Junoon" ,description:"Lorem ipsum dolor sit amet consectetur is best song of world."},
        {name:"Maahi" ,description:"Lorem ipsum dolor."},
    ];
    const  handleClickDownload = ()=>{alert("Chal rha hai");}

    return (
        <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center ">
            {data.map((item, index) => (
                <div key={index} className="song w-80 px-3 py-2 bg-zinc-100 rounded">
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <p className="text-xs mt-2">{item.description}</p>
                    <button onClick={handleClickDownload} className="px-2 py-1 text-xs bg-blue-400 font-semibold text-zinc-100 rounded-md mt-3">Download</button>
                    {/* kbhi bhi galti se ye nhi krna hai onClick={handleClickDownload()} */}
                </div>
            ))}
        </div>
    )
 
}

export default Card2;