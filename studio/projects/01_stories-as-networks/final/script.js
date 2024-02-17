
  function togglePopup() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('active'); // Toggle the 'active' class to show/hide the pop-up
  }

  // Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Function to add active class to elements when they come into view
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Event listener for scroll inside the .phone element
const phone = document.querySelector('.phone');
phone.addEventListener('scroll', fadeInOnScroll);

// Initial check on page load
fadeInOnScroll();



function choose(option) {
    var choiceSpan = document.getElementById('choice');
    var choiceButtons = document.getElementById('choiceButtons');
    if (option === 'love') {
        choiceSpan.innerText = 'love';
        document.querySelector('.right font').innerHTML = "And poets <span id='choice'>love</span> possibility!";
        choiceButtons.style.display = 'none'; // Hide the choice buttons after making a choice
        console.log("You chose to love possibility. You may continue scrolling.");
    } else if (option === 'hate') {
        console.error("You chose to hate possibility. That's not allowed.");
        // Display an error message or take appropriate action
    } else {
        console.error("Invalid choice.");
        // Display an error message or take appropriate action
    }
}

function checkUnlock() {
    var input = document.getElementById('unlockInput').value.toLowerCase(); // Convert input to lowercase
    if (input === 'semicolon') { // Change 'correctcode' to the actual correct word
        document.getElementById('unlockScreen').style.display = 'none'; // Hide the unlock screen
        showAllContent(); // Call a function to show all content blocks
        console.log("Unlock successful. All content is now visible.");
    } else {
        alert('Incorrect code. Please try again.'); // You can replace this with a more stylish error message
    }
}

function showAllContent() {
    var contentBlocks = document.querySelectorAll('.fade[id^="contentAfterUnlock"]');
    contentBlocks.forEach(function(block) {
        block.style.display = 'block'; // Show each content block
    });
}




