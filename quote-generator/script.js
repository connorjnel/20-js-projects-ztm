const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");

let apiQuotes = [];

// Show new quote
function newQuote() {
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

	// Check if author field is blank and replace with unknown if it is
	if (!quote.author) {
		quoteAuthor.textContent = "Unknown";
	} else {
		quoteAuthor.textContent = quote.author;
	}

	// Add longquote class for long quotes, check quote length to determine
	if (quote.text.length > 65) {
		quoteText.classList.add("long-quote");
	} else {
		quoteText.classList.remove("long-quote");
	}
	quoteText.textContent = quote.text;
}

// Event listener quote button - call new quote
quoteButton.addEventListener("click", newQuote);

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
