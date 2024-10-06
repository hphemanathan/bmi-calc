const metricButton = document.getElementById('Metric');
const ImperialButton = document.getElementById("Imperial");
const MetricInput = document.querySelector(".section__calc-form--metric");
const ImperialInput = document.querySelector(".section__calc-form--imperial")
const metricHeight = document.getElementById("metricHeight");
const metricWeight = document.getElementById("metricWeight");
const metricValue = document.querySelectorAll("#metricValue");

const imperialValue = document.querySelectorAll("#imperial");


const defaultResult = document.querySelector(".section__calc--result-default");
const bmiResult = document.querySelector(".section__calc--result-wrapper");
const bmiResultNumber = document.querySelector(".section__calc--result-number");
const bmiResultType = document.querySelector(".section__calc--result-output span");
const bmiWeightRange = document.querySelector(".section__calc--result-output .weightRange");

// console.log (bmiWeightRange);

console.log (imperialValue);

console.log (bmiWeightRange);





const merticHeightInput = metricValue[0];
const metricWeightInput = metricValue[1];

const imperialHeightFt = imperialValue[0]
const imperialHeightIn = imperialValue[1];
const imperialWeightSt = imperialValue[2];
const imperialWeightLbs = imperialValue[3];




  // (18.5) * ((Number(merticHeightInput.value / 100) * Number(merticHeightInput.value / 100)));

function handleBmiMetric () {
  if (merticHeightInput.value && metricWeightInput.value) {
    const result = (
      metricWeightInput.value /
      (Number(merticHeightInput.value / 100) * Number(merticHeightInput.value / 100))
    ).toFixed(1);
    bmiResult.classList.remove("hide");
    defaultResult.classList.add("hide");
 


  // (18.5) * ((Number(height.value / 100) * Number(height.value / 100)));

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
const bmiWeightRangeStart =
  18.5 * ((Number(merticHeightInput.value / 100) * Number(merticHeightInput.value / 100))).toFixed(1);


const bmiWeightRangeEnd =
  24.9 * (Number(merticHeightInput.value / 100) * Number(merticHeightInput.value / 100)).toFixed(1);



bmiWeightRange.textContent =`${bmiWeightRangeStart}kgs - ${bmiWeightRangeEnd}kgs.`



// const defaultResultClass = defaultResult;
// // console.log(defaultResultClasss);

// function imperialCheckAfterResult (){
// console.log(defaultResultClass);
// defaultResultClass.classList.remove("hide");
// }



// ImperialButton.addEventListener("click", imperialCheckAfterResult);

}

}

function handleBmiImperial () {
  if (imperialHeightFt.value && imperialHeightIn.value && imperialWeightSt.value && imperialWeightLbs.value) {
    
    const pounds = (imperialWeightSt.value * 14) + Number(imperialWeightLbs.value)
    // console.log(pounds);

    const inches = (imperialHeightFt.value * 12) + Number(imperialHeightIn.value)
    // console.log(inches)

    const result = (703 * ((pounds) / (inches * inches))).toFixed(1);

    bmiResult.classList.remove("hide");
    defaultResult.classList.add("hide");

    bmiResultNumber.textContent = result;

    // console.log(BMI);

      if (result < 18.5) {
        bmiResultType.textContent = "under weight";
      } else if (result >= 18.5  && result <= 24.9 ) {
        bmiResultType.textContent = "healthy weight";
      } else if (result >= 25  && result <= 29.9 ) {
        bmiResultType.textContent = "overweight";
      } else if (result >= 30 ) {
        bmiResultType.textContent = "obese";
      }

      const bmiWeightRangeStart =
  ((18.5 * ((Number(merticHeightInput.value / 100) * Number(merticHeightInput.value / 100))))*2.205).toFixed(1);


const bmiWeightRangeEnd =
  ((24.9 * (Number(merticHeightInput.value / 100) * Number(merticHeightInput.value / 100)))*2.205).toFixed(1);



bmiWeightRange.textContent =`${bmiWeightRangeStart}lbs - ${bmiWeightRangeEnd}lbs.`

console.log(bmiWeightRange);
      
    
  }


}
const bmiWeightRangeStart =
  18.5 * ((Number(height.value / 100) * Number(height.value / 100))).toFixed(1);
console.log(bmiWeightRangeStart);

bmiWeightRange.textContent = bmiWeightRangeStart;


metricValue.forEach((input) => input.addEventListener("input", handleBmiMetric));

imperialValue.forEach((input) => input.addEventListener("input", handleBmiImperial));

// bmiWeightRange.textContent =  )
  }
}
metricValue.forEach(input => input.addEventListener ("input", handleBmi));




 function imperialCheck() {
  MetricInput.classList.add('hide')
  ImperialInput.classList.remove('hide');
  bmiResult.classList.add("hide");
  defaultResult.classList.remove("hide");



  

 }

function MetricCheck() {
  MetricInput.classList.remove("hide");
  ImperialInput.classList.add("hide");

}

ImperialButton.addEventListener("click", imperialCheck);

metricButton.addEventListener("click", MetricCheck);

// console.log (defaultResult.className);

// function inputCheck () {
//   if (ImperialButton.checked) {
//     console.log("working");
//     ImperialInput.classList.remove(".hide");
//   }
// }

// inputCheck();
