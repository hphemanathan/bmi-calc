

const metricButton = document.getElementById('Metric');
const ImperialButton = document.getElementById("Imperial");
const MetricInput = document.querySelector(".section__calc-form--metric");
const ImperialInput = document.querySelector(".section__calc-form--imperial")
// const metricHeight = document.getElementById("metricHeight");
// const metricWeight = document.getElementById("metricWeight");
const metricValue = document.querySelectorAll("#metricValue");
const imperialValue = document.querySelectorAll("#imperial");
const defaultResult = document.querySelector(".section__calc--result-default");
const bmiResult = document.querySelector(".section__calc--result-wrapper");
const bmiResultNumber = document.querySelector(".section__calc--result-number");
const bmiResultType = document.querySelector(".section__calc--result-output span");
const bmiWeightRange = document.querySelector(".section__calc--result-output .weightRange")

const merticHeightInput = metricValue[0];
const metricWeightInput = metricValue[1];

const imperialHeightFt = imperialValue[0]
const imperialHeightIn = imperialValue[1];
const imperialWeightSt = imperialValue[2];
const imperialWeightLbs = imperialValue[3];

function handleBmiMetric () {
  if (merticHeightInput.value && metricWeightInput.value) {
    const result = (
      metricWeightInput.value /
      (Number(merticHeightInput.value / 100) * Number(merticHeightInput.value / 100))
    ).toFixed(1);
    bmiResult.classList.remove("hide");
    defaultResult.classList.add("hide");
     bmiResultNumber.textContent = result;

     if (result < 18.5) {
       bmiResultType.textContent = "under weight";
     } else if (result >= 18.5 && result <= 24.9) {
       bmiResultType.textContent = "healthy weight";
     } else if (result >= 25 && result <= 29.9) {
       bmiResultType.textContent = "overweight";
     } else if (result >= 30) {
       bmiResultType.textContent = "obese";
     }
     const bmiWeightRangeStart =
       18.5 *
       (
         Number(merticHeightInput.value / 100) *
         Number(merticHeightInput.value / 100)
       ).toFixed(1);

     const bmiWeightRangeEnd =
       24.9 *
       (
         Number(merticHeightInput.value / 100) *
         Number(merticHeightInput.value / 100)
       ).toFixed(1);

     bmiWeightRange.textContent = `${bmiWeightRangeStart}kgs - ${bmiWeightRangeEnd}kgs.`;
      }
        
    }



function handleBmiImperial () {
  if (imperialHeightFt.value && imperialHeightIn.value && imperialWeightSt.value && imperialWeightLbs.value) {
    
    const pounds = (imperialWeightSt.value * 14) + Number(imperialWeightLbs.value)

    const inches = (imperialHeightFt.value * 12) + Number(imperialHeightIn.value)

    const result = (703 * ((pounds) / (inches * inches))).toFixed(1);

    bmiResult.classList.remove("hide");
    defaultResult.classList.add("hide");

    bmiResultNumber.textContent = result;

    

      if (result < 18.5) {
        bmiResultType.textContent = "under weight";
      } else if (result >= 18.5  && result <= 24.9 ) {
        bmiResultType.textContent = "healthy weight";
      } else if (result >= 25  && result <= 29.9 ) {
        bmiResultType.textContent = "overweight";
      } else if (result >= 30 ) {
        bmiResultType.textContent = "obese";
      }

      const imperialHeight = (imperialHeightFt.value * 30.4) + (imperialHeightIn.value * 2.54);
      console.log (imperialHeight);
      const bmiWeightRangeStart =
  ((18.5 * ((Number(imperialHeight / 100) * Number(imperialHeight / 100))))*2.205).toFixed(1);

const bmiWeightRangeEnd =
  ((24.9 * (Number(imperialHeight / 100) * Number(imperialHeight / 100)))*2.205).toFixed(1);

bmiWeightRange.textContent =`${bmiWeightRangeStart}lbs - ${bmiWeightRangeEnd}lbs.`

console.log(bmiWeightRangeStart);
      
    
  }


}



metricValue.forEach((input) => input.addEventListener("input", handleBmiMetric));

imperialValue.forEach((input) => input.addEventListener("input", handleBmiImperial));


 function imperialCheck() {
  MetricInput.classList.add('hide')
  ImperialInput.classList.remove('hide');
  bmiResult.classList.add("hide");
  defaultResult.classList.remove("hide");

 }

function MetricCheck() {
  MetricInput.classList.remove("hide");
  ImperialInput.classList.add("hide");
 bmiResult.classList.add("hide");
defaultResult.classList.remove("hide");


}

ImperialButton.addEventListener("click", imperialCheck);

metricButton.addEventListener("click", MetricCheck);

