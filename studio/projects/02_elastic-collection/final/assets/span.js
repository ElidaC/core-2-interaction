// Function to play different sounds based on the hovered span
function playSound(spanId) {
    let sound;

    // Determine which sound to play based on the span's ID
    switch (spanId) {
        case 'span1':
        case 'span5':
        case 'span9':
            sound = new Audio('audio/1.mp3'); // Sound for specific spans
            break;
        case 'span2':
        case 'span6':
        case 'span10':
            sound = new Audio('sound2.mp3'); // Sound for specific spans
            break;
        case 'span3':
        case 'span7':
        case 'span11':
            sound = new Audio('sound3.mp3'); // Sound for specific spans
            break;
        case 'span4':
        case 'span8':
        case 'span12':
            sound = new Audio('sound4.mp3'); // Sound for specific spans
            break;
        case 'startGame':
            sound = new Audio('audio/click.mp3'); // Sound for specific spans
            break;
        default:
            sound = new Audio('defaultSound.mp3'); // Default sound if no match
            break;
    }

    // Play the selected sound
    sound.play();
}

// Add event listeners to each span element
document.getElementById('span1').addEventListener('mouseenter', () => playSound('span1'));
document.getElementById('span2').addEventListener('mouseenter', () => playSound('span2'));
document.getElementById('span3').addEventListener('mouseenter', () => playSound('span3'));
document.getElementById('span4').addEventListener('mouseenter', () => playSound('span4'));
document.getElementById('span5').addEventListener('mouseenter', () => playSound('span5'));
document.getElementById('span6').addEventListener('mouseenter', () => playSound('span6'));
document.getElementById('span7').addEventListener('mouseenter', () => playSound('span7'));
document.getElementById('span8').addEventListener('mouseenter', () => playSound('span8'));
document.getElementById('span9').addEventListener('mouseenter', () => playSound('span9'));
document.getElementById('span10').addEventListener('mouseenter', () => playSound('span10'));
document.getElementById('span11').addEventListener('mouseenter', () => playSound('span11'));
document.getElementById('span12').addEventListener('mouseenter', () => playSound('span12'));
document.getElementById('span13').addEventListener('mouseenter', () => playSound('span13'));
document.getElementById('startGame').addEventListener('mouseenter', () => playSound('startGame'));



function playSound() {
    let sound = new Audio('audio/button.mp3');
    
    // Play the sound
    sound.play();
}

// Add event listener to the button
document.getElementById('#buttonclick').addEventListener('click', playSound);

