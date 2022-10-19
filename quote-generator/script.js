let apiQuotes = [];

// Show new quote
function newQuote() {
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

	// Display new quote - variables
	let quoteText = document.getElementById("quote");
	let quoteAuthor = document.getElementById("author");
	let quoteButton = document.getElementById("new-quote");

	// Display new quote - loop and event listener
	quoteButton.addEventListener("click", (e) => {
		quoteText.innerText = quote["text"];
		quoteAuthor.innerText = quote["author"];
	});
}

// Get quotes from API
async function getQuotes() {
	// Quote source
	const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch error here
	}
}

// On Load
getQuotes();
