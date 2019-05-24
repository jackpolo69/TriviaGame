let timer;
let counter = 5;
let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: "Which instrument do I favor?",
        answer: ['Drums', 'Guitar', 'Piano', 'Sax'],
        correct: 0
    },

    {
        title: "Whats my favorite type of music?",
        answer: ['Hip Hop', 'R&B', 'Alternative', 'Jazz'],
        correct: 0
    },

    {
        title: "Who do you think I believe is the best rapper ever?",
        answer: ['Nas', 'Biggie', 'Jay-Z', 'Rakim'],
        correct: 0
    },

    {
        title: "Which decade of Hip Hop do I favor?",
        answer: ['90s', '80xs', 'New Millennium', '2019'],
        correct: 0
    },

    {
        title: "Which of these artist have I recorded with?",
        answer: ['Lloyd Banks', '50 Cent', 'Tony Yayo', 'Young Buck'],
        correct: 0
    },

    {
        title: "Which is the correct birth date of Hip Hop?",
        answer: ['1973', '1975', '1978', '1980'],
        correct: 0
    },

    {
        title: "Who started Def Jam?",
        answer: ['Russel Simmons', 'Jay-Z', 'Rick Rubin', 'Leor Cohen'],
        correct: 0
    },

    {
        title: "Which is the most legendary Hip Hop studio of all time?",
        answer: ['Power Play Studios', 'D&D Studios', 'Quad Studios', 'Battery Studios'],
        correct: 0
    },
];



$(document).ready(function () {

    $('.start-quiz').click(function (e) {
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });

    $('.quiz ul').on('click', 'li', function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.submit-answer').click(function (e) {
        e.preventDefault();
        if ($('li.selected').length) {
            let guess = parseInt($('li.selected').attr('id'));
            checkAnswer(guess);
        } else {
            alert('Please select an answer');
        }
    });

    $('.summary a').click(function (e) {
        e.preventDefault();
        resetQuiz();
    });
});



function showQuestion() {
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for (var i = 0; i < question.answer.length; i++) {
        $('.quiz ul').append("<li class='answer' id='" + i + "'>" + question.answer[i] + "</li >");
    }
    timer = setInterval(countDown, 1000);
}
function countDown() {
    counter--
    $(".counter").text(counter)
    if (counter === 0) {
        clearInterval(timer)
        counter = 5
        currentQuestion++
        showQuestion()
    }
}

function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if (question.correct === guess) {
        score++;
    }
    currentQuestion++;
    clearInterval(timer)
        counter = 5
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    }
}

function showSummary() {
    $('.quiz').hide();
    $('.summary').show();
    $('.summary-text').text("Congrats you scored " + score + " out of " + questions.length + " correct!")
}

function restartQuiz() {
    $('.summary').hide();
    $('.quiz').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
}
