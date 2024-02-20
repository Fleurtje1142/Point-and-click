document.getElementById("mainTitle").innerText = "Point and Click adventure game";

//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Inventory
let inventory = [];
console.log(inventory);
const inventoryList = document.getElementById("inventoryList");
//Main Character
const mainCharacter = document.getElementById("hero");
const offsetCharacter = 16;
const tree1 = document.getElementById("squareTree");


gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    
    if (e.target.id !== "heroImage") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }
    
    switch (e.target.id) {
        case "squareTree":
            tree1.style.opacity = 0.5;
        case "key":
                getItem("Rusty key", "rustKey");
            break;
            case "well":
                getItem("Coin", "coin");
            break;
            case "doorWizardHut":
                if(checkItem("Rusty key")){
                    console.log("I opend the dor. Yeah!")
                }else if(checkItem("Coin")){
                    removeItem("Coin", "coin")
                    console.log("Oh no i lost het coin and I didn't open the door... I feel kinda stupid!")
                }else{
                    console.log("Fuck the door is locked. I don't have the key!")
                }
            break;
        default:
            break;
    }
    /**
     * checks if the value exists within the array 
     * if not then it adds value to the array and use showItem function
     * @param {string} itemName 
     * @param {string} itemId 
     */

    function getItem(itemName, itemId){
        if(!checkItem(itemName)){
            inventory.push(itemName); 
            showItem(itemName, itemId);
        }
        console.log(inventory);
       
    }

    function checkItem(itemName){
        return inventory.includes(itemName);
    }

    /**
     * needs name for displaying item and a html idname
     * @param {string} itemName 
     * @param {string} itemId 
     */

    function showItem(itemName, itemId){
        console.log('You\'ve found a '+itemName + '!');
        const keyElement = document.createElement("li");
        keyElement.id = itemId;
        keyElement.innerText = itemName;
        inventoryList.appendChild(keyElement);

    }
    /**
     * 
     * @param {string} itemName 
     * @param {string*} itemId 
     */

    function removeItem(itemName, itemId){
        //remove item in array
        inventory = inventory.filter(function(newInventory){
            return newInventory !== itemName;
        });
    
    document.getElementById(itemId).remove();
    }


}