const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#img1")
const button = document.querySelector("#button")
const phraseP = document.querySelector("#screen2-p")
const phrasesList = [
    "Se a vida te der um limão, faça uma caipirinha.",
    "Você sempre será a sua melhor companhia!",
    "A vida trará coisas boas se tiver paciência.",
    "A maior de todas as torres começa no solo.",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "Todas as coisas são difíceis antes de se tornarem fáceis.",
    "A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.",
    "Você sempre será a sua melhor companhia!"
]
let randomPhrase = phrasesList[Math.floor(Math.random() * phrasesList.length)]

cookie.addEventListener("click", openCookie)
cookie.addEventListener("click", changePhrases)
button.addEventListener("click", openAnotherCookie)
document.addEventListener("keydown", openAnotherCookieWithEnter)

function openCookie () {
    changeScreens()
}

function openAnotherCookie () {
    changeScreens()
}

function openAnotherCookieWithEnter (event) {
    if (event.key == "Enter" && screen1.classList.contains("hide")) {
        changeScreens()
    }
}

function changeScreens () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function changePhrases () {
    randomPhrase = phrasesList[Math.floor(Math.random() * phrasesList.length)]
    phraseP.innerHTML = randomPhrase
}