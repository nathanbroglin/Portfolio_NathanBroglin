function carrouselBasic() {
    console.log("Fonction carrousel basic");

    let nbImg = document.querySelectorAll('.slide').length;
    console.log("Nombre d'images : "+nbImg);

    let largeurImg = 1550;
    let slides = document.querySelector('.slides');

    let bsuiv = document.querySelector('.suivant');
    let bprec = document.querySelector('.precedent');

    let cpt=0;

    slides.style.transition = 'transform 1s ease-in-out';

    bsuiv.addEventListener('click', function() {
        cpt++;
        slides.style.transform = 'translateX(-' + cpt*largeurImg+'px)';    })

    bprec.addEventListener('click', function() {
        console.log("On décale le carrousel vers la droite");
        cpt--;
        slides.style.transform = 'translateX(-' + cpt*largeurImg + 'px)';
    });

}