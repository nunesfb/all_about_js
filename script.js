// script.js

let currentQuestionIndex = 0;
let timerInterval; // Para armazenar o intervalo do temporizador
const maxTime = 30; // Tempo máximo para cada questão

const topicEl = document.getElementById("topic");
const questionEl = document.getElementById("question");
const codeEl = document.querySelector("#code code");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const timerEl = document.getElementById("timer");

function startTimer() {
  let timeLeft = maxTime;
  timerEl.textContent = `Tempo restante: ${timeLeft}s`;

  // Atualiza o temporizador a cada segundo
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Tempo restante: ${timeLeft}s`;

    // Para o temporizador quando chegar a 0
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Tempo esgotado!";
      nextButton.style.display = "block"; // Exibe o botão para continuar
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerEl.textContent = ""; // Limpa o contador
}

function loadQuestion() {
  feedbackEl.textContent = "";
  nextButton.style.display = "none";

  const currentQuestion = quizData[currentQuestionIndex];
  topicEl.textContent = `Tópico: ${currentQuestion.topic}`;
  questionEl.textContent = currentQuestion.question;

  // Formata o código com Prism.js
  codeEl.textContent = currentQuestion.code.trim();
  Prism.highlightElement(codeEl);

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const optionEl = document.createElement("div");
    optionEl.textContent = option;
    optionEl.classList.add("option");
    optionEl.addEventListener("click", () =>
      selectAnswer(optionEl, currentQuestion.answer, currentQuestion.explanation)
    );
    optionsContainer.appendChild(optionEl);
  });

  // Reinicia e inicia o temporizador para a nova questão
  stopTimer(); // Garante que o temporizador anterior pare
  startTimer();
}

function selectAnswer(selectedOption, correctAnswer, explanation) {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("correct", "incorrect"));

  if (selectedOption.textContent === correctAnswer) {
    selectedOption.classList.add("correct");
    feedbackEl.textContent = `Correto!\n\n${explanation}`;
    nextButton.style.display = "block"; // Exibe o botão para ir para a próxima questão
    stopTimer(); // Para o temporizador ao selecionar a resposta correta
  } else {
    selectedOption.classList.add("incorrect");
    feedbackEl.textContent = "Incorreto. Tente novamente!";
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    feedbackEl.textContent = "Você completou o quiz!";
    topicEl.textContent = "";
    questionEl.textContent = "";
    codeEl.textContent = "";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    stopTimer(); // Certifica-se de parar o temporizador ao final do quiz
  }
});

// Inicializar o quiz
loadQuestion();
