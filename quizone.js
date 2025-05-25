const questions = [
    {
        question: "What does the term e-waste stand for?", 
        answers: [
            { text: "Emergency waste", correct: false},
            { text: "Environmental waste", correct: false},
            { text: "Electronic waste", correct: true},
            { text: "Everyday waste", correct: false}, 
        ]
    },
    {
        question: "Which of the following is NOT common e-waste?", 
        answers: [
            { text: "Laptops", correct: false},
            { text: "Toasters", correct: true},
            { text: "Mobile phones", correct: false},
            { text: "Televisions", correct: false},
        ]
    },
    {
        question: "Why is e-waste harmful to the environment?", 
        answers: [
            { text: "It makes the devices heavy", correct: false},
            { text: "It causes noise pollution", correct: false},
            { text: "It releases toxic materials", correct: true},
            { text: "It attracts pests", correct: false},
        ]
    },
    {
        question: "Which two toxic materials are often found in e-waste?", 
        answers: [
            { text: "Plastic and paper", correct: false},
            { text: "Lead and mercury", correct: true},
            { text: "Iron and zinc", correct: false},
            { text: "Aluminium and Glass", correct: false},
        ]
    },
    {
        question: "Improper disposal of e-waste can lead to:", 
        answers: [
            { text: "Better recycling", correct: false},
            { text: "Lower internet speed", correct: false},
            { text: "Health problems like cancer", correct: true},
            { text: "Higher phone bills", correct: false},
        ]
    },
    {
        question: "Recycling e-waste helps by:", 
        answers: [
            { text: "Making devices more expensive", correct: false},
            { text: "Conserving resources", correct: true},
            { text: "Polluting the oceans", correct: false},
            { text: "Slowing internet speeds", correct: false},
        ]
    },
    {
        question: "How many tonnes of e-waste were produced globally in 2022?", 
        answers: [
            { text: "A) 20 million tonnes", correct: false},
            { text: "B) 35 million tonnes", correct: false},
            { text: "C) 59.4 million tonnes", correct: true},
            { text: "D) 100 million tonnes", correct: false},
        ]
    },
    {
        question: "What percentage of global e-waste is properly recycled?", 
        answers: [
            { text: "A) 10.2%", correct: false},
            { text: "B) 17.4%", correct: true},
            { text: "C) 25.8%", correct: false},
            { text: "D) 50%", correct: false},
        ]
    },
    {
        question: "Which is a safe way to dispose of old electronics?", 
        answers: [
            { text: "A) Throwing them in regular bins", correct: false},
            { text: "B) Burning them", correct: false},
            { text: "C) Recycling at certified centers", correct: true},
            { text: "D) Burying in the backyard", correct: false},
        ]
    },
    {
        question: "Why is donating working electronics better than throwing them away?", 
        answers: [
            { text: "A) It increases pollution", correct: false},
            { text: "B) It helps others and reduces waste", correct: false},
            { text: "C) It saves storage space", correct: true},
            { text: "D) It boosts e-waste levels", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const goBackButton = document.getElementById("go-back-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! YAYAYAYYA!`;
    nextButton.style.display = "none";
    document.querySelector('.result-buttons').style.display = "flex";
}
document.getElementById("play-again-btn").addEventListener("click", () => {
    document.querySelector('.result-buttons').style.display = "none";
    startQuiz();
});

goBackButton.addEventListener("click", () => {
    window.location.href = "Quizzeshome.html";
});

function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
})
goBackButton.addEventListener("click", () => {
    window.location.href = "Quizzeshome.html";
});



startQuiz();
