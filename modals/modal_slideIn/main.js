const modal = document.querySelector('.modal')
const modalBox = document.querySelector('.modal__box')
const btnFadeIn = document.getElementById('fadeIn');
const btnClose = document.querySelector('.modal__close')
const bgClose = document.querySelector('.modal__bg')

btnFadeIn.addEventListener("click", function() {
    gsap.to(modal, {autoAlpha: 1, duration: .5})
    gsap.from(modalBox, {autoAlpha: 0, top: 300})
})
btnClose.addEventListener("click",  function() {
    gsap.to(modal, {autoAlpha: 0, duration: .5})
})

bgClose.addEventListener("click",  function() {
    gsap.to(modal, {autoAlpha: 0, duration: .5})
})


