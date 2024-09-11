import React, { useState } from "react";
function Card3(){
    const [val,setVal] = useState(false);
    return (
        <div className="p-10">
            {/* print bahar jaw if val is false and printmat jaw if val is true */}
            {/* try to write the jsx part inside the div or tag */}
            <h1>
                {val? "Mat Jaw" : "Bahar Jaw"  }
            </h1>
            {/* agar state change hui to return ke andr wala chijj(jsx) phir se chlega aur rerender hoga */}
            <button onClick={()=>setVal(()=>!val)} className="px-3 py-1 bg-pink-900 text-white rounded-md mt-5">Change</button>
        </div>
    )
}
export default Card3;