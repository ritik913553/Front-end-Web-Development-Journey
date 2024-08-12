// //Question->1
// let btn = document.querySelector("button");
// let p =document.querySelector("p");
// btn.addEventListener("click",function(){
//     p.textContent="Hey,Hello";
// })



// // Qestion->2
// let img1=document.querySelector("#one");
// let img2=document.querySelector("#two");

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     var src1 = img1.src;
//     var src2 = img2.src;

//     img1.src=src2;
//     img2.src=src1;
// })



// //Question->3
// // (jab bhi forms ke saath deal karo yaad rakho ki Submit
// // hone per forms page ko reload kar dete hai ,aur tumhe 
// // khyal rakhna  hai ke page reload naa ho,nahi to agar
// // page reload hua to js nahi chalegi ,kyuki js
// // chl paye usse phle hi page reaload ho chuka hoga )


// // //method->1
// // var form = document.querySelector("form");
// // var inp1=document.querySelector("#inp1");
// // var inp2=document.querySelector("#inp2");
// // var error=document.querySelector("#error");

// // form.addEventListener("submit",function(ev){
// //     ev.preventDefault();//This line prvent the form from submitting
// //     //you can add your custom logic here!
// //     if(inp1.value === '' || inp2.value === ''){
// //         error.textContent ="error,some fields are blank";
// //         error.style.color="red";
// //     }
// //     else{
// //         error.textContent ="";
// //         error.style.color="black";
// //     }
// // })

// //method->2
// var form = document.querySelector("form");
// var inps = document.querySelectorAll('input[type="text"]');
// //inps ek array ki trha (actually node list) hai jisme
// //saare input jiska type text hai wo store hai.isme forEach
// //loop laga sakte hai...
// var error=document.querySelector("#error");

// form.addEventListener("submit",function(ev){
//     ev.preventDefault();//This line prvent the form from submitting
//     // inps.forEach(function(inp){
//     //     if(inp.value === ''){
//     //         error.textContent='Error';
//     //         error.style.color="Red";
//     //     }
//     // })
//     var count=0;
//     for(var i=0;i<inps.length;i++){
//         if(inps[i].value.trim() === ''){
//             error.textContent="Error,some fields are blank";
//             error.style.color="Red";
//             count++;
//             break;
//         }
//     }
//     if(count===0){
//         error.textContent="";
//     }
// })

// //.trim() -> spaces hatata hai suruwat and last ke



// //Question->4
// var add=document.querySelector("#add");
// var rem = document.querySelector("#remove");
// var inp=document.querySelector("input");
// var uolist=document.querySelector("ul");

// var li;

// add.addEventListener("click",function(){
//     if(inp.value.trim() === ''){}
//     else{
//         li = document.createElement('li');
//         li.textContent = inp.value;
//         uolist.appendChild(li);
//         inp.value='';
//     }
// })

// rem.addEventListener("click",function(){
//     uolist.removeChild(li);
// })


// //Question-5
// var start=document.querySelector("#start");
// var timer=document.querySelector("h3");
// var stop=document.querySelector("#stop");

// var interval;

// start.addEventListener("click",function(){
//     var count=0;
//     interval=setInterval(function(){
//         timer.textContent = count;
//         count++;
//     },1000);
// })

// stop.addEventListener("click",function(){
//     clearInterval(interval);
// })



//Question->6

//Method->1
// var home =  document.querySelector("#home");
// var about =  document.querySelector("#about");
// var contact =  document.querySelector("#Contact");

// var homeText =  document.querySelector("#homeText");
// var aboutText =  document.querySelector("#aboutText");
// var contacttext =  document.querySelector("#contacttext");

// homeText.style.display = "block";

// home.addEventListener('click',function(){
//     saareTextHatao();
//     homeText.style.display = "block";
// })
// about.addEventListener('click',function(){
//     saareTextHatao();
//     aboutText.style.display = "block";
// })
// contact.addEventListener('click',function(){
//     saareTextHatao();
//     contacttext.style.display = "block";
// })

// function saareTextHatao(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display="none";
//     })
// }

// //Method->2
// var divs = document.querySelectorAll('.tab');
// var texts = document.querySelectorAll('h3');

// texts[0].style.display='block';

// divs.forEach(function(div,index){
//     div.addEventListener("click",function(){
//         hideAllText();
//         texts[index].style.display="block";
//     });
// });

// function hideAllText(){
//     texts.forEach(function(text){
//         text.style.display='none';
//     });
// }

// //Question-7
// var prg = document.querySelector("#progress");
// var h3 = document.querySelector('h3');
// var count=0;
// var int = setInterval(function(){
//     if(count === 100){
//         clearInterval(int);
//         h3.style.opacity = 1;
//     }
//     count++;
//     prg.style.width = count+'%';
// },50)



// //Question->8

// // // java script ke thru data dena
// // var data =[
// //     {name :"Ritik", src: "https://plus.unsplash.com/premium_photo-1672006778196-d43338450c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"},
// //     {name :"Rahul", src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"},
// //     {name :"Ritika", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"}
// // ]
// // // This is an array of objects where each object represents a person with a name and an src (source URL of the image).


// // var pers = '';
// // data.forEach(function(elem){
// //     pers += `<div class="person">
// //                     <div class="img">
// //                         <img src="${elem.src}" alt="">
// //                     </div>
// //                     <h4>${elem.name}</h4>
// //                 </div>`;
// // })

// // document.querySelector('.people').innerHTML = pers;

// // var input =document.querySelector('input');
// // input.addEventListener("input",function(){   
// //     var matching = data.filter(function(e){   //filter is also like for each ,here e is every elemnt of data array
// //         return e.name.startsWith(input.value) 
// //     })
// //     //matching is a array in which all the object is presnt which's name is 
// //     // startes whith the word which is written in input ..
// //     // 'e' represents each element (or object) of the data array as the 
// //     // filter method iterates through it.
// //     // f the condition e.name.startsWith(input.value) is true for 
// //     // an element, that element is included in the new 'matching' array.



// //     var newusers='';
// //     matching.forEach(function(elem){
// //         newusers += `<div class="person">
// //                         <div class="img">
// //                             <img src="${elem.src}" alt="">
// //                         </div>
// //                         <h4>${elem.name}</h4>
// //                     </div>`;
// //     })
    
// //     document.querySelector('.people').innerHTML = newusers;
// //// The innerHTML property is used to get or set the HTML content inside an element. When you set innerHTML, you replace all of the element’s children with new HTML content.
// // })


// //without giving data through javascript
// document.getElementById('search').addEventListener('input', function() {
//     var inputVal = this.value.toLowerCase();
//     var people = document.querySelectorAll('.person');

//     people.forEach(function(person) {
//         var name = person.querySelector('h4').textContent.toLowerCase();
//         if (name.startsWith(inputVal)) {
//             person.style.display = '';
//         } else {
//             person.style.display = 'none';
//         }
//     });
// });


// //Question->9
// var counter =document.querySelector('#counter');
// var text=document.querySelector('textarea');
// text.addEventListener('input',function(){
//     counter.textContent = text.value.length;
// })

//Question->10
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    // Calculate the total scrollable height
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Calculate the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Calculate the width of the progress bar as a percentage
    var progressPercentage = (scrollPosition / scrollHeight) * 100;
    // Update the width of the progress bar
    document.getElementById("progress-bar").style.width = progressPercentage + "%";
}
