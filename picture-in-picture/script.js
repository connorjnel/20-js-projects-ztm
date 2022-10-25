const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select media screen, pass to video element, then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		// Catch Error Here
		console.log(`Ya, you messed up:\n`, error);
	}
}

// Button toggle
function buttonToggle() {
	button.innerText = "ACTIVE";
	button.classList.add("active");
}

// Button click listener for PIP
button.addEventListener("click", async () => {
	buttonToggle();
	//Disable button
	button.disabled = true;
	// Start picture in picture
	await videoElement.requestPictureInPicture();
	// Reset button
	button.disabled = false;
});

//On Load
selectMediaStream();
