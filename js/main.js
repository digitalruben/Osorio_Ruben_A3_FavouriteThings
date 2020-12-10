import { fetchData } from "./modules/theDataMiner.js";

(() => {

    function displayData(data) {
        let userSection = document.querySelector('.favThingsContainer'),
            userTemplate = document.querySelector('#favThings').content;

        for (let user in data) {
            let currentFavourite = userTemplate.cloneNode(true),
                currentFavouriteText = currentFavourite.querySelector('.thing').children;
            
            currentFavouriteText[1].textContent = data[user].title;
            currentFavouriteText[2].src = `images/${data[user].image}`;
            currentFavouriteText[3].textContent = data[user].description;

            // add this new user to the view
            userSection.appendChild(currentFavourite);
        }
    }

    function ErrorMsg (message) {
        alert("Check your data. Something has gone wrong.");
    }

    fetchData('./includes/functions.php')
    .then(data => 
        console.log(data))
    .catch((err => {
        console.log(err);  
    }))

    fetchData("./includes/functions.php").then(data => displayData(data)).catch(err => { console.log(err); ErrorMsg(err); });
})();