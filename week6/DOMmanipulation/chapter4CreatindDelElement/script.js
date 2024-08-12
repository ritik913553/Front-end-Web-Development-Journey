var h1 = document.createElement('h1');
h1.textContent = "Hey";
h1.classList.add('makeitred');

//kahaprrakhoge.appendChild
document.querySelector("body").appendChild(h1);

var img = document.createElement('img');
img.src='https://images.unsplash.com/photo-1718002127392-92a7eef514ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'

document.querySelector("body").appendChild(img);


//remoe child(jo aapne bnaya tha use delete kaise kre)
document.querySelector("body").removeChild(img);

//remove 
var btn = document.querySelector("button");
btn.remove();