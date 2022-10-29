const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function toggleLightDarkMode(themeColor) {
	nav.style.backgroundColor = themeColor == DARK_THEME ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
	textBox.style.backgroundColor = themeColor == DARK_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
	toggleIcon.children[0].textContent = themeColor == DARK_THEME ? "Dark Mode" : "Light Mode";
	themeColor == DARK_THEME ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
	themeColor == DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Dark or Light Images
function imageMode(color) {
	image1.src = `img/undraw_proud_coder_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img//undraw_conceptual_idea_${color}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
	if (event.target.checked == true) {
		document.documentElement.setAttribute("data-theme", DARK_THEME);
		localStorage.setItem("theme", DARK_THEME);
		toggleLightDarkMode(DARK_THEME);
	} else {
		document.documentElement.setAttribute("data-theme", LIGHT_THEME);
		localStorage.setItem("theme", LIGHT_THEME);
		toggleLightDarkMode(LIGHT_THEME);
	}
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	if (currentTheme === DARK_THEME) {
		toggleSwitch.checked = true;
		toggleLightDarkMode(DARK_THEME);
	}
}
