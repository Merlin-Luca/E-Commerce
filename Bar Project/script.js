"use strict";
const images = ["./Projet Portfolio/Ressources/poker.jpg", "./Projet Portfolio/Ressources/roulette.jpg", "./Projet Portfolio/Ressources/flechettes.jpg"];
console.log(images);
let slide = document.querySelector('.slide');
async function addSlider(){
    const sliderJS = await import("./slider.js")
    const slider = sliderJS.create(images);
    slide.append(slider);
    sliderJS.default();
}
addSlider()