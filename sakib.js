


/// blog 
/// solve all problem


// header 

const ammount_header = document.getElementById("ammount-header");
const blog_button_header = document.getElementById("blog-button-header");

let taka = 6000;
ammount_header.innerText = parseFloat(taka);

if(taka<=0)
{
    taka=0;
    ammount_header.innerText=0;
}





// end header 



// main start

// section



let History_button_main = document.getElementById("History-button-main");

let Donation_button_main = document.getElementById("Donation-button-main");




Donation_button_main.addEventListener("click", () => {


    Donation_button_main.classList.add("color");
    History_button_main.classList.remove("color");

    // document.getElementById("header").classList.remove('hidden');
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("footer").classList.remove("hidden")

    document.getElementById("history").classList.remove("show2");






})

// transction hsitory


History_button_main.addEventListener("click", () => {

    History_button_main.classList.add("color");
    Donation_button_main.classList.remove("color");

    ///header main footer

    // document.getElementById("header").classList.add('hidden');
    document.getElementById("main").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");

    // document.getElementById("donation_button_main").classList.add('show');

    document.getElementById("history").classList.add("show2");







})

// end




// card
let addMoney = document.getElementById("addMoney");
console.log(addMoney);

let input = document.getElementById("input");
let button = document.getElementById("button");
console.log(button)
// donatino
let donation = 550.00;
addMoney.innerText=parseFloat(donation);


button.addEventListener("click", () => {

    const ans = handelAllinputValue('input');

    // let test = showtranscitionHistory('input');

    showtranscitionHistory("inpiut 01", input.value);

    let add= input.value;
    donation=parseFloat(add) + parseFloat(donation);
    addMoney.innerText=donation;


    taka = parseFloat(taka) - parseFloat(ans);
    if(taka<=0)
    {
        taka=0;
    }
    ammount_header.innerText = taka;


    console.log("button 1")
})


let addMoney2 =  document.getElementById("addMoney2");
console.log(addMoney2)

let donation2 = 550.00;
addMoney2.innerText=parseFloat(donation2);

let input2 = document.getElementById("input2");
let button2 = document.getElementById("button2");
button2.addEventListener("click", () => {

    const ans = handelAllinputValue('input2');
        
    let add2= input2.value;
    donation2=parseFloat(add2)+parseFloat(donation2);
    addMoney2.innerText=donation2; 

    taka = parseFloat(taka) - parseFloat(ans);

    if(taka<=0)
    {
        taka=0;
    }

    ammount_header.innerText = taka;
    showtranscitionHistory("input 02", input2.value)

    console.log("button 2")
})



let addMoney3 = document.getElementById("addMoney3");
let donatino3= 3400;
addMoney3.innerText=parseFloat(donatino3);

let input3 = document.getElementById("input3");
let button3 = document.getElementById("button3");
button3.addEventListener("click", () => {

    const ans = handelAllinputValue('input3');
    showtranscitionHistory("inpout 02", input3.value);

    let add3 = input3.value;
    donatino3=parseFloat(add3)+parseFloat(donatino3);
    addMoney3.innerText=donatino3;




    taka = parseFloat(taka) - parseFloat(ans);

    if(taka<=0)
    {
        taka=0;
    }
    ammount_header.innerText = taka;

    console.log("button 3")
})