/* I have to create a function to generate a quiz. The function will need four inputs:
the quiz questions, a place to put the quiz, a place for the results, and submit button */

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combining output list into one string of html
        quizContainer.innerHTML = output.join('');
    }

    // show result
function showResults(questions, quizContainer, resultsContainer){
    // gather answer containers from our quiz
var answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
var userAnswer = '';
var numCorrect = 0;

// for each question...
for(var i=0; i<questions.length; i++){

    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    // if answer is correct
    if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect=numCorrect+2;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
    }
// if answer is wrong or blank
    else{
        // color the answers red
        answerContainers[i].style.color = 'red';
    }
    
}


// show number of correct answers out of total
resultsContainer.innerHTML ='Your scores is ' + numCorrect +'%' + ' out of ' + (questions.length*2) + '%';
// alert('Your scores is ' + numCorrect +'%' + ' out of ' + (questions.length*2) + '%');
}

// show the questions
showQuestions(questions, quizContainer);

// when user clicks submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

}
onsubmit= function clearRadio(){
document.getElementById("quiz").reset();
}

var myQuestions = [
{
    question: "1. What is 10/2?",
    answers: {
        a: '3',
        b: '5',
        c: '11'
    },
    correctAnswer: 'b'
},
{
    question: "2. What is 30/3?",
    answers: {
        a: '3',
        b: '5',
        c: '10'
    },
    correctAnswer: 'c'
},
{
    question: "3. Given a matrix-A, what is the transpose of the matrix?",
    answers: {
        a: '/A*A/',
        b: '(TA)',
        c: '/AT/',
        d: 'AT'
    },
    correctAnswer: 'd'
},
{
    question: "4. What is the determinat of a matrix-A?",
    answers: {
        a: '/A/',
        b: '(A-AT)',
        c: '(/A/)2',
        d: '(/A/)/2'
    },
    correctAnswer: 'a'
},
{
    question: "5. One of these defined a square matrix",
    answers: {
        a: '3 by 2',
        b: 'n by m',
        c: 'n by n',
        d: '2 by 1'
    },
    correctAnswer: 'c'
},
{
    question: "6. All of these are types of computer virus except:",
    answers: {
        a: 'macro virus',
        b: 'boot-sector virus',
        c: 'warm booting virus',
        d: 'file infection virus'
    },
    correctAnswer: 'c'
},
{
    question: "7. The main motive of computer virus is",
    answers: {
        a: 'boot computer faster',
        b: 'revenge',
        c: 'organize files',
        d: 'optimize system operation'
    },
    correctAnswer: 'b'
},
{
    question: "8. The two basic ways for a computer system care are:",
    answers: {
        a: 'preventive care, and virus spread',
        b: 'troubleshooting, and preventive care',
        c: 'troubleshooting, and frequently restarting',
        d: 'none of the above'
    },
    correctAnswer: 'b'
},
{
    question: "9. One of these is a pronoun",
    answers: {
        a: 'gone',
        b: 'Abuja city',
        c: 'toothbrush',
        d: 'she'
    },
    correctAnswer: 'd'
},
{
    question: "10. A noun simply means",
    answers: {
        a: 'name',
        b: 'action',
        c: 'place for traving',
        d: 'labtop'
    },
    correctAnswer: 'a'
},
{
    question: "11. The capitalized word in this sentence is: 'can you DRIVE?'",
    answers: {
        a: 'a preposition',
        b: 'a conjunction',
        c: 'a verb',
        d: 'an adverb'
    },
    correctAnswer: 'c'
},
{
    question: "12. A doing word in a sentence is called?",
    answers: {
        a: 'continous word',
        b: 'discontinous word',
        c: 'a verb',
        d: 'adjective'
    },
    correctAnswer: 'c'
},
{
    question: "13. A letter adressed to the governor of your state is called?",
    answers: {
        a: 'comprehesion writing',
        b: 'informal letter',
        c: 'formal letter',
        d: 'semi-formal letter writing'
    },
    correctAnswer: 'c'
},
]
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);