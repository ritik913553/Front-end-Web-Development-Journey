
// import React from "react";
// import Card from "./Components/Card"
// import Card2 from "./Components/Card2"
// function App(){
   
//    return (   
//     <div>
//      {/* <Card /> */}
//      <Card2 />
//     </div>
//   );
// }
// export default App;


// // useState Basics 
// import React, { useState } from "react";
// function App(){
//   const [banned,setBanned]=useState(false); 

//    return (   
//     <div className="p-10">
//       <h1>{banned.toString()}</h1>
//       <button onClick={()=>setBanned(!banned)} className="px-2 py-1 rounded-full text-xl bg-blue-300">bann kr do</button>
//     </div>
//   );
// }
// export default App;


// //useState intermediate 
// import React, { useState } from "react";
// function App(){
//   const [val,setVal]=useState(12); 

//   return (   
//    <div className="p-10" >
//       <h1>{val}</h1>
//       <button onClick={()=>setVal((prev)=>prev+1)} className="px-3 py-1 bg-blue-400 rounded-md">change kro</button>
//    </div>
//  );
// }
// export default App;



// // useState advanced
// import React, { useState } from "react";

// function App(){
//   const [val,setVal] = useState({name:"Harsh",isBanned:false});
  
//   return(
//     <div className="p-10">
//       <h1>name:{val.name}</h1>
//       <h1>banned:{val.isBanned.toString()}</h1>
//       <button onClick={()=>setVal({...val,isBanned: !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? "bg-blue-500"  : "bg-red-500"} rounded-md text-white`}>change</button>
//     </div>
//   )
// }
// export default App;



// //useState levelup
// import React, { useState } from "react";
// function App(){
//   const [val,setVal]=useState({name:"Harsh",age:24});
//   return (
//     <div className="p-10">
//       <button onClick={()=>{
//         setVal({...val,gender:"male"});
//         // useState state ko turnt update nahi karta ,wo useState state ko update karta hai apne hissab se function completion ke bad to fix performance issuses
//         //means yaha console.log krne se val me gender updated nahi milega
//         //pura react kewl ek chij ke basis pr bana hai ki bar bar page render nhi hona chaiyea
//         // kewl jo part change krna hai wo kr do ,pura page phir se realod nahi hona chaiye,jo change krna hai bs woh chnage kr do
//         //react aage pure function ko chala deta hai phir comparison krta hai ki page ko rerender krna hai ki nahi
//         console.log(val);
//       }} className="px-3 py-1 bg-blue-800 text-white rounded-full">Click</button>
//     </div>
//   )
// }
// export default App;


// //task->ek aarray hai state me hume usse update krna hai
// // isme ek ek kr ke saare remove ho jayenge
// import React, { useState } from "react";
// function App(){
//    const [arr,setArr]=useState([1,2,3,4,5,6]);
//    return(
//     <div className="p-10">
//       {arr.map((item)=><h1>{item}</h1>)}
//       <button onClick={()=>setArr(()=>{
//         return arr.filter((item,index)=> index!=arr.length-1)
//       })} className="px-3 py-1 bg-pink-600 text-white rounded-full">click</button>
//     </div>
//    )
// }
// export default App;


// //task->ek aarray hai state me hume usse update krna hai
// //removal in array
// import React, { useState } from "react";
// function App(){
//    const [arr,setArr]=useState([1,2,3,4,5,6]);
//    return(
//     <div className="p-10">
//       {arr.map((item)=><h1>{item}</h1>)}

//       {/* on click remove index 2 element */}
//       {/* <button onClick={()=>setArr(arr.filter((item,index)=> index!=2  ))} className="px-3 py-1 bg-pink-600 text-white rounded-full">click</button> */}


//       {/* on click remove all elemnt which is divisible by 2 */}
//       <button onClick={()=>setArr(()=>arr.filter((item,index)=> item%2!=0))} className="px-3 py-1 bg-pink-600 text-white rounded-full">click</button>
    
//     </div>
//    )
// }
// export default App;


// //Addition in array 
// import React, { useState } from "react";
// function App(){
//   const [val,setVal]=useState([1,2,3,4,5,6]);
//   return (
//     <div className="p-10">
//       {val.map(item => <h1>{item}</h1>)}
//       <button onClick={()=>setVal([...val,7])} className="px-3 py-1 bg-pink-600 text-white rounded-full">click</button>
//     </div>
//   )
// }
// export default App;



