// NASA API
const count = 10;
const apiKey = "05Y3yviP5QolU5q3aV4J1zvSOxAd2ASBnDN8odhI";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 images from NASA API
async function getNasaPictures() {
	try {
		const response = await fetch(apiUrl);
		resultsArray = await response.json();
		console.log(resultsArray);
	} catch (error) {
		// Catch error here
		console.log(error);
	}
}

// On Load
getNasaPictures();
