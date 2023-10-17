var matrix = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [8, 9, 1, 5],
    [8, 5, 3, 1]
];
var originalMatrix = document.querySelector('.original-wrapper');
originalMatrix.insertAdjacentHTML('afterend', "<code>[".concat(matrix.join('<br/>'), "]</code>"));
var rotatedMatrix = document.querySelector('.rotated-wrapper');
function rotate(matrix) {
    // break the matrix reference
    var rotateMatrix = JSON.parse(JSON.stringify(matrix));
    var size = matrix.length;
    var layers = size / 2;
    for (var layer = 0; layer < layers; layer++) {
        var first = layer;
        var last = size - 1 - layer;
        for (var iterator = first; iterator < last; iterator++) {
            var offset = iterator - first;
            var top_1 = rotateMatrix[first][iterator];
            rotateMatrix[first][iterator] = rotateMatrix[last - offset][first];
            rotateMatrix[last - offset][first] = rotateMatrix[last][last - offset];
            rotateMatrix[last][last - offset] = rotateMatrix[iterator][last];
            rotateMatrix[iterator][last] = top_1;
        }
    }
    drawRotated(rotateMatrix);
}
function drawRotated(matrix) {
    rotatedMatrix.insertAdjacentHTML('afterbegin', "<code>[".concat(matrix.join('<br/>'), "]</code>"));
}
rotate(matrix);
