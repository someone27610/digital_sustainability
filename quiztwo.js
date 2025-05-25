const questions = [
    {
        question: "What is digital sustainability?", 
        answers: [
            { text: "Using old phones forever", correct: false},
            { text: "Using technology responsibly to reduce harm", correct: true},
            { text: "Deleting social media accounts", correct: false},
            { text: "Upgrading devices every year", correct: false}, 
        ]
    },
    {
        question: "Which is an environmental impact of digital tech?", 
        answers: [
            { text: "Better phone signals", correct: false},
            { text: "Reduced data speed", correct: false},
            { text: "High energy use", correct: true},
            { text: "Healthier forest", correct: false},
        ]
    },
    {
        question: "Digital sustainability can help businesses by:", 
        answers: [
            { text: "Increasing pollution", correct: false},
            { text: "Saving money and energy", correct: true},
            { text: "Hiding data", correct: false},
            { text: "Increasing waste", correct: false},
        ]
    },
    {
        question: "In this context, -electronic waste- means:", 
        answers: [
            { text: "Paper-based waste", correct: false},
            { text: "Internet downloads", correct: false},
            { text: "Thrown-away digital devices", correct: true},
            { text: "Emails and messages", correct: false},
        ]
    },
    {
        question: "Which company practices digital sustainability?", 
        answers: [
            { text: "Apple", correct: true},
            { text: "McDonald’s", correct: false},
            { text: "Nike", correct: false},
            { text: "Coca-Cola", correct: false},
        ]
    },
    {
        question: "Why extend the lifespan of devices?", 
        answers: [
            { text: "To avoid new features", correct: false},
            { text: "To look outdated", correct: false},
            { text: "To reduce environmental impact", correct: true},
            { text: "To break them sooner", correct: false},
        ]
    },
    {
        question: "Which is a step to promote digital sustainability?", 
        answers: [
            { text: "Buy new phones yearly", correct: false},
            { text: "Leave devices charging all day", correct: false},
            { text: "Repair and reuse devices", correct: true},
            { text: "Use devices only at night", correct: false},
        ]
    },
    {
        question: "How does energy use relate to digital sustainability?", 
        answers: [
            { text: "More energy use is better", correct: false},
            { text: "Less energy = more pollution", correct: false},
            { text: "Higher energy use causes harm", correct: true},
            { text: "Energy has no role", correct: false},
        ]
    },
    {
        question: "Digital tools can:", 
        answers: [
            { text: "Make devices overheat", correct: false},
            { text: "Track and reduce impact", correct: true},
            { text: "Stop recycling", correct: false},
            { text: "Waste more electricity", correct: false},
        ]
    },
    {
        question: "Why does digital sustainability matter to society?", 
        answers: [
            { text: "To make phones cheaper", correct: false},
            { text: "To protect the planet", correct: true},
            { text: "To make internet slower", correct: false},
            { text: "To use more energy", correct: false},
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
    window.location.href = "index.html"; // 👈 Replace with your homepage URL or path
});

startQuiz();
