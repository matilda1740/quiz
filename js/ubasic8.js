const existAnswers = ['A', 'A', 'C', 'C'];
const nihilAnswers = ['C', 'C', 'A', 'A'];
// const wellAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const spanWords = document.querySelector('#span-words');

let existScore = 0; 
let nihilScore = 0;
let wellScore = 0;

// determine who 
const determineWho = () => {
    if (nihilScore > existScore && nihilScore > wellScore ) {
        spanWords.textContent = 'Nihilist';
        score = nihilScore;
    }
    else if (existScore > nihilScore && existScore > wellScore) {
        spanWords.textContent = 'Existentialist';
        score = existScore;
    }
    else {
        spanWords.textContent = 'Ambivalent';
        score = wellScore;
    }
};

// displaying the score

const displayScore = () => {
    scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const resultTimer = setInterval(() => {
        result.querySelector('#span-score').textContent = `${output}%`;
        if (output === score) {
            clearInterval(resultTimer);
        } else {
            output++
        }
    }, 10);
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value,
         form.q3.value, form.q4.value ];

    // checking answers

    userAnswers.forEach((answer, index) => {
        if(answer === existAnswers[index]) {
            existScore += 25;
        }
        else if (answer === nihilAnswers[index]) {
            nihilScore += 25;
        }
        else {
            wellScore += 25;
        }
    });
    determineWho();
    displayScore();
    form.reset();
});

// window object (global object)

