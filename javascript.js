//                          Click variables                 //
var clickedNumb = false;
var clickedDec = false;
var clickedOperator = false;
var clickedEval = false;
var clickedBackSpace = false
var click = 0;
var decCount = 0;

//                          Variables                            //

var btnSelected = [];
var operatorSelected = [];
var resultScreen = document.querySelector(".result-screen");
var numberClick = document.querySelectorAll(".number");
var operationScreen = document.querySelector(".operation-screen")

//                          Evaluate function                   //
function calculate(a, b) {
    if (operatorSelected == "+") {
        return (Math.round(a * 100) + Math.round(b * 100)) / 100
    } else if (operatorSelected == "-") {
        return (Math.round(a * 100) - Math.round(b * 100)) / 100
    } else if (operatorSelected == "/") {
        return Math.round((a / b) * 100) / 100
    } else if (operatorSelected == "*") {
        return Math.round((a * b) * 100) / 100
    }

}
function evaluate(str) {
    return btnSelected = [str.reduce(calculate)]
}

//                          operation display function                  //

function screenDisp() {
    if (btnSelected[0] !== undefined && clickedEval) {
        operationScreen.textContent = "=" + btnSelected[0]
    }
    else if (btnSelected[0] !== undefined && operatorSelected !== undefined && btnSelected[1] !== undefined) {
        operationScreen.textContent = btnSelected[0] + operatorSelected + btnSelected[1]
    } else if (btnSelected[0] !== undefined && operatorSelected !== undefined) {
        operationScreen.textContent = btnSelected[0] + operatorSelected
    } else if (btnSelected[0] !== undefined) {
        operationScreen.textContent = btnSelected[0]
    }
}

//                          Selected Numbers click                    //

