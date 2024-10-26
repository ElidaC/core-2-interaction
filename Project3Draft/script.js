function getUVCategory(uvIndex) {
  if (uvIndex <= 1) {
    return 'low';
  } else if (uvIndex <= 2) {
    return 'moderate';
  } else if (uvIndex <= 3.5) {
    return 'high';
  } else if (uvIndex <= 5) {
    return 'very-high';
  } else {
    return 'extreme';
  }
}


function applyRadialBlur(windSpeed) {
  const blurValue = Math.min(windSpeed * 2, 50); 
  const svgs = document.querySelectorAll('svg');

  svgs.forEach(svg => {
    const displacementMap = svg.querySelector('filter feDisplacementMap');
    if (displacementMap) {
      displacementMap.setAttribute('scale', blurValue);
    }
  });
}

async function getData() {
  const myUrl = "https://api.weatherapi.com/v1/current.json?key=5235bf3986ca4647925235439241410&q=11232";
  
  try {
    const response = await fetch(myUrl);
    const data = await response.json();
    const uvIndex = data.current.uv;  
    const windSpeed = data.current.wind_mph;  

    console.log('UV Index:', uvIndex);
    console.log('Wind Speed:', windSpeed);

    const uvCategory = getUVCategory(uvIndex);
    console.log('UV Category:', uvCategory); 
    
    const svgs = document.querySelectorAll('svg');
    svgs.forEach(svg => svg.classList.remove('show')); 

    const activeSVG = document.getElementById(uvCategory);
    if (activeSVG) {
      activeSVG.classList.add('show');  
    } else {
      console.log('No matching SVG found for:', uvCategory);
    }


    applyRadialBlur(windSpeed);

  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}


setInterval(getData, 1000);
