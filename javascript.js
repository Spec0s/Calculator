//                          Click variables                 //
var clickedNumb = false;
var clickedDec = false;
var clickedOperator = false;
var clickedEval = false;
var clickedBackSpace = false
var click = 0;

//                          Variables                            //

var btnSelected = [];
var operatorSelected = [""];
var resultScreen = document.querySelector(".result-screen");
var numberClick = document.querySelectorAll(".number");

//                          Evaluate function                   //
function multiply(a, b) {
    return a * b
}
function add(a, b) {
    return a + b
}
function divide(a, b) {
    return a / b
}
function substract(a, b) {
    return a - b
}

function calculate(a, b) {
    if (operatorSelected == "+") {
        return a + b
    } else if (operatorSelected == "-") {
        return substract(a, b)
    } else if (operatorSelected == "/") {
        return divide(a, b)
    } else if (operatorSelected == "*") {
        return multiply(a, b)
    }

}
function evaluate(str) {
    return str.reduce(calculate)
}

//                          Selected Numbers click                    //



numberClick.forEach(key => key.addEventListener('click', function (e) {
    click++
    var btnTarget = e.target.innerHTML
    if (!isNaN(btnTarget) && btnTarget !== undefined && btnTarget !== NaN) {                                               // number keydown
        if (clickedEval && clickedOperator) {
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click > 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click > 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            if (e.repeat) {
                clickedDec = true
            }
            // btnSelected += btnTarget;
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            // resultScreen.textContent = btnSelected
        }
        else if (clickedEval) {
            btnSelected = []
            resultScreen.textContent = ""
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click > 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                
                if (click > 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            if (e.repeat) {
                clickedDec = true
            }
            // btnSelected += btnTarget
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            // resultScreen.textContent = btnSelected
        } else if (clickedDec && !clickedOperator) {
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click > 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click > 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            if (e.repeat) {
                clickedDec = true
            }
            // btnSelected += btnTarget
            clickedNumb = true;
            clickedDec = true;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            // resultScreen.textContent = btnSelected
        } else if (clickedDec && clickedOperator) {
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click > 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click > 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            if (e.repeat) {
                clickedDec = true
            }
            // btnSelected += btnTarget
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            // resultScreen.textContent = btnSelected
        } else {
            if (e.repeat) {
                clickedDec = true
            }
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click > 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click > 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }

            // btnSelected += btnTarget
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            console.log(btnSelected)
        }

    }
}))



//                      Selected Operators  click                //

var operatorClick = document.querySelectorAll(".operator")
operatorClick.forEach(key => key.addEventListener('click', function (e) {
    var btnTarget = e.target.attributes.alt.nodeValue                                                  // operator keydown
    if (!clickedEval && !clickedNumb && !clickedDec && !clickedOperator && btnTarget !== "*" && btnTarget !== "/" && btnTarget !== "+") {
        btnSelected = 0 + btnTarget
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = true;
        // resultScreen.textContent = btnSelected
    } else if (clickedEval && !clickedNumb && !clickedDec) {
        btnSelected += btnTarget
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = true
        // resultScreen.textContent = btnSelected
    } else if (clickedNumb) {
        // btnSelected = eval(btnSelected)
        // btnSelected += btnTarget
        // if (btnSelected === "NaN" + btnTarget || btnSelected === "Infinity" + btnTarget) {                       // Need to solve how to replace operator afte backspace !!!!!!!!!!!
        //     clickedNumb = false
        //     clickedDec = false
        //     clickedOperator = false
        //     clickedEval = false
        //     clickedBackSpace = false
        //     btnSelected = ""
        //     resultScreen.textContent = btnSelected
        // }
        btnSelected = btnSelected.map(function (x) { 
            return parseInt(x); 
          });
        if (btnSelected.lenght > 1) {
            btnSelected = evaluate(btnSelected)
        }
        click = 0
        operatorSelected = btnTarget
        console.log(operatorSelected)
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = true;
        // resultScreen.textContent = btnSelected
    }
    else if (clickedOperator) {
        operatorSelected = btnTarget
        // var splitStr = btnSelected.split("");
        // var splitArr = Array.from(splitStr);
        // splitArr.splice(-1, 1, btnTarget);
        // btnSelected = splitArr.join("");
        // resultScreen.textContent = btnSelected;
        console.log(operatorSelected)

    }
}))

//                      Select decimal  click              //

var decimal = document.querySelectorAll(".btn-5")

decimal.forEach(key => key.addEventListener('click', function (e) {
    var btnTarget = e.target.innerHTML
    if (clickedEval && !clickedOperator && !clickedNumb && !clickedDec) {
        btnSelected = 0 + btnTarget
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = false;
        resultScreen.textContent = btnSelected
    } else if (!clickedDec && !clickedOperator) {                                // Need to solve bug where after numerous click on . eval gives abnormal number !!!!!!!!!!
        btnSelected += btnTarget;
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = false;
        clickedEval = false;
        clickedBackSpace = false
        resultScreen.textContent = btnSelected;
    }
}))

//                      Evaluate button   click              //

var btnEvaluate = document.querySelector(".evaluate")

btnEvaluate.addEventListener("click", function (e) {
    if (!clickedEval && clickedNumb && !clickedOperator) {
        // btnSelected = Math.round((eval(btnSelected)) * 100) / 100
        btnSelected = btnSelected.map(function (x) { 
            return parseInt(x, 10); 
          });
        btnSelected=evaluate(btnSelected)
        if (isNaN(btnSelected) || btnSelected === Infinity) {
            clickedNumb = false
            clickedDec = false
            clickedOperator = false
            clickedEval = false
            clickedBackSpace = false
            btnSelected = []
            operatorSelected=""
            resultScreen.textContent = btnSelected
        }
        clickedNumb = false
        clickedDec = false
        clickedOperator = false
        clickedBackSpace = true
        clickedEval = true
        operatorSelected=""
        click=0
        var evalSymbol = "="
        resultScreen.textContent = evalSymbol + btnSelected
    }
})

