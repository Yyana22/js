
//    Задание 1:

let name = 'Москва';
let country = 'Россия';
let size = 12636312;
let availabilityFootballStadium = true;
console.log(name + ',', country + ',', size + ' человек,', availabilityFootballStadium);


//    Задание 2:

let height = 40;
let width = 70;
console.log(height * width + ' см^2');

//    Задание 3:

let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;

let distance = speedOfSecond * time + speedOfFirst * time;

console.log('Расстояние между городами равно ' + distance + ' км');

/*
    Задание 4:

    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}

/*
    Задание 5:

    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/


const randomNumber = Math.floor(Math.random() * 100);

switch (true) {
    case (randomNumber < 20):
        console.log("randomNumber меньше 20");
        break;
    case (randomNumber > 50):
        console.log("randomNumber больше 50");
        break;
    case (randomNumber > 20 && randomNumber < 50):
        console.log("randomNumber больше 20, и меньше 50");
        break;
}



