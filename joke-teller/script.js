const voiceAPI = "a691cf59f4ee46e0bc64e0c8d648fb52";
const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

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
		console.log(joke);
		tellJoke(joke);
	} catch (error) {
		// Catch and display error
		console.log("You messed up: \n", error);
	}
}

//Tell me a joke button
button.addEventListener("click", getJokes);
