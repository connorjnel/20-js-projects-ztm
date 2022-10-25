// I am aware key should not be public, free API key, would prefer hosting it on private server
const voiceAPI = "a691cf59f4ee46e0bc64e0c8d648fb52";
const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Disable / Enable Button
function toggleButton() {
	button.disabled = !button.disabled; // Cool way to use not to invert bool value
}

// Passing joke to VoiceRSS API
function tellJoke(joke) {
	VoiceRSS.speech({
		key: voiceAPI,
		src: joke,
		hl: "en-us",
		v: "John",
		r: 0,
		c: "mp3",
		f: "44khz_16bit_stereo",
		ssml: false,
	});
}

// Get jokes from JokeAPI
async function getJokes() {
	let joke = "";
	const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		if (data.setup) {
			joke = `${data.setup} ... ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		// Text-to-speech
		tellJoke(joke);
		// Disable button
		toggleButton();
	} catch (error) {
		// Catch and display error
		console.log("You messed up: \n", error);
	}
}

// Tell me a joke button - event listener
button.addEventListener("click", getJokes);

// Disable button while audio plays - event listener
// Button disabled by getJokes, then enabled when listener fires for ended when audio stops
audioElement.addEventListener("ended", toggleButton);
