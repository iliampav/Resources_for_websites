const sliderItems = document.querySelectorAll('.slider__item')
const btnNext = document.querySelector('.slider__arrows--right')
const btnPrev = document.querySelector('.slider__arrows--left')


  const slider = {
      currentItem: 0,
        
      init: () => {
          slider.in(slider.currentItem);
      },

      in: (index) => {
        const item = sliderItems[index]

        gsap.set(item, {scale: .9, left: '-100vw'})

        const texts = item.querySelectorAll('p')
        const tl = new gsap.timeline()
        
        tl.to(item, {duration: .5, left:0, delay: .5})
          .to(item, {duration: .5, scale: 1})
          .from(texts, {
              duration: .5,
              y:300,
              autoAlpha: 0,
              ease: Back.easeOut,
              stagger: {
                  each: .2,
              }
          })
      },

      out: (index, nextIndex) => {
        const item = sliderItems[index]
        const texts = item.querySelectorAll('p')
        const tl = new gsap.timeline()

        tl.to(texts, {
                duration: .5,
                y:300,
                autoAlpha: 0,
                ease: Back.easeIn,
                stagger: {
                    each: '-.2',
                }
            })
           .to(item, {duration: .5, scale: .9})
           .to(item, {duration: .5, left: '100vw'})
           .call(slider.in, [nextIndex], '-=1')
           .set(texts, {clearProps: 'all'})
      },

      next: () => {
          const next = slider.currentItem !== sliderItems.length - 1 ? slider.currentItem + 1 : 0;
          slider.out(slider.currentItem, next)
          slider.currentItem = next
      },

      prev: () => {
        const prev = slider.currentItem > 0 ? slider.currentItem - 1 : sliderItems.length -1;
        slider.out(slider.currentItem, prev)
        slider.currentItem = prev
      }
  }


  btnNext.addEventListener('click', slider.next)
  btnPrev.addEventListener('click', slider.prev)

  slider.init()