// Callbacks vs Promises vs Async/Await

//task-> ek url se data lekar aao and usey console par show kro

// //1.task using call back
// function dataFetcher(url,callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result);
//     })
// }
// dataFetcher('https://randomuser.me/api/',function(result){
//     console.log(result);
// })

// //2 task using call back promises
// function dataFetcher(url){
//     const parchi = new Promise(function(resolve,reject){
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             resolve(result);
//         })
//     })
//     return parchi;
// }

// var parchi=dataFetcher('https://randomuser.me/api/');
//  parchi.then(function(result){
//     console.log(result);
// })

//3 task using async/await

async function dataFetcher(url){
    let data= await fetch(url);
    let result = await data.json();  //await isliye kyuki wo dependent hai data pr
    return result;
}
// console.log(dataFetcher('https://randomuser.me/api/'));  //yaha promises mila result mhi

//for this we need await before dataFetcher function
 // and wha await hai isliye humne use wrapup krna pdega
 // ek async function mein

async function hh(){
    let data = await dataFetcher('https://randomuser.me/api/');
    console.log(data);
}
hh();

//-------------------------------------------------------------------------
// Generators

function* printNums(){
    console.log("started");
    yield 1;
    console.log("phela chl chuka");
    yield 2;
    console.log("dusra chl chuka");
    yield 3;
}

const ans = printNums();
console.log(ans.next().value); 
//output:started 
        //1
console.log(ans.next().value);
//output:phela chl chuka 
        //2
console.log(ans.next().value);
//output:dusra chl chuka
        //3



// const ans = printNums();
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// //output:
// // started
// // {value: 1, done: false} 
// //  phela chl chuka
// // {value: 2, done: false}
// // dusra chl chuka
// // {value: 3, done: false}
// // {value: undefined, done: true}

//ques ->1-10 not ek bar
function* allNums(){
    for(var i=1;i<11;i++){
        yield i;
    }
}
const gen = allNums();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



function* print(){
    var j =3;
    for(let i=1;i<11;i++){
        console.log(i);
        if(i==j){
            yield i;
            j+=3;
        }
    }
}
const gen1 = print();
gen1.next(); // 1 2 3
gen1.next(); //4 5 6
gen1.next(); //7 8 9
gen1.next(); //10


//ques-> primenumber nikallo with generator jab jab 
// next bola jaaye tabhi agla print ho 1 - 20 tk 


//-------------------------------------------------------------
var nums = Array.from({length: 10000},(_,b)=> b+1);
const worker= new Worker('worker.js');
worker.postMessage(nums);

worker.onmessage = function(data){
    console.log(data.data);
}