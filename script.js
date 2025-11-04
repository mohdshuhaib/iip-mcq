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
let answers = []; // Initialize as empty. We'll set the size once the page loads.

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- !! FIX 1: Check if questions loaded !! ---
    // This stops the crash.
    if (typeof allQuestions === 'undefined' || allQuestions.length === 0) {
        questionText.textContent = "Error: questions.js file not loaded or is empty. Please check the file and try again.";
        console.error("allQuestions is not defined or empty.");
        return; // Stop execution
    }

    // Now it's safe to initialize the answers array
    answers = new Array(allQuestions.length).fill(null);

    // Event Listeners
    nextBtn.addEventListener('click', showNextQuestion);
    prevBtn.addEventListener('click', showPreviousQuestion);
    shuffleBtn.addEventListener('click', shuffleQuestions);
    jumpBtn.addEventListener('click', jumpToQuestion);
    jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') jumpToQuestion();
    });

    // Start the quiz
    shuffleQuestions(); // This will shuffle and then call loadQuestion(0)
});

// --- Core Functions ---

function loadQuestion(index) {
    // Reset card animation
    questionCard.style.animation = 'none';
    void questionCard.offsetWidth; // Trigger reflow
    questionCard.style.animation = 'fadeIn 0.4s ease-out';

    // --- !! FIX 2: Load by SHUFFLED index, not by ID !! ---
    // This makes shuffling work.
    const question = allQuestions[index];
    
    if (!question) {
        console.error(`Question at index ${index} not found.`);
        questionText.textContent = `Error: Question at index ${index} not found.`;
        optionsList.innerHTML = '';
        relatedContainer.classList.remove('show');
        return;
    }
    
    currentQuestionIndex = index;
    
    // Update UI
    // We show the question ID, but the counter is based on the shuffled order.
    questionText.textContent = `${question.id}. ${question.question}`;
    questionCounter.textContent = `Question ${index + 1} of ${allQuestions.length}`;
    
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
    alert("Questions have been shuffled!");
}

function jumpToQuestion() {
    // --- !! FIX 3: Jump to ID, not index !! ---
    // This finds the right question ID even after shuffling.
    const qNum = parseInt(jumpInput.value); // This is the question ID (e.g., 5)
    if (isNaN(qNum)) {
        alert("Please enter a number.");
        return;
    }

    // Find the index in the *current shuffled array* that has this question ID
    const targetArrayIndex = allQuestions.findIndex(q => q.id === qNum);

    if (targetArrayIndex !== -1) {
        loadQuestion(targetArrayIndex); // Load that array index
        jumpInput.value = ''; // Clear input
    } else {
        alert(`Question with ID ${qNum} not found.`);
    }
}
