//kisi ko bhi change krne se phle ,pahla step hota hai
// usko select karna 

var btn = document.querySelector('button');
btn.textContent="Starting..."

var vik=document.querySelector('h1');
// vik.textContent="Hello Vikram , bete";
vik.textContent += " , bete";

var xyx=document.querySelector('h2');
// xyx.textContent = "<i> Hey, sohit </i>"; //output: <i> Hey, sohit </i>
xyx.innerHTML = "<i> Hey, sohit</i>";  //output: Hey, sohit
xyx.innerHTML += "<b> kaise ho </b>";  //Hey, sohit kaise ho

//HTML Handling: textContent treats all 
//content as text, ignoring any HTML tags and rendering 
//them as text entities ('<', '>', '&', etc.). innerHTML,
//however, includes and processes HTML tags, allowing you to
// manipulate the structure and appearance of elements.