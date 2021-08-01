// Opening animations
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const nav = document.querySelector('nav');
const arrow = document.querySelector('.arrow');

const tl = new TimelineMax();




if (window.innerWidth > 600) {
    tl.fromTo(hero,1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
    .fromTo(hero,1.2, {width: '100%'}, {width: '70%', ease: Power2.easeInOut})
    .fromTo(slider,1.2, {x: '200%'}, {x: '0%', ease: Power2.easeInOut}, "-=1.2")
    .fromTo(nav,1, {x: '-110%'}, {x: '0%', ease: Power2.easeInOut})
    .fromTo(headline,1, {opacity: '0', x: '-30'}, {opacity: '1', x: '0', ease: Power2.easeInOut}, "-=1")
    .fromTo(arrow,0.5, {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, "+=1.3");
} else if (window.innerWidth < 600) {
    tl.fromTo(hero,1, {width: '0%'}, {width: '100%', ease: Power2.easeInOut})
    .fromTo(hero,1, {height: '60%'}, {height: '45%', ease: Power2.easeInOut})
    .fromTo(headline,1, {opacity: '0', x: '-30'}, {opacity: '1', x: '0', ease: Power2.easeInOut})
    .fromTo(nav,1, {y: '110%'}, {y: '0%', ease: Power2.easeInOut}, "-=1")
    .fromTo(arrow,0.5, {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, "+=1.3");
}

//Projects popUp
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add('open');
        //Dynamic change text and image
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./resources/images/projects/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})

//Night-Day switch
