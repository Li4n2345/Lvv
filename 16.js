let h1 = document.getElementById('title');
let input = document.getElementById('num');
let value = 0;

function add() {
  if (Number(input.value) <= 0) {
    alert("Error, can't use negative numbers");
    
  } else {
    value = value + Number(input.value);
    h1.innerHTML = value;
  }
}