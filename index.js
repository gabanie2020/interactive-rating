const mainBox = document.querySelector('.main-box')
const ThankyouContainer = document.querySelector(".Thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
  ThankyouContainer.classList.remove ("hidden")
  mainBox.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    ThankyouContainer.classList.add("hidden")
    mainBox.style.display = "block"
  })

  rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML 
    } )
  })