
function getUVCategory(uvIndex) {
    if (uvIndex <= 1) {
      return 'low';
    } else if (uvIndex <= 2) {
      return 'moderate';
    } else if (uvIndex <= 3) {
      return 'high';
    } else if (uvIndex <= 4) {
      return 'very-high';
    } else {
      return 'extreme';
    }
  }

  // Fetch UV data from WeatherAPI
  async function getData() {
    const myUrl = "https://api.weatherapi.com/v1/current.json?key=5235bf3986ca4647925235439241410&q=11232";
    
    try {
      const response = await fetch(myUrl);
      const data = await response.json();
      const uvIndex = data.current.uv;  // Fetch UV Index from the response
      console.log('UV Index:', uvIndex);
      
      const uvCategory = getUVCategory(uvIndex);  // Get the category based on the UV index
      console.log('UV Category:', uvCategory);
      
      // Hide all SVGs first
      const svgs = document.querySelectorAll('svg');
      svgs.forEach(svg => svg.classList.remove('show'));  // Remove 'show' class from all SVGs

      // Show the corresponding SVG based on the UV category
      const activeSVG = document.getElementById(uvCategory);
      if (activeSVG) {
        activeSVG.classList.add('show');  // Add 'show' class to the matching SVG
      }

    } catch (error) {
      console.error('Error fetching UV data:', error.message);
    }
  }

  // Continuously fetch the data every second
  setInterval(getData, 1000);
  

