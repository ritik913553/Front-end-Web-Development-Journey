import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";
function Home(){

    const [products,setProducts]= useContext(ProductContext);
    const {search} = useLocation(); //use location ek object deta hai jisme bhaut saare details hote hai jisme se ek search hai jisme query store hota hai
    // console.log(search);
    const category = decodeURIComponent(search.split("=")[1]); //search string mein ek = se seprate
    //decodeuricomponent data ko normal string mein convert kr deta hai
    // console.log(category);

   const [filterProducts,setfilterProducts]=useState(null);



    const getproductcategory= async ()=>{
        try{
            const {data} = await axios.get(`/products/category/${category}`);
            // console.log(data);
            setfilterProducts(data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        // console.log("jii"); proff of passing products is important,if i not pass products in dependency array,then jii prints on time if pass then prints 2 time
       
        //  setfilterProducts(products); //dono shi hai
        if(!filterProducts || category =="undefined"){
            setfilterProducts(products);
        }

        if(category != "undefined"){
            getproductcategory();
        }
    },[category,products]) // Without the dependency array here i.e([category]), the effect would only run once on initial render, and any subsequent changes to category would not trigger the effect.
    //product is also important in dependency array because if suru me data agr nhi aaya hoga product mein
    // to ye useeffect ka code chl jayega aur setfilter me null set hoga ,uske bad agr
    //data aa bhi ge to useeffect to nhi chlega kyuki hum products array me pass nhi kiye hai ,agr useeffect nhi chlega to filterProducts me kuch set nhi hoga to home page mein kuch nhi dikhega,
    //ha lekin kyuki hum category diye hai array mein to jb click krenge category pr to dikhega hmko deta

    return products?(
        <>
           <Nav />

            <div className=" w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto gap-2 ">

                {filterProducts && filterProducts.map((p,index)=>{
                    return <Link key={p.id} to={`/details/${p.id}`} className=" card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
                        <div className=" hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center "
                        style={{backgroundImage: `url(${p.image})`,}} > 
                        </div>
                        <h1 className="hover:text-blue-300 text-xs">{p.title}</h1>
                    </Link>
                })}

                
                
            </div>
        </>
    ):(
        <Loading />
    );
}
export default Home;