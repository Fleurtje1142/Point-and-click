document.getElementById("mainTitle").innerText = "Point and Click adventure game";

//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Inventory
const inventoryList = document.getElementById("inventoryList");
//Main Character
const mainCharacter = document.getElementById("hero");
const offsetCharacter = 16;
const tree1 = document.getElementById("squareTree");
gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    //FIX: character doesn't animate on first click
    //FIX: character can go out of bounds when clicking on itself
    //TODO: calc offset based on character size
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    switch (e.target.id) {
        case "squareTree":
            tree1.style.opacity = 0.5;
        case "key":
            console.log('You\'ve found a key!');
            document.getElementById("key").remove();
            const keyElement = document.createElement("li");
            keyElement.id = "inv-key";
            keyElement.innerText = "key";
            inventoryList.appendChild(keyElement);
            break;
        default:
            tree1.style.opacity = 1;
    }
}