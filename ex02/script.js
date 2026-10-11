const magicBtn = document.getElementById("magic-btn");

magicBtn.addEventListener("click", function() {
    
    const titleElement = document.getElementById("main-title");
    titleElement.textContent = "Welcome to the Live DOM!";
    titleElement.style.color = "blue";

    const paragraphElement = document.querySelector(".description");
    paragraphElement.textContent = "This text was magically changed and styled by JavaScript!";
    paragraphElement.classList.add("active"); 
});