// //Addition in array level up
// import React, { useState } from "react";
// function App(){
//   const [val,setVal]=useState([
//     {name:"Harsh",age:24},
//     {name:"Deepak",age:26},
//     {name:"Rohan",age:28}
//   ]);
//   return (
//     <div className="p-10">
//       {val.map(item => <h1>{item.name} - {item.age}</h1>)}
//       <button onClick={()=>setVal(()=>val.map(item => item.name == "Deepak" ? ({name:"Deepak" ,age:39}) : item ))} className="px-3 py-1 bg-pink-600 text-white rounded-full">click</button>
// // Parentheses ({ name: "Deepak", age: 39 }): The parentheses are required to return an object literal directly in an arrow function. Without parentheses, JavaScript would interpret the braces as a block of code rather than an object literal, which would result in a syntax error.
//     </div>
//   )
// }
// export default App;



// import React from "react";
// import Card3 from "./Components/Card3";
// function App(){
//     return (   
//      <div>
//       <Card3 />
//      </div>
//    );
// }
// export default App;



// import React from "react";
// import Card4 from "./Components/Card4";
// function App(){
//     return (   
//      <div>
//       <Card4 />
//      </div>
//     );
// }
// export default App;


//-------------------------------------------------
//props start


// // understanding props
// import React from "react";
// import Card5 from "./Components/Card5";
// function App(){
//     return (   
//      <div>
//       <Card5 text="Know More" color="bg-blue-300" />
//       <Card5 text="Download" color="bg-red-700" />
//      </div>
//     );
// }
// export default App;



// //task1
// import React from "react";
// import Card5 from "./Components/Card5";
// function App(){
//     const data =[
//         {name:"John",profession:"Painter",image:"https://media.istockphoto.com/id/1735900356/photo/portrait-of-indian-young-woman-crossed-hands-wear-sari-isolated-over-white-background-stock.jpg?s=1024x1024&w=is&k=20&c=-GZWinZ2HK-iNe8P1ljm8Es36M4mPqMRVteaTlKO1Es="},
//         {name:"Amit",profession:"Artist",image:"https://media.istockphoto.com/id/1323013929/photo/stock-photo.jpg?s=1024x1024&w=is&k=20&c=vGIe--DR98tnDu3ej3hHTHTLTTIyvWbHC5DmFwkvEzI="},
//         {name:"Rahul",profession:"Thalua",image:"https://media.istockphoto.com/id/1150096021/photo/smiling-mature-manager-sitting-at-creative-office.jpg?s=1024x1024&w=is&k=20&c=-g9q8o8x9juK-UQHTESe1tZt0aNsHJpDzG3eAUuI9EA="},
//         {name:"Sumit",profession:"Coder",image:"https://media.istockphoto.com/id/2149374653/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=1024x1024&w=is&k=20&c=cSF9H8aKskCXrxqPtw-fzlOWCjbPQ4t-qmhkD-1hiAg="},
//     ]
//     return (   
//      <>
//         <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
//             {data.map((item,index)=>(
//                 // <Card5 image={item.image} name={item.name} profession={item.profession} />
//                 <Card5 values={item}/>
//             ))}
//         </div>
//      </>
//     );
// }
// export default App;




// //task2
// import React, { useState } from "react";
// import Card5 from "./Components/Card5";
// function App(){
//     const data =[
//         {name:"John",profession:"Painter",image:"https://media.istockphoto.com/id/1735900356/photo/portrait-of-indian-young-woman-crossed-hands-wear-sari-isolated-over-white-background-stock.jpg?s=1024x1024&w=is&k=20&c=-GZWinZ2HK-iNe8P1ljm8Es36M4mPqMRVteaTlKO1Es=",friends: false},
//         {name:"Amit",profession:"Artist",image:"https://media.istockphoto.com/id/1323013929/photo/stock-photo.jpg?s=1024x1024&w=is&k=20&c=vGIe--DR98tnDu3ej3hHTHTLTTIyvWbHC5DmFwkvEzI=",friends: false},
//         {name:"Rahul",profession:"Thalua",image:"https://media.istockphoto.com/id/1150096021/photo/smiling-mature-manager-sitting-at-creative-office.jpg?s=1024x1024&w=is&k=20&c=-g9q8o8x9juK-UQHTESe1tZt0aNsHJpDzG3eAUuI9EA=",friends: false},
//         {name:"Sumit",profession:"Coder",image:"https://media.istockphoto.com/id/2149374653/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=1024x1024&w=is&k=20&c=cSF9H8aKskCXrxqPtw-fzlOWCjbPQ4t-qmhkD-1hiAg=",friends: false}
//     ];

//     const [realdata,setRealData]=useState(data);
//     //state jaha banti hai wahi modify ki ja sakti hai ,lekin problem ye hai ki
//     //button card mein hain aur us button mein click hone pr hume state change krni hai
//     //humein button pr click krna hai aur humein wo state modify karni hai jo uske parent mein hai
//     //to solve this we need to create a fuction 
//     const handleFriendButton = (card_index)=>{
//         setRealData((previous)=>{
//             return previous.map((item,index)=>{
//                 if(index===card_index){
//                    return{...item,friends: !item.friends} 
//                 }
//                 return item;
//             })
//         })
//     }
//     return (   
//      <>
//         <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
//             {realdata.map((item,index)=>( 
//                 <Card5 key={index} index={index} handleClick={handleFriendButton}  values={item}/>
//             ))}
//         </div>
//      </>
//     );
// }
// export default App;




