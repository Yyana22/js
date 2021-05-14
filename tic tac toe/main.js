const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementsById('content');
const modalResult = document.getElementsById('modal-result-wrapper');
const overlay = document.getElementsById('overlay');
const btnClose = document.getElementsById('btn-close');

const box = document.getElementById('.box');

area.addEventListener('click', e => {
    if (e.target.className == 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'О';
        move++;
        check();
    }
})

// варианты победы в массиве arr

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        //по горизонтали
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //по вертикали
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //по диагонали
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            result = 'крестики';
            prepareResult(result);
        } else if (boxes[arr[i][0]].innerHTML == 'О' && boxes[arr[i][1]].innerHTML == 'О' && boxes[arr[i][2]].innerHTML == 'О') {
            result = 'нолики';
            prepareResult(result);
        } else {
            result = 'ничья';
        }
    }
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `Победили ${winner} !`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('clock', closeModal);
btnClose.addEventListener('clock', closeModal);