/* core1 interaction class */

let button = document.querySelector(".button");
let colors = ["#16c3c9"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);

 let blobs = document.querySelectorAll(".blob");
  let container = document.querySelector(".wrapper");
  // place our blobs randomly
  blobs.forEach(function (blob) {
    blob.style.right = (100 * Math.random()) + '%';
    blob.style.top = (100 * Math.random()) + '%';
  });
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("blob")) {
      event.target.remove();
    }
  });
  


/* core2 interaction class - refined ChatGPT */

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

    if (['item1', 'item5', 'item7', 'item8', 'item9', 'item10', 'item14', 'item17', 'item18'].includes(data)) {
        tote.appendChild(draggedItem); 
        draggedItem.style.position = 'absolute'; 

        var toteRect = tote.getBoundingClientRect();
        draggedItem.style.top = (ev.clientY - toteRect.top - draggedItem.clientHeight / 2) + 'px';
        draggedItem.style.left = (ev.clientX - toteRect.left - draggedItem.clientWidth / 2) + 'px';
    }
}

