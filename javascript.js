                                                            //                          Click variables                 //
var clickedNumb = false;
var clickedDec = false;
var clickedOperator = false;
var clickedEval = false;
var clickedBackSpace = false

                                                        //                          Selected Numbers click                    //

var btnSelected = "";
var resultScreen = document.querySelector(".result-screen");
var numberClick = document.querySelectorAll(".number");

numberClick.forEach(key => key.addEventListener('click', function (e) {
    btnSelected += e.target.innerHTML
    resultScreen.textContent = btnSelected
}))

                                                        //                      Selected Operators  click                //

var operatorClick = document.querySelectorAll(".operator")

operatorClick.forEach(key => key.addEventListener('click', function (e) {
    btnSelected = eval(btnSelected)
    btnSelected += e.target.attributes.alt.nodeValue
    resultScreen.textContent = btnSelected
}))

                                                            //                      Select decimal  click              //

var decimal = document.querySelectorAll(".btn-5")

decimal.forEach(key => key.addEventListener('click', function (e) {
    btnSelected += e.target.innerHTML
    resultScreen.textContent = btnSelected
}))

                                                            //                      Evaluate button   click              //

var btnEvaluate = document.querySelector(".evaluate")

btnEvaluate.addEventListener("click", function (e) {
    btnSelected = eval(btnSelected)
    resultScreen.textContent = Math.round(btnSelected * 100) / 100
    btnSelected = ""
})

                                                                        //                  Backspace               //

var backSpace = document.querySelector(".btn-3")
backSpace.addEventListener("click", function (e) {
    console.log(e)
    if (!clickedBackSpace) {
        var splitStr = btnSelected.split("");
        var splitArr = Array.from(splitStr);
        splitArr.splice(-1, 1);
        btnSelected = splitArr.join("");
        resultScreen.textContent = btnSelected;
    }
});

                                                            //                      Select clear button click            //

var btnClear = document.querySelector(".btn-4")

btnClear.addEventListener("click", function (e) {
    clickedNumb = false
    clickedDec = false
    clickedOperator = false
    clickedEval = false
    btnSelected = ""
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
            if (btnSelected === "NaN" + e.key || btnSelected === "Infinity" + e.key) {
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
            console.log("decimal")
        } else if (!clickedDec && !clickedOperator) {
            btnSelected += e.key;
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = false;
            clickedEval = false;
            clickedBackSpace = false
            resultScreen.textContent = btnSelected;
            console.log("decimal")
        }
    }
    else if (e.key === "Enter") {                                                                                                         // evaluate keydown
        if (!clickedEval && clickedNumb && !clickedOperator) {
            e.preventDefault();
            console.log(btnSelected)
            console.log(typeof (btnSelected))
            btnSelected = Math.round((eval(btnSelected)) * 100) / 100
            console.log(btnSelected)
            console.log(typeof (btnSelected))
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
            resultScreen.textContent = "="+btnSelected
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
        console.log(checkLast)
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