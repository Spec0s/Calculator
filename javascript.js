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

//                          Selected Numbers                        ////
var btnSelected = ""
var clicked = false

var resultScreen = document.querySelector(".result-screen")
var numberClick = document.querySelectorAll(".number")
numberClick.forEach(key => key.addEventListener('click', function (e) {
    btnSelected += e.target.innerHTML
    resultScreen.textContent = btnSelected
    console.log(btnSelected)
    console.log(e.target.innerHTML)
    console.log(resultScreen.innerHTML)
    clicked=false
}))

var operatorClick = document.querySelectorAll(".operator")
operatorClick.forEach(key => key.addEventListener('click', function (e) {
    if(!clicked){
btnSelected = eval(btnSelected)
    resultScreen.textContent = Math.round(btnSelected*100)/100
    btnSelected = resultScreen.innerHTML
    btnSelected += e.target.attributes.alt.nodeValue
    console.log(btnSelected)
    clicked=true
    }
}))

var decimal = document.querySelectorAll(".btn-5")
decimal.forEach(key => key.addEventListener('click', function (e) {
    if(!clicked){
        btnSelected += e.target.innerHTML
        resultScreen.textContent = btnSelected
    clicked=true
    }
}))



var btnClear = document.querySelector(".btn-4")
btnClear.addEventListener("click", function (e) {
    resultScreen.textContent = ""
    btnSelected = ""
})

var btnEvaluate = document.querySelector(".evaluate")
btnEvaluate.addEventListener("click", function (e) {
    btnSelected = eval(btnSelected)
    resultScreen.textContent = Math.round(btnSelected * 100) / 100
    resultScreen.textContent = btnSelected
    btnSelected = ""
    clicked=true
})