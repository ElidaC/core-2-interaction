// select our container element
var containerElement = document.querySelector('.Container');

// insert color swatches function definition
function insertColorSwatches(costume) {

	// select Kirby element
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	// for each color in costume
	costume['colors'].forEach((color) => {
		
		// apply background style
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

// insert single costume function
function insertCostume(costume) {

	// put costume into HTML
	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;

	// insert color
	insertColorSwatches(costume);

}

// insert costumes function definition
function insertCostumes(costumes) {

	// empty the container element
	containerElement.innerHTML = '';

	// for each costume...
	costumes.forEach((costume) => {
		// insert costume
		insertCostume(costume);
	});

}
// insert all costumes into DOM
insertCostumes(costumes);


// FILTER
// ---------------------------

// get all costume with a single color
// var redCostumes = costumes.filter((costume) => {
// 	// test for color red
// 	return costume['colors'].includes('red');
// });

function getCostumesWithColor(color) {

	// define variable
	var costumesWithColor = costumes.filter((costume) => {
	return costume['colors'].includes (color)
	})

	// return the variable
	return costumesWithColor;
}

var redCostumes = getCostumesWithColor('red');


// EVENT LISTENERS
// ---------------------------

// get all button elements
var colorButtonElements = document.querySelectorAll('.ColorControls input')

colorButtonElements.forEach((button) => {
	button.addEventListener('click',() => {
		var color = button.value;
		var costumesWithColor = getCostumesWithColor(color);
		console.log(costumesWithColor);
		insertCostumes(costumesWithColor);
	});
});