const button = document.querySelector('button');

let moveCount = 0;

function moveButton() {
    if (moveCount < 5) {
        const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));

        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;

        moveCount++;
    } else {
        button.style.position = 'relative';
        button.style.left = '0';
        button.style.top = '0';
        moveCount = 0;
    }
}

button.addEventListener('mousemove', moveButton);

