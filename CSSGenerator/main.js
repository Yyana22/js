
//range
const rangeTL = document.getElementById('tlr'),
    rangeTR = document.getElementById('trr'),
    rangeBL = document.getElementById('blr'),
    rangeBR = document.getElementById('brr');
//input result
const resultTL = document.getElementById('result-tlr'),
    resultTR = document.getElementById('result-trr'),
    resultBL = document.getElementById('result-blr'),
    resultBR = document.getElementById('result-brr');

const input = document.querySelectorAll('.input');
const cube = document.getElementById('cube');

const total = document.getElementById('totalResult');
const btn = document.getElementById('btn');

const changeRadius = () => {
    resultTL.innerHTML = rangeTL.value;
    resultTR.innerHTML = rangeTR.value;
    resultBL.innerHTML = rangeBL.value;
    resultBR.innerHTML = rangeBR.value;

    cube.style.borderRadius = rangeTL.value + '% ' + rangeTR.value + '% ' + rangeBR.value + '% ' + rangeBL.value + '%';
}

const totalResult = () => {
    total.innerHTML = rangeTL.value + ' ' + rangeTR.value + ' ' + rangeBR.value + ' ' + rangeBL.value + ' ';
}

for (node of input) {
    node.addEventListener('input', changeRadius);
}

btn.addEventListener('click', totalResult);