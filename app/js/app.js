// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import  '~/node_modules/swiper/swiper-bundle.min.js'
import '~/node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '~/node_modules/@fancyapps/ui/dist/fancybox.umd.js'
//import './smooth-scroll.polyfills.min.js'
import './lazyload.min.js'
//import './imask.min.js'





/*
var scroll = new SmoothScroll('.js-scroll', {
    speed: 300
});*/

function setEqualHeight(elements) {
    var mainDivs = document.getElementsByClassName(elements);
    var maxHeight = 0;
    for (var i = 0; i < mainDivs.length; ++i) {
        if (maxHeight < mainDivs[i].clientHeight) {
            maxHeight = mainDivs[i].clientHeight;
        }
    }
    if(maxHeight > 0) {
        for (var i = 0; i < mainDivs.length; ++i) {
            mainDivs[i].style.minHeight = maxHeight + "px";
        }
    }
}



document.addEventListener('DOMContentLoaded', () => {

    var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });


    if (document.getElementById('sliderCarusel')) {

        new Swiper('#sliderCarusel', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            lazy: {
                loadPrevNext: true,
            },
            pagination: {
                el: '#pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '#caruselNext',
                prevEl: '#caruselPrev',
            },
            breakpoints: {

                300: {
                    slidesPerView: 1,
                },
                660: {
                    slidesPerView: 2,

                },
                960: {
                    slidesPerView: 2,
                },

                1280: {
                    slidesPerView: 3,
                }
            }

        });
    }

    if (document.getElementById('brendSlider')) {

        new Swiper('#brendSlider', {
            slidesPerView: 6,
            spaceBetween: 20,
            lazy: {
                loadPrevNext: true,
            },


            breakpoints: {

                300: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                },
                660: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                960: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },

                1280: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                }
            }

        });
    }

    if (document.getElementById('sliderSubCatalog')) {
        var items = document.getElementById('sliderSubCatalog').getElementsByClassName('sub-menu-catalog-item');

        for (var i = 0; i < items.length; ++i) {
            items[i].parentNode.style.width = items[i].clientWidth + 'px';
        }

        new Swiper('#sliderSubCatalog', {
            slidesPerView: 'auto',
            spaceBetween: 20,
        });
    }

    if (document.getElementsByClassName("slider_products").length) {
        let swiperCatalog = new Swiper('.slider_products', {
            pagination: {
                el: '.slider_products__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
            },
            //loop: true,
            //simulateTouch: false,

        });
    }

});


