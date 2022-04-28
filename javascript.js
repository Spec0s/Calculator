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
//                          Selected Numbers click                    //

var btnSelected = "";
var clickedNumb = false;
var clickedDec = false;
var clickedOperator = false;
var clickedEval = false;
var resultScreen = document.querySelector(".result-screen");
var numberClick = document.querySelectorAll(".number");

numberClick.forEach(key => key.addEventListener('click', function (e) {
    btnSelected += Number(e.target.innerHTML)
    resultScreen.textContent = btnSelected
    // var btnArr=btnSelected.split("")
    // console.log(btnArr)
    // console.log(btnSelected)
    // console.log(e.target.innerHTML)
    // console.log(resultScreen.innerHTML)
    clickedNumb = false;
    clickedOperator = false
}))

//                      Selected Operators  click                //

var operatorClick = document.querySelectorAll(".operator")

operatorClick.forEach(key => key.addEventListener('click', function (e) {
    clickedDec = false
    if (!clickedNumb) {
        btnSelected = eval(btnSelected)
        btnSelected += e.target.attributes.alt.nodeValue
        resultScreen.textContent = btnSelected
        clickedNumb = true
        clickedOperator = true
    }
}))

//                      Select decimal  click              //

var decimal = document.querySelectorAll(".btn-5")

decimal.forEach(key => key.addEventListener('click', function (e) {
    if (!clickedDec) {
        btnSelected += e.target.innerHTML
        resultScreen.textContent = btnSelected
        clickedDec = true
    }
}))

//                      Evaluate button   click              //

var btnEvaluate = document.querySelector(".evaluate")

btnEvaluate.addEventListener("click", function (e) {
    if (!clickedOperator) {
        btnSelected = eval(btnSelected)
        resultScreen.textContent = Math.round(btnSelected * 100) / 100
        // resultScreen.textContent = btnSelected
        clickedNumb = true
        clickedDec = false
        clickedOperator = false
        btnSelected = ""
    }
})

//                      Keydown to use keypad           //



window.addEventListener('keypress', function (e) {
    console.log(e)
    if (!isNaN(e.key) && e.key !== " " && e.key !== undefined && e.key !== NaN) { //            number keydown
        if (clickedEval && clickedOperator) {
            if (e.repeat) { clickedDec = true }
            btnSelected += Number(e.key);
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            resultScreen.textContent = (btnSelected)
        }
        else if (clickedEval) {
            btnSelected = ""
            resultScreen.textContent = ""
            if (e.repeat) { clickedDec = true }
            btnSelected += Number(e.key)
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        } else if (clickedDec && !clickedOperator) {
            if (e.repeat) { clickedDec = true }
            btnSelected += Number(e.key)
            clickedNumb = true;
            clickedDec = true;
            clickedOperator = false;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        } else if (clickedDec && clickedOperator) {
            if (e.repeat) { clickedDec = true }
            btnSelected += Number(e.key)
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        } else {
            if (e.repeat) { clickedDec = true }
            btnSelected += Number(e.key)
            clickedNumb = true;
            clickedDec = false;
            clickedOperator = false;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        }

    }
    else if ((e.key == "*" || e.key == "/" || e.key == "+" || e.key == "-") && e.key) { //            operator keydown
        if (!clickedEval && !clickedNumb && !clickedDec && !clickedOperator && e.key !== "*" && e.key !== "/" && e.key !== "+") {
            btnSelected = 0 + e.key
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        } else if (clickedEval && !clickedNumb && !clickedDec) {
            btnSelected += e.key
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        } else if (clickedNumb) {
            btnSelected = eval(btnSelected)
            btnSelected += e.key
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        }
    } else if (e.key === ".") { //             decimal keydown
        if (clickedEval && !clickedOperator && !clickedNumb && !clickedDec) {
            btnSelected = 0 + e.key
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = true;
            clickedEval = false;
            resultScreen.textContent = btnSelected
        } else if (!clickedDec && !clickedOperator) {
            btnSelected += e.key;
            clickedNumb = false;
            clickedDec = true;
            clickedOperator = false;
            clickedEval = false;
            resultScreen.textContent = btnSelected;
        }
    }
    else if (e.key === "Enter") { //             evaluate keydown
        if (!clickedEval && clickedNumb && !clickedOperator) {
            console.log(btnSelected)
            btnSelected = Math.round((eval(btnSelected)) * 100) / 100
            console.log(btnSelected)
            clickedNumb = false
            clickedDec = false
            clickedOperator = false
            clickedEval = true
            resultScreen.textContent = btnSelected
        }
        // else if (clickedEval) {
        //     btnSelected = Math.pow(btnSelected, 2)
        //     resultScreen.textContent = btnSelected
        // }
    }
});