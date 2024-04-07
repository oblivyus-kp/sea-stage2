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
const TWICE_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logo_of_TWICE.svg/1200px-Logo_of_TWICE.svg.png";
const NEWJEANS_URL = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39bb76f9-7802-420d-85a9-bda352c5568f/dgo2prq-c334e8d1-622b-4f24-afe9-c9f9aa059f07.png/v1/fill/w_894,h_894/new_jeans_logo_test_by_akumazuu_dgo2prq-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzM5YmI3NmY5LTc4MDItNDIwZC04NWE5LWJkYTM1MmM1NTY4ZlwvZGdvMnBycS1jMzM0ZThkMS02MjJiLTRmMjQtYWZlOS1jOWY5YWEwNTlmMDcucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.g2_PJ0TcoYJxGyn_gi6MZeOFHQ10PoAIvGzoTZjUwBE";
const LESS_URL = "https://content.momentica.com/1526a225-1a8e-47c8-85c9-0632cce7399e";

// This is an array of strings 
let titles = [
    "BTS",
    "TWICE",
    "NEWJEANS", 
    "LE SSERAFIM"
];


// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = BTS_URL;
        } else if (i == 1) {
            imageURL = TWICE_URL;
        } else if (i == 2) {
            imageURL = NEWJEANS_URL;
        } else if (i == 3) {
            imageURL = LESS_URL;
        }
        
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
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
