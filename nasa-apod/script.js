const resultsNav = document.getElementById("resultsNav");
const favoritesNav = document.getElementById("favoritesNav");
const imagesContainer = document.querySelector(".images-container");
const saveConfirmed = document.querySelector(".save-confirmed");
const loader = document.querySelector(".loader");

// NASA API
const count = 15;
const apiKey = "05Y3yviP5QolU5q3aV4J1zvSOxAd2ASBnDN8odhI";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];
let favorites = {};

function createDOMNodes(page) {
	const currentArray = page === "results" ? resultsArray : Object.values(favorites);
	console.log("Current Array", page, currentArray);
	currentArray.forEach((result) => {
		// Card Container
		const card = document.createElement("div");
		card.classList.add("card");
		// Link
		const link = document.createElement("a");
		link.href = result.hdurl;
		link.title = "View Full Image";
		link.target = "_blank";
		// Image
		const image = document.createElement("img");
		image.src = result.url;
		image.alt = "NASA Picture of the Day";
		image.loading = "lazy";
		image.classList.add("card-img-top");
		// Card Body
		const cardBody = document.createElement("div");
		cardBody.classList.add("card-body");
		// Card Title
		const cardTitle = document.createElement("h5");
		cardTitle.classList.add("card-title");
		cardTitle.textContent = result.title;
		// Save Text
		const saveText = document.createElement("p");
		saveText.classList.add("clickable");
		saveText.textContent = "Add to Favorites";
		saveText.setAttribute("onclick", `saveFavorite('${result.url}')`);
		// Card Text
		const cardText = document.createElement("p");
		cardText.textContent = result.explanation;
		// Footer Container
		const footer = document.createElement("small");
		footer.classList.add("text-muted");
		// Date
		const date = document.createElement("strong");
		date.textContent = result.date;
		// Copyright
		const copyrightResult = result.copyright === undefined ? " NASA" : result.copyright;
		const copyright = document.createElement("span");
		copyright.textContent = ` ${copyrightResult}`;
		// Append
		footer.append(date, copyright);
		cardBody.append(cardTitle, saveText, cardText, footer);
		link.appendChild(image);
		card.append(link, cardBody);
		imagesContainer.appendChild(card);
	});
}

// Create and Populate DOM
function updateDOM(page) {
	// Get Favorites from local storage
	if (localStorage.getItem("nasaFavorites"));
	{
		favorites = JSON.parse(localStorage.getItem("nasaFavorites"));
		console.log("favorites from local", favorites);
	}
	createDOMNodes(page);
}

// Get 10 images from NASA API
async function getNasaPictures() {
	try {
		const response = await fetch(apiUrl);
		resultsArray = await response.json();
		updateDOM("favorites");
	} catch (error) {
		// Catch error here
		console.log(error);
	}
}

// Add results to favorites
function saveFavorite(itemUrl) {
	// Loop through results array to select favorite
	resultsArray.forEach((item) => {
		if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
			favorites[itemUrl] = item;
			//  Show save confirmation for 2 seconds
			saveConfirmed.hidden = false;
			setTimeout(() => {
				saveConfirmed.hidden = true;
			}, 2000);
			// Set favorites in local storage
			localStorage.setItem("nasaFavorites", JSON.stringify(favorites));
		}
	});
}

// On Load
getNasaPictures();
