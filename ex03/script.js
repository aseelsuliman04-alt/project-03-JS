let count = 0; 

const valueElement = document.getElementById("counter-value");
const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");

function updateDisplay() {
    valueElement.textContent = count;
    
    if (count > 0) {
        valueElement.style.color = "green";
    } else if (count < 0) {
        valueElement.style.color = "red";
    } else {
        valueElement.style.color = "black";
    }
}

btnIncrease.addEventListener("click", function() {
    count = count + 1;
    updateDisplay();
});

btnDecrease.addEventListener("click", function() {
    count = count - 1;
    updateDisplay();
});

btnReset.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});