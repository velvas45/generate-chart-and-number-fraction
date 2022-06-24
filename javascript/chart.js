const btnGenerate = document.querySelector("#generate-btn");
const inputTag = document.querySelector("#input-chart");
let isStart = false;

btnGenerate.addEventListener("click", onClick, false);

let intervalGenerateChart;

function startGenerateChart(func, time) {
  intervalGenerateChart = setInterval(func, time);
}

function endGenerateChart() {
  clearInterval(intervalGenerateChart);
}

function onClick() {
  isStart = !isStart;

  if (isStart) {
    generateChart(inputTag.value);
    startGenerateChart(() => generateChart(inputTag.value), 3000);
    btnGenerate.textContent = "Stop";
    inputTag.setAttribute("readonly", true);
  } else {
    inputTag.removeAttribute("readonly");
    endGenerateChart();
    btnGenerate.textContent = "Generate";
  }
}

function generateChart(valueInput) {
  const chartItemsTag = document.querySelector(".chart-items");
  const regex_valid_number = new RegExp("^\\d+$");
  const existsChartItem = document.querySelector(".chart-item");

  if (existsChartItem) chartItemsTag.innerHTML = "";

  if (
    !regex_valid_number.test(valueInput) ||
    valueInput.trim() === "" ||
    !valueInput ||
    valueInput === 0
  )
    return;

  for (let index = 1; index <= valueInput; index++) {
    const divEl = document.createElement("span");
    const randomValue = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    divEl.textContent = randomValue;
    divEl.setAttribute(
      "style",
      `height:${randomValue}px; line-height:${randomValue}px`
    );
    divEl.classList.add("chart-item");
    divEl.classList.add(checkColor(randomValue));

    chartItemsTag.appendChild(divEl);
  }
}

function checkColor(val) {
  if (val >= 0 && val <= 25) {
    return "green";
  } else if (val > 25 && val <= 50) {
    return "yellow";
  } else if (val > 50 && val <= 75) {
    return "red";
  }

  return "blue";
}
