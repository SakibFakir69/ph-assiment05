

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

    document.getElementById("header").classList.remove('hidden');
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("footer").classList.remove("hidden")
    
    document.getElementById("history").classList.remove("show2");

  

    
    

})

// transction hsitory


History_button_main.addEventListener("click", ()=>{
    
    History_button_main.classList.add("color");
    Donation_button_main.classList.remove("color");

    ///header main footer

    document.getElementById("header").classList.add('hidden');
    document.getElementById("main").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");

    // document.getElementById("donation_button_main").classList.add('show');

    document.getElementById("history").classList.add("show2");
    



    


})

// end




// card

let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click",()=>{
 
    const ans = handelAllinputValue('input');

    // let test = showtranscitionHistory('input');

    showtranscitionHistory(input.value);

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
    showtranscitionHistory(input2.value)

    console.log("button 1")
})

let input3 = document.getElementById("input3");
let button3 = document.getElementById("button3");
button3.addEventListener("click",()=>{
 
    const ans = handelAllinputValue('input3');
    showtranscitionHistory(input3.value)

    taka=parseInt(taka)-parseInt(ans);
    ammount_header.innerText=taka;

    console.log("button 1")
})