
var randomButton = document.querySelector('#randomButton a');


// Add an event listener to the button
randomButton.addEventListener('click', function() {
// get a random number btwn 0 - index
var randomFloat = Math.random() * totes.length;
var randomInt = Math.floor(randomFloat);
var randomTote = totes[randomInt];
var randomLink = randomTote['link'];
randomButton.href = randomLink
console.log(randomInt);

// run the fn
insertTote(totes[randomInt]);

});









//--------------------------------------------------------

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedItem = document.getElementById(data);
    var tote = document.querySelector('.Tote');

    if (data === 'item1' || data === 'item2' || data === 'item3' || data === 'item4' || data === 'item5' || data === 'item6' || data === 'item7' || data === 'item8') {
        tote.appendChild(draggedItem);
        draggedItem.style.position = 'absolute';
        draggedItem.style.top = (ev.clientY - tote.getBoundingClientRect().top - draggedItem.clientHeight / 2) + 'px';
        draggedItem.style.left = (ev.clientX - tote.getBoundingClientRect().left - draggedItem.clientWidth / 2) + 'px';
    } else {
        
    }
}



