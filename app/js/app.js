// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import  '~/node_modules/swiper/swiper-bundle.min.js'
import '~/node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '~/node_modules/@fancyapps/ui/dist/fancybox.umd.js'
//import './smooth-scroll.polyfills.min.js'
import './lazyload.min.js'
//import './imask.min.js'


/*

var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

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
    if (document.getElementById('homeSlider')) {

        new Swiper('#homeSlider', {

            //loop: true,
            lazy: {
                loadPrevNext: true,
            },
            // If we need pagination
            pagination: {
                el: '#homeSliderPag',
                clickable: true,
            },
            effect: 'creative',
            creativeEffect: {
                prev: {
                    // will set `translateZ(-400px)` on previous slides
                    translate: [0, 0, -400],
                },
                next: {
                    // will set `translateX(100%)` on next slides
                    translate: ['100%', 0, 0],
                },
            },
            parallax: true,
            navigation: {
                nextEl: '#homeSliderNext',
                prevEl: '#homeSliderPrev',
            },


        });
    }

});


