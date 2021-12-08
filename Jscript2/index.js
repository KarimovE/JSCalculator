let button = document.querySelectorAll(".button");
let empty = document.querySelector(".empty");
let optr='';
let a;
let b;
let number1;
let number2;


function sum(a, b) {
    return a + b;
  }
     
function substraction(a, b) {
    return a - b;
  }

function multiply(a, b) {
    return a*b;
  }

function division(a, b) {
    return a/b;
  }
    

function сalc(a, b, operator) {
    switch (operator) {
        case '+':
            return sum(a, b);
            break;
        case '-':
            return substraction(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return division(a, b);
            break;
        default:
            break;
    }    
}

button.forEach(element => {
  
    element.addEventListener("click", () => {
        switch(element.innerText){
            case 'C': 
                empty.innerText='';
                break;
            case '←': 
                empty.innerText = empty.innerText.slice(0, -1);
                break;
            case '+': 
                operator='+';
                number1=empty.innerText;
                empty.innerText='';
                break;
            case '-': 
                operator='-';
                number1=empty.innerText;
                empty.innerText='';
                break;
            case '*': 
                operator='*';
                number1=empty.innerText;
                empty.innerText='';
                break;
            case '/': 
                operator='/';
                number1=empty.innerText;
                empty.innerText='';
                break;
            case '=': 
                number2=empty.innerText;
                empty.innerText=calc(number1, number2, operator);
                break;
            default: empty.innerText +=element.innerText;
            
        }    
    })
});


