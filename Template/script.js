"use strict";
let bars_images = ["./Template/Ressources/poker.jpg", "./Template/Ressources/roulette.jpg", "./Template/Ressources/flechettes.jpg"];
let immobilier_images = ["./Template/Ressources/escalier.jpg", "./Template/Ressources/salon.jpg", "./Template/Ressources/chambre.jpg"];
let fashion_images = ["./Template/Ressources/ceintre.jpg", "./Template/Ressources/magasin.jpg", "./Template/Ressources/habits.jpg"];

let slide = document.querySelector('.slide');
    async function addSlider(){
    const sliderJS = await import("./slider.js")
    const slider = sliderJS.create(bars_images);
    slide.append(slider);
    sliderJS.default();
    }
addSlider()

function changeTheme()
{
    let bars = document.querySelector(".bars")
    let immobilier = document.querySelector(".immobilier")
    let fashion = document.querySelector(".fashion")
    let h1_accueil = document.querySelector(".h1_accueil")
    let cards_boissons = document.querySelector(".cards_boissons")
    let slide_h1 = document.querySelector(".slide")
    let img_accueil = document.querySelector(".img_accueil")
    let formulaire = document.getElementById('formulaire_container')
    let ardoise = document.querySelector(".ardoise")

    // BARS
    bars.addEventListener("click", ()=>
    {
        img_accueil.style.backgroundImage = "url('./Template/Ressources/bar2.jpg')";
        img_accueil.style.backgroundSize = "cover"
        img_accueil.style.backgroundPosition = ""
        img_accueil.style.backgroundAttachment = "scroll"
        ardoise.style.backgroundColor = "rgb(37, 29, 23)"
        formulaire.classList.add('formulaire_container_bars')
        formulaire.classList.remove('formulaire_container_fashion', 'formulaire_container_immobilier')
        h1_accueil.textContent = "𝕷𝖊 𝕾𝖜𝖊𝖊𝖙𝖎𝖊 𝕸𝖆𝖑𝖊𝖓𝖙𝖎𝖓𝖊𝖘"
        cards_boissons.innerHTML =
        `
        <div class="cards carte1">
        <img class="first_image" src="./Template/Ressources/curaco.webp">
        </div>
        <section class="first_texte">
            <h1>Le Blue Lagoon :</h1>
            <p> Difficile de ne pas reconnaître le cocktail Blue Lagoon  avec sa couleur bleu vif. Cette boisson azuréenne se  retrouve aussi sur le nom français Lagon Bleu.</p>
        </section>
        <section class="snd_texte">
            <h1>Le Bloody Mary : </h1>
            <p> Selon certaines sources, il s'agirait de la fameuse reine  d'Angleterre, Marie Tudor, dont le règne a été marqué  par une grande cruauté et de nombreux opposants brûlés  au bûcher.</p>
        </section>
        <div class="cards carte2">
            <img class="snd_image" src="./Template/Ressources/bloody-mary.jpg">
        </div>
        <div class="cards carte3">
                <img class="third_image" src="./Template/Ressources/purple.jpeg">
        </div>
        <section class="third_texte">
            <h1>Le Purple Rain : </h1>
            <p>Il fut nommé ainsi en l'honneur de la populaire ballade  de Prince Purple Rain issu de son album du même nom.</p>
        </section>
      `
      slide_h1.innerHTML = 
        `
        <h1>Vous trouverez aussi de quoi passer le temps ici :</h1>
        `
        let slide = document.querySelector('.slide');
        async function addSlider(){
        const sliderJS = await import("./slider.js")
        const slider = sliderJS.create(bars_images);
        slide.append(slider);
        sliderJS.default();
        }
        addSlider()
    })

    // IMMOBILIER
    immobilier.addEventListener("click", ()=>
    {
        img_accueil.style.background = "url('./Template/Ressources/client_immobilier.jpg')";
        img_accueil.style.backgroundSize = "cover"
        img_accueil.style.backgroundPosition = "25%"
        img_accueil.style.backgroundAttachment = "scroll"
        ardoise.style.backgroundColor = "rgb(180, 176, 173)"
        formulaire.classList.add('formulaire_container_immobilier')
        formulaire.classList.remove('formulaire_container_fashion', 'formulaire_container_bars')
        h1_accueil.textContent = "Immobilier Fontaine"
        cards_boissons.innerHTML =
        `
        <div class="cards carte1">
        <img class="first_image" src="./Template/Ressources/client.webp">
        </div>
            <section class="first_texte">
                <h1>Sans rendez-vous :</h1>
                <p>Présentez-nous votre projet et vos divers  souhaits pour votre future vie.</p>
            </section>
            <section class="snd_texte">
                <h1>Un bien vous plait ?</h1>
                <p>Selon vos disponibilités nous pourrons  visiter le bien sous quelques jours.</p>
            </section>
            <div class="cards carte2">
                <img class="snd_image" src="./Template/Ressources/visite.jpg">
            </div>
            <div class="cards carte3">
                    <img class="third_image" src="./Template/Ressources/signature.jpg">
            </div>
            <section class="third_texte">
                <h1>Vous en souhaiter les clés ? </h1>
                <p>Dès votre signature, notre équipe s'occupera  de l'intégralité  des dossiers et démarches afin  de conclure l'achat dans les plus brefs délais.</p>
            </section>
        `
        slide_h1.innerHTML = 
        `
        <h1>Trouvez la maison de vos reves :</h1>
        `
        let slide = document.querySelector('.slide');
        async function addSlider(){
        const sliderJS = await import("./slider.js")
        const slider = sliderJS.create(immobilier_images);
        slide.append(slider);
        sliderJS.default();
        }
        addSlider()
    })

    // FASHION
    fashion.addEventListener("click", ()=>
    {
        img_accueil.style.backgroundImage = "url('./Template/Ressources/vetement.webp')";
        img_accueil.style.backgroundSize = "cover"
        img_accueil.style.backgroundPosition = ""
        img_accueil.style.backgroundAttachment = "scroll"
        ardoise.style.backgroundColor = "rgb(26, 70, 95)"
        formulaire.classList.add('formulaire_container_fashion')
        formulaire.classList.remove('formulaire_container_bars', 'formulaire_container_immobilier')
        h1_accueil.textContent = "Crystal Modes"
        cards_boissons.innerHTML =
        `
            <div class="cards carte1">
            <img class="first_image" src="./Template/Ressources/jeans.jpg">
            </div>
            <section class="first_texte">
                <h1>Du classique</h1>
                <p>Retrouver dans nos magasins  de quoi fournir l'intégralité de votre dressing ! 
                Des jeans, chemises, pulls, et bien plus encore.</p>
            </section>
            <section class="snd_texte">
                <h1>Des vêtements classes</h1>
                <p>Nous avons un coin réservé aux tenues de mariage. Divers ajustement sont disponibles sur place pour les tenues et chaussures.</p>
            </section>
            <div class="cards carte2">
                <img class="snd_image" src="./Template/Ressources/costume.jpg">
            </div>
            <div class="cards carte3">
                    <img class="third_image" src="./Template/Ressources/style.jpg">
            </div>
            <section class="third_texte">
                <h1>Liberez votre style</h1>
                <p>Venez rencontrer notre équipe dédiée au relooking,  prenez contact pour démarrer un projet ensemble.</p>
            </section>
        `
        slide_h1.innerHTML = 
        `
        <h1>Voici nos boutiques :</h1>
        `
        let slide = document.querySelector('.slide');
        async function addSlider(){
        const sliderJS = await import("./slider.js")
        const slider = sliderJS.create(fashion_images);
        slide.append(slider);
        sliderJS.default();
        }
        addSlider()
    })
}
changeTheme()

let loaderScreen = document.querySelector(".loader")
let page = document.querySelector(".page")

function load(){
    setTimeout(()=>{
    loaderScreen.style.transition = "opacity 0.2s, height 1s";
    loaderScreen.style.opacity = "0";
    loaderScreen.style.height = "0";
    }, 1000)
}
load()