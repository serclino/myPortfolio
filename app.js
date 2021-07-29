const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const nav = document.querySelector('nav');

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
.fromTo(hero,1.2, {width: '100%'}, {width: '70%', ease: Power2.easeInOut})
.fromTo(slider,1.2, {x: '200%'}, {x: '0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(nav,1, {x: '-110%'}, {x: '0%', ease: Power2.easeInOut})
.fromTo(headline,1, {opacity: '0', x: '-30'}, {opacity: '1', x: '0', ease: Power2.easeInOut}, "-=1")