const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "XLpn4O1O8gthlT4rTPxTem9Of9ivY0I2YCenZ6UxZ9k";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for links and photo, add to DOM
function displayPhotos() {
	// Run function for each object in photosArray
	photosArray.forEach((photo) => {
		// Create <a> to link to unsplash
		const item = document.createElement("a");
		item.setAttribute("href", photo.links.html);
		item.setAttribute("target", "_blank");

		//  Create <img> for photo
		const img = document.createElement("img");
		img.setAttribute("src", photo.urls.regular);
		// Check if image has alt, if not use unknown
		if (photo.description != null) {
			img.setAttribute("alt", photo.description);
			img.setAttribute("title", photo.description);
		} else {
			img.setAttribute("alt", "Unknown");
			img.setAttribute("title", "Unknown");
		}

		// Put <img> inside <a>, then put both inside image container
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

// Get photos from Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		console.log(photosArray);
		displayPhotos();
	} catch (error) {
		// Catch error here
	}
}

// On load
getPhotos();
