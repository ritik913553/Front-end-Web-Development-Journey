var btn = document.querySelector('button');
// btn.addEventListener(event,callback(ye function hai))
btn.addEventListener('mouseover',function(){
    btn.textContent = "Starting...";
    btn.style.backgroundColor="red";
    //mouse me over hone pr callback function ke andr jo jo rhega 
    //wo sb chlega
})
btn.addEventListener('mouseleave',function(){
    btn.textContent = "make new card";
    btn.style.backgroundColor="white";
})

// event:click,dblclick,mouseover,mouseleave,mousemove
//      change,keydown,keypress,keyup,mouseenter,......etc

//-----------------------------------------------------------
//event object

var mouseMove = document.querySelector("body");
var circle =document.querySelector("#circle");
mouseMove.addEventListener('mousemove' ,function(dets){
    console.log(dets);
})

// function(dets) { ... } in the above code
    // This is the event handler function that gets executed every time the mousemove event is triggered.
    // The dets parameter is a common shorthand in the context of the code snippet and stands for "details". It is an arbitrary name and can be named anything (e.g., event, e, evt, details).
    // This parameter receives the MouseEvent object, which contains information about the mousemove event, including properties such as the coordinates of the mouse pointer, the target element, and more.

// console.log(dets);
    //  This line logs the MouseEvent object to the     console, allowing you to inspect its properties and understand the details of the mousemove event.


// Properties of the MouseEvent Object (represented by dets)
//     The MouseEvent object (dets in your case) contains a wealth of information about the mouse event. Some of the key properties include:
    
//     dets.clientX: The horizontal coordinate of the mouse pointer, relative to the viewport.
//     dets.clientY: The vertical coordinate of the mouse pointer, relative to the viewport.
//     dets.screenX: The horizontal coordinate of the mouse pointer, relative to the screen.
//     dets.screenY: The vertical coordinate of the mouse pointer, relative to the screen.
//     dets.target: The element that triggered the event.
//     dets.buttons: Indicates which buttons are pressed during the event.
//     dets.ctrlKey, dets.shiftKey, dets.altKey, dets.metaKey: Boolean values indicating whether the respective modifier keys were active during the event.