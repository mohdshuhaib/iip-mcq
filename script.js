// --- DOM Elements ---
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const questionCounter = document.getElementById('question-counter');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const jumpInput = document.getElementById('question-jump');
const jumpBtn = document.getElementById('jump-btn');
const relatedContainer = document.getElementById('related-container');
const relatedList = document.getElementById('related-list');
const questionCard = document.getElementById('question-card');

// --- State ---
let currentQuestionIndex = 0;
let questionOrder = Array.from(Array(allQuestions.length).keys()); // [0, 1, 2, ... N-1]
let answers = new Array(allQuestions.length).fill(null); // Store user's answers

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    shuffleQuestions(); // Shuffle on first load
    
    // Event Listeners
    nextBtn.addEventListener('click', showNextQuestion);
    prevBtn.addEventListener('click', showPreviousQuestion);
    shuffleBtn.addEventListener('click', shuffleQuestions);
    jumpBtn.addEventListener('click', jumpToQuestion);
    jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') jumpToQuestion();
    });
});

// --- Core Functions ---

function loadQuestion(index) {
    // Reset card animation
    questionCard.style.animation = 'none';
    void questionCard.offsetWidth; // Trigger reflow
    questionCard.style.animation = 'fadeIn 0.4s ease-out';

    // Find the question using the original ID (index + 1)
    const questionIndexInArray = allQuestions.findIndex(q => q.id === (index + 1));
    if (questionIndexInArray === -1) {
        console.error(`Question with ID ${index + 1} not found in allQuestions array.`);
        // Handle error, maybe show a message
        questionText.textContent = `Error: Question ${index + 1} not found. Did you add it to questions.js?`;
        optionsList.innerHTML = '';
        relatedContainer.classList.remove('show');
        return;
    }
    
    const question = allQuestions[questionIndexInArray];
    
    currentQuestionIndex = index;
    
    // Update UI
    questionText.textContent = `${question.id}. ${question.question}`;
    questionCounter.textContent = `Question ${index + 1} / ${allQuestions.length}`;
    optionsList.innerHTML = '';
    relatedContainer.classList.remove('show');
    relatedList.innerHTML = '';

    // Create option buttons
    question.options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => handleOptionClick(button, option, question));
        li.appendChild(button);
        optionsList.appendChild(li);
    });

    // Restore saved answer if it exists
    if (answers[index]) {
        showAnswer(answers[index].selectedOption, question.answer);
        showRelatedQuestions(question);
    }

    // Update pagination buttons
    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === allQuestions.length - 1 ? 'none' : 'block';
}

function handleOptionClick(selectedButton, selectedOption, question) {
    // Prevent clicking if answer is already saved
    if (answers[currentQuestionIndex]) return;

    // Save the answer
    answers[currentQuestionIndex] = { selectedOption, correctAnswer: question.answer };

    // Show correct/wrong styles
    showAnswer(selectedOption, question.answer);

    // Show related questions
    showRelatedQuestions(question);
}

function showAnswer(selectedOption, correctAnswer) {
    const options = optionsList.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.add('disabled'); // Disable all options
        if (opt.textContent === correctAnswer) {
            opt.classList.add('correct');
        } else if (opt.textContent === selectedOption) {
            opt.classList.add('wrong');
        }
    });
}

function showRelatedQuestions(question) {
    if (!question.related || question.related.length === 0) {
        relatedContainer.classList.remove('show');
        return;
    }

    relatedList.innerHTML = ''; // Clear previous
    question.related.forEach(relatedId => {
        const relatedQ = allQuestions.find(q => q.id === relatedId);
        if (relatedQ) {
            const item = document.createElement('div');
            item.classList.add('related-item');
            item.innerHTML = `
                <p>${relatedQ.id}. ${relatedQ.question}</p>
                <span>Answer: ${relatedQ.answer}</span>
            `;
            relatedList.appendChild(item);
        }
    });

    relatedContainer.classList.add('show');
}

// --- Navigation & Control Functions ---

function showNextQuestion() {
    if (currentQuestionIndex < allQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function shuffleQuestions() {
    // Fisher-Yates Shuffle Algorithm
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    // Reset state
    answers.fill(null);
    // Reload the first question (which will be a new, random Q1)
    loadQuestion(0);
    // Alert user
    alert("Questions have been shuffled!");
}

function jumpToQuestion() {
    const qNum = parseInt(jumpInput.value);
    if (qNum >= 1 && qNum <= allQuestions.length) {
        loadQuestion(qNum - 1); // -1 because arrays are 0-indexed
        jumpInput.value = ''; // Clear input
    } else {
        alert(`Please enter a number between 1 and ${allQuestions.length}.`);
    }
}
