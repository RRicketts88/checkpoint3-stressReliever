// I am using const and let. I am getting an element in the DOM by it's ID of "clicker" which will represent the button in the bullseye the user clicks
const clicker = document.getElementById('clicker');
// counter will be where the numbers are displayed
const counter = document.getElementById('counter');
// I'm using local storage to save the click count in the browser
const storage = window.localStorage;

let save = {};
// Object to save

// here i'm just trying to save the count in the browser once people start clicking on it. 

function load() {
	if (storage.getItem("save")) {
		// this next line will display the count on the screen
		counter.innerHTML = save.count;
	} else {
		save.count = 0;
		// If no one clicks it, it will stay at "0"
		counter.innerHTML = "0";
	}
}
load();

// here I acesss the clicker element and upon a "click" event, we will run this function that will save the count
clicker.addEventListener("click", function () {
	save.count++;
	counter.innerHTML = save.count;
});