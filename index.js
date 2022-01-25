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


function carouselComments() {
  const width = 180; // ширина картинки
  const count = 1; // видимое количество изображений
  const comments = document.querySelector('.Community .Comments-Wrapper');
  const comment = document.querySelectorAll('.Community .Сomment');
  const arrowNext = document.querySelector('.Community-Arrows .Arrow_next');
  const arrowPrev = document.querySelector('.Community-Arrows .Arrow_previous');

  let position = 0; // положение ленты прокрутки

  arrowPrev.onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    comments.style.marginLeft = position + 'px';    

    if (position === 0) {
      arrowPrev.querySelector('path').style.fill = '';
    } 
  };

  arrowNext.onclick = function() {
    position -= width * count;
    positionMax = -width * (5 - count);
    position = Math.max(position, positionMax);
    comments.style.marginLeft = position + 'px';
    arrowPrev.querySelector('path').style.fill = '#131316';
    
    if (position === positionMax) {
      arrowNext.querySelector('path').style.fill = 'var(--color-grey_light)';
    } 
  }; 
}

carouselComments();