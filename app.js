const allbtns = document.querySelectorAll('.button')
const numbtns = document.querySelectorAll('.num-button')
const actionbtns = document.querySelectorAll('.action-btn')
const resultbox = document.querySelector('#result-box')
const total = document.querySelector('#total')
const clear = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')
let History = document.querySelector('#history')

function resetAll(resetAll = true) {
if(resetAll)
resultbox.innerText = 0;
firstnumber = 0
oprator = ""
History.innerText = "History ...";
}
function caluclate(numberOne , numberTwo , oprator){
    switch (oprator) {
        case "+":
        return Number(numberOne) + Number(numberTwo);
            break;
        case "-":
         return Number(numberOne) - Number(numberTwo);
            break; 
        case "*":
                return Number(numberOne) * Number(numberTwo);
            break;
        case "/":
         return Number(numberOne) / Number(numberTwo);
            break; 
        case "%":
         return Number(numberOne) % Number(numberTwo);
            break;
        default:
            break;
    }
}
function normalize(number){
    const splitenum = number.toString().split(".");
    let intnumber =  parseInt(splitenum[0]).toLocaleString();
    let flaotnum = splitenum[1]
    if(flaotnum) return `${intnumber}.${flaotnum}`
    else return intnumber
}
function reformatNumber(number){
    const spliteNumber = number.toString().split(".");
     return Number(spliteNumber.join(''))
  }
let firstnumber ;
let secondnumber ;
let oprator ; 


numbtns.forEach((numbtn) =>{
    numbtn.addEventListener('click' , () =>{
            if(resultbox.innerText.includes(".") && numbtn.innerText === "." ){return}
            if(resultbox.innerText == 0){
                if(numbtn.innerText == ".")
                    resultbox.innerText += "." 
                else 
                resultbox.innerText = numbtn.innerText 
            }
            else 
              resultbox.innerText += numbtn.innerText;
    })
})
actionbtns.forEach((actionbtn) => {
    actionbtn.addEventListener('click', () => {
        if (firstnumber) {
            secondnumber = resultbox.innerText 
            resultbox.innerText = caluclate(firstnumber , secondnumber , oprator)
            resetAll(false)  
        }
        firstnumber = resultbox.innerText 
        oprator = actionbtn.innerText
        History.innerText = `${firstnumber}${oprator}`;
        resultbox.innerText = 0
    })
})

clear.addEventListener('click' , () => {
    resetAll()
})
total.addEventListener('click', () => {
    secondnumber = reformatNumber(resultbox.innerText);
    resultbox.innerText = normalize (caluclate(firstnumber , secondnumber , oprator))
    resetAll(false)
})
deleteBtn.addEventListener('click', () => {
    if(resultbox.innerText.length <= 1){resultbox.innerText = "0" }
    else resultbox.innerText = resultbox.innerText.slice(0, -1)
})

//add css animation
allbtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        let element = allbtns[i];
        element.style.boxShadow =
            "inset -6px -6px 16px 0 rgba(295, 295, 295, .1), inset 6px 6px 16px 0 rgba(209, 205, 199, .5)";

        setTimeout(function () {
            element.style.boxShadow =
                " 6px 6px 16px 0 rgba(209, 205, 199, .8),-6px -6px 16px 0 rgba(255, 255, 255, .5)";
        }, 120);
    });
});



