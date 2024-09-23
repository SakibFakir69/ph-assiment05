


// univsersal inputfunction 



function handelAllinputValue(id) {

    let inputvalue = document.getElementById(id).value;
    return inputvalue;
}

//catch input value 

let history = document.getElementById("history");
let ans = [];
function showtranscitionHistory(str,ammount) {
    ans.push(ammount);


    history.innerHTML = ' ';



    ans.forEach((item, key) => {
        let newline = document.createElement("p");
        
        

        newline.innerText = ` your histroy  ${str} ${item} BDT `;
        newline.style.fontSize="25px";
        newline.style.marginTop="10px";
        newline.style.height="20px";
        
        newline.style.padding="4px";

        
    
        history.appendChild(newline);




    })
    
    








}
