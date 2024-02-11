
function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    var menuButton = document.querySelector('.menu-button');
    var closeButton = document.querySelector('.close-button');
    var currentLeft = parseInt(window.getComputedStyle(menu).left);
    
    if (currentLeft === 0) {
        menu.style.left = '-100%';
        closeButton.style.display = 'none';
        menuButton.style.display = 'block';
    } else {
        menu.style.left = '0';
        closeButton.style.display = 'block';
        menuButton.style.display = 'none';
    }
}

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');

let index = 0;

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const newPosition = -index * 100 + '%';
   slider.style.transform = 'translateX(' + newPosition + ')';
} 
   setInterval(nextSlide, 6000);

  document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.my-slide-container');
    const slides = document.querySelectorAll('.my-slide');
    let slidesToShow = calculateSlidesToShow();
    let currentIndex = 0;

    function calculateSlidesToShow() {
      return window.innerWidth >= 1000 ? 4 : 2;
    }

    function nextSlide() {
      slidesToShow = calculateSlidesToShow();
      currentIndex = (currentIndex + slidesToShow) % slides.length;

      if (currentIndex + slidesToShow > slides.length) {
        currentIndex = slides.length - slidesToShow;
      }

      slideContainer.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
    }

    window.addEventListener('resize', function () {
      const newSlidesToShow = calculateSlidesToShow();

      if (newSlidesToShow !== slidesToShow) {
        slidesToShow = newSlidesToShow;
        currentIndex = 0; 
        slideContainer.style.transform = `translateX(0)`;
      }
    });

    setInterval(nextSlide, 6000);
  });


 let slideIndex = 0;
  const slides2 = document.querySelector('.slides2');

  function showSlides() {
      slideIndex++;

      if (slideIndex === slides2.children.length) {
          slideIndex = 0;
      }

      const translateValue = -slideIndex * 100 + '%';
      slides2.style.transform = 'translateX(' + translateValue + ')';
      
      setTimeout(showSlides, 5000);
  }

  showSlides();
