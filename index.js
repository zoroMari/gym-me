const questions = document.querySelector('.Questions');


function handleQuestionsToggle(event) {
  const questionWithAnswer = event.target.closest('.QuestionWithAnswer'); 

  const question = questionWithAnswer.querySelector('.Question');
  question.classList.toggle('Question_open');

  const answer = questionWithAnswer.querySelector('.Answer');
  answer.classList.toggle('Answer_open');

  console.log('event.target >>>', event.target);
}   

questions.addEventListener('click', handleQuestionsToggle);