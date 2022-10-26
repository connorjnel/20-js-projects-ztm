const toggleSwitch = document.querySelector("input[type='checkbox']");

// Switch Theme Dynamic
function switchTheme(event) {
	if (event.target.checked == true) {
		document.documentElement.setAttribute("data-theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "star");
	}
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);
