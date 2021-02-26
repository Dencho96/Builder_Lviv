const portfolioMini = new Swiper('.portfolio__slider-mini', {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 5,
});

const portfolioMain = new Swiper('.portfolio__slider-main', {
    slidesPerView: 1,
    loop: 'true',
    pagination: {
        el: '.portfolio__pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.portfolio__btn--next',
        prevEl: '.portfolio__btn--prev',
    },
    thumbs: {
        swiper: portfolioMini
    }
});

const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
        bulletClass: "reviews__pagination-bullet",
        bulletActiveClass: "reviews__pagination-bullet--active",
    },
    navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
    },    
});

$(".header__menu").click(function () {
    $(".header__menu").toggleClass("is-active");
});

$('.header__menu').on('click', function () {
    $('.header__nav').slideToggle();
    $('.hero__box').slideToggle();
});