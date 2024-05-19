function calculateTriangleArea() {
    // get triangle base
    const baseField = document.getElementById('triangel-base');
    const baseValueTextString = baseField.value;
    const base = parseFloat(baseValueTextString);


    // get triangel height 
    const heightField = document.getElementById('triangle-height');
    const heightValueTextString = heightField.value;
    const height = parseFloat(heightValueTextString);

    const area = 0.5 * base * height;
    console.log(area);
    // validation triangle 
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return
    }
    // show triangle area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Triangle', area);

}

function calculateRectangleArea() {
    // get rectangle width 
    const widthField = document.getElementById('rectangle-width');
    const widthValueString = widthField.value;
    const width = parseFloat(widthValueString);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueString = lengthField.value;
    const length = parseFloat(lengthValueString);
    // validation rectangle 
    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return
    }

    const area = width * length;
    // show rectengle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    addToCalculationEntry('Rectangle', area);
}

// reusable-------> function reduc duplicale value
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    // validation parallelogram 
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    // add to calculation entry 
    addToCalculationEntry('parallelogram area', area);


}
function calculateEllipseArea() {
    const majorRadius = getInputValue('major-radius');
    const minorRadius = getInputValue('minor-radius');

    // validation ellipse radius 
    if (isNaN(majorRadius) || isNaN(minorRadius)) {
        alert('Please insert a number');
        return
    }
    const area = 3.14 * majorRadius * minorRadius;
    const areaToDesimal = area.toFixed(2)
    setElementInnerText('ellipse-area', areaToDesimal);
    addToCalculationEntry('Ellipse', areaToDesimal);

}
// reusable-------> function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable span p div text etc 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area;
}

// add to calculation entry 
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('py-3')
    p.innerHTML = `${count + 1} ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm">convert</button>`;
    calculationEntry.appendChild(p)
}