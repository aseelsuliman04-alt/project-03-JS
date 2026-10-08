const titleElement = document.getElementById("main-title");

const paragraphElement = document.querySelector(".description");

titleElement.textContent = "Welcome to the Live DOM!";
paragraphElement.textContent = "This text was magically changed and styled by JavaScript!";

titleElement.style.color = "blue";
titleElement.style.textAlign = "center";

paragraphElement.classList.add("active");