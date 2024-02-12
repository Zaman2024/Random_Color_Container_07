
const container = document.querySelector('.container');

//console.log(container.children)

//-------Creating Multiple div by for Loop ---------;
    for (let i = 0; i < 30 ; i++) {
        let divEl = document.createElement("div");
        divEl.className = 'sub-container';
        container.append(divEl);
    }
const subContainers = document.querySelectorAll('.sub-container');
//--------Random color generator------------
let randomColor = function () {
    let hex = '123456789abcdef';
    let colorCodeLength = 6;
    let colorIdes = '#'
    for (let i = 0; i < colorCodeLength; i++) {
        let colorId = Math.floor(Math.random() * hex.length);
        colorIdes += hex.substring(colorId, colorId + 1);
    }
    return colorIdes;
}

//-----Change Background Color of div-----------
setbgColor();
function setbgColor(){
    subContainers.forEach((divEl) => {
        const newColor =randomColor();
        divEl.style.backgroundColor = newColor;
        divEl.style.borderRadius = '13px';
        divEl.innerHTML = newColor;
    })
}
