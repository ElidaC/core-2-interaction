//log the costomes array
console.log('costumes:', costumes);


console.log(costumes[0]);
console.log(costumes[0]['title']);

//log propety with bracket notation
console.log("costumes[0]['title']:", costumes[0]['title']);

//log propety with dot notation
console.log("costumes[0].title:", costumes[0].title);

//CONSOLE AND DOCUMENT OBJECTS
//-------------------------------------

//log the console object
console.log(console);

//log the document object
console.log(document);

//log the document element
console.log(document.documentElement);



//EDITING THE DOCUMENT ELEMENT
//--------------------------------------

// edit directly
//document.documentElement.style.background = 'pink';

//function setBackgroundColor(){
//    document.documentElement.style.background = 'pink';
//}


// define a new function
// (command / 快捷方式)
function setBackgroundColor(color){
    document.documentElement.style.background = color;
}

//run the function
setBackgroundColor('pink');
//var color = 'pink'






//SELECTING ANY HTML ELEMENT
//---------------------------------------

//set main element variable
var mainElement = document.querySelector('.Main');
console.log(mainElement);





//UPDAATING AN HTML ELEMENT
//------------------------------------------

// edit directly
//mainElement.style.background = 'white';
//mainElement.innerHTML = 'Hello World!'

//edit with object property
//mainElement.innerHTML = costumes[15].title

// edit with function
function insertCostumeData(costume){
    
    //add text to innerHTML 
    //mainElement.innerHTML += costume['title'];

    //add template string
    // mainElement.innerHTML += `
    // <div>
    //     ${costume['title']}
    //     </div>
    // `;

    //insert advanced HTML
    mainElement.innerHTML += `
    <article class="Kirby">
        <h2>${ costume['title']}</h2>
        <img src="./media/${ costume['image']}" />
        <p>${ costume['powers']}</p>
    </article>
    `;
}

// +=  adds on

//manual insertion
// insertCostumeData(costumes[0]);
// insertCostumeData(costumes[1]);
// insertCostumeData(costumes[2]);
// insertCostumeData(costumes[3]);


//FOR EACH LOOPS
//----------------------------------

// costumes.forEach(() => {
//     console.log('hello');
// });

// costumes.forEach((costume) => {
//     console.log(costume);
// });

costumes.forEach((costume) => {
    console.log(costume);
});

costumes.forEach((costume) => {
    insertCostumeData(costume);
});