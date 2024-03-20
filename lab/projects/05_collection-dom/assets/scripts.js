// Select your container element.
var containerElement = document.querySelector('main');

// Define the insert function with a parameter.
function insertTote(tote) {

	// empty the container element
containerElement.innerHTML = '';

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="Tote">
			<img src="media/${ tote['image'] }">
		</div>
	`;


		//add buttons for each tote
		tote.majors.forEach((major) => {
			const button = document.createElement("button");
			button.textContent = major;
	
			button.classList.add("button");
			// Add an event listener or any other functionality you want for the button
			// For example, if you want to console log the selected major when the button is clicked:
			button.addEventListener("click", () => {
				console.log(major);
			});
	
			// Append the button to the container element
			containerElement.appendChild(button);
		});

		
	// add each item from tote
	tote.items.forEach((item) => {
		containerElement.innerHTML += `
			<div class="Item">
				<img src="media/${ item }">
			</div>
		`;
	});




}


var randomButton = document.getElementById('randomButton');


// Add an event listener to the button
randomButton.addEventListener('click', function() {
// get a random number btwn 0 - index
var randomFloat = Math.random() * totes.length;
var randomInt = Math.floor(randomFloat);
console.log(randomInt);

// run the fn
insertTote(totes[randomInt]);

});