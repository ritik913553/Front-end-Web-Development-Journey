//selection

// document.getElementById   //only select id
// document.getElementsByTagName //only select html tags
// document.getElementsByClassName //only select class
// document.querySelector //ye html ke sbhi chijo ko select kr skta hai

//---------------------------------------------------------------------------------

//select and save
var btn = document.querySelector('button');

//selection:-
    //thru id
        var abcd=document.querySelector('#abcd');
    //thru class
        var classxyz=document.querySelector('.xyz');
    //thru tag
        //var tagSelector=document.querySelector('h3');
        var tagSelector=document.querySelector("h3");
        //This code attempts to select the first <h3> element
        // in the document using querySelector

        //agar aapke pas bhaut saare h3 hai and aap is trha  
        // select karte ho to sirf pahla h3 select hoga
        
        var Allh3tagSelector=document.querySelectorAll("h3");