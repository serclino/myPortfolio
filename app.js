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

let popUp;

previews.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add('open');
        //Dynamic change text and image
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./resources/images/projects/${originalSrc}`;

        const path = preview.alt;
        popUp = document.querySelector(`.${path}`);
        modal.appendChild(popUp);
        popUp.style.opacity = '1';

        if (window.innerWidth > 600) {
            popUp.style.bottom = '0%';
        } else if (window.innerWidth < 600) {
            popUp.style.bottom = '20%';
        }
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
        popUp.style.opacity = '0';
        popUp.style.bottom = '-100%';
    }
})

//contact submission
var form = document.getElementById("myForm");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    form.reset(); // this must be first!
    status.classList.add('success');
    status.innerHTML = "Thanks for your submission!";
    console.log('Success!'); //just for control
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem submitting your form";
  });
}
form.addEventListener("submit", handleSubmit)

//Night-Day switch

const theme  = document.getElementById('switch');
const themeImg = document.querySelector('.themeImg');
const themeTxt = document.querySelector('.themeTxt');

theme.addEventListener('click', () => {
    if (theme.classList.contains('day')) {
        theme.classList.replace('day', 'night');

        //change image & text
        themeImg.src = './resources/images/navigation/day-color.svg';
        themeTxt.innerHTML = 'Bright';

        //style rest of the document
            document.querySelector('.slider').style.background = '#191726';
            document.body.style.color = 'white';
            //style nav
            document.querySelector('nav').style.backgroundColor = '#514b7c';

            //style skills
            const skillContainers = document.querySelectorAll('.skillContainer');
            skillContainers.forEach(skillContainer => {
                skillContainer.style.backgroundColor = 'rgba(255,255,255,0.3)';
                skillContainer.style.padding = '10px';
                skillContainer.style.borderRadius = '8px';
            })
            const levelTexts = document.querySelectorAll('.level-text');
            levelTexts.forEach(levelText => {
                levelText.style.fontSize = '0.75rem';
            })

            //style arrow + bílý border kolem headeru



    } else if (theme.classList.contains('night')) {
        theme.classList.replace('night', 'day');

        //change image & text
        themeImg.src = './resources/images/navigation/night-color.svg';
        themeTxt.innerHTML = 'Dark';

        document.querySelector('.slider').style.background = 'linear-gradient(to right, #f2955e, #d97e7e)';
    }
})