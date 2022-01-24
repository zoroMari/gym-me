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
  const headerMobile = document.querySelector('.HeaderMobile');
  const menus = document.querySelector('.HeaderMobile ul');

  function handleOpenMenu() {
    headerMobile.style.display = 'block';
  }

  function handleCloseMenu() {
    headerMobile.style.display = '';
  }

  function handleAutoCloseMenu(event) {
    const oneMenu = event.target.closest('li'); 

    if (!oneMenu) return;
    if (document.documentElement.clientWidth > 800) return;

    headerMobile.style.display = 'none';
    
  }

  burgerOpen.addEventListener('click', handleOpenMenu);
  burgerClose.addEventListener('click', handleCloseMenu);
  menus.addEventListener('click', handleAutoCloseMenu);
}

burgerMenu();
