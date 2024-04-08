/**
 * Data Catalog Project Starter Code - SEA Stage 2
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const BTS_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BTS_logo_%282017%29.png/600px-BTS_logo_%282017%29.png?20180426223105";
const TWICE_URL = "https://pbs.twimg.com/profile_images/1176061001109651456/bR9bAVY3_400x400.jpg";
const NEWJEANS_URL = "https://i.pinimg.com/736x/4c/d0/41/4cd041f49b56d42467e6f8c1bdd79bed.jpg";
const LESS_URL = "https://content.momentica.com/1526a225-1a8e-47c8-85c9-0632cce7399e";

// This is an array of strings 
// Changed to array of array containing [title, img link]
let titles = [
    ["BTS","https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BTS_logo_%282017%29.png/600px-BTS_logo_%282017%29.png?20180426223105"],
    ["TWICE", "https://pbs.twimg.com/profile_images/1176061001109651456/bR9bAVY3_400x400.jpg"],
    ["NEWJEANS", "https://i.pinimg.com/736x/4c/d0/41/4cd041f49b56d42467e6f8c1bdd79bed.jpg"], 
    ["LE SSERAFIM", "https://content.momentica.com/1526a225-1a8e-47c8-85c9-0632cce7399e"]
];

let deleted = [];

// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i][0];
        let imageURL = "";
        imageURL = titles[i][1];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.

        //original code
        /*if (i == 0) {
            imageURL = BTS_URL;
        } else if (i == 1) {
            imageURL = TWICE_URL;
        } else if (i == 2) {
            imageURL = NEWJEANS_URL;
        } else if (i == 3) {
            imageURL = LESS_URL;
        }*/
        
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
    
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("PARTY PARTY YEAH!!!!!!!");
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
    alphabetical = alphabetical.sort((a, b) => a[0].localeCompare(b[0]));
    titles = alphabetical;
    showCards();
    for (let i = 0; i < titles.length; i++){
        titles[i] = temp[i];
    }
    // for (let i = 0; i < titles.length; i++){
    //     console.log(titles[i][0]);
    // }
    // temp = [];
}

function addCard(){
    // group ex: Aespa
    // link ex: https://i.pinimg.com/474x/14/7b/36/147b36a3860593605909d896ca023a92.jpg
    let group = prompt("Enter a Group Name");
    let link = prompt("Enter a link for their photo");
    titles.push([group, link]);
    showCards();
}

//revert card container back to original state
function revert(){
    while (titles.length > 4){
        titles.pop();
    }
    for (let i = 0; i < titles.length + 1; i++) {
        if (titles.length != 4){
            titles.push(deleted[deleted.length-1-i]);
        } else {
            deleted = [];
            break;
        }
    }
    showCards();
}