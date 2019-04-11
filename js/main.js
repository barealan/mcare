"use strict";

function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const header = document.querySelector('.header');
const headline = document.querySelector('.headline');
const subheadline = document.querySelector('.subheadline');

const headlineSlideIn = function() {
  headline.classList.add('header-slide-in');
}
const subheadlineSlideIn = function() {
  subheadline.classList.add('header-slide-in');
}

const headerToggleFade = function() {
  if (window.scrollY > 100) {
    header.classList.add('header-fade-out');
  } else {
    header.classList.remove('header-fade-out');
  }
}

const animations = document.querySelectorAll('.animation');

const animationSlideIn = function() {

  animations.forEach(animation => {
    const slideInAt = (window.scrollY + window.innerHeight) - animation.offsetHeight / 4;
    const animationMidpoint = animation.offsetTop + animation.offsetHeight / 4;
    if (slideInAt > animationMidpoint) {
      animation.classList.add('animation-fade-in');
    }
  })
}

setTimeout(headlineSlideIn, 1000);
setTimeout(subheadlineSlideIn, 2000);
window.addEventListener('scroll', debounce(function() {
  animationSlideIn();
  headerToggleFade();
}));
