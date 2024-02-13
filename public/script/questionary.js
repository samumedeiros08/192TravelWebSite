var question1 = document.querySelector ('#q1');
var question2 = document.querySelector ('#q2');
var question3 = document.querySelector ('#q3');
var question4 = document.querySelector ('#q4');
var question5 = document.querySelector ('#q5');
var question6 = document.querySelector ('#q6');
var question7 = document.querySelector ('#q7');
var question8 = document.querySelector ('#q8');

// Shuffle Multiple Choices
var questionShuffle = [question1, question2, question3, question4, question5, question6, question7, question8]

function questionsShuffle(){
    questionShuffle.forEach (question =>{
    for (var i = question.children.length; i >= 0; i--) {
        question.appendChild(question.children[Math.random() * i | 0]);
    }
    })
}

questionsShuffle();

// QUESTIONARY

var a=0;
var b=0;
var c=0;

var questions = document.querySelectorAll ('.radioQuestion');
questions = Array.from(questions);

var buttonSubmit = document.querySelector('#submitQuestionary');


buttonSubmit.addEventListener ('click', (e)=>{
    e.preventDefault ();
    console.log('clicked');
    resetResult();
    var alternative;
    
    questions.forEach(radio =>{
        if (radio.checked){
            alternative = radio.value;
        } else {
            alternative = '';
        }
        
        sumAlternative(alternative);
    });
    
    console.log(a , b, c);
    showResult();

    resetRadioAlternatives();
    questionsShuffle ();    

});

//function to sum alternatives of questions
function sumAlternative (alternative){
    if (alternative === 'a'){
        a++ ;
      } else if (alternative === 'b'){
        b++
      } else if (alternative === 'c') {
        c++
      }
};


var type1 = document.querySelector('#type1');
var type2 = document.querySelector('#type2');
var type3 = document.querySelector('#type3');
var type4 = document.querySelector('#type4');
var type5 = document.querySelector('#type5');

var types = [type1, type2, type3, type4, type5]

//RESET RADIO AND ALTERNATIVES
function resetRadioAlternatives (){
    questions.forEach(radio =>{
            radio.checked = false;
    
    })

    a=0;
    b=0;
    c=0;
}

//CALCULATE AND DISPLAY RESULT
function showResult(){
    if (a===0 && b===0 && c===0){
        alert('Please answer Questionary');
    } else if (a>b && a>c){
        type1.classList.remove ('hidden');
    } else if (b>a && b>c){
        type2.classList.remove ('hidden');
    } else if (c>a && c>b){
        type3.classList.remove ('hidden');
    } else if (a > c && b > c){
        type4.classList.remove ('hidden');
    } else if (b > a && c > a){
        type5.classList.remove ('hidden')
    }
}

//RESET RESULT
function resetResult(){
    types.forEach (type=>{
        type.classList.add ('hidden');
    })
}
