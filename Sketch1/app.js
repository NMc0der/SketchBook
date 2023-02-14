const container = document.querySelector('.container')

for (let i = 0; i < 8; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    container.append(square)
}