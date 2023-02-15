const container = document.querySelector('.container');
const squares = document.querySelectorAll('.square');
const start = document.querySelector('.start');


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




start.addEventListener('click', () => {
    container.replaceChildren()
    let choice = parseInt(prompt('Please enter the number of squares per sides for your grid'));
    if (choice > 100) return alert('Please enter a number below 100')
    for (let i = 0; i < choice; i++) {
        const column = document.createElement('div');
        column.classList.add('sections')
        for (let i = 0; i < choice; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            // hover(square);
            column.append(square);
        }
        container.append(column);
    }
})




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
document.addEventListener('mousedown', (e) => {
    e.preventDefault()
    mouseDown = true
    if (e.target.classList[0] == "square" && mouseDown) {
        console.log('mouse button down')
        e.target.style.backgroundColor = 'black';
    }
})

document.addEventListener('mouseup', () => {
    mouseDown = false;
    if (!mouseDown) {
        console.log('mouse button up')
    }
})


document.addEventListener('mouseover', (e) => {
    console.dir(e.target)
    if (e.target.classList[0] == "square" && mouseDown) {
        console.log('yes')
        e.target.style.backgroundColor = 'black';
    }
})