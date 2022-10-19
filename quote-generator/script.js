const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show loading spinner
function showLoadingSpinner() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide loading spinner
function hideLoadingSpinner() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// Show new quote
function newQuote() {
	showLoadingSpinner();
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
	// Set quote, hide loader
	quoteText.textContent = quote.text;
	hideLoadingSpinner();
}

// Event listener quote button - call new quote
quoteButton.addEventListener("click", newQuote);

// Get quotes from API
async function getQuotes() {
	showLoadingSpinner();
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
