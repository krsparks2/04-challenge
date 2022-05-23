const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const setTime = document.getElementById('.timer')

(function() {
  var sec = 60;
  function startTimer(){
      var timer = setInterval(function(){
          sec--;
          document.getElementById('timer').innerHTML='00:'+sec;
          if (sec < 0) {
              clearInterval(timer);
              alert("Time is up!")
          }
      }, 1000);
  }
  document.getElementById('incorrect').addEventListener('click', function() {
      sec -= 5;
      document.getElementById('timer').innerHTML='00:'+sec;
  });
  startTimer();
})();

function quiz(){
  output = [];
  var answers;
  for (var i=0; i<questions.length; i++)
  {
    answers = [];
    for (letter in currentQuestion.answers) //adds html radio button for each answer to the questions
    {
      answers.push(
        '<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>
      );
    }
    output.push(//adds question and answers to output
      <div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>
    );
  }
  quizContainer.innerHTML = output.join('');//prints quiz to page 
}

function showResults(){}

// displays quiz immdiately 
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


questions = [
  {
    question: "How can you get the type of argument passed to a function?",
    answers: {
      a: "Using typeof operator",
      b: "Using getType function",
      c: "Both of the above",
      d: "None of the above"
    },
    correctAnswer: "a"
  },
  {
    question: "Which built-in method removes the last element from an array and returns that element?",
    answers: {
      a: "last()",
      b: "get()",
      c: "pop()",
      d: "slice()"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following function of Array object calls a function for each element in the array?",
    answers: {
      a: "concat()",
      b: "every()",
      c: "filter()",
      d: "forEach()"
    },
    correctAnswer: "d"
  },
  {
    question: "Which built-in method returns the calling string value converted to lower case?",
    answers: {
      a: "toLowerCase()",
      b: "toLower()",
      c: "changeCase(case)",
      d: "None of the above"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is correct about features of JavaScript?",
    answers: {
      a: "JavaScript is is complementary to and integrated with HTML.",
      b: "JavaScript is open and cross-platform.",
      c: "Both of the above",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    answers: {
      a: "slice()",
      b: "split()",
      c: "substr()",
      d: "search()"
    },
    correctAnswer: "c"
  }
];