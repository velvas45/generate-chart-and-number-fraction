const btnGenerate = document.querySelector("#generate-btn");
const inputTag = document.querySelector("#input-chart");
const chartItemsTag = document.querySelector(".chart-items");
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
  const regex_valid_number = new RegExp("^\\d+$");
  isStart = !isStart;

  if (isStart) {
    generateChart(inputTag.value);
    // checking apakah inputan sudah sesuai dengan kriteria apa blm
    if (
      !regex_valid_number.test(inputTag.value) ||
      inputTag.value.trim() === "" ||
      !inputTag.value ||
      inputTag.value === 0
    )
      return;
    startGenerateChart(() => generateChart(inputTag.value), 3000);
    btnGenerate.textContent = "Stop";
    inputTag.setAttribute("readonly", true);
  } else {
    inputTag.removeAttribute("readonly");
    endGenerateChart();
    btnGenerate.textContent = "Generate";
    // menghapus list dari dom
    if (chartItemsTag.hasChildNodes()) {
      chartItemsTag.innerHTML = "";
    }
  }
}

function generateChart(valueInput) {
  const existsChartItem = document.querySelector(".chart-item");

  if (existsChartItem) chartItemsTag.innerHTML = "";

  while (valueInput--) {
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
  // for (let index = 0; index < valueInput; index++) {
  //   const divEl = document.createElement("span");
  //   const randomValue = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  //   divEl.textContent = randomValue;
  //   divEl.setAttribute(
  //     "style",
  //     `height:${randomValue}px; line-height:${randomValue}px`
  //   );
  //   divEl.classList.add("chart-item");
  //   divEl.classList.add(checkColor(randomValue));
  //   chartItemsTag.appendChild(divEl);
  // }
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
