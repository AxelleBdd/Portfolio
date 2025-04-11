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

imagePremierProjet.addEventListener("click", () => {
    descriptionProjetUn.showModal();
});
bouttonModaleUn.addEventListener("click", () => {
    descriptionProjetUn.close();
})

imageDeuxiemeProjet.addEventListener("click", () => {
    descriptionProjetDeux.showModal();
});
bouttonModaleDeux.addEventListener("click", () => {
    descriptionProjetDeux.close();
})

imageTroisiemeProjet.addEventListener("click", () => {
    descriptionProjetTrois.showModal();
});
bouttonModaleTrois.addEventListener("click", () => {
    descriptionProjetTrois.close();
})

imageQuatriemeProjet.addEventListener("click", () => {
    descriptionProjetQuatre.showModal();
});
bouttonModaleQuatre.addEventListener("click", () => {
    descriptionProjetQuatre.close();
})