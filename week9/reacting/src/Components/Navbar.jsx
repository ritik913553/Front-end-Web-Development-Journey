import React from "react";
import styles from "./style.module.css"; //styles(styles ka naam yaha kuch bhi ho skta hai) mein sarre classes jo style.module.css me define hai wo import ho jayenge aur use hum yaha use kr skte hai style.class_name se
function Navbar({data}){
    // const totalAddedSongs = data.filter((item)=>item.added).length;
    return (
        <div className="w-full px-20 py-7 flex justify-between items-center">
            <h3 className={`${styles.a} ${styles.b}`} >Orange</h3>
            <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3">
                <h3>Favourites </h3>
                <h2>{data.filter((item)=>item.added===true).length}</h2>
            </div>
        </div>
    )
}
export default Navbar;