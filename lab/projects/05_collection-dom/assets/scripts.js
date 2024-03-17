// Select your container element.
var containerElement = document.querySelector('main');

// Define the insert function with a parameter.
function insertTote(tote) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="Tote">
			<img src="media/${ tote['image'] }">
		</div>
	`;

	// add each item from tote
	tote.items.forEach((item) => {
		containerElement.innerHTML += `
			<div class="Item">
				<img src="media/${ item }">
			</div>
		`;
	});

}

// get a random number btwn 0 - index
var randomFloat = Math.random() * totes.length;
var randomInt = Math.floor(randomFloat);
console.log(randomInt);

// run the fn
insertTote(totes[randomInt]);