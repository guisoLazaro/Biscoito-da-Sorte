//variáveis e constantes

const container1 = document.querySelector(".container1")
const container2 = document.querySelector(".container2")
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const btn = document.querySelector("button")
const phrases = ["Você será um ótimo programador!", "Você vai arrumar um novo amor!", "Prepare-se, uma viagem linda está para acontecer!"]
let cont = 0

//eventos
img1.addEventListener('click', toggleScreen)
btn.addEventListener('click', sortedList)
document.addEventListener('keydown', handleKeyClick)

//funções
function handleKeyClick (e) {
  if (e.key == 'Enter' && container2.classList.contains('hide')) {
    toggleScreen()
  }else if (e.key == 'Enter' && container1.classList.contains('hide')) {
    sortedList()
  }
}

function sortedList() {
  if (cont > 2) {
    document.querySelector("#elementSorted").innerText = 'Seus biscoitos da sorte acabaram!'
  } else {
    document.querySelector("#elementSorted").innerText = phrases[cont]
    toggleScreen()
  }
    cont++
}


function toggleScreen() {
  container1.classList.toggle('hide')
  container2.classList.toggle('hide')
}
