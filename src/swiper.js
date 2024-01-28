export default new Swiper(".swiper", {
        effect: "cards",
        // direction: 'vertical',
        grabCursor: true,
        initialSlide: 1,
        rotate: true,
        mousewheel: {
            invert: false,
        },
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });