"use strict";
const btnPrev = document.querySelector(".btn--left");
const btnNext = document.querySelector(".btn--right");
const container = document.querySelector(".testimonials");
const boxes = document.querySelectorAll(".testimonials__box");

let idx = 0;

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
   });
}

btnNext.addEventListener("click", function () {
   idx++;
   changeImage();
});

btnPrev.addEventListener("click", function () {
   idx--;
   changeImage();
});
