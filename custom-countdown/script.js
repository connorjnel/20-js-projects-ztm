const inputContainer = document.getElementById("input-container");
const coundtdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

// Set date input minimum with current date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);
