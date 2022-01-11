const modal = document.querySelector('.modal')
const modalBox = document.querySelector('.modal__box')
const btnFadeIn = document.getElementById('fadeIn');
const bgClose = document.querySelector('.modal__bg')
const btnClose = document.querySelector('.modal__close')

btnFadeIn.addEventListener("click", function() {
    gsap.set(modalBox, {scale:0})
    gsap.to(modal, {autoAlpha: 1, duration: .5})
    gsap.to(modalBox, {scale:1, duration: 1, delay: .5, ease: Elastic.easeOut})
})
btnClose.addEventListener("click",  function() {
    gsap.to(modal, {autoAlpha: 0, duration: .5})
})
bgClose.addEventListener("click",  function() {
    gsap.to(modal, {autoAlpha: 0, duration: .5})
})


