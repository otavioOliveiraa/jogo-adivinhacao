// variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
console.log(randomNumber)

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick) // jogar novamente
document.addEventListener('keypress', handleEnterClick) // button on Enter

// Function callbacks
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  const inputValue = Number(inputNumber.value)
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${xAttempts} tentativas!`
  }

// se - input não for número || menor que 0 || maior que 10
  if (isNaN(inputValue) || inputValue < 0 || inputValue > 10) {
    alert(`Digite apenas os números entre 0 e 10!!`)
    xAttempts-- // ignora a contagem quando essa condição for true
  }

  // 
  if (inputNumber.value == "" && document.getElementById("btnTry").click) {
    xAttempts-- // Desativa a contagem das tentativas se o butão de tentar 
  }
  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  location.reload() // or let randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleEnterClick(e) {
  
  // quando apertar o enter e se o .screen1 estiver com o .hide execulte o seguinte código
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    console.log(e.key)
    handleResetClick()
  }
}
