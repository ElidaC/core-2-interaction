// Select your container element.
var containerElement = document.querySelector('main');



// Set the initial background color when the page loads
const initialBackgroundColor = setBackgroundByVibe('default'); // Adjust this default value if needed
containerElement.style.backgroundColor = initialBackgroundColor;

// Define the insert function with a parameter.
function insertTote(tote) {
    const vibe = tote.vibes[0]; // Assuming each tote has only one vibe

    // Set the background color based on the vibe of the tote
    const backgroundColor = setBackgroundByVibe(vibe);
    containerElement.style.backgroundColor = backgroundColor;




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






// Function to set background color based on vibe
function setBackgroundByVibe(vibes) {
    // 根据不同的 vibe 返回不同的背景颜色
    switch (vibes) {
        case 'cozy':
            return 'orangered'; 
        case 'stylish':
            return '#c8f926'; 
        case 'cute':
            return '#B0F1DE'; 
        case 'energetic':
            return '#22A48C'; 
        case 'casual':
            return '#E4CCFF'; 
        case 'vintage':
            return 'rgb(225, 225, 225)'; 
        default:
            return ''; // 默认背景颜色
    }
}



