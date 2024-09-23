


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

    let time = new Date().toISOString();



    ans.forEach((item, key) => {
        let div = document.createElement("div");
        let newline = document.createElement("p");
        let timeline = document.createElement("p");

        
        newline.innerText = ` ${str} ${item} BDT `;
        timeline.innerText=time;
        newline.style.fontSize="25px";
        newline.style.marginTop="10px";
        newline.style.height="20px";
        
        newline.style.padding="4px";
        timeline.style.marginTop="20px";


        div.classList.add('line')

        div.appendChild(newline);
        div.appendChild(timeline);

        history.appendChild(div);
        
    





    })
    
    








}
