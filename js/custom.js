// 
// Toggle menu after login
$(document).ready(function() {
  var $toggleButton = $('.toggle');
  var $sidebarNav = $('.portal-navigation');

  $toggleButton.on('click', function() {
      $sidebarNav.toggleClass('open');
      $toggleButton.toggleClass('open');
  });
});



// Toggle menu after login
$(document).ready(function() {
  var $toggleButton = $('.menu-arrow');
  var $sidebarNav = $('.Portal-menu');

  $toggleButton.on('click', function() {
      $sidebarNav.toggleClass('open');
      $toggleButton.toggleClass('open');
  });
});


// Tabs Js
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
let tabBody = tabs.querySelector(".tab-body");
let tabBodyElements = tabs.querySelectorAll(".tab-body > div");
let tabIndicator = tabs.querySelector(".tab-indicator > div");

for(let i=0; i<tabHeaderElements.length; i++){
  tabHeaderElements[i].addEventListener("click", function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElements[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyElements[i].classList.add("active");
    tabIndicator.style.left = `${i*25}%`;
  });
}



// Step JS


window.onload = function () {
    let steps = Array.from(document.querySelectorAll(".step"));
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
  
    next.addEventListener("click", () => {
      nextSlide("next");
    });
    prev.addEventListener("click", () => {
      nextSlide("prev");
    });
  
    function nextSlide(btn) {
      let index = 0;
      let active = document.querySelector(".d-grid");
  
      index = steps.indexOf(active);
      steps[index].classList.remove("d-grid");
  
      if (btn === "next") {
        index++;
      } else if (btn === "prev") {
        index--;
      }
  
      steps[index].classList.add("d-grid");
  
      if (index + 1 == steps.length) {
        next.classList.add("d-none");
      } else {
        next.classList.remove("d-none");
      }
      if (index == 0) {
        prev.classList.add("d-none");
      } else {
        prev.classList.remove("d-none");
      }
    }
  };
  





