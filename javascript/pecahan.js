const submitBtn = document.querySelector("#generate-btn");

submitBtn.addEventListener("click", pecahanBilangan, false);

function pecahanBilangan(e) {
  e.preventDefault();
  const value = document.querySelector("#input-pecahan").value;
  const regex_valid_number = new RegExp("^\\d+$");
  let convertValue = value.toString();
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

  const lengthNominal = convertValue.length;

  // looping untuk pembagian pecahan
  for (let index = 1; index <= lengthNominal; index++) {
    // Membuat dom tag element untuk wadah nilai yg akan di tampilkan
    const spanListEl = document.createElement("span");
    spanListEl.id = `list-${index + 1}`;
    spanListEl.classList.add("list");

    // melakukan perhitungan aritmatika
    // pengambilan nilai pecahan dan nilai pengurang untuk mendapatkan pecahan yang di inginkan
    let nilai_pengurang = convertValue.substr(1) || 0;
    let pecahan_nilai = +convertValue - +nilai_pengurang;
    convertValue = convertValue.substr(1);

    // memasukan nilai kedalam tag element html
    spanListEl.textContent = +pecahan_nilai;

    // menambahkan tag tersebut kedalam element list
    listTag.appendChild(spanListEl);
  }

  // const valuePerSatuan = convertValue.split("");

  // valuePerSatuan.forEach((each, idx) => {
  //   const spanListEl = document.createElement("span");
  //   spanListEl.id = `list-${idx + 1}`;
  //   spanListEl.classList.add("list");
  //   const valuePengali = `1${"0".repeat(valuePerSatuan.length - 1 - idx)}`;
  //   const contentValue = each * +valuePengali;

  //   spanListEl.textContent = contentValue;

  //   listTag.appendChild(spanListEl);
  // });
}
