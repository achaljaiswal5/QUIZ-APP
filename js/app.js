const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JAVASCRIPT",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Casecading Style sheet",
    c: "Jason Object Notation",
    d: "Helicopter Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = ` ${index + 1}) ${data.que} `;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

//initial call:

//submit-btn call to check the answer
submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

//getAnswer fnx to check which options is clicked and get  its value
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <h3> THANK YOU FOR PLAYING 
  QUIZ</h3> 
  <H2> ${right} / ${total}</H2>`;
};

loadQuestion();
