const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let wrongAnswers = [];

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Savolni yuklash
function loadQuestion(index) {
  quizContainer.innerHTML = ""; // Avvalgi savolni tozalash
  const questionData = quizData[index];

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${index + 1}. ${questionData.question}`;
  questionTitle.className = "question-text";
  quizContainer.appendChild(questionTitle);

  // Shuffle the options before displaying
  const optionsArray = Object.entries(questionData.options);
  shuffleArray(optionsArray);

  optionsArray.forEach(([key, value]) => {
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question${index}`;
    input.value = key;

    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${value}`));
    quizContainer.appendChild(label);
    quizContainer.appendChild(document.createElement("br"));
  });
}

// Javobni tekshirish va keyingi savolga o'tish
function checkAnswer() {
  const selectedOption = document.querySelector(
    `input[name="question${currentQuestionIndex}"]:checked`
  );

  if (!selectedOption) {
    alert("Iltimos, javobni tanlang!");
    return;
  }

  const questionData = quizData[currentQuestionIndex];
  const correctAnswer = questionData.correctAnswer;

  if (selectedOption.value === correctAnswer) {
    correctAnswersCount++;
  } else {
    wrongAnswers.push({
      question: questionData.question,
      selectedAnswer: `${selectedOption.value}. ${questionData.options[selectedOption.value]}`,
      correctAnswer: `${correctAnswer}. ${questionData.options[correctAnswer]}`,
    });
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
}

// Natijani ko'rsatish
function showResult() {
  quizContainer.innerHTML = ""; // Quizni tozalash
  submitButton.style.display = "none"; // Submit tugmachasini yashirish

  // Natija statistikasi
  resultContainer.innerHTML = `<p>Siz ${quizData.length} ta savoldan ${correctAnswersCount} ta to‘g‘ri javob berdingiz!</p>`;

  if (wrongAnswers.length > 0) {
    const wrongAnswersContainer = document.createElement("div");
    wrongAnswersContainer.className = "wrong-answers-container";

    const wrongAnswersTitle = document.createElement("h3");
    wrongAnswersTitle.textContent = "Noto'g'ri javoblaringiz:";
    wrongAnswersContainer.appendChild(wrongAnswersTitle);

    wrongAnswers.forEach((item, index) => {
      const wrongAnswerDiv = document.createElement("div");
      wrongAnswerDiv.innerHTML = `
        <p>${index + 1}. <span class="question-text">${item.question}</span></p>
        <p>Sizning javobingiz: <span class="wrong-answer">${item.selectedAnswer}</span></p>
        <p>To'g'ri javob: <span class="correct-answer">${item.correctAnswer}</span></p>
      `;
      wrongAnswersContainer.appendChild(wrongAnswerDiv);
    });

    resultContainer.appendChild(wrongAnswersContainer);
  }
}

// Event listener
submitButton.addEventListener("click", checkAnswer);

// Dastlabki savolni yuklash
loadQuestion(currentQuestionIndex);
