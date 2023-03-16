const workingSwiper = new Swiper('.working-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.working-swiper-button-next',
    prevEl: '.working-swiper-button-prev',
  },
});