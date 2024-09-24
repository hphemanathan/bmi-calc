const metricButton = document.getElementById('Metric');
const ImperialButton = document.getElementById("Imperial");
const MetricInput = document.querySelector(".section__calc-form--metric");
const ImperialInput = document.querySelector(".section__calc-form--imperial")

console.log (ImperialButton);

function imperialCheck () {
  MetricInput.classList.add('hide')
  ImperialInput.classList.remove('hide');
}

function MetricCheck() {
  MetricInput.classList.remove("hide");
  ImperialInput.classList.add("hide");
}

ImperialButton.addEventListener("click", imperialCheck);

metricButton.addEventListener("click", MetricCheck);

// function inputCheck () {
//   if (ImperialButton.checked) {
//     console.log("working");
//     ImperialInput.classList.remove(".hide");
//   }
// }

// inputCheck();
