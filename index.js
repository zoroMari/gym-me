function questionsToggle() {
  const questions = document.querySelector('.Questions');

  function handleQuestionsToggle(event) {
    const questionWithAnswer = event.target.closest('.QuestionWithAnswer'); 

    if (!questionWithAnswer) return;

    const question = questionWithAnswer.querySelector('.Question');
    question.classList.toggle('Question_open');

    const answer = questionWithAnswer.querySelector('.Answer');
    answer.classList.toggle('Answer_open');
  }   

  questions.addEventListener('click', handleQuestionsToggle);
}

questionsToggle();


function goUpButton() {
  const goUpButton = document.getElementById('goUp');

  function handleShowButton() {
    pageYOffset > document.documentElement.clientHeight ? goUpButton.style.display = 'block' :
    goUpButton.style.display = '';
  }

  function handleGoToTop(event) {
    window.scrollTo(pageXOffset, 0);
  }

  window.addEventListener('scroll', handleShowButton);
  goUpButton.addEventListener('click', handleGoToTop);
}

goUpButton();

function burgerMenu() {
  const burgerOpen = document.querySelector('.Header .BurgerMenu');
  const burgerClose = document.querySelector('.HeaderMobile .BurgerMenu')
  const menuMobile = document.querySelector('.HeaderMobile');
  const menuElements = document.querySelector('.HeaderMobile ul');

  function handleOpenMenu() {
    menuMobile.style.display = 'block';
  }

  function handleCloseMenu() {
    menuMobile.style.display = '';
  }

  function handleAutoCloseMenu(event) {
    const menuElem = event.target.closest('li'); 

    if (!menuElem) return;
    if (document.documentElement.clientWidth > 800) return;

    menuMobile.style.display = 'none';
  }

  burgerOpen.addEventListener('click', handleOpenMenu);
  burgerClose.addEventListener('click', handleCloseMenu);
  menuElements.addEventListener('click', handleAutoCloseMenu);
}

burgerMenu();


// function closeArrowCommunity() {
//   const arrowCommuity = document.querySelector('.Community-Desktop .Community-Arrows');

//   if (document.documentElement.clientWidth > 1600) {
//     arrowCommuity.style.display = 'none';
//   }
// }

// closeArrowCommunity();