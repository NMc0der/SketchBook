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
// const hover = (item) => {


//     // item.addEventListener('mousedown', () => {
//     //     console.log('hi');
//     //     item.style.backgroundColor = 'black';
//     // })
//     let mouseDown = 0;
//     item.addEventListener('mousedown', (e) => {
//         e.preventDefault();
//         mouseDown = true
//         if (mouseDown) {
//             console.log(e)
//             console.log('mouse button down')
//             item.style.backgroundColor = 'black';
//         }
//     })

//     item.addEventListener('mouseup', () => {
//         mouseDown = false;
//         if (!mouseDown) {
//             console.log('mouse button up')
//         }
//     })
// }


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let selectedColor = 'black';

// const genRandomColor = (el) => {
//     let hexColor = '#'
//     for (let i = 0; i < 6; i++) {
//         const index = Math.floor(Math.random() * hex.length)
//         hexColor += hex[index];

//     }
//     console.log(hexColor)
//     el = hexColor
// }



colorPicker.addEventListener('input', () => {
    console.dir(colorPicker);
    selectedColor = colorPicker.value;
})

black.addEventListener('click', () => {
    selectedColor = 'black';
    colorPicker.value = '#000000';
    // addBorder(black)

})

eraser.addEventListener('click', () => {
    selectedColor = 'white';
    colorPicker.value = '#ffffff';
})

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


reset.addEventListener('click', () => {
    // selectedColor = 'black';
    container.replaceChildren();
    // colorPicker.value = '#000000';
    if (!sizeInp.value) {
        return squareGen()

    }
    // else if (sizeInp.value > 100 || !Number.isInteger(sizeInp.value)) {
    //     alert('Please enter a valid number below 100');
    //     return squareGen()
    // }
    squareGen(sizeInp.value);
    // currentSize.innerHTML = sizeInp.value;
})

setSize.addEventListener('click', () => {
    container.replaceChildren();
    if (!sizeInp.value) {
        return squareGen();
    }
    squareGen(sizeInp.value);
    // currentSize.innerHTML = sizeInp.value;
})

// const addBorder = (el) => {
//     el.style.border = true
// }


const squareGen = (num = 20) => {

    num = parseInt(num);
    currentSize.innerHTML = `${num}`
    if (num > 100 || !Number.isInteger(num)) {
        num = 20;
        alert('Please enter a valid number below 100');
        currentSize.innerHTML = `${num}`;
    }

    for (let i = 0; i < num; i++) {
        const column = document.createElement('div');
        column.classList.add('sections');
        for (let i = 0; i < num; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            // hover(square);
            column.append(square);
        }
        container.append(column);
    }
}



squareGen();


// for (let i = 0; i < 20; i++) {
//     const column = document.createElement('div');
//     column.classList.add('sections');
//     for (let i = 0; i < 20; i++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         // hover(square);
//         column.append(square);
//     }
//     container.append(column);
// }


// start.addEventListener('click', () => {
//     container.replaceChildren()
//     let choice = parseInt(prompt('Please enter the number of squares per sides for your grid'));
//     // if (choice > 100 || !Number.isInteger(choice)) {
//     //     choice = 8;
//     //     alert('Please enter a valid number below 100');
//     // }
//     squareGen(choice)
// })





// for (let i = 0; i < 8; i++) {
//     const column = document.createElement('div');
//     for (let i = 0; i < 8; i++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         hover(square);
//         column.append(square);
//     }
//     container.append(column);
// }


// pd = false;
// document.addEventListener('pointerdown', (e) => {
//     pd = true;
//     console.log(e)
//     if (pd) {
//         let pd = document.addEventListener('pointermove', () => {
//             console.log(e)
//             document.addEventListener('pointerup', () => {
//                 pd = false;

//             })
//         })
//     }
// })


let mouseDown = false;
container.addEventListener('mousedown', (e) => {
    e.preventDefault();
    mouseDown = true;
    if (e.target.classList[0] == "square" && mouseDown) {
        console.log('mouse button down')
        e.target.style.backgroundColor = selectedColor;
    }
})

document.addEventListener('mouseup', () => {
    mouseDown = false;
    if (!mouseDown) {
        console.log('mouse button up');
    }
})


document.addEventListener('mouseover', (e) => {
    // console.dir(e.target)
    if (e.target.classList[0] == "square" && mouseDown) {
        console.log('yes');
        e.target.style.backgroundColor = selectedColor;
    }
})