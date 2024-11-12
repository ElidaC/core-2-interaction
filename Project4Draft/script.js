let container = document.getElementById("dataHere");

let sheetID = "1JXCHIDDsnhKu9KNZypHl9qZWIAURP3Wm74WT4nEupLU";
let tabName = "Sheet1";
let myURL = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

async function getData() {
    try {
        const response = await fetch(myURL);
        const data = await response.json();

        for (let dataPoint of data) {
            let newElement = document.createElement("div");
            container.appendChild(newElement);
            newElement.classList.add("list");
            newElement.innerHTML = `${dataPoint.name}`;

            let typeElement = document.createElement("div");
            newElement.appendChild(typeElement);
            typeElement.classList.add("type", dataPoint.scent1); // Adds "type" and "creamy" or other classes based on scent1
            typeElement.innerHTML = `${dataPoint.naturalIngredients}`;


            // Create secondElement and embed SVG
            let secondElement = document.createElement("div");
            newElement.appendChild(secondElement);
            secondElement.classList.add("list2");

            const blurValue = getBlurValue(dataPoint.creamTexture);
            secondElement.style.setProperty("--texture-blur", blurValue);


            // Add SVG to secondElement
            secondElement.innerHTML += `
                <svg class="layer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425 654">
                    <path class="cls-1" d="M45.64,48.54s50.24-8.83,89.49,5.05c39.25,13.88,106.76,53,114.61,69.41,7.85,16.41,9.42,71.93,28.26,84.55,18.84,12.62,50.24,21.45,62.8,18.93,12.56-2.52,33.04-3.28,44.78,14.13,11.74,17.42,11.81,48.97,0,57.17-11.81,8.2-58.91,20.82-79.32,18.3,0,0,73.79-25.24,61.23-36.6-12.56-11.36,4.89-26.2-54.07-20.67-58.97,5.53-129.61-72.72-131.18-86.6-1.57-13.88,21.13-57.71-5.92-76.81-27.05-19.1-11.35-32.98-130.67-46.86Z"/>
                    <path class="cls-2" d="M182.22,222.7s61.23,73.2,127.17,80.77c65.94,7.57-39.25,31.55-78.5,15.14-39.25-16.41-6.28,8.83,4.71,16.41,10.99,7.57,37.68,21.45,31.4,59.31-6.28,37.86,26.69,29.03,34.54,29.03s55.93-13.36,45.23.89c-10.7,14.25-73.49,33.18-108.03,28.13-34.54-5.05-10.99-27.76-7.85-40.38,3.14-12.62,19.98-39.73-7.28-61.51-27.26-21.78-41.39-48.28-72.79-50.81-31.4-2.52-45.53-21.53-21.98-30.33,23.55-8.8,100.48,10.13,80.07-5.01-20.41-15.14-26.69-41.65-26.69-41.65Z"/>
                    <path class="cls-3" d="M197.56,580.94s39.51,50.09,57.81,49.73c18.3-.36,33.53,4.85,28.33-28.87-5.2-33.72-45.65-96.79-39.24-107.52,6.4-10.74-33.34-6.92-39.97-3.54-6.63,3.38-50.35,9.22-49.35-10.71,1-19.94,75.39-62.33,66.17-90.51-9.21-28.18-20.81-57.12-48.53-50.97s-27.68,27.5-45.62,34.17-34.04-9.03-55.12-2.76c-21.09,6.26-53.65,33.32-53.65,33.32,0,0,38.58-24.15,57.73-23.44,19.14.7,51.05,19.94,70.52-2.5,19.48-22.44,29.41-49.92,51.26-22.21,21.86,27.71,16.75,42.27,4.81,54.33-11.93,12.06-84.06,66.75-73.48,77.79,10.57,11.05,15.84,24.8,62.57,20.41,46.73-4.39,30.76-24.64,50.54,14.59s51.83,91.63,24.24,96.73c-27.58,5.09-69.04-38.04-69.04-38.04Z"/>
                </svg>
            `;

            // Select the specific SVG in this list item and apply style effects
            const currentSvg = secondElement.querySelector("svg");
            applyStyleEffects(currentSvg, dataPoint.skin, dataPoint.scent2);

            // Set background and text color based on scent1
            let oilColor;
            switch (dataPoint.scent1) {
                case "creamy":
                    secondElement.style.backgroundColor = "#e0edff";
                    newElement.style.color = "#0084ed";
                    oilColor = "#0084ed";
                    break;
                case "nutty":
                    secondElement.style.backgroundColor = "#eecfae";
                    newElement.style.color = "#6d3000";
                    oilColor = "#6d3000";
                    break;
                case "fresh":
                    secondElement.style.backgroundColor = "#cbe2e2";
                    newElement.style.color = "#008594";
                    oilColor = "#008594";
                    break;
                case "sweet":
                    secondElement.style.backgroundColor = "#f7e7ef";
                    newElement.style.color = "#f70768";
                    oilColor = "#f70768";
                    break;
                case "fruity":
                    secondElement.style.backgroundColor = "#fff6b0";
                    newElement.style.color = "#f18629";
                    oilColor = "#f18629";
                    break;
                case "floral":
                    secondElement.style.backgroundColor = "#eae4fc";
                    newElement.style.color = "#5600ae";
                    oilColor = "#5600ae";
                    break;
                default:
                    secondElement.style.backgroundColor = "#ffffff";
                    oilColor = "#ffffff";
                    break;
            }

            // Create oilElement according to oilNum
let oilNum = parseInt(dataPoint.oilNum) || 0;
for (let i = 0; i < oilNum; i++) {
    let oilElement = document.createElement("div");
    newElement.appendChild(oilElement);
    oilElement.classList.add("oil");

    // 设置随机位置
    oilElement.style.top = `${Math.random() * 290}px`;
    oilElement.style.left = `${Math.random() * 260}px`;

    // 设置边框颜色和样式
    oilElement.style.borderColor = oilColor;
    oilElement.style.borderWidth = "1px"; // 设置边框宽度
    oilElement.style.borderStyle = "solid"; // 设置边框样式
}

        }
    } catch (error) {
        console.error(error);
    }
}

