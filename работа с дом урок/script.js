// при клике на кнопку пропадает/появляется текст

// const div = document.getElementById('div');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     div.classList.toggle('hide');  // по сравнению с 2 и 3 способом, можно вызывать 2 функции
// })




// смена стилей через js
// const div = document.getElementById('div');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     div.style.fontSize = '70px';
//     div.style.color = 'green';
// })


//№2
// const btn = document.getElementById('btn');
// const showMesseg = () => {
//     alert('ты нажал на кнопку');
// }

//№ 3
// const btn = document.getElementById('btn');
// const showMesseg = () => {
//     alert('ты нажал на кнопку');
// }

// btn.onclick = showMesseg;


const div = document.querySelector('.p');

const showMesseg = () => {
    alert('hi');
}

div.addEventListener('mouseover', showMesseg); // mouseout отрабатывает событие, когда курсор мыши выходит из элемента. 1 - когда появляется на элементе
//div.addEventListener('mouseover', () => {
//     alert('hi');
// });