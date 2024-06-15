const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {


    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})

if(window.matchMedia('(max-width: 1300)')){
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')

        })
    })
}

//Animation ériture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 5
})
typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Nadir ZOURDANI')
.pauseFor(300)
.typeString('<strong>, Étudiant en 5ème année à l\'ESIEA, spécialisation génie logiciel. </strong> !')
.pauseFor(300)
.deleteChars(94)
.typeString('Moi c\'est Nadir ZOURDANI')
.pauseFor(300)
.typeString('<strong>, Alternant chez Bouygues Telecom. </strong> !')
.pauseFor(300)
.deleteChars(35)
.start()

function showDescription(element) {
    var description = element.querySelector('.descriptionn');
    var title = element.querySelector('h3');
    var originalContent = title.innerHTML;

    description.style.display = 'block';
    title.innerHTML = description.innerHTML;
    description.innerHTML = originalContent;
}

function hideDescription(element) {
    var description = element.querySelector('.descriptionn');
    var title = element.querySelector('h3');
    var originalContent = description.innerHTML;

    description.style.display = 'none';
    description.innerHTML = title.innerHTML;
    title.innerHTML = originalContent;
}
//Animation Contact

const input_fields = document.querySelectorAll('input');
    for (let i = 0; i < input_fields.length; i++) {
        let field= input_fields[i];
        field.addEventListener('input', (e) => {
            if(e.target.value !== ''){
                e.target.parentNode.classList.add('animation')
            }else if(e.target.value == ''){
                e.target.parentNode.classList.remove('animation')
            }
        }) 
    }

// Anim GSAP + ScrollMagic
const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAcceuil = document.querySelector('.btn-rond');


const TL1 = gsap.timeline({paused: true}); 


TL1
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6 })
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAcceuil, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})

//Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector('.presentation-page');
const titrePres = document.querySelector('.titre-pres'); 
const titreFor = document.querySelector('.titre-for');
const present = document.querySelector('.presentation-section')
const presentationSection =present.querySelector('p')
const educationSection = document.querySelectorAll('.education-item')


const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(titreFor, {y: -200, opacity: 0, duration: 0.6})
.from(presentationSection, {y: -20, opacity: 0, duration: 0.6}, '-=0.5')
.from(educationSection, {y: -20, opacity: 0, duration: 0.6}, '-=0.5')


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlpres)
//.addIndicators()
.addTo(controller)

//Anim Portfolio
const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')
const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio)
//.addIndicators()
.addTo(controller)

//vague 2

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2

.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')
const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
//.addIndicators()
.addTo(controller)

//vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3

.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')
const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
//.addIndicators()
.addTo(controller)

//Animation range
const sectionComp= document.querySelector('.section-range');
const titreComp= document.querySelector('.titre-exp');
const allLabel= document.querySelectorAll('.label-skill');
const allDetail= document.querySelectorAll('.detail-skill');
const allBarres= document.querySelectorAll('.barre-skill');

const tlCompetences = new TimelineMax();

tlCompetences
.from(titreComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
.staggerFrom(allDetail, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(tlCompetences)
.addTo(controller);


