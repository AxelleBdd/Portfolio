// Déclaration des variables
let burgerMenu = document.querySelector('header');
let descriptionProjetUn = document.querySelector('#dialogUn');
let descriptionProjetDeux = document.querySelector('#dialogDeux');
let descriptionProjetTrois = document.querySelector('#dialogTrois');
let descriptionProjetQuatre = document.querySelector('#dialogQuatre');
let imagePremierProjet = document.querySelector('#imageProjetUn');
let imageDeuxiemeProjet = document.querySelector('#imageProjetDeux');
let imageTroisiemeProjet = document.querySelector('#imageProjetTrois');
let imageQuatriemeProjet = document.querySelector('#imageProjetQuatre');
let bouttonModaleUn = document.querySelector('#closeModaleUn');
let bouttonModaleDeux = document.querySelector('#closeModaleDeux');
let bouttonModaleTrois = document.querySelector('#closeModaleTrois');
let bouttonModaleQuatre = document.querySelector('#closeModaleQuatre');

// Déclaration des event listener
burgerMenu.addEventListener("click", () => {
    
})

function creationModale(image, description, boutton){
    image.addEventListener("click", () => {
        description.display = "block"
        description.showModal();
    })
    boutton.addEventListener("click", () => {
        description.close();
    })
}

creationModale(imagePremierProjet, descriptionProjetUn, bouttonModaleUn)
creationModale(imageDeuxiemeProjet, descriptionProjetDeux, bouttonModaleDeux)
creationModale(imageTroisiemeProjet, descriptionProjetTrois, bouttonModaleTrois)
creationModale(imageQuatriemeProjet, descriptionProjetQuatre, bouttonModaleQuatre)
