

// header 

const ammount_header = document.getElementById("ammount-header");
const blog_button_header = document.getElementById("blog-button-header");

let taka = 6000;
ammount_header.innerText=taka;

// end header 



// main start

// section



let History_button_main = document.getElementById("History-button-main");

let Donation_button_main = document.getElementById("Donation-button-main");




Donation_button_main.addEventListener("click", ()=>{
    
    Donation_button_main.classList.add("color");
    History_button_main.classList.remove("color");
    
    





})

History_button_main.addEventListener("click", ()=>{
    
    History_button_main.classList.add("color");
    Donation_button_main.classList.remove("color")



})

// end




// card

let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click",()=>{
 
    const ans = handelAllinputValue('input');

    taka=parseInt(taka)-parseInt(ans);
    ammount_header.innerText=taka;

    console.log("button 1")
})


let input2 = document.getElementById("input2");
let button2 = document.getElementById("button2");
button2.addEventListener("click",()=>{
 
    const ans = handelAllinputValue('input2');

    taka=parseInt(taka)-parseInt(ans);
    ammount_header.innerText=taka;

    console.log("button 1")
})
let input3 = document.getElementById("input3");
let button3 = document.getElementById("button3");
button3.addEventListener("click",()=>{
 
    const ans = handelAllinputValue('input3');

    taka=parseInt(taka)-parseInt(ans);
    ammount_header.innerText=taka;

    console.log("button 1")
})