const container = document.querySelector('.container');
const squares = document.querySelectorAll('.square');
const start = document.querySelector('.start');
const colorPicker = document.querySelector('.colorPicker');
const reset = document.querySelector('.reset');
const black = document.querySelector('.black');
const sizeInp = document.querySelector('.sizeInp');
const setSize = document.querySelector('.setSize')
const eraser = document.querySelector('.eraser');
const currentSize = document.querySelector('.currentSize');
const random = document.querySelector('.random')


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let selectedColor = 'black';



const updateColor = (color) => {
    selectedColor = color
    colorPicker.value = color
    console.log('hello')
}

const restartBoard = () => {
    container.replaceChildren();
    if (!sizeInp.value) {
        return squareGen();
    }
    squareGen(sizeInp.value);
}

const squareGen = (num = 50) => {
    num = parseInt(num);
    currentSize.innerHTML = `${num}`
    if (num > 100 || !Number.isInteger(num)) {
        num = 50;
        alert('Please enter a valid number below 100');
        currentSize.innerHTML = `${num}`;
        sizeInp.value = '';
    }

    for (let i = 0; i < num; i++) {
        const column = document.createElement('div');
        column.classList.add('sections');
        for (let i = 0; i < num; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.append(square);
        }
        container.append(column);
    }
}

squareGen();
colorPicker.addEventListener('input', () => updateColor(colorPicker.value));
black.addEventListener('click', () => updateColor('#000000'));
eraser.addEventListener('click', () => updateColor('#ffffff'));
reset.addEventListener('click', () => restartBoard());
setSize.addEventListener('click', () => restartBoard());

random.addEventListener('click', () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length)
        hexColor += hex[index];
    }
    console.log(hexColor)
    colorPicker.value = hexColor;
    selectedColor = hexColor;
})


let mouseDown = false;
container.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    mouseDown = true;
    if (e.target.classList[0] == "square" && mouseDown) {
        e.target.style.backgroundColor = selectedColor;
    }
})

document.addEventListener('pointerup', () => mouseDown = false)


document.addEventListener('pointerover', (e) => {
    if (e.target.classList[0] == "square" && mouseDown) {
        e.target.style.backgroundColor = selectedColor;
    }
})


// start.addEventListener('click', () => {
//     container.replaceChildren()
//     let choice = parseInt(prompt('Please enter the number of squares per sides for your grid'));
//     // if (choice > 100 || !Number.isInteger(choice)) {
//     //     choice = 8;
//     //     alert('Please enter a valid number below 100');
//     // }
//     squareGen(choice)
// })

// const genRandomColor = (el) => {
//     let hexColor = '#'
//     for (let i = 0; i < 6; i++) {
//         const index = Math.floor(Math.random() * hex.length)
//         hexColor += hex[index];
//     }
//     console.log(hexColor)
//     el = hexColor
// }