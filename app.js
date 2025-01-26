const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitbtn = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let result = document.getElementById('result')
let action = '+'

function computeNumbersWithAction (inp1, inp2, actionSymbol) {
    const num1 = Number (input1.value)
    const num2 = Number (input2.value)
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
} 

plus.onclick = function () {
    action = '+'
}

minus.onclick = function () {
    action = '-'
}

function printResult (result1) {
    if (result1 > 0) {
        result.style.color = 'green'
    } else {
        result.style.color = 'red'
    }
    result.textContent = result1
}

submitbtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}




