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
  const comments = document.querySelector('.Community .Сomments');
  const commentsWrapper = document.querySelector('.Community .Comments-Wrapper');
  const comment = document.querySelectorAll('.Community .Сomment');
  const arrowNext = document.querySelector('.Community-Arrows .Arrow_next');
  const arrowPrev = document.querySelector('.Community-Arrows .Arrow_previous');
  const width = 360 / 2; // ширина картинки
  const count = 4 * 2;
  const margins = count / 2 * 32;
  const widthOfComments = width * count + margins; // видимое количество изображений

  let position = 0; 
  let positionMax;
  let positionMin;// положение ленты прокрутки

  arrowPrev.onclick = function() {
    if (document.documentElement.clientWidth > 1024) {
      position += width;
      position = Math.min(position, 0)
      commentsWrapper.style.marginLeft = position + 'px';   
      arrowNext.querySelector('path').style.fill = '#131316';
      if (position === 0) {
        arrowPrev.querySelector('path').style.fill = '';
      } 

    } else {
      position += width * 2;
      positionMin = (widthOfComments - document.documentElement.clientWidth);
      position = Math.min(position, positionMin)
      commentsWrapper.style.marginLeft = position + 'px';   
      arrowNext.querySelector('path').style.fill = '#131316';
      if (position === positionMin) {
        arrowPrev.querySelector('path').style.fill = 'var(--color-grey_light)';
      } 
    }
  };

  arrowNext.onclick = function() {
    if (document.documentElement.clientWidth > 1024) {
      position -= width;
      positionMax = (comments.clientWidth - widthOfComments);
      position = Math.max(position, positionMax);
      commentsWrapper.style.marginLeft = position + 'px';
      arrowPrev.querySelector('path').style.fill = '#131316';
    } else {
      position -= width * 2;
      positionMax = -(widthOfComments - document.documentElement.clientWidth);
      position = Math.max(position, positionMax);
      commentsWrapper.style.marginLeft = position + 'px';
      arrowPrev.querySelector('path').style.fill = '#131316';
    }
  
    if (position === positionMax) {
      arrowNext.querySelector('path').style.fill = 'var(--color-grey_light)';
    }
  }; 
}

carouselComments();