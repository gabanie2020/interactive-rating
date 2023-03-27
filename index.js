const mainBox = document.querySelectorAll('.main-box')
const Thankyou = document.querySelectorAll(".Thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll("btn")

submitButton.addEventListener("click", () => {
  Thankyou.classList.remove("hidden")
  mainBox.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    Thankyou.classList.add("hidden")
    mainBox.style.display = "block"
  })

  rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        console.log(rate.innerHTML)
    } )
  })