const myAge = document.getElementById(`date`);
const calculateButton = document.querySelector(`.age-calculate-button`);
let result = document.getElementById(`result`);

function getData() {
  result.innerHTML = localStorage.getItem(`data2`);
  myAge.innerHTML = localStorage.getItem(`data1`);
}
function saveData() {
  localStorage.setItem(`data1`, myAge.value);
  localStorage.setItem(`data2`, result.innerHTML);
}

getData();
//console.log(result);
//console.log(calculateButton);
//console.log(myAge.value);

myAge.max = new Date().toISOString().split(`T`)[0];
//console.log(myAge.max);
console.log(myAge.value === "");
console.log(myAge.value);

calculateButton.addEventListener(`click`, () => {
  if (myAge.value === "") {
    alert(`you must chose a date`);
  } else {
    let birthDate = new Date(myAge.value);

    let d1 = birthDate.getDay();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    // console.log(d1, m1, y1);
    //console.log(typeof d1);
    console.log(getDayInMonth(y1, m1));

    let today = new Date();
    let d2 = today.getDay();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    //console.log(d2, m2, y2);

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3 = y3 - 1;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3 = m3 - 1;
      d3 = getDayInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3 = y3 - 1;
    }
    console.log(y3, m3, d3);
    result.innerHTML = `you are <span>${y3}</span> years and <span>${m3}</span>months and <span>${d3}</span> days <button class="clear-button">Clear</button>`;
    myAge.value = "";

    const clearButton = document.querySelector(`.clear-button`);
    clearButton.onclick = function () {
      result.innerHTML = "";
      myAge.value = "";
      saveData();
    };
    saveData();
    //console.log(clearButton);
  }
});

function getDayInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
