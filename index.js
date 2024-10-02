const metricButton = document.getElementById('Metric');
const ImperialButton = document.getElementById("Imperial");
const MetricInput = document.querySelector(".section__calc-form--metric");
const ImperialInput = document.querySelector(".section__calc-form--imperial")
const metricHeight = document.getElementById("metricHeight");
const metricWeight = document.getElementById("metricWeight");
const metricValue = document.querySelectorAll("#metricValue");
const defaultResult = document.querySelector(".section__calc--result-default");
const bmiResult = document.querySelector(".section__calc--result-wrapper");
const bmiResultNumber = document.querySelector(".section__calc--result-number");
const bmiResultType = document.querySelector(".section__calc--result-output span");
const bmiWeightRange = document.querySelector(".section__calc--result-output .weightRange");
console.log (bmiWeightRange);


const height = metricValue[0];
const weight = metricValue[1];

function handleBmi () {
  if (height.value && weight.value) {
    const result = (
      weight.value /
      (Number(height.value / 100) * Number(height.value / 100))
    ).toFixed(1);
    bmiResult.classList.remove("hide");
    defaultResult.classList.add("hide");
    console.log(result);
    console.log(bmiResultNumber);
    bmiResultNumber.textContent = result;

    if (result < 18.5) {
      bmiResultType.textContent = "under weight";
    } else if (result >= 18.5 && result <= 24.9) {
      bmiResultType.textContent = "healthy weight";
    } else if (result >= 25 && result <= 29.9) {
      bmiResultType.textContent = "overweight";
  }else if (result >= 30) {
      bmiResultType.textContent = "obese";
}
let 
bmiWeightRange.textContent = `(18.5 * (Number(height.value / 100) * Number(height.value / 100)) )`;
  }
}
metricValue.forEach(input => input.addEventListener ("input", handleBmi));


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
