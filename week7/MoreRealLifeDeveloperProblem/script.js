// //Question->1

// var obj ={
// };
// // obj.name; //isme koi error nhi aayega bhle hi name defined na ho
// //  obj.name.first;//lekin isme aayega (Typeerror) kuki name bhi defined nhi hai na hi first,agr
//                     //yaha name defined rhta to isme bhi erroe nhi aata

// // if you are not sure that value is not defined under function then
//  obj.name?.first; //no error
//  obj?.name?.first; //no error



// //Question->2
// //ek button banao and us button ke click
// // par aapko ek user lekr aana hai random tareeke
// //se and usey add karna hai dom mein

// function getNewUser(){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result => {
//     const {name, email, gender, picture}= result.results[0];
//     document.querySelector('#parent').innerHTML += `<div class="card w-60 p-4 rounded-md bg-zinc-700">
//                  <div class="w-20 h-20 bg-zinc-500 rounded-full mb-10 overflow-hidden">
//                     <img src="${picture.large}" class="w-full h-full fit-cover" alt="">
//                 </div>
//                 <h3 class="font-semibold text-2xl">${name.first}</h3>
//                 <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
//                 <h6 class="text-sm opacity-40 ">${email}</h6>
//                 <p class="mt-5 text-sm font-semibold opacity-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae tempora pariatur iure? Vel.</p>
//             </div>`;
// })
// }
// //here in innerHtml we use += intead of = ,means ye replace nhi krega
// // balki uske aage append(jod) dega bina phle wale ko hataye
//     //another method is document.querySelector('#parent').insertAdjacentHTML('beforeend', `structure`);

// var getUser=document.querySelector('button');
// getUser.addEventListener("click",function(){
//     getNewUser();
// })




// // Question->3
// const block=document.querySelector("#block");
// const unblock= document.querySelector("#unblock");

// block.addEventListener("click",function(){
//     localStorage.setItem("block", true);
//     show();
// })
// unblock.addEventListener("click",function(){
//     localStorage.setItem("block", false);
//     show();
// })

// function show(){
//     if(localStorage.getItem("block") === 'false'){
//           document.querySelector("#status span").textContent="Not Blocked";
//     }
//     else{
//         document.querySelector("#status span").textContent="Blocked";
//     }
// }

// show(); //jab page realod ho jayega tb 
//     //suru bar mein bhi check krega ,if isko 
//     //nhi chalate hai to page reaload hone
//     //pr jo by default value html me hoga whi show hoga



// //Question->4
// document.querySelector("#hieght").addEventListener("click",function(){
//     // document.body.classList.add("overflow-hidden"); //iske bad scrool hi nhi hoga
//     document.body.classList.toggle("overflow-hidden"); //isme ek bar dabane se scrool hona bnd jayega(scrool krne pr bhi scrool nhi hoga),dubara button me badane se scrool hone lgega scrool krne se
// })

//Question->5

document.querySelector("#hide").addEventListener("mouseenter",function(){
    document.querySelector(".tooltip").style.display = 'initial';
})
document.querySelector("#hide").addEventListener("mouseleave",function(){
    document.querySelector(".tooltip").style.display = 'none';
})