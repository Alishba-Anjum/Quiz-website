const Data = [
  {
    question: "What does HTML stands for?",
    options: [
      "Hypertext markup Language",
      "Hyperlink And Markup Language",
      "Hyper Machine Language",
      "Hyper Transfer Language",
    ],
    correctAns: 0,
  },
  {
    question: "Choose the correct HTML element for largest heading",
    options: ["<H6>", "<Head>", "<H1>", "<Heading>"],
    correctAns: 2,
  },
  {
    question: "Which is the correct element for inserting a breakline?",
    options: ["<hr>", "<break>", "<newLine>", "<br>"],
    correctAns: 3,
  },
  {
    question: "Which CSS property is used to control spacing between elements?",
    options: ["<padding>", "<margin>", "<border-spacing", "<spacing>"],
    correctAns: 0,
  },
  {
    question:
      "Which function is used to print content to the browser console in Javascript? ",
    options: ["log()", "console.log()", "print()", "display()"],
    correctAns: 1,
  },
  {
    question: "What does CSS stands for?",
    options: [
      "Copy style sheet",
      "Cascading Style Sheet",
      "Computer style sheet",
      "Colourfull style sheet",
    ],
    correctAns: 1,
  },
  {
    question: "What is the purpose of 'Var' keyword in javascript?",
    options: [
      "To declare a constant",
      "To declare a variable",
      "To declare a function",
      "To declare a loop",
    ],
    correctAns: 1,
  },
  {
    question: "Which tag is used to create an ordered list?",
    options: ["ol", "ul", "list", "li"],
    correctAns: 0,
  },
  {
    question: "What is the expression: `10 =='10' in javascript?",
    options: ["True", "Error", "False", "Undefined"],
    correctAns: 0,
  },
  {
    question:
      "What will be the output of the following javascript code? 'console.log(typeof 10);",
    options: ["Boolean", "String", "Undefined", "Number"],
    correctAns: 3,
  },
  {
    question:
      "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    options: ["push()", "pop()", "join()", "concat()"],
    correctAns: 0,
  },
  {
    question:
      'What will the following code output: console.log(Boolean("false"))?',
    options: ["true", "false", "Error", "undefined"],
    correctAns: 0,
  },
  {
    question: "What will the following code output: console.log(5 + null)?",
    options: ["5", "null", "undefined", "Error"],
    correctAns: 0,
  },
  {
    question: "Which property is used to change text color in CSS?",
    options: ["font-color", "text-color", "color", "change-color"],
    correctAns: 2,
  },
  {
    question: "Which tag is used to create hyperlink in HTML?",
    options: ["<href>", "<link>", "<a>", "<hyperlink>"],
    correctAns: 0,
  },
];
const main = document.querySelector(".container");
const questionElm = document.querySelector(".Questions");
const optionElements = document.querySelectorAll(".options");
const submitBtn = document.querySelector(".submit-btn");
const Score = document.querySelector(".score");
const loader = document.querySelector(".loader");
const disScore = document.querySelector(".display_score");

let currentQuiz = 0;
let score = 0;

function displayQuestion(questionIndex) {
  questionElm.textContent = Data[questionIndex].question;

  optionElements.forEach((option, index) => {
    option.textContent = Data[questionIndex].options[index];
  });
}

submitBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    const userAnswer = selectedOption;
    const correctAnswer = Data[currentQuiz].correctAns;
    if (userAnswer === correctAnswer) {
      score++;
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
    currentQuiz++;

    if (currentQuiz < Data.length) {
      displayQuestion(currentQuiz);
    } else {
      totalScore();
    }
  }
});

function totalScore() {
  main.style.display = "none";
  Score.style.display = "block";

  setTimeout(() => {
    Score.style.opacity = "0";
  }, 2000);

  if ((score / Data.length) * 100 < 50) {
    setTimeout(() => {
      disScore.innerHTML = `You scored ${
        (score / Data.length) * 100
      }% <br> <span>You Failed</span>`;
    }, 2000);
  } else {
    setTimeout(() => {
      disScore.innerHTML = `You scored ${
        (score / Data.length) * 100
      }% <br> <span id="pass">You Passed, Congratulations!</span>`;
    }, 2000);
  }

}

displayQuestion(currentQuiz);
