let watchlist = [
    { id: 1, name: "Attack on Titan", completed: false },
    { id: 2, name: "Monster", completed: false }
];

const animeInput = document.getElementById("anime-input");
const addBtn = document.getElementById("add-btn");
const animeList = document.getElementById("anime-list");

function renderList() {
    animeList.innerHTML = "";

    watchlist.forEach(function(anime) {
        const li = document.createElement("li");
        
        if (anime.completed === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = anime.name;
        span.classList.add("item-text");
        
        span.addEventListener("click", function() {
            anime.completed = !anime.completed; 
            renderList(); 
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        
        deleteBtn.addEventListener("click", function() {
            watchlist = watchlist.filter(item => item.id !== anime.id);
            renderList();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        animeList.appendChild(li);
    });
}

addBtn.addEventListener("click", function() {
    const newItemName = animeInput.value.trim();
    
    if (newItemName !== "") {
        const newItem = {
            id: Date.now(), 
            name: newItemName,
            completed: false
        };
        
        watchlist.push(newItem); 
        animeInput.value = "";   
        renderList();           
    }
});


renderList();