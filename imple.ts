const matrix = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [8, 9, 1, 5],
    [8, 5, 3, 1]
]
const originalMatrix: Element | null = document.querySelector('.original-wrapper');
originalMatrix?.insertAdjacentHTML(
    'afterend',
    `<code>[${matrix.join('<br/>')}]</code>`
);
const rotatedMatrix: Element | null = document.querySelector('.rotated-wrapper');


function rotate(matrix: number[][]): void {
    // break the matrix reference
    let rotateMatrix = JSON.parse(JSON.stringify(matrix));

    let size = matrix.length;
    let layers = size / 2;

    for (let layer = 0; layer < layers; layer++) {
        let first = layer;
        let last = size - 1 - layer;

        for (let iterator = first; iterator < last; iterator++) {
            let offset = iterator - first;
            let top = rotateMatrix[first][iterator];
            rotateMatrix[first][iterator] = rotateMatrix[last - offset][first];
            rotateMatrix[last - offset][first] = rotateMatrix[last][last - offset];
            rotateMatrix[last][last - offset] = rotateMatrix[iterator][last];
            rotateMatrix[iterator][last] = top;
        }
    }

    drawRotated(rotateMatrix);
}

function drawRotated(matrix: number[][]): void {
    rotatedMatrix?.insertAdjacentHTML(
        'afterbegin',
        `<code>[${matrix.join('<br/>')}]</code>`
    )
}

rotate(matrix);