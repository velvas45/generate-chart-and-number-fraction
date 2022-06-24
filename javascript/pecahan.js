const submitBtn = document.querySelector("#generate-btn");

submitBtn.addEventListener("click", pecahanBilangan, false);

function pecahanBilangan(e) {
  e.preventDefault();
  const value = document.querySelector("#input-pecahan").value;
  const regex_valid_number = new RegExp("^\\d+$");
  const convertValue = value.toString();
  const listTag = document.querySelector("#list-tag");
  const spanExist = document.querySelector("span");

  if (spanExist) {
    listTag.innerHTML = "";
  }

  if (convertValue.includes(0) || !regex_valid_number.test(convertValue)) {
    const spanListEl = document.createElement("span");
    spanListEl.textContent = "Tidak Sesuai Kriteria";
    spanListEl.setAttribute("style", "text-align: center;");
    listTag.appendChild(spanListEl);
    return;
  }

  const valuePerSatuan = convertValue.split("");

  valuePerSatuan.forEach((each, idx) => {
    const spanListEl = document.createElement("span");
    spanListEl.id = `list-${idx + 1}`;
    spanListEl.classList.add("list");

    spanListEl.textContent = `${each}${"0".repeat(
      valuePerSatuan.length - 1 - idx
    )}`;

    listTag.appendChild(spanListEl);
  });
}
