const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
	{
		name: "jacinto-1",
		displayName: "Electric Chill Machine",
		artist: "Jacinto",
	},
	{
		name: "jacinto-2",
		displayName: "Seven Nation Army",
		artist: "Jacinto",
	},
	{
		name: "jacinto-3",
		displayName: "Goodnight, Disco Queen",
		artist: "Jacinto",
	},
	{
		name: "metric-1",
		displayName: "Front Row",
		artist: "Jacinto / Metric",
	},
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
	isPlaying = true;
	playBtn.classList.replace("fa-play", "fa-pause");
	playBtn.setAttribute("title", "Pause");
	music.play();
}

// Pause
function pauseSong() {
	isPlaying = false;
	playBtn.classList.replace("fa-pause", "fa-play");
	playBtn.setAttribute("title", "Play");
	music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.name}.mp3`;
	image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Prev Song
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// Next Song
function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// On Load - Select first song
loadSong(songs[songIndex]);

// Update progress bar & time
function updateProgressbar(event) {
	if (isPlaying) {
		const { duration, currentTime } = event.srcElement;
		// Update progress bar width
		const progressPercent = (currentTime / duration) * 100;
		progress.style.width = `${progressPercent}%`;
		// Calculate display for duration
		const durationMinutes = Math.floor(duration / 60);
		let durationSeconds = Math.floor(duration % 60);
		if (durationSeconds < 10) {
			durationSeconds = `0${durationSeconds}`;
		}
		// Delay switching duration element to avoid Nan
		if (durationSeconds) {
			durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
		}
		// Calculate display for current time
		const currentMinutes = Math.floor(currentTime / 60);
		let currentSeconds = Math.floor(currentTime % 60);
		if (currentSeconds < 10) {
			currentSeconds = `0${currentSeconds}`;
			currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
		}
	}
}

// Set progress bar
function setProgressBar(event) {
	const width = this.clientWidth;
	const clickX = event.offsetX;
	const { duration } = music;
	music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressbar);
progressContainer.addEventListener("click", setProgressBar);