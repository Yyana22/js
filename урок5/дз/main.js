// все варианты ответов
const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option'); // поле с вариантами ответов

const question = document.getElementById('question'); // сам вопрос

const numberOfQuestion = document.getElementById('number-of-question'), // номер вопроса
    numberOfAllQuestions = document.getElementById('number-of-all-questions'); // количество всех вопросов

let indexOfQuestion, // индекс текущего вопроса
    indexOfPage = 0; // индекс страницы

const answersTraker = document.getElementById('answers-tracker'); //обертка для трекера
const btnNext = document.getElementById('btn-next'); // кнопка далее

let score = 0; // итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer'), // количество правильных ответов
    numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'), // количество всех вопросов (в модальном окне)
    btnTryAgain = document.getElementById('btn-try-again'); // кнопка "начать викторину заново"

const questions = [
    {
        question: 'Кого во время игры обычно нет на футбольном поле?',
        options: [
            'Защитников',
            'Полузащитников',
            'Правозащитников',
            'Нападающих',
        ],
        rightAnswer: 2,
    },
    {
        question: 'Какой из этих футбольных клубов базируется в Санкт-Петербурге?',
        options: [
            'Зенит',
            'Рубин',
            'Торпедо',
            'Ротор',
        ],
        rightAnswer: 0,
    },
    {
        question: 'Как в СССР назывался приз футбольной команде, отнявшей больше других очков у призёров чемпионата?',
        options: [
            'Гроза авторитетов',
            'Тайфун директоров',
            'Смерчь начальников',
            'Ураган боссов',
        ],
        rightAnswer: 0,
    }
]

numberOfAllQuestions.innerHTML = questions.length; // выводим количество вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // сам вопрос

    //мапим ответы
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; // установка номера текущей страницы
    indexOfPage++; // увеличение индекса страницы
}

let completedAnswers = []; // массив для уже заданных вопросов

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; // якорь для проверки одинаковых вопросов
    if (indexOfPage == questions.length) {
        quizOver() // функция на конец игры
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if (completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};


checkAnswer = el => {
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for (option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
};

// закрывает после правильного ответа варианты ответов + дает классы (дает класс правильного ответа, даже если ответили не правильно)
const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}

// удаление всех классов
const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
};

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTraker.appendChild(div);
    });
};

const updateAnswerTracker = status => {
    answersTraker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {
    if (!optionElements[0].classList.contains('disabled')) {
        alert('Вам нужно выбрать один из вариантов ответа');
    } else {
        randomQuestion();
        enableOptions();
    }
};

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', () => {
    validate();
});

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
});