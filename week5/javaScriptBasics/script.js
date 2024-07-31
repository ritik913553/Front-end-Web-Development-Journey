// var a = 12;
// //alert('😣😏'); 
// var name =prompt('hello');
// console.log(name);
// var a = 12;
// var name=Ritik;
// const x = 12;


// When you assign an array to a new variable using the
//assignment operator (=), both variables point to the
//same array in memory. Therefore, any changes made to 
//the array through one variable will be reflected in 
//the other. This is because arrays in JavaScript are reference types.
var arr = [1,2,3,4,5];
var c = arr;
c.pop();//c and arr dono same array ko point kr rhe hai isliye dono se last value hatega


//spread operator ('...')
var ar =[12,13,14,15];
var gh = [...ar]; //shallow copy
// ar and gh are now two separate arrays with the same elements. ,gh is copy of ar
//Any modification to the gh array will not affect the ar array, and vice versa, because gh is a shallow copy of ar
//For arrays containing objects or other arrays, only the references are copied, leading to shared references between the original
    //and the copied array for nested objects/arrays.


// this keyword understand

//global -window
console.log(this);  //this code is present in global space because ye
                    //code kisi braces{},kisi function ke andr nhi hai

//function -window
function abcd(){
    console.log(this);
}
abcd();

//method  -object
var obj = {
    name: function(){
        console.log(this);
    },
    age: 25,
    email: "ritikguor039023"
}
obj.name();


//fnc inside method(es5) -window
var obj2 = {
    sayName: function(){
        function childfnc(){
            console.log(this);
        }
        childfnc();
    }
}
obj2.sayName();

//fnc inside method(es6)  -object
var obj3= {
    saayName: function(){
        const child = ()=>{  //arrow function apne parent ke hisab se value leta hai
            console.log(this);
        }
        child();
    },
    age: 34
}
obj3.saayName();


var obj4= {
    saayName: ()=>{
         //arrow function apne parent ke hisab se value leta hai
        console.log(this); //Window
    },
    age: 55
}
obj4.saayName();


//constructor fnc mein this ki value -new blank object
// Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.
function add(){
    console.log(this);
}
const ans = new add();

//-------------------------
// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  //--------------------------------------

  
//event listener mein this ki value  -that element jispar event lis. laga ho
    // document.querySelector("button") 
    // .addEventListener("click", function(){
    //     console.log(this);
    // })
//kisi bhi event listner me this ki value event listner ke phle jo
//bhi selected element hai whi hoti hai 

//---------------------------------------------------------
// const obj5 = {name: "Ritik"}
// function abcd(){
//     console.log(this);  //value of this-> obj5 i.e {name: 'Ritik'}
// }
// abcd.call(obj5); //jo bhejenge function call krne time whi value this ka hoga.


// const obj6 = {name: "Ritik"}
// function abcd(a,b,c){
//     console.log(this,a,b,c);  //  {name: 'Ritik'} 1 2 3
// }
// abcd.apply(obj5,[1,2,3]); 


const obj7 = {name: "Ritik"}
function abcd(){
    console.log(this);  
}
const badmeinchalanekeliyefnc=abcd.bind(obj7); 
badmeinchalanekeliyefnc();
//bind krne se ye turnt answer nhi deta iska use bad me chalane
//ke liye kiya jata hai

// ----------------------------------------------------------------
//prototypal inheritance

function makeHuman(name , age){
    this.name=name;
    this.age=age;

    // this.printMyName= function(){
    //     console.log(this.name);
    // }
    //printMyName function age yha rhega to jitne object bnayenge
    //utne object me memory gherega isi se bachne ke liye prototype
    //ka use krte hai 
}
makeHuman.prototype.printMyName= function(){
    console.log(this.name);
}
const human1 = new makeHuman("Ritik",25);
const human2 = new makeHuman("Kajal",18);

// 1. Function as Constructor:
// makeHuman is used as a constructor function. When you use the new keyword with a function, it acts as a constructor that initializes new objects. Constructor functions typically start with an uppercase letter by convention, although it’s not a strict requirement.
// 2. The new Keyword:
// The new keyword is critical in this context. It changes the behavior of makeHuman in the following ways:
// Creates a new object: A new object is created, like {}.
// Sets up inheritance: The new object’s prototype is set to makeHuman.prototype, allowing it to inherit properties and methods from makeHuman.prototype.
// Binds this: Inside makeHuman, this refers to the newly created object.
// Initializes the object: Properties are added to the object (name and age).
// Returns the object: The new object is returned implicitly unless makeHuman explicitly returns a different object.
// 3. this Keyword:
// In the context of a constructor function, this is bound to the new object being created. It allows you to add properties to this new object.
// 4. Prototypes:
// The prototype of the new object (human1 or human2) is set to makeHuman.prototype. This means that if makeHuman.prototype has any properties or methods, human1 and human2 can access them.
// Object Creation Steps:
// Memory Allocation: JavaScript allocates memory for the new object.
// Prototype Linkage: The new object’s internal prototype ([[Prototype]]) is linked to makeHuman.prototype.
// Property Initialization: name and age properties are set on the new object.
// Object Return: The new object is returned and assigned to human1 or human2.

//aisa koi bhi function jismein aap this ka upyog kar rhe ho aur
//function ko call karte waqt aap new ka upypog karein, to new ka
//matlab waha par ek blank object hojaata hai

//ek function jo ki this ka upyog kar raha ho and new ke dwaara
//naye naye obejcts bana kar deta ho aise function ko constructor
//function kahte hai
function abcd(){

}
var ans1 = new abcd(); //ans1=abcd {}

// ------------------------------------------------------------
//closures
    //ek function jo return kare doosra function, aur use kare parent
    //function ka koi variable
function counter(){
    var count=0;
    return function(){
        count++;
        console.log(count);
    }
}
var fnc=counter();
fnc();
fnc();

// function timer(){
//     var a = 12;
//     return setTimeout(function(){
//     console.log(a);
//     }, 2000)
// }
// var ans3 = timer(); 

// ----------------------------------------------------------
// 4.event delegation
// var parent = document.querySelector("#parent");
// parent.addEventListener("click",function(details){
//     if(details.target.id === "play"){
//         console.log("play song");
//     }
//     else if(details.target.id === "pause"){
//         console.log("pause song");
//     }
// })

// ----------------------------------------------------------------
// 5.Higher-order functions
function abcde(param){

}
abcde(function(){});

// ------------------------------------------------------
// 6.Error Handling (try...catch blocks)

// function divide(a,b){
//     try{
//        if(b==0){
//         throw Error("koi gadbad hui");
//        } 
//        console.log(a/b);
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// divide(12,0);

// ----------------------------------------------------
//custom event
const evt = new Event("chachaa");
document.querySelector("button")
evt.addEventListener("chachaa",function(){
    alert("chachaa event hua");
})
document.querySelector("button").dispatchEvent(evt)

