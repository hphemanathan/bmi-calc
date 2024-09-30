const metricButton = document.getElementById('Metric');
const ImperialButton = document.getElementById("Imperial");
const MetricInput = document.querySelector(".section__calc-form--metric");
const ImperialInput = document.querySelector(".section__calc-form--imperial")

const metricHeight = document.getElementById("metricHeight");

const metricWeight = document.getElementById("metricWeight");

const metricValue = document.querySelectorAll("#metricValue");

const defaultResult = document.querySelector(".section__calc--result-default");

const bmiResult = document.querySelector(".section__calc--result-wrapper");

console.log (defaultResult)
console.log (metricValue);

const height = metricValue[0];
const weight = metricValue[1];

function handleBmi () {
  if (!height.value && weight.value) {
    // console.log ('enter the height');
  } else if (!weight.value && height.value) {
    //  console.log("enter the weight");
  } else if (height.value && weight.value) {
    

    console.log(bmiResult);
    bmiResult.classList.remove("hide")
    defaultResult.classList.add("hide")
    console.log(
      (Number(weight.value) /
        (Number(height.value / 100) * Number(height.value / 100))).toFixed(1)
    );
    
  }
  
}

metricValue.forEach(input => input.addEventListener ("input", handleBmi));

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
