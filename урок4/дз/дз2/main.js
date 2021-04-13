const tabs = document.getElementById('tabs');
const tabs2 = document.getElementById('tabs2');
const content = document.querySelectorAll('.content');
const content2 = document.querySelectorAll('.content2');


const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content == currTab) {
            content[i].classList.add('active');
        }
    }
})

const changeClass2 = el => {
    for (let i = 0; i < tabs2.children.length; i++) {
        tabs2.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs2.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass2(e.target);
    for (let i = 0; i < content2.length; i++) {
        content2[i].classList.remove('active');
        if (content2[i].dataset.content == currTab) {
            content2[i].classList.add('active');
        }
    }
})