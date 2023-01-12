"use strict";
let bars_images = ["./Bar Project/Ressources/poker.jpg", "./Bar Project/Ressources/roulette.jpg", "./Bar Project/Ressources/flechettes.jpg"];
let immobilier_images = ["./Bar Project/Ressources/escalier.jpg", "./Bar Project/Ressources/salon.jpg", "./Bar Project/Ressources/chambre.jpg"];
let fashion_images = ["./Bar Project/Ressources/ceintre.jpg", "./Bar Project/Ressources/magasin.jpg", "./Bar Project/Ressources/habits.jpg"];

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
    let section_text_1 = document.querySelector(".first_texte")
    let section_text_2 = document.querySelector(".snd_texte")
    let section_text_3 = document.querySelector(".third_texte")
    let slide_h1 = document.querySelector(".slide")
    let img_acceuil = document.querySelector(".img_acceuil")

    // BARS
    bars.addEventListener("click", ()=>
    {
        img_acceuil.style.backgroundImage = "url('./Bar Project/Ressources/bar2.jpg')";
        h1_acceuil.textContent = "𝕷𝖊 𝕾𝖜𝖊𝖊𝖙𝖎𝖊 𝕸𝖆𝖑𝖊𝖓𝖙𝖎𝖓𝖊𝖘"
        h1_cards.textContent = "Découvrez nos cocktails du moment"
        cards_boissons.innerHTML =
        `
        <div class="cards carte1">
        <img class="first_image" src="./Bar Project/Ressources/curaco.webp">
        </div>
        <section class="first_texte">
            <h1>Le Blue Lagoon :</h1>
            <br><p> Difficile de ne pas reconnaître le cocktail Blue Lagoon avec sa couleur bleu vif. Cette boisson azuréenne se retrouve aussi sur le nom français Lagon Bleu</p>
        </section>
        <section class="snd_texte">
            <h1>Le Bloody Mary : </h1>
            <br><p> Selon certaines sources, il s’agirait de la fameuse reine d'Angleterre, Marie Tudor, dont le règne a été marqué par une grande cruauté et de nombreux opposants brûlés au bûcher.</p>
        </section>
        <div class="cards carte2">
            <img class="snd_image" src="./Bar Project/Ressources/bloody-mary.jpg">
        </div>
        <div class="cards carte3">
                <img class="third_image" src="./Bar Project/Ressources/purple.jpeg">
        </div>
        <section class="third_texte">
            <h1>Le Purple Rain : </h1>
            <br><p>Il fut nommé ainsi en l’honneur de la populaire ballade de Prince Purple Rain issu de son album du même nom.</p>
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
        img_acceuil.style.backgroundImage = "url('./Bar Project/Ressources/client_immobilier.jpg')";
        h1_acceuil.textContent = "Immobilier"
        h1_cards.textContent = "Venez nous voirs en agence :"
        cards_boissons.innerHTML =
        `
        <div class="cards carte1">
        <img class="first_image" src="./Bar Project/Ressources/client.webp">
        </div>
            <section class="first_texte">
                <h1>Nous vous recevons directement :</h1>
                <br><p>Présentez-nous votre projet et vos divers souhait pour votre futur vies</p>
            </section>
            <section class="snd_texte">
                <h1>Un bien vous plait ? : </h1>
                <br><p>Nous irons le visiter directement !</p>
            </section>
            <div class="cards carte2">
                <img class="snd_image" src="./Bar Project/Ressources/visite.jpg">
            </div>
            <div class="cards carte3">
                    <img class="third_image" src="./Bar Project/Ressources/signature.jpg">
            </div>
            <section class="third_texte">
                <h1>Vous en souhaiter les clés ? </h1>
                <br><p>Avec quelque signature et accord il peu etre a vous en moins d'une semaine !</p>
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
        img_acceuil.style.backgroundImage = "url('./Bar Project/Ressources/vetement.webp')";
        h1_acceuil.textContent = "Fashion"
        h1_cards.textContent = "Vous cherchez à remplir votre dressing ? Nous avons ce qu'il vus faut !"
        cards_boissons.innerHTML =
        `
        <div class="cards carte1">
        <img class="first_image" src="./Bar Project/Ressources/jeans.jpg">
        </div>
            <section class="first_texte">
                <h1>Du classiques</h1>
                <br><p>Des jeans, chemises, pulls, (...)</p>
            </section>
            <section class="snd_texte">
                <h1>De quoi avoir la classe ?</h1>
                <br><p>Nous disposons de ça aussi et sont coin reserver pour pas de perte de temps.</p>
            </section>
            <div class="cards carte2">
                <img class="snd_image" src="./Bar Project/Ressources/costume.jpg">
            </div>
            <div class="cards carte3">
                    <img class="third_image" src="./Bar Project/Ressources/style.jpg">
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


/*
Il me faut 3 bouton, changer les style css, les images, les textes et hop 3 sites vitrine avec 1 code mdr

Immobilier / Fashion
*/