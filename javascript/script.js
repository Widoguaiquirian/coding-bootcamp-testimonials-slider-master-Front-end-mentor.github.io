"use strict";
const btnPrev = document.querySelector(".btn--left");
const btnNext = document.querySelector(".btn--right");
const container = document.querySelector(".testimonials");
const boxes = document.querySelectorAll(".testimonials__box");

let idx = 0;
let interval = setInterval(run, 3000);

function run() {
   idx++;
   changeImage();
}

function changeImage() {
   if (idx > boxes.length - 1) {
      idx = 0;
   } else if (idx < 0) {
      idx = boxes.length - 1;
   }

   boxes.forEach(function (box) {
      box.style.transform = `translateX(${-idx * box.clientWidth}px)`;
      // The minus is because I want to move in the left direction the images
   });
}

function resetInterval() {
   clearInterval(interval);
   interval = setInterval(run, 3000);
}

btnNext.addEventListener("click", function () {
   idx++;
   changeImage();
   resetInterval();
});

btnPrev.addEventListener("click", function () {
   idx--;
   changeImage();
   resetInterval();
});

// Keyboard handler
document.addEventListener("keydown", function (e) {
   if (e.key === "Arrowleft") {
      idx--;
      changeImage();
   } else if (e.key === "ArrowRight") {
      idx++;
      changeImage();
   }
});