//                  Backspace               //

var backSpace = document.querySelector(".btn-3")
backSpace.addEventListener("click", function (e) {
    if (!clickedBackSpace) {
        var splitStr = btnSelected.split("");
        var splitArr = Array.from(splitStr);
        var checkLast = splitArr.splice(-1, 1);
        if (isNaN(checkLast)) {
            return
        } else {
            btnSelected = splitArr.join("");
            resultScreen.textContent = btnSelected;
        }
    }
});

//                      Select clear button click            //

var btnClear = document.querySelector(".btn-4")

btnClear.addEventListener("click", function (e) {
    clickedNumb = false
    clickedDec = false
    clickedOperator = false
    clickedEval = false
    btnSelected = []
    resultScreen.textContent = btnSelected
})


//                      Keydown to use keypad           //



window.addEventListener('keydown', function (e) {
    console.log(e)
    if (!isNaN(e.key) && e.key !== " " && e.key !== undefined && e.key !== NaN) {                                               // number keydown
        if (clickedEval && clickedOperator) {
            if (e.repeat) { clickedDec = true }
            btnSelected += e.key;
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            resultScreen.textContent = (btnSelected)
        }
        else if (clickedEval) {
            btnSelected = ""
            resultScreen.textContent = ""
            if (e.repeat) { clickedDec = true }
            btnSelected += e.key
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            resultScreen.textContent = btnSelected
        } else if (clickedDec && !clickedOperator) {
            if (e.repeat) { clickedDec = true }
            btnSelected += e.key
            clickedNumb = true;
            clickedDec = true;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            resultScreen.textContent = btnSelected
        } else if (clickedDec && clickedOperator) {
            if (e.repeat) { clickedDec = true }
            btnSelected += e.key
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            resultScreen.textContent = btnSelected
        } else {
            if (e.repeat) { clickedDec = true }
            btnSelected += e.key
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            resultScreen.textContent = btnSelected
        }

    }
    else if ((e.key == "*" || e.key == "/" || e.key == "+" || e.key == "-") && e.key) {                                                   // operator keydown
        if (!clickedEval && !clickedNumb && !clickedDec && !clickedOperator && e.key !== "*" && e.key !== "/" && e.key !== "+") {
            btnSelected = 0 + e.key
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            clickedBackSpace = true;
            resultScreen.textContent = btnSelected
        } else if (clickedEval && !clickedNumb && !clickedDec) {
            btnSelected += e.key
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            clickedBackSpace = true
            resultScreen.textContent = btnSelected
        } else if (clickedNumb) {
            btnSelected = eval(btnSelected)
            btnSelected += e.key
            if (btnSelected === "NaN" + e.key || btnSelected === "Infinity" + e.key) {                       // Need to solve how to replace operator afte backspace !!!!!!!!!!!
                clickedNumb = false
                clickedDec = false
                clickedOperator = false
                clickedEval = false
                clickedBackSpace = false
                btnSelected = ""
                resultScreen.textContent = btnSelected
            }
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            clickedBackSpace = true;
            resultScreen.textContent = btnSelected
        }
        else if (clickedOperator) {
            var splitStr = btnSelected.split("");
            var splitArr = Array.from(splitStr);
            splitArr.splice(-1, 1, e.key);
            btnSelected = splitArr.join("");
            resultScreen.textContent = btnSelected;

        }
    } else if (e.key === ".") {                                                                                                             // decimal keydown
        if (clickedEval && !clickedOperator && !clickedNumb && !clickedDec) {
            btnSelected = 0 + e.key
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            clickedBackSpace = false;
            resultScreen.textContent = btnSelected
        } else if (!clickedDec && !clickedOperator) {                                // Need to solve bug where after numerous click on . eval gives abnormal number !!!!!!!!!!
            btnSelected += e.key;
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            resultScreen.textContent = btnSelected;
        }
    }
    else if (e.key === "Enter") {                                                                                                         // evaluate keydown
        if (!clickedEval && clickedNumb && !clickedOperator) {
            e.preventDefault();
            btnSelected = Math.round((eval(btnSelected)) * 100) / 100
            if (isNaN(btnSelected) || btnSelected === Infinity) {
                clickedNumb = false
                clickedDec = false
                clickedOperator = false
                clickedEval = false
                clickedBackSpace = false
                btnSelected = ""
                resultScreen.textContent = btnSelected
            }
            clickedNumb = false
            clickedDec = false
            clickedOperator = false
            clickedBackSpace = true
            clickedEval = true
            var evalSymbol = "="
            resultScreen.textContent = evalSymbol + btnSelected
        }
        // else if (clickedEval) {
        //     btnSelected = Math.pow(btnSelected, 2)
        //     resultScreen.textContent = btnSelected
        // }
    }
    else if (e.key === "Backspace") {                                                                                               // Keydown backspace
        var splitStr = btnSelected.split("");
        var splitArr = Array.from(splitStr);
        var checkLast = splitArr.splice(-1, 1);
        if (isNaN(checkLast)) {
            return
        } else {
            btnSelected = splitArr.join("");
            resultScreen.textContent = btnSelected;
        }
    }
    else if (e.key === "Escape") {                                                                                                     // Keydown Escape
        clickedNumb = false
        clickedDec = false
        clickedOperator = false
        clickedEval = false
        btnSelected = ""
        resultScreen.textContent = btnSelected
    }
});