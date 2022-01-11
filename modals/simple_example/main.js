const modal = document.querySelector('.modal');
const btnFadeIn = document.getElementById('fadeIn');
const btnClose = document.querySelector('.modal__close')
const bgClose = document.querySelector('.modal__bg')

btnFadeIn.addEventListener("click", function() {
    gsap.to(modal, {autoAlpha: 1, duration: .5})
})
btnClose.addEventListener("click",  function() {
    gsap.to(modal, {autoAlpha: 0, duration: .5})
})

bgClose.addEventListener("click",  function() {
    gsap.to(modal, {autoAlpha: 0, duration: .5})
})

