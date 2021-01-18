let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  effect: 'slide',
  navigation: {
    nextEl: '.btn__gallery-next',
    prevEl: '.btn__gallery-back',
  },
});