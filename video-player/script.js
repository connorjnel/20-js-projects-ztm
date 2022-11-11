const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.getElementById("play-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");

// Play & Pause ----------------------------------- //

function togglePlay() {
	if (video.paused) {
		video.play();
		swapPlayIcon("Play", "Pause");
	} else {
		video.pause();
		swapPlayIcon("Pause", "Play");
	}
}

function swapPlayIcon(state, alt) {
	// Added to lowercase to preserve capitalization for title
	playBtn.classList.replace(`fa-${state.toLowerCase()}`, `fa-${alt.toLowerCase()}`);
	playBtn.setAttribute("title", `${alt}`);
}

// Progress Bar ---------------------------------- //

// Volume Controls --------------------------- //

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// Event Listeners
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
