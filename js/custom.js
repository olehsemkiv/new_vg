    const next__buttons = document.querySelectorAll('.full-screen-section__next-btn');

    if (next__buttons.length > 0) {
        next__buttons.forEach(el => {
            el.addEventListener('click', () => {
                window.scrollBy(0, window.innerHeight)
            })
        })
    }

    const iconMenu = document.querySelector('.header__menu-button');
    const menuBody = document.querySelector('.header__side-menu');
    if (iconMenu) {
        iconMenu.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        })
    }

    const menuItems = document.querySelectorAll('.menu__link');

    if (menuItems.length > 0) {
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function (e) {
                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }
            })
        })
    }

    const closeButtonMenu = document.querySelector('.close-button');

    if (closeButtonMenu) {
        closeButtonMenu.addEventListener('click', function (e) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        })
    }

    let acc = document.getElementsByClassName("section-accordion__accordion");
    let i;

    if (acc) {
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    let header = document.querySelector(".header");


    if (header) {
        window.addEventListener("scroll", function () {

            let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition >= 100) {
                header.classList.add('header_bg');
            } else if (scrollPosition < 100) {
                header.classList.remove('header_bg');

            }
        });
    }

    AOS.init();

    let swiper_1 = new Swiper(".section-slider-1__swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".section-slider-1__swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".section-slider-1__swiper-button-next",
            prevEl: ".section-slider-1__swiper-button-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            }
        }
    });

    let swiper_2 = new Swiper(".section-slider-2__swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".section-slider-2__swiper-pagination",
            clickable: true,
        },
        centeredSlides: true,
        navigation: {
            nextEl: ".section-slider-2__swiper-button-next",
            prevEl: ".section-slider-2__swiper-button-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 1.2,
            },
            991: {
                slidesPerView: 1.3,
            }
        }
    });

    let swiper_3 = new Swiper(".section-slider-3__swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        },
        loop: true,
        pagination: {
            el: ".section-slider-3__swiper-pagination",
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
            1560: {
                slidesPerView: 3.7
            }
        }
    });

    // // next-section

    // const next__sections__buttons = document.querySelectorAll('.next-section');

    // if (next__sections__buttons.length > 0) {
    //     next__sections__buttons.forEach(el => {
    //         el.addEventListener('click', () => {
    //             window.scrollTo({
    //                 top: document.documentElement.scrollBy(0, window.innerHeight)

    //             });
    //         })
    //     })
    // }