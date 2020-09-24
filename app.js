let questions = [
    {
        question: "Ano ang tagalog ng Unsa?",
        correctAnswer: "Ano",
		choices: [
			"Ano",
			"Bakit",
			"Kailan",
			"Sino"
		]
    },
    {
        question: "Ano ang tagalog ng Ngano?",
        correctAnswer: "Bakit",
		choices: [
			"Ano",
			"Bakit",
			"Kailan",
			"Sino"
		]
    },
    {
        question: "Ano ang tagalog ng Kanus-a?",
        correctAnswer: "Kailan",
		choices: [
			"Ano",
			"Bakit",
			"Kailan",
			"Sino"
		]
    },
    {
        question: "Ano ang tagalog ng Kinsa?",
        correctAnswer: "Sino",
		choices: [
			"Ano",
			"Bakit",
			"Kailan",
			"Sino"
		]
    }
]



let DOM = {
    choices: document.getElementById('choices'),
    question: document.querySelector('.question'),
    btnConfirm: document.querySelector('.confirm'),
    btnNext: document.querySelector('.next'),
    btnStart: document.querySelector('.start'),
}




let randomQuestions = questions.sort(() => Math.random() - .5)
let currentIndex = -1
let currentQuestion;
let answer;
let buttonPressed;

function init(){
    clear();
}


DOM.btnStart.addEventListener('click', nextQuestion);
DOM.btnConfirm.addEventListener('click', checkAnswer);
DOM.btnNext.addEventListener('click', nextQuestion);

function nextQuestion(){
    clear();
    DOM.btnStart.classList.add('hide')
    DOM.btnNext.classList.add('hide')
    DOM.btnConfirm.classList.remove('hide')
    currentIndex < randomQuestions.length-1 ? currentIndex++ : currentIndex = 0;
    currentQuestion = randomQuestions[currentIndex]
    DOM.question.textContent = currentQuestion.question
    let randChoices = currentQuestion.choices.sort(() => Math.random() - .5)
    randChoices.forEach(choice => {
        let newChoice = document.createElement('button')
        newChoice.classList.add('btn', 'choice', 'neutral')
        newChoice.textContent = choice
        newChoice.addEventListener('click', setAnswer)
        DOM.choices.appendChild(newChoice)
    });
}

function setAnswer(e){
    buttonPressed = e.target;
    answer = buttonPressed.textContent;
    let choices = Array.from(DOM.choices.children);
    choices.forEach(element => {
        buttonPressed === element ? element.classList.add('chosen') : element.classList.remove('chosen')
    });
    console.log("Your answer is", buttonPressed)
}

function checkAnswer(e){
    console.log(`You will edit ${buttonPressed.classList}`);
    if(answer === currentQuestion.correctAnswer){
        buttonPressed.classList.remove('neutral')
        buttonPressed.classList.add('correct')
        DOM.btnConfirm.classList.add('hide')
        DOM.btnNext.classList.remove('hide')
    } else{
        console.log('wrong')
        buttonPressed.classList.remove('neutral')
        buttonPressed.classList.add('wrong')
    }
}










function clear() {
    while(DOM.choices.firstElementChild){
        DOM.choices.removeChild(DOM.choices.firstElementChild);
    }
}

init();




























// function startQuiz(){
//     reset();
//     currIndex++;
//     showQuestion(randomQuestions[currIndex])
    
// }

// function showQuestion(question){
//     DOM.question.textContent = question.question;
//     let randChoices = question.choices.sort(() => Math.random() - .5)
//     randChoices.forEach(element => {
//         let button = document.createElement('button');
//         button.classList.add('btn', 'choice', 'neutral');
//         button.innerText = element;
//         button.addEventListener('click', chooseAnswer);
//         DOM.choices.appendChild(button);
//     });
    
// }


// function chooseAnswer(e){
//     let buttonPressed = e.target;
//     let buttons = Array.from(DOM.choices.children);
//     buttons.forEach(element => {
//         if(element === buttonPressed){
//             element.classList.add('chosen');
//             chosenAnswer = element.innerText;
//         } else{
//             element.classList.remove('chosen');
//         }
//     });

//     DOM.btnConfirm.addEventListener('click', checkAnswer);

// }

// function checkAnswer(){
//     if(chosenAnswer === randomQuestions[currIndex].correctAnswer){
//         answer.classList.add('correct');
//     }

// }

// function showCorrect(){

// }

// function showNext(){

// }





// function reset() {
//     while(DOM.choices.firstElementChild){
//         DOM.choices.removeChild(DOM.choices.firstElementChild);
//     }
// }


// startQuiz();













