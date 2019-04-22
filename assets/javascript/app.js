
let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: "Which instrament do I favor?",
        answer: ['Drums', 'Guitar', 'Piano', 'Sax'],
        correct: 1
    },

    {
        title: "Whats my favorite type of music?",
        answer: ['Hip Hop', 'R&B', 'Alternative', 'Jazz'],
        correct: 1
    },

    {
        title: "Who do you think I believe is the best rapper ever?",
        answer: ['Nas', 'Biggie', 'Jay-Z', 'Rakim'],
        correct: 1
    },

    {
        title: "Which decade of Hip Hop do I favor?",
        answer: ['90s', '80xs', 'New Millinium', '2019'],
        correct: 1
    },

    {
        title: "Which of these artist have I recorded with?",
        answer: ['Lloyd Banks', '50 Cent', 'Tony Yayo', 'Young Buck'],
        correct: 1
    },

    {
        title: "Which is the correct birth date of Hip Hop?",
        answer: ['1973', '1975', '1978', '1980'],
        correct: 1
    },

    {
        title: "Who started Def Jam?",
        answer: ['Russel Simons', 'Jay-Z', 'Rick Rubin', 'Leor Cohen'],
        correct: 1
    },

    {
        title: "Which is the most legendary Hip Hop studio of all time?",
        answer: ['Power Play Studios', 'D&D Studios', 'Quad Studios', 'Battery Studios'],
        correct: 1
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

    $('.quiz a').click(function (e) {
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
    for (var i = 0; i < question.answwers.length; i++) {
        $('.quiz ul').append("<li id='" + i + "'>" + question.answwers[i] + "</li >");
    }


    function checkAnswer() {
        let question = questions[currentQuestion];
        if (question.correct === guess) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            showSummary();
        } else {
            showQuestion();
        }
    }
    function showSummary() {
        $('.quiz').hide();
        $('.summary').show();
        $('summary p').text("Congrats you scored " + scored + " out of " + questions.length + " correct!")
    }

    function restart.quiz() {
        $('.summary').hide();
        $('.quiz').show();
        score = 0;
        currentQuestion = 0;
        showQuestion();
    }