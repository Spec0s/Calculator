function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a*b
}
function divide(a,b){
    return a/b
}

function operate(x){
    var a=Number(prompt("Enter a number"))
    var b=Number(prompt("Enter a second number"))
    if(x===add){
        return add(a,b)
    }else if(x===substract){
        return substract(a,b)
    }else if(x===multiply){
        return multiply(a,b)
    }else if(x===divide){
        return divide(a,b)
    }
}
var btnSelected=""
var operatorSelected=""

var resultScreen=document.querySelector(".result-screen")
var buttonClick=document.querySelectorAll("button")
buttonClick.forEach(key=>key.addEventListener('click', function(e){
    resultScreen.textContent+=e.target.innerHTML
    return btnSelected=Number(resultScreen.innerHTML)
}))
var btnClear=document.querySelector(".btn-4")
btnClear.addEventListener("click",function(e){
    resultScreen.textContent=""
    btnSelected=""
})