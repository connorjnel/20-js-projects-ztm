const inputContainer = document.getElementById("input-container");
const coundtdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";

// Set date input minimum with current date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take values from form input
function updateCountdown(event) {
	event.preventDefault();
	countdownTitle = event.srcElement[0].value;
	countdownDate = event.srcElement[1].value;
	console.log(countdownTitle, countdownDate);
}

// Event Listener
coundtdownForm.addEventListener("submit", updateCountdown);
