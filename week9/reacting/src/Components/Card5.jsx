// for understanding props


// import React from "react";
// function Card5(props){
//     return (
//         <div className="p-2">
//             <button className="px-3 py-1 bg-pink-900 text-white rounded-md">{props.text}</button>
//         </div>
//     )
// }
// export default Card5;



// import React from "react";
// function Card5({text,color}){
//     return (
//         <div className="p-2">
//             <button className={`px-3 py-1 ${color} text-white rounded-md`} >{text}</button>
//         </div>
//     )
// }
// export default Card5;



// //task1-> humara data actually main app component mein hoga
//         // aur hum use props ke through pass karenge cards mein,
//         // har card par ek add friend button hoga and humein add 
//         // friend button par click hone par alert dena hai
// import React from "react";
// // function Card5({image, name, profession  }){
// function Card5({values}){
//     const {image, name, profession} = values;
//     return  (
//         <div className="w-52 bg-white rounded-md overflow-hidden ">
//             <div className=" w-full h-40 bg-sky-200">
//                 <img className="h-full w-full object-top" src={image} alt="" />
//             </div>
//             <div className="w-full ">
//                 <h3 className="text-xl font-semibold">{name}</h3>
//                 <h5 className="text-xs">{profession}</h5>
//                 <button onClick={()=>alert("Adding as friend")} className="px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md mt-4">Add Friend</button>
//             </div>
//         </div>
//     )
// }
// export default Card5;




//tast2 add friend pr click krne se button green mein ho jaye aur usme friend likha aaye
//event handling 

import React from "react";
function Card5({values, handleClick, index}){
    const { name,image, profession,friends} = values;
    return  (
        <div className="w-52 bg-white rounded-md overflow-hidden ">
            <div className=" w-full h-40 bg-sky-200">
                <img className="h-full w-full object-top" src={image} alt="" />
            </div>
            <div className="w-full ">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profession}</h5>
                <button onClick={()=>handleClick(index)} className={`px-3 py-1 text-xs text-white  ${friends? "bg-green-700" : "bg-blue-700"} font-semibold rounded-md mt-4`}>{friends === true ? "Friends" : "Add Friend" }</button>
            </div>
        </div>
    )
}
export default Card5;
