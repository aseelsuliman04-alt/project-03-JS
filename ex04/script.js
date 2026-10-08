const shows = [
    "Attack on Titan",
    "Monster",
    "Dororo",
    "Jujutsu Kaisen",
    "Demon Slayer"
];

const listElement = document.getElementById("watchlist");

for (let i = 0; i < shows.length; i++) {
    
    const listItem = document.createElement("li");
    
    listItem.textContent = shows[i];
    
    listElement.appendChild(listItem);
}