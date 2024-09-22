import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
function details(){
    const [product,setProduct]=useState(null);
    const { id }=useParams(); //dynamic routing
   
    
    const getsingleproduct = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`);
            setProduct(data);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getsingleproduct();
    }, []);

    return product?(
        <div className="flex  justify-between items-center w-[80%] h-full  m-auto py-[10%] px-[5%] ">
        <img className=" h-[90%] w-[55%] object-contain mr-5" src={product.image} alt="" />
            <div className="content  " >
                <h1 className="text-3xl">{product.title}</h1>
                <h3 className="text-zinc-400 my-5">{product.category}</h3>
                <h2 className="text-red-400"> {product.price} </h2>
                <p className="mb-5">{product.description}</p>
                <Link className="px-5 py-2  bg-green-500 text-white border rounded mr-3">Edit</Link>
                <Link className="px-5 py-2 bg-red-500 text-white border rounded" >Delete</Link>
            </div>
        </div>
    ):(
        <Loading />
    );
}
export default details;