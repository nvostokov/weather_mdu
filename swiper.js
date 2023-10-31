const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {// настройки для разных разрешений
        600: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 4,
/*             spaceBetween: 10, */
            slidesPerGroup: 1,
        }
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 4000,
  });