// //Music wala project
// //sara data hum parent wala component mein rkhenge taki child ko bhej sake yaha App parent hai
// //react will only react to state menas state mein changes hoga tbhi react react krega means kuch re-render karega
// import React, { useState } from "react";
// import Music from "./Components/Music";
// import Navbar from "./Components/Navbar";
// function App() {

//     const data =[
//         {image:"https://images.unsplash.com/photo-1698138819865-88d3add4838f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",name:"Challenger", artist:"Ritik",added:false},
//         {image:"https://images.unsplash.com/photo-1719937051058-63705ed35502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",name:"Maahi we", artist:"Arjit",added:false},
//         {image:"https://images.unsplash.com/photo-1721804975881-1768e59f46cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",name:"Sanam ", artist:"Badsahaa",added:false},
//         {image:"https://images.unsplash.com/photo-1721297013384-ec6372912b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",name:"Ranjhanna", artist:"Honey Singh",added:false},
//         {image:"https://images.unsplash.com/photo-1702024740455-3272b8d96eb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",name:"shaiyyan", artist:"Arrohi",added:false},
//     ]

//     const [songData,setSongData]=useState(data);

//     const handleSongAdd = (clickedIndex)=>{
//         setSongData((previous)=>{
//             return previous.map((item,index)=>{
//                 if(index===clickedIndex){
//                     return {...item, added: !item.added} 
//                 }
//                 return item;
//             })
//         })
//     }

//     return (
//         <>
//             <Navbar data={songData} />
//             <div className="px-20 flex gap-10 mt-10  flex-wrap">
//                 {songData.map((item,index)=>{
//                     return <Music key={index} values={item} index={index} handleSongAdd={handleSongAdd} />
//                 })}
//             </div>
            
//         </>
//     );
// }
// export default App;




// //form handling->useRef

// import React from "react";
// import { useRef } from "react";
// function App() {
//     const name = useRef(null);
//     const age = useRef(null);

//     const handleSubmit =(event)=>{ //event me details of submit aayega
//         event.preventDefault();
//         console.log(name.current.value , age.current.value);
//     }

//     return(
//         <form className="p-10 bg-blue-200" action="" onSubmit={handleSubmit} >
//             <input ref={name} type="text" placeholder="Name" />
//             <input ref={age} type="text" placeholder="age" />
//             <input type="submit" />
//         </form>
//     )
// }
// export default App;
// // you use the onSubmit event handler attribute for the <form> element and assign it the handleSubmit function. The onSubmit attribute expects a function reference, not a function call. That's why parentheses are not used.





// //form handling-> controlled components
// import React, { useState } from "react";
// function App() {

//     const [val,setVal]=useState({name: "",email: ""});

//     const handleSubmit = (event)=>{
//         event.preventDefault();
//         console.log(val);
//     }

//     return(
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                 {/* <input onChange={(event)=>console.log(event.target.value)} type="text" placeholder="name" />   */}
//                 {/*  target - wo input khud hota hai */}
//                 <input onChange={(event)=>setVal({...val,name:event.target.value})} type="text" placeholder="name" />  
//                 <input onChange={(event)=>setVal({...val,email:event.target.value})} type="email" placeholder="Email" />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }
// export default App;




// //form handling-> react hook form
// import React from "react";
// import { useForm } from "react-hook-form";
// function App() {
//     const {register,handleSubmit}=useForm();
//     return(
//         <div>
//             <form  className="p-5" action="" onSubmit={handleSubmit(data => console.log(data))}>
//                 <input {...register('name')} type="text" placeholder="name" />
//                 <input {...register('email')} type="email" placeholder="email" />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

// export default App;





// //form handling exercise
// import React,{useState} from "react";
// import Cards1 from './Components1/Cards1';
// import Form1 from './Components1/Form1';
// function App(){

//     const [users,setUsers]= useState([]);

//     const handleFormSubmitData =(data)=>{
//         setUsers([...users,data]);
//     }

//     const handleRemove =(id)=>{
//         setUsers(()=>users.filter((item,index)=>index!==id));
//     }

//     return(
//         <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
//             <div className="container mx-auto">
//                 <Cards1 handleRemove={handleRemove} users={users} />
//                 <Form1 handleFormSubmitData={handleFormSubmitData} />
//             </div>
//         </div>
//     )
// }
// export default App;