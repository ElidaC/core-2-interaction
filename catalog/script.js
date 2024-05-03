document.addEventListener("DOMContentLoaded", function() {
    // Map of image IDs to descriptions
    var descriptions = {
      "sp0": "Inside Beauty",
      "sp1": "On Beginnings",
      "sp2": "Tote Chic",
      "sp3": "Earth Day Celebration",
      "lp1": "Introduction Webring", 
      "lp2": "Class-stylesheet",
      "lp3": "Journal Index",
      "lp4": "Data Collection",
      "lp5": "Collection Dom",
      "lp6": "API 1st Try - Event",
      "sw0": "On Begginings Landing Page 1st Try",
      "sw1": "Still Life",
      "sw2": "Media Query",
      "sw3": "Alt-Text",
      "lw1": "Seasonal Chat",
      "lw2": "Layout",
      "lw3": "js-Intro",
      "lw4": "js-Dom",
      "lw5": "js Events",
      "lw6": "Clock - Month",
      "lw7": "js-API"
    };

    var imageLinks = document.querySelectorAll(".image");
    var descriptionContainer = document.getElementById("description-container");

    imageLinks.forEach((img) => {
      img.addEventListener("mouseover", () => {
        var imageId = img.id;

        descriptionContainer.textContent = descriptions[imageId];
        descriptionContainer.style.display = "block"; 
      });

      img.addEventListener("mouseout", () => {
        descriptionContainer.style.display = "none";
      });
    });
  });



  


  document.addEventListener("DOMContentLoaded", function() {
    // Select all images
    var images = document.querySelectorAll("img");
  
    // Attach click event listener to each image
    images.forEach((img) => {
      img.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up
  
        // Get the ID of the clicked image
        var imageId = img.id;
  
        // Construct the corresponding div ID
        var divId = imageId + "Div";
  
        // Show the corresponding div
        var divToShow = document.getElementById(divId);
        if (divToShow) {
          divToShow.style.display = "block";
        }
      });
    });
  
    // Attach click event listener to the document to hide divs on click outside
    document.addEventListener("click", function(event) {
      // Hide all image divs
      var imageDivs = document.querySelectorAll(".imageDiv");
      imageDivs.forEach((div) => {
        div.style.display = "none";
      });
    });
  
    // Prevent the click inside the div from hiding it
    document.querySelectorAll(".imageDiv").forEach((div) => {
      div.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up
      });
    });
  });
  
  