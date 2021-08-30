$(function () {
  console.log('Hello Bootstrap5');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 30,
  allowSlideNext: false,
  allowSlidePrev: false,
  allowTouchMove: false,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,
      allowSlideNext: true,
      allowSlidePrev: true,
      allowTouchMove: true,
    },
  }
});

var swiper = new Swiper(".Listenswiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 30,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
      allowSlideNext: true,
      allowSlidePrev: true,
      allowTouchMove: true,
    },
    1280: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
      allowSlideNext: false,
      allowSlidePrev: false,
      allowTouchMove: false,
    },
  }
});

var swiper = new Swiper(".swiperLevel", {
  slidesPerView: 1,

  grid: {
    rows: 3,
    fill: 'column',
  },
  spaceBetween: 30,


  breakpoints: {
    992: {
      slidesPerView: 2.1,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,

    },
    1400: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,
    }
  }
});

var swiper = new Swiper(".swiperTeacher", {
  slidesPerView: 1,

  grid: {
    rows: 4,
    fill: 'column',
  },
  spaceBetween: 30,


  breakpoints: {
    992: {
      slidesPerView: 2.1,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,

    },
    1400: {
      slidesPerView: 3.2,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,
    }
  }

});

var swiper = new Swiper(".recommendSwiper", {
  slidesPerView: 1.2,
  grid: {
    rows: 1,
    fill: 'row',
  },
  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,

    },
    1280: {
      slidesPerView: 4,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,

    },
  }
});

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide: true,
  nextArrow: `<span class="material-icons">
chevron_right
</span>`,
  prevArrow: `<span class="material-icons">
chevron_left
</span>`,
  buttonClass: "btn primary",
  todayHighlight: true,
});

