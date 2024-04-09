/**
 * Data Catalog Project - KENNY PHAM
**/


// DATA
// Array of arrays containing [title, img link, price]
let titles = [
    ["BTS","https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BTS_logo_%282017%29.png/600px-BTS_logo_%282017%29.png?20180426223105", 250],
    ["TWICE", "https://i.pinimg.com/originals/35/70/51/357051d292c92266ecbe9274052b0814.png", 150],
    ["NEWJEANS", "https://i.pinimg.com/736x/4c/d0/41/4cd041f49b56d42467e6f8c1bdd79bed.jpg", 175], 
    ["LE SSERAFIM", "https://content.momentica.com/1526a225-1a8e-47c8-85c9-0632cce7399e", 200],
    ["Stray Kids", "https://i.redd.it/zs0inteh4sc71.jpg", 100],
    ["IVE", "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ive_Logo.jpg", 150]
];

let deleted = []; //keeps track of removed cards to redisplay later


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {

        //scaled code
        let title = titles[i][0];
        let imageURL = "";
        imageURL = titles[i][1];
        let price =  titles[i][2];
        
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, price);
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
    
}

// added a price parameter
function editCardContent(card, newTitle, newImageURL, price) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const cardPrice = card.querySelector(".price");
    cardPrice.textContent = "Starting at $" + price;
}

document.addEventListener("DOMContentLoaded", showCards);

function priceSort1() {
    let temp = [];
    for (let i = 0; i < titles.length; i++){
        temp.push(titles[i]);
    }
    let alphabetical = titles;
    alphabetical.sort((a, b) => b[2] - a[2]); //sorts array by the third element of price (high to low)
    titles = alphabetical;
    showCards();
    for (let i = 0; i < titles.length; i++){
        titles[i] = temp[i];
    }
}

function priceSort2() {
    let temp = [];
    for (let i = 0; i < titles.length; i++){
        temp.push(titles[i]);
    }
    let alphabetical = titles;
    alphabetical.sort((a, b) => a[2] - b[2]); //sorts array by the third element of price (low to high)
    titles = alphabetical;
    showCards();
    for (let i = 0; i < titles.length; i++){
        titles[i] = temp[i];
    }
}

function removeLastCard() {
    deleted.push(titles[titles.length - 1]);
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function alphabeticalOrder() {
    let temp = [];
    for (let i = 0; i < titles.length; i++){
        temp.push(titles[i]);
    }
    let alphabetical = titles;
    alphabetical = alphabetical.sort((a, b) => a[0].localeCompare(b[0])); //sorts the array alphabetically by first element of name
    titles = alphabetical;
    showCards();
    for (let i = 0; i < titles.length; i++){
        titles[i] = temp[i];
    }
}

function addCard(){ // adds a new card to the page
    // group example name: Aespa
    // link ex: https://i.pinimg.com/474x/14/7b/36/147b36a3860593605909d896ca023a92.jpg
    let group = prompt("Enter a Group Name");
    let link = prompt("Enter a link for their photo");
    let price = prompt("Enter a starting ticket price");
    titles.push([group, link, price]);
    showCards();
}

//revert card container back to original state
function revert(){
    while (titles.length > 6){
        titles.pop();
    }
    for (let i = 0; i < titles.length + 1; i++) {
        if (titles.length != 6){
            titles.push(deleted[deleted.length-1-i]);
        } else {
            deleted = [];
            break;
        }
    }
    showCards();
}

let names = [];
function titleName(){
    names = [];
    for (let i = 0; i < titles.length; i++){
        names.push(titles[i][0]);
    }
}


//Search Bar
const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    //console.log(value);
    const cardContainer = document.getElementById("card-container");
    const cards = cardContainer.children; // Get all card elements
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardTitle = card.querySelector("h2").textContent.toLowerCase(); // Get the text content of h2
        const isVisible = cardTitle.includes(value);
        if (!isVisible) {
            card.style.display = "none"; // Hide the card by setting display to none
        } else {
            card.style.display = ""; // Show the card by removing inline style (or you can set it to "block" if necessary)
        }
    }
});