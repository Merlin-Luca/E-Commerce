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
    let h1_acceuil = document.querySelector(".h1_acceuil")
    let h1_cards = document.querySelector(".h1_cards")
    let cards_boissons = document.querySelector(".cards_boissons")
    let slide_h1 = document.querySelector(".slide")
    let img_acceuil = document.querySelector(".img_acceuil")
    let formulaire = document.getElementById('formulaire_container')

    // BARS
    bars.addEventListener("click", ()=>
    {
        img_acceuil.style.backgroundImage = "url('./Template/Ressources/bar2.jpg')";
        img_acceuil.style.backgroundSize = "cover"
        img_acceuil.style.backgroundPosition = ""
        img_acceuil.style.backgroundAttachment = "scroll"
        formulaire.classList.add('formulaire_container_bars')
        formulaire.classList.remove('formulaire_container_fashion', 'formulaire_container_immobilier')
        h1_acceuil.textContent = "π·π πΎππππππ πΈπππππππππ"
        h1_cards.textContent = "DΓ©couvrez nos cocktails du moment"
        cards_boissons.innerHTML =
        `
        <div class="cards carte1">
        <img class="first_image" src="./Template/Ressources/curaco.webp">
        </div>
        <section class="first_texte">
            <h1>Le Blue Lagoon :</h1>
            <br><p> Difficile de ne pas reconnaΓ?tre le cocktail Blue Lagoon avec sa couleur bleu vif. Cette boisson azurΓ©enne se retrouve aussi sur le nom franΓ§ais Lagon Bleu</p>
        </section>
        <section class="snd_texte">
            <h1>Le Bloody Mary : </h1>
            <br><p> Selon certaines sources, il s'agirait de la fameuse reine d'Angleterre, Marie Tudor, dont le rΓ¨gne a Γ©tΓ© marquΓ© par une grande cruautΓ© et de nombreux opposants brΓ»lΓ©s au bΓ»cher.</p>
        </section>
        <div class="cards carte2">
            <img class="snd_image" src="./Template/Ressources/bloody-mary.jpg">
        </div>
        <div class="cards carte3">
                <img class="third_image" src="./Template/Ressources/purple.jpeg">
        </div>
        <section class="third_texte">
            <h1>Le Purple Rain : </h1>
            <br><p>Il fut nommΓ© ainsi en l'honneur de la populaire ballade de Prince Purple Rain issu de son album du mΓͺme nom.</p>
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
        img_acceuil.style.background = "url('./Template/Ressources/client_immobilier.jpg')";
        img_acceuil.style.backgroundSize = "cover"
        img_acceuil.style.backgroundPosition = "25%"
        img_acceuil.style.backgroundAttachment = "scroll"
        formulaire.classList.add('formulaire_container_immobilier')
        formulaire.classList.remove('formulaire_container_fashion', 'formulaire_container_bars')
        h1_acceuil.textContent = "Immobilier"
        h1_cards.textContent = "Venez nous voirs en agence :"
        cards_boissons.innerHTML =
        `
        <div class="cards carte1">
        <img class="first_image" src="./Template/Ressources/client.webp">
        </div>
            <section class="first_texte">
                <h1>Nous vous recevons directement :</h1>
                <br><p>PrΓ©sentez-nous votre projet et vos divers souhaits pour votre future vie</p>
            </section>
            <section class="snd_texte">
                <h1>Vous souhaiter visiter ? : </h1>
                <br><p>Selon vos disponibilitΓ©s nous pourrons y Γͺtre le jour mΓͺme.</p>
            </section>
            <div class="cards carte2">
                <img class="snd_image" src="./Template/Ressources/visite.jpg">
            </div>
            <div class="cards carte3">
                    <img class="third_image" src="./Template/Ressources/signature.jpg">
            </div>
            <section class="third_texte">
                <h1>Vous en souhaiter les clΓ©s ? </h1>
                <br><p>Avec quelque signature et accord il peut Γͺtre Γ  vous en moins d'une semaine.</p>
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
        img_acceuil.style.backgroundImage = "url('./Template/Ressources/vetement.webp')";
        img_acceuil.style.backgroundSize = "cover"
        img_acceuil.style.backgroundPosition = ""
        img_acceuil.style.backgroundAttachment = "scroll"
        formulaire.classList.add('formulaire_container_fashion')
        formulaire.classList.remove('formulaire_container_bars', 'formulaire_container_immobilier')
        h1_acceuil.textContent = "Fashion"
        h1_cards.textContent = "Nous avons ce qu'il vous faut :"
        cards_boissons.innerHTML =
        `
            <div class="cards carte1">
            <img class="first_image" src="./Template/Ressources/jeans.jpg">
            </div>
            <section class="first_texte">
                <h1>Du classiques</h1>
                <br><p>Des jeans, chemises, pulls, (...)</p>
            </section>
            <section class="snd_texte">
                <h1>De quoi avoir la classe ?</h1>
                <br><p>Nous avons un coin rΓ©servΓ© pour aucune de perte de temps.</p>
            </section>
            <div class="cards carte2">
                <img class="snd_image" src="./Template/Ressources/costume.jpg">
            </div>
            <div class="cards carte3">
                    <img class="third_image" src="./Template/Ressources/style.jpg">
            </div>
            <section class="third_texte">
                <h1>Trouver votre style chez nous</h1>
                <br><p>Nous avons des locaux pour vous recevoir et concevoir un projet avec vous</p>
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