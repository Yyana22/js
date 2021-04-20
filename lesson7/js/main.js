// tabs

$('.card').on('click', function () {
    let currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active'); // позволяет выбрать элемент с конкретным индексом из набора выбранных элементов eq(index)
});


// гамбургер меню (при уменьшении экрана, меняется меню)

$('.hamburger').on('click', function () {
    $('.head__menu').toggle();
});

$('.menu-close').on('click', function () {
    $('.menu-close').hide();
});

// паралакс

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);


// слайдер

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000,  // задержка
    },
});

// карта

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.311748732999206, 44.017157394555866],
        controls: ['zoomControl', 'geolocationControl'],
        zoom: 10
    });
    var myPlacemark = new ymaps.Placemark([56.311748732999206, 44.017157394555866], {}, {
        iconLayout: 'default#imageWithContent',
        iconImageSize: [32, 40],
    });

    myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
        closeButton: false
    });

    myMap.geoObjects.add(myPlacemark);
}

//валидация jQuery Validation

$.validator.addMethod("regex", function (value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
}, "Please check your input."
);

$("form").validate({
    rules: {
        firstName: {
            required: true,
            regex: "[A-Za-z]{1,32}"
        },
        phoneNumber: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    },
    messages: {
        firstName: "Введите ваше имя правильно",
        phoneNumber: "Введите ваш номер"
    }
});