const metricButton = document.getElementById('Metric');
const ImperialButton = document.getElementById("Imperial");
const ImperialInput = document.querySelector(".section__calc-form--imperial")

console.log (ImperialButton)

function inputCheck () {
  if (ImperialButton.checked) {
    console.log("working");
    ImperialInput.classList.remove(".hide");
  }
}

inputCheck();
