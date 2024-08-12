// //Async js
// //setTimeout(function,time);
// console.log("HEY 1");  //sync code
// console.log("HEY 2");  //sync code

// setTimeout(function(){  //async code
//     console.log("HEY 3");
// },5000)    //5000 milisecond

// console.log("HEY 4"); //sync code

// //output:
//     // HEY 1
//     // HEY 2
//     // HEY 4
//     // HEY 3  //2sec bad


// // ---------------------------------------------------------------
// //// setInterval(function,time); ye loop me chlte hi rhta hai

// const humarainterval = setInterval(function(){
//     console.log("hey 1");
// },2000)
// clearInterval(humarainterval); //isse hum "humarainterval" interval ko rok skte hai

// // ----------------------------------------------------------------

// // Fetch API

// fetch('https://randomuser.me/api/')
// .then(function(raw){
//     console.log(raw)
// })
// or
// .then(raw=> console.log(raw)) //.then chlega hi tb jb url data le kr aa jayega
//                 //abhi jo "raw"(DATA) hai wo computer readable format me hai use hum nhi //padh skte

// //----------------------
// .then(raw => raw.json())  //isse data computer readable se human readble me convert ho jayega
// //.then(readable => console.log(readable))
// .then(readable => {
//     console.log(readable.results[0].gender);
//     console.log(readable.results[0].location);
//     console.log(readable.results[0].name);

// })

// //--------------------------------------------------------------
// // Axios -> isme raw data nhi milta direct readable data milta hai
// //isliye hume 2 bar .then ka use nhi krna padta
// axios.get('https://randomuser.me/api/')
// .then(result => {
//     console.log(result.data);
// })

// //-------------------------------------------------------------------------
// // promise

// const parchi=new Promise(function(resolve , reject){
//     //jaake ek user lao and agr wo male ho to green 
//     //button nhi to red button
//     fetch('https://randomuser.me/api/')
//     .then(raw => raw.json())
//     .then(result => {
//         if(result.results[0].gender === "male") resolve();
//         else reject();
//     });
// });

// parchi
// .then(function(){
//     console.log("hara button daba");
// })
// .catch(function(){
//     console.log("laal button daba");
// })

// // -------------------------------------------------------------
// //callback
// function rxy(a,b){
//     b();
// }
// rxy(1,function(){console.log("callback chala")});

// //task->user ke data mangaao and jb data aajaye to us
//     //data ke name,gender and email ko print kro 

// function getData(url,getInfo){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         getInfo(result);
//     })
// }
// getData('https://randomuser.me/api/',function(result){
//     console.log(result.results[0].gender);
//     console.log(result.results[0].name.first);
//     console.log(result.results[0].email);
// })

// ---------------------------------------------------
//Async/Await 

// var a = fetch('https://randomuser.me/api/'); //ye async code hai ye bad me chlega
// console.log(a) // ye sync code hai ye phle chl jayega 
                //isliye iska ans undefined aayega

//with asyn await aap async code bhi aise Likh skte ho jaise ki aap normal
    //synchronous code likh rahe ho

// async function abcdefg(){
//     let a = await fetch('https://randomuser.me/api/');
//     a = await a.json();
//     console.log(a);
// }
// abcdefg();


//----------------------------------------
// const ritika = function(callback){
//     console.log(callback());
// }

// ritika(()=>[1,2,3],[1]);