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

});


