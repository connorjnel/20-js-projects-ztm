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

button.addEventListener("click", () => {
	button.classList.add("active");
	button.innerText = "STOP";
});

button.addEventListener("click", async () => {
	//Disable button
	button.disabled = true;
	// Start picture in picture
	await videoElement.requestPictureInPicture();
	// Reset button
	button.disable = false;
});

//On Load
selectMediaStream();
