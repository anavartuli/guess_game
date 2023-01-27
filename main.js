// variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 0

// events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnter)

// first guess
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    xAttempts++

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

        document.querySelector(
            '.screen2 h2'
          ).innerText = `Guessed in ${xAttempts} tries!`
    }

    inputNumber.value = ""

    console.log(xAttempts)
}

// screen changes
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// return
function handleResetClick(){
    toggleScreen()
    
    xAttempts = 0
    randomNumber = Math.round(Math.random() * 10)
}

// enter key
function handleEnter(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}
