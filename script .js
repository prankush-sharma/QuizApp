const quizData  = [{
    question:'Who is the prime minister of india?',
     a:'Rahul Gandhi',
     b:'Narendra Modi',
     c:'pata nahi',
     d:'asjlkfsk',
     correct:'b'
},{
    question:'Who is the president of USA?',
    a:'Joe Biden',
    b:'Aniket Solanki',
    c:'Arun Rawat',
    d:'Ishaan',
    correct:'b'
},{
   question:'What does the HTML stand for?',
   a:'Hypertext Markup Language',
   b:'Cascading style sheet',
   c:'Javascript',
   d:'C++',
   correct:'a'
},{
    question:'When was JavaScript launched? ',
    a:'1996',
    b :'1995',
    c : '1994',
    d : 'None of these',
    correct: 'd'
} 

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
 const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submtBtn = document.getElementById('submit') ;
 
let currentQuiz = 0;
let score  = 0


loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
   questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
 function getSelected() {

    
     const answerEls = document.querySelectorAll('.answer')
   
      let answer = undefined;

     answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    
     return answer
    }

   function deselectAnswers () {
           answerEls.forEach((answerEl) => {
         answerEl.checked = false
    }); 
   }




submtBtn.addEventListener('click' , () => {
 
   

   const answer =   getSelected()

   if (answer ) {
           if (answer === quizData[currentQuiz].correct) {
             score++   
           }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    } else {
      quiz.innerHTML = `<h3>correct answer ${score}/${quizData.length} questions. </h3> <button Reload onClick = 'location.reload()'>Reload</button>`
    
      }
   }






    
      
   
})