numberClick.forEach(key => key.addEventListener('click', function (e) {
    var btnTarget = e.target.innerHTML
    if (!isNaN(btnTarget) && btnTarget !== undefined && btnTarget !== NaN) {                                               // number keydown
        if (clickedEval && clickedOperator) {
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click >= 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click >= 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false

        }
        else if (clickedEval) {
            btnSelected = []
            resultScreen.textContent = ""
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click >= 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click >= 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
        } else if (clickedDec && !clickedOperator) {
            if (btnSelected[0] && btnSelected[1]) {
                if (click >= 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                btnSelected[0] += btnTarget
                resultScreen.textContent = btnSelected[0]
            }
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
        } else if (clickedDec && clickedOperator) {
            if (btnSelected == "0." || btnSelected == "-") {
                btnSelected[0] += btnTarget
                resultScreen.textContent = btnSelected[0]
            } else if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click >= 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click >= 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
        } else {
            if (operatorSelected == "+" || operatorSelected == "-" || operatorSelected == "*" || operatorSelected == "/") {
                if (click >= 1) {
                    btnSelected[1] += btnTarget
                    resultScreen.textContent = btnSelected[1]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[1]
                }
            } else {
                if (click >= 1) {
                    btnSelected[0] += btnTarget
                    resultScreen.textContent = btnSelected[0]
                } else {
                    btnSelected.push(btnTarget)
                    resultScreen.textContent = btnSelected[0]
                }
            }
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
        }

    }
    click++
    screenDisp()
}))

//                      Selected Operators  click                //

var operatorClick = document.querySelectorAll(".operator")
operatorClick.forEach(key => key.addEventListener('click', function (e) {
    var btnTarget = e.target.attributes.alt.nodeValue                                                  // operator keydown
    if (!clickedEval && !clickedNumb && !clickedDec && !clickedOperator && btnTarget !== "*" && btnTarget !== "/" && btnTarget !== "+") {
        btnSelected[0] = btnTarget
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = true;
        resultScreen.textContent = btnSelected[0]
    } else if (clickedEval && !clickedNumb && !clickedDec) {
        operatorSelected = btnTarget
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = true
    } else if (clickedNumb) {
        if (btnSelected[0] && btnSelected[1]) {
            btnSelected = btnSelected.map(function (x) {
                return parseInt(x * 100) / 100;
            });
            btnSelected = evaluate(btnSelected)
            resultScreen.textContent = btnSelected
        } else {
            btnSelected = btnSelected.map(function (x) {
                return parseInt(x * 100) / 100;
            });
        }
        click = 0;
        decCount = 0;
        operatorSelected = btnTarget
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = true;
    }
    else if (clickedOperator) {
        operatorSelected = btnTarget
    }
    screenDisp()
}))

//                      Select decimal  click              //

var decimal = document.querySelectorAll(".btn-5")
decimal.forEach(key => key.addEventListener('click', function (e) {
    var btnTarget = e.target.innerHTML
    if (clickedEval && !clickedOperator && !clickedNumb && !clickedDec && decCount < 1) {
        decCount = 1;
        btnSelected = []
        operatorSelected = []
        btnSelected.push(0 + btnTarget)
        resultScreen.textContent = btnSelected[0]
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = true;
        clickedEval = false;
        clickedBackSpace = false;
    } else if (!clickedDec && !clickedOperator && decCount < 1) {
        decCount = 1;                                           //Solved (was binary/decimal problem) // Need to solve bug where after numerous click on . eval gives abnormal number !!!!!!!!!!
        if (btnSelected[0] && btnSelected[1]) {
            if (click >= 1) {
                btnSelected[1] += btnTarget
                resultScreen.textContent = btnSelected[1]
            }
        } else {
            if (click >= 1) {
                btnSelected[0] += btnTarget
                resultScreen.textContent = btnSelected[0]
            } else {
                btnSelected.push(0 + btnTarget)
                resultScreen.textContent = btnSelected[0]
            }
        }
        clickedNumb = false;
        clickedDec = true;
        clickedOperator = false;
        clickedEval = false;
        clickedBackSpace = false
    }
    screenDisp()
}))

//                      Evaluate button   click              //

var btnEvaluate = document.querySelector(".evaluate")

btnEvaluate.addEventListener("click", function (e) {
    if (!clickedEval && clickedNumb && !clickedOperator) {
        btnSelected = btnSelected.map(function (x) {
            return parseInt(x * 100) / 100;
        });
        btnSelected = evaluate(btnSelected)
        if (isNaN(btnSelected) || btnSelected === Infinity) {
            decCount = 0;
            clickedNumb = false
            clickedDec = false
            clickedOperator = false
            clickedEval = false
            clickedBackSpace = false
            btnSelected = []
            operatorSelected = ""
            resultScreen.textContent = btnSelected
        }
        decCount = 0;
        clickedNumb = false
        clickedDec = false
        clickedOperator = false
        clickedBackSpace = true
        clickedEval = true
        operatorSelected = ""
        click = 0
        var evalSymbol = "="
        resultScreen.textContent = btnSelected
    }
    screenDisp()
})

//                  Backspace               //

var backSpace = document.querySelector(".btn-3")
backSpace.addEventListener("click", function (e) {
    if (!clickedBackSpace) {
        if (btnSelected[0] && (btnSelected[1] || btnSelected[1] == "")) {
            console.log("yes1")
            var splitStr = btnSelected[1].split("");
            var splitArr = Array.from(splitStr);
            var checkLast = splitArr.splice(-1, 1);
            if (checkLast == ".") {
                decCount = 0;
            }
            var joinArr = splitArr.join("")
            btnSelected[1] = joinArr
            resultScreen.textContent = btnSelected[1]
            if ("" == btnSelected[1]) {
                console.log("test")
                resultScreen.textContent = btnSelected[1]
                clickedNumb = false
                clickedBackSpace = true
                clickedOperator = true
            }
        } else if (btnSelected[0]) {
            console.log("yes2")
            var splitStr = btnSelected[0].split("");
            var splitArr = Array.from(splitStr);
            var checkLast = splitArr.splice(-1, 1);
            if (checkLast == ".") {
                decCount = 0;
            }
            var joinArr = splitArr.join("")
            btnSelected[0] = joinArr
            resultScreen.textContent = btnSelected[0]
            if ("" == btnSelected[0]) {
                console.log("test1.2")
                resultScreen.textContent = btnSelected[0]
                clickedNumb = false;
                clickedDec = false;
                clickedOperator = false;
                clickedEval = false;
                clickedBackSpace = false
                click = 0;
                decCount = 0;
                btnSelected = [];
                operatorSelected = [];
                resultScreen.textContent = "";
            }
        }
    }
    screenDisp()
}
);

//                      Select clear button click            //

var btnClear = document.querySelector(".btn-4")

btnClear.addEventListener("click", function (e) {
    clickedNumb = false;
    clickedDec = false;
    clickedOperator = false;
    clickedEval = false;
    clickedBackSpace = false
    click = 0;
    decCount = 0;
    btnSelected = [];
    operatorSelected = [];
    resultScreen.textContent = "";
    screenDisp()
})


// //                      Keydown to use keypad           //



// window.addEventListener('keydown', function (e) {
//     console.log(e)
//     if (!isNaN(e.key) && e.key !== " " && e.key !== undefined && e.key !== NaN) {                                               // number keydown
//         if (clickedEval && clickedOperator) {
//             if (e.repeat) { clickedDec = true }
//             btnSelected += e.key;
//             clickedNumb = true;
//             clickedDec = false;
//             clickedOperator = false;
//             clickedEval = false;
//             clickedBackSpace = false
//             resultScreen.textContent = (btnSelected)
//         }
//         else if (clickedEval) {
//             btnSelected = ""
//             resultScreen.textContent = ""
//             if (e.repeat) { clickedDec = true }
//             btnSelected += e.key
//             clickedNumb = true;
//             clickedDec = false;
//             clickedOperator = false;
//             clickedEval = false;
//             clickedBackSpace = false
//             resultScreen.textContent = btnSelected
//         } else if (clickedDec && !clickedOperator) {
//             if (e.repeat) { clickedDec = true }
//             btnSelected += e.key
//             clickedNumb = true;
//             clickedDec = true;
//             clickedOperator = false;
//             clickedEval = false;
//             clickedBackSpace = false
//             resultScreen.textContent = btnSelected
//         } else if (clickedDec && clickedOperator) {
//             if (e.repeat) { clickedDec = true }
//             btnSelected += e.key
//             clickedNumb = true;
//             clickedDec = false;
//             clickedOperator = false;
//             clickedEval = false;
//             clickedBackSpace = false
//             resultScreen.textContent = btnSelected
//         } else {
//             if (e.repeat) { clickedDec = true }
//             btnSelected += e.key
//             clickedNumb = true;
//             clickedDec = false;
//             clickedOperator = false;
//             clickedEval = false;
//             clickedBackSpace = false
//             resultScreen.textContent = btnSelected
//         }

//     }
//     else if ((e.key == "*" || e.key == "/" || e.key == "+" || e.key == "-") && e.key) {                                                   // operator keydown
//         if (!clickedEval && !clickedNumb && !clickedDec && !clickedOperator && e.key !== "*" && e.key !== "/" && e.key !== "+") {
//             btnSelected = 0 + e.key
//             clickedNumb = false;
//             clickedDec = true;
//             clickedOperator = true;
//             clickedEval = false;
//             clickedBackSpace = true;
//             resultScreen.textContent = btnSelected
//         } else if (clickedEval && !clickedNumb && !clickedDec) {
//             btnSelected += e.key
//             clickedNumb = false;
//             clickedDec = true;
//             clickedOperator = true;
//             clickedEval = false;
//             clickedBackSpace = true
//             resultScreen.textContent = btnSelected
//         } else if (clickedNumb) {
//             btnSelected = eval(btnSelected)
//             btnSelected += e.key
//             if (btnSelected === "NaN" + e.key || btnSelected === "Infinity" + e.key) {                       // Need to solve how to replace operator afte backspace !!!!!!!!!!!
//                 clickedNumb = false
//                 clickedDec = false
//                 clickedOperator = false
//                 clickedEval = false
//                 clickedBackSpace = false
//                 btnSelected = ""
//                 resultScreen.textContent = btnSelected
//             }
//             clickedNumb = false;
//             clickedDec = true;
//             clickedOperator = true;
//             clickedEval = false;
//             clickedBackSpace = true;
//             resultScreen.textContent = btnSelected
//         }
//         else if (clickedOperator) {
//             var splitStr = btnSelected.split("");
//             var splitArr = Array.from(splitStr);
//             splitArr.splice(-1, 1, e.key);
//             btnSelected = splitArr.join("");
//             resultScreen.textContent = btnSelected;

//         }
//     } else if (e.key === ".") {                                                                                                             // decimal keydown
//         if (clickedEval && !clickedOperator && !clickedNumb && !clickedDec) {
//             btnSelected = 0 + e.key
//             clickedNumb = false;
//             clickedDec = true;
//             clickedOperator = true;
//             clickedEval = false;
//             clickedBackSpace = false;
//             resultScreen.textContent = btnSelected
//         } else if (!clickedDec && !clickedOperator) {      //Solved (was binary/decimal problem) // Need to solve bug where after numerous click on . eval gives abnormal number !!!!!!!!!!
//             btnSelected += e.key;
//             clickedNumb = false;
//             clickedDec = true;
//             clickedOperator = false;
//             clickedEval = false;
//             clickedBackSpace = false
//             resultScreen.textContent = btnSelected;
//         }
//     }
//     else if (e.key === "Enter") {                                                                                                         // evaluate keydown
//         if (!clickedEval && clickedNumb && !clickedOperator) {
//             e.preventDefault();
//             btnSelected = Math.round((eval(btnSelected)) * 100) / 100
//             if (isNaN(btnSelected) || btnSelected === Infinity) {
//                 clickedNumb = false
//                 clickedDec = false
//                 clickedOperator = false
//                 clickedEval = false
//                 clickedBackSpace = false
//                 btnSelected = ""
//                 resultScreen.textContent = btnSelected
//             }
//             clickedNumb = false
//             clickedDec = false
//             clickedOperator = false
//             clickedBackSpace = true
//             clickedEval = true
//             var evalSymbol = "="
//             resultScreen.textContent = evalSymbol + btnSelected
//         }
//         // else if (clickedEval) {
//         //     btnSelected = Math.pow(btnSelected, 2)
//         //     resultScreen.textContent = btnSelected
//         // }
//     }
//     else if (e.key === "Backspace") {                                                                                               // Keydown backspace
//         var splitStr = btnSelected.split("");
//         var splitArr = Array.from(splitStr);
//         var checkLast = splitArr.splice(-1, 1);
//         if (isNaN(checkLast)) {
//             return
//         } else {
//             btnSelected = splitArr.join("");
//             resultScreen.textContent = btnSelected;
//         }
//     }
//     else if (e.key === "Escape") {                                                                                                     // Keydown Escape
//         clickedNumb = false
//         clickedDec = false
//         clickedOperator = false
//         clickedEval = false
//         btnSelected = ""
//         resultScreen.textContent = btnSelected
//     }
// });

