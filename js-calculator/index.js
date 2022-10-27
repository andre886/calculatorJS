var numberAdd = document.querySelector("#num")
var result = document.querySelector("#end")

window.addEventListener('keypress', (ev) => {
    if (!window.isNaN(ev.key)){
        add(ev.key)
    } else {
        if ([...'/*-+'].includes(ev.key)) {
            addSign(ev.key)
        } if (ev.key == 'Enter' || ev.key == '=') {
            calculate()
        } if (ev.key == 'c') {
            cleanse()
        }
    }7
})
window.addEventListener('keydown', (ev) => {
    if (ev.key == 'Backspace') {
        cleanse()
    }
})

function add(number) {
    numberAdd.innerHTML = numberAdd.innerHTML + number
}

function addSign(sign) {
    const lastDigit = numberAdd.innerHTML.slice(-1)
    if (!window.isNaN(lastDigit)) {
        numberAdd.innerHTML += sign
    }
}

function calculate() {
    const numberValue = numberAdd.innerHTML
    const calculatedValue = eval(numberValue)
    result.innerHTML = calculatedValue
}

function cleanse() {
    numberAdd.innerHTML = ''
    result.innerHTML = ''
}