function getBlurValue(creamTexture) {
    switch (creamTexture) {
        case "heavy":
            return "0px";
        case "melting":
            return "1px";
        case "light":
            return "10px";
        default:
            return "5px"; // Default value if creamTexture is not recognized
    }
}

// Apply blur and color based on skin and scent2 for each specific SVG
function applyStyleEffects(svgElement, skin, scent2) {
    let blurValue1, blurValue2, blurValue3;
    let fillColor1, fillColor2, fillColor3;

    // Set blur based on skin type
    switch (skin) {
        case "very dry":
            blurValue1 = "0px";
            blurValue2 = "0px";
            blurValue3 = "0px";
            break;
        case "dry":
            blurValue1 = "4px";
            blurValue2 = "4px";
            blurValue3 = "4px";
            break;
        case "normal to dry":
            blurValue1 = "10px";
            blurValue2 = "7px";
            blurValue3 = "4px";
            break;
        case "normal":
            blurValue1 = "10px";
            blurValue2 = "10px";
            blurValue3 = "10px";
            break;
        case "all":
            blurValue1 = "0px";
            blurValue2 = "5px";
            blurValue3 = "10px";
            break;
        default:
            blurValue1 = "0px";
            blurValue2 = "8px";
            blurValue3 = "12px";
            break;
    }

    // Set fill colors based on scent2
    switch (scent2) {
        case "creamy":
            fillColor1 = "#e0edff";
            fillColor2 = "#e0edff";
            fillColor3 = "#e0edff";
            break;
        case "nutty":
            fillColor1 = "#eecfae";
            fillColor2 = "#eecfae";
            fillColor3 = "#eecfae";
            break;
        case "fresh":
            fillColor1 = "#cbe2e2";
            fillColor2 = "#cbe2e2";
            fillColor3 = "#cbe2e2";
            break;
        case "sweet":
            fillColor1 = "#f7e4f2";
            fillColor2 = "#f7e4f2";
            fillColor3 = "#f7e4f2";
            break;
        case "fruity":
            fillColor1 = "#fff6b0";
            fillColor2 = "#fff6b0";
            fillColor3 = "#fff6b0";
            break;
        case "floral":
            fillColor1 = "#eae4fc";
            fillColor2 = "#eae4fc";
            fillColor3 = "#eae4fc";
            break;
        default:
            fillColor1 = "#e0edff";
            fillColor2 = "#eecfae";
            fillColor3 = "#d2e5e8";
            break;
    }

    // Apply blur and color to each path in the SVG
    svgElement.querySelector(".cls-1").style.filter = `blur(${blurValue1})`;
    svgElement.querySelector(".cls-2").style.filter = `blur(${blurValue2})`;
    svgElement.querySelector(".cls-3").style.filter = `blur(${blurValue3})`;

    svgElement.querySelector(".cls-1").style.fill = fillColor1;
    svgElement.querySelector(".cls-2").style.fill = fillColor2;
    svgElement.querySelector(".cls-3").style.fill = fillColor3;
}

getData();
