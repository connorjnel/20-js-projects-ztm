const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "POIzg2QXfNnvtMuGJf9oiuREX7jccYBDuPiK9s5bhrs";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// Create elements for links and photo, add to DOM
function displayPhotos() {
	// Run function for each object in photosArray
	photosArray.forEach((photo) => {
		// Create <a> to link to unsplash
		const item = document.createElement("a");
		setAttributes(item, {
			href: photo.links.html,
			target: "_blank",
		});

		//  Create <img> for photo
		const img = document.createElement("img");
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.description,
			title: photo.description,
		});

		if (photo.description === null) {
			setAttributes(img, {
				alt: "Unknown",
				title: "Unknown",
			});
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
