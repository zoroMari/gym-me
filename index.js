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
  const commentsDesk = document.querySelector('.Community .Сomments');
  const commentsWrapperDesk = document.querySelector('.Community-Desktop .Comments-Wrapper');
  const commentsWrapperMob = document.querySelector('.Community-Mobile .Comments-Wrapper');
  const comment = document.querySelector('.Community .Сomment');
  const arrowNextDesk = document.querySelector('.Community-Desktop .Arrow_next');
  const arrowPrevDesk = document.querySelector('.Community-Desktop .Arrow_previous');
  const arrowNextMob = document.querySelector('.Community-Mobile .Arrow_next');
  const arrowPrevMob = document.querySelector('.Community-Mobile .Arrow_previous');
  let width = (document.documentElement.clientWidth > 800) ? 360 : 300;
  const count = 4;
  const margin = 32;
  const widthOfComments = count * (width + margin); // видимое количество изображений

  let position = 0; 
  let positionMax;
  let positionMin;// положение ленты прокрутки


  arrowPrevDesk.onclick = function() { 
    position += width + margin;
    position = Math.min(position, 0)
    commentsWrapperDesk.style.marginLeft = position + 'px';   
    arrowNextDesk.querySelector('path').style.fill = '#131316';
    if (position === 0) {
      arrowPrevDesk.querySelector('path').style.fill = '';
    } 
  };
  

  arrowPrevMob.onclick = function() {
    position += width;
    positionMin = (widthOfComments - document.documentElement.clientWidth);
    position = Math.min(position, positionMin)
    commentsWrapperMob.style.marginLeft = position + 'px';   
    arrowNextMob.querySelector('path').style.fill = '#131316';
    if (position === positionMin) {
      arrowPrevMob.querySelector('path').style.fill = 'var(--color-grey_light)';
    } 
  };


  arrowNextDesk.onclick = function() {
    position -= width + margin;
    positionMax = (commentsDesk.clientWidth - widthOfComments);
    position = Math.max(position, positionMax);
    commentsWrapperDesk.style.marginLeft = position + 'px';
    arrowPrevDesk.querySelector('path').style.fill = '#131316';

    if (position === positionMax) {
      arrowNextDesk.querySelector('path').style.fill = 'var(--color-grey_light)';
    }
  }; 


  arrowNextMob.onclick = function() {
    position -= width;
    positionMax = -(widthOfComments - document.documentElement.clientWidth);
    position = Math.max(position, positionMax);
    commentsWrapperMob.style.marginLeft = position + 'px';
    arrowPrevMob.querySelector('path').style.fill = '#131316';
  
    if (position === positionMax) {
      arrowNextMob.querySelector('path').style.fill = 'var(--color-grey_light)';
    }
  }; 
}

carouselComments();