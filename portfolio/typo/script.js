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

    if (data === 'item1' || data === 'item2' || data === 'item3' || data === 'item4' || data === 'item5' || data === 'item6' || data === 'item7' || data === 'item8' || data === 'item9' || data === 'item10' || data === 'item11' || data === 'item12' || data === 'item13' || data === 'item14' || data === 'item15' || data === 'item16' || data === 'item17' || data === 'item18' || data === 'item19' || data === 'item010' || data === 'item21' || data === 'item22' || data === 'item23' || data === 'item24' || data === 'item25' || data === 'item26' || data === 'item27' || data === 'item01' || data === 'item02' || data === 'item03' || data === 'item04' || data === 'item05' || data === 'item06' || data === 'item07' || data === 'item08' || data === 'item09') {
        tote.appendChild(draggedItem);
        draggedItem.style.position = 'absolute';
        draggedItem.style.top = (ev.clientY - tote.getBoundingClientRect().top - draggedItem.clientHeight / 2) + 'px';
        draggedItem.style.left = (ev.clientX - tote.getBoundingClientRect().left - draggedItem.clientWidth / 2) + 'px';
    } else {
        
    }
}