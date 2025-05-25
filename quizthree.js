const questions = [
    {
        question: "What is a digital footprint", 
        answers: [
            { text: "Your shoe size", correct: false},
            { text: "Data left from online activity", correct: true},
            { text: "A fingerprint", correct: false},
            { text: "A tech company", correct: false}, 
        ]
    },
    {
        question: "Active vs. passive digital footprints – what's the difference", 
        answers: [
            { text: "Passive is louder", correct: false},
            { text: "Active is unintentional", correct: false},
            { text: "Active is deliberate, passive is automatic", correct: true},
            { text: "Passive happens offline", correct: false},
        ]
    },
    {
        question: "Which are active digital footprints?", 
        answers: [
            { text: "Likes and posts on social media", correct: false},
            { text: "Browsing without logging in", correct: true},
            { text: "Background app data", correct: false},
            { text: "Auto-updates", correct: false},
        ]
    },
    {
        question: "Why is it called an “active” digital footprint?", 
        answers: [
            { text: "Because it’s always moving", correct: false},
            { text: "Because it’s shared on purpose", correct: true},
            { text: "Because it’s a secret", correct: false},
            { text: "Because it’s deleted quickly", correct: false},
        ]
    },
    {
        question: "One risk of an active digital footprint is:", 
        answers: [
            { text: "Faster Wi-Fi", correct: false},
            { text: "Identity theft", correct: true},
            { text: "Getting free devices", correct: false},
            { text: "Lower phone battery", correct: false},
        ]
    },
    {
        question: "What creates a passive digital footprint?", 
        answers: [
            { text: "Manual social media posts", correct: false},
            { text: "Data automatically collected online", correct: true},
            { text: "Deleting cookies", correct: false},
            { text: "Turning off Wi-Fi", correct: false},
        ]
    },
    {
        question: "Which are examples of passive footprints?", 
        answers: [
            { text: "Blog comments and photos", correct: false},
            { text: "Email replies", correct: false},
            { text: "Location tracking and cookies", correct: true},
            { text: "Text messages", correct: false},
        ]
    },
    {
        question: "Why are passive footprints a privacy concern?", 
        answers: [
            { text: "They're always helpful", correct: false},
            { text: "They use no electricity", correct: false},
            { text: "They are collected silently", correct: true},
            { text: "They erase your data", correct: false},
        ]
    },
    {
        question: "How to reduce passive digital tracking?", 
        answers: [
            { text: "Use public Wi-Fi", correct: false},
            { text: "Accept all cookies", correct: false},
            { text: "Use privacy settings or VPNs", correct: true},
            { text: "Share passwords", correct: false},
        ]
    },
    {
        question: "Why manage your digital footprint carefully?", 
        answers: [
            { text: "To make your phone faster", correct: false},
            { text: "To protect your privacy and reputation", correct: true},
            { text: "To get more followers", correct: false},
            { text: "To delete the internet", correct: false},
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
