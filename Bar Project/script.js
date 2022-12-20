"use strict";
const images = ["./Bar Project/Ressources/poker.jpg", "./Bar Project/Ressources/roulette.jpg", "./Bar Project/Ressources/flechettes.jpg"];
console.log(images);
let slide = document.querySelector('.slide');
async function addSlider(){
    const sliderJS = await import("./slider.js")
    const slider = sliderJS.create(images);
    slide.append(slider);
    sliderJS.default();
}
addSlider()