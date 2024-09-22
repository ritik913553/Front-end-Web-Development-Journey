import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";


export const ProductContext = createContext();
function Context(props){
    const [products,setProducts]=useState(null);

    const getProducts = async () =>{
        try{
            const {data} = await axios.get("/products");
            setProducts(data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getProducts();
    },[]);

    return (
        <ProductContext.Provider value={[products,setProducts]} >
           {props.children}
        </ProductContext.Provider>
    )
}
export default Context;