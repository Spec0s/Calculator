function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

// function operate(x) {
//     var a = Number(prompt("Enter a number"))
//     var b = Number(prompt("Enter a second number"))
//     if (x === add) {
//         return add(a, b)
//     } else if (x === substract) {
//         return substract(a, b)
//     } else if (x === multiply) {
//         return multiply(a, b)
//     } else if (x === divide) {
//         return divide(a, b)
//     }
// }


var btnSelected = ""
// var btnDisplay = ""

var resultScreen = document.querySelector(".result-screen")
var numberClick = document.querySelectorAll(".number")
numberClick.forEach(key => key.addEventListener('click', function (e) {
    // btnSelected=e.target.innerHTML
    resultScreen.textContent += e.target.innerHTML
    // btnDisplay = resultScreen.innerHTML
    btnSelected = resultScreen.innerHTML
}))

var operatorClick = document.querySelectorAll(".operator")
operatorClick.forEach(key => key.addEventListener('click', function (e) {
    btnSelected = eval(btnSelected)
    resultScreen.textContent = btnSelected
    btnSelected = resultScreen.innerHTML
    // btnSelected=e.target.innerHTML
    resultScreen.textContent += e.target.attributes.alt.nodeValue
    // btnDisplay = resultScreen.innerHTML
    btnSelected = resultScreen.innerHTML

}))

var btnClear = document.querySelector(".btn-4")
btnClear.addEventListener("click", function (e) {
    // resultScreen.innerHTML.split("");
    // resultScreen.innerHTML.splice(-1);
    // var btnSelected=resultScreen.innerHTML.join("");
    resultScreen.textContent = ""
    btnDisplay = ""
    // var splitBtn=btnSelected.split("")
    // console.log(btnSelected)
    // var popped=splitBtn.pop();
    // var btnSelected=popped.join("")
})

var btnEvaluate = document.querySelector(".evaluate")
btnEvaluate.addEventListener("click", function (e) {
    btnSelected = eval(btnSelected)
    resultScreen.textContent = btnSelected
    btnSelected = resultScreen.innerHTML
})