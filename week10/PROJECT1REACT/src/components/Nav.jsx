import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";
function Nav(){

    const [products,setProducts]= useContext(ProductContext);
    

    let distinct_categories= products && products.reduce((acc,cv)=> [...acc,cv.category], []);
    distinct_categories= [...new Set(distinct_categories)]; //The spread operator can be used to spread the elements of a Set into a new array.
    
    const color = ()=>{
        return `rgb(${(Math.random()* 255).toFixed()},${(Math.random()* 255).toFixed()},${(Math.random()* 255).toFixed()},0.6)`
    }

    return(
        <nav className="w-[20%] h-full bg-zinc-100 flex flex-col  items-center pt-5 ">
            <a className="py-2 px-4 border rounded border-blue-300 text-blue-300" href="/create">Add new Product</a>
            <hr className="w-[80%] my-3" />
            <h1 className="text-3xl w-[85%] mb-3">Category Filter</h1>
            <div className=" w-[80%] ">
                {distinct_categories.map((cat,index)=>{
                    return <Link to={`?category=${cat}`} key={index} className= " flex items-center mb-3  ">
                <span style={{backgroundColor:color()}}  className=" rounded-full mr-2 w-[15px] h-[15px] "></span>{cat}</Link>
                })}   
            </div>
        </nav>
    )
}
export default Nav;