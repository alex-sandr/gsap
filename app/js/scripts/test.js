const wrapper = document.querySelector('.wrapper'),
    dot = document.querySelector('.dot'),
    dotMenu = document.querySelector('.dot-menu__list')
let tl = gsap.timeline()
let dotMenutl = gsap.timeline()

tl.from('.head-content__title', 0.4, {duration: 1, opacity: 0}, 1)
gsap.set('.underline', {left: '50%', xPercent: -50})
gsap.fromTo('.underline', 1, {width: 0}, {width: '100%'}, 1.5)
tl.from('.header__logo', 0.4, {duration: 1, opacity: 0, stagger: {amount: 0.5, from: 'end'}}, 2)
tl.from('.socials li', 0.4, {duration: 1, opacity: 0, stagger: {amount: 0.5, from: 'start'}}, 2.2)
tl.from('.menu-list li', 0.4, {duration: 1, opacity: 0, stagger: {amount: 0.5, from: 'end'}}, 2.2)
dotMenutl.fromTo('.dot-menu__list li', 0.4, {duration: 1, opacity: 0},{duration: 1, opacity: 1, stagger: {amount: 0.5, from: 'end'}}, 2.2)
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu--active')
})
let tlScroll = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: '-10% 90%',
        scrub: true,
        once: true,
        end: 'center center',
    }
})
tl.from('.dot-menu__list li', {
    scrollTrigger: {
        trigger: '.head-wrapper',
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=300", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, duration: 3, opacity: 0, stagger: {amount: 0.5, from: 'end'}
})
// ScrollTrigger.create({
//     trigger: '.head-wrapper',
//     start: "top top", // when the top of the trigger hits the top of the viewport
//     end: "+=300", // end after scrolling 500px beyond the start
//     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     animation: dotMenutl,
// });
document.querySelector('.dot').addEventListener('click', () => {
    dotMenutl.reversed() ? dotMenutl.play():dotMenutl.reverse();
    // dotMenutl.play()
    // dotMenutl.reverse()
})
// gsap.set('.about-left__title', {right: '-500px', top: '200px'})

if (window.matchMedia('(max-width: 768px)').matches) {
    tlScroll.to('.about-left__title', {
        scrollTrigger: {
            trigger: '.about',
            start: '-10% 90%',
            scrub: true,
            end: 'center center',
        }, xPercent: 10, top: '10px', duration: 2,
    })
} else {
    tlScroll.to('.about-left__title', {
        scrollTrigger: {
            trigger: '.about',
            start: '-10% 90%',
            scrub: true,
            end: 'center center',
        }, right: '-210px', top: '108px', duration: 2,
    })
}
gsap.set('.about__box', {xPercent: -50})
tlScroll.to('.about__box', {
    scrollTrigger: {
        trigger: '.about',
        start: '-10% 90%',
        scrub: true,
        end: 'center center',
    }, xPercent: 0, duration: 2
})

gsap.set('.about-right__text', {xPercent: -10})
tlScroll.to('.about-right__text', {
    scrollTrigger: {
        trigger: '.about',
        start: '-10% 90%',
        scrub: true,
        end: 'center center',
    }, xPercent: 0, duration: 2
})
tlScroll.from('.about-right', {
    scrollTrigger: {
        trigger: '.about',
        start: '-10% 90%',
        scrub: true,
        end: 'center center',
    }, opacity: 0, duration: 2
})

let lines = gsap.timeline()

gsap.set('.line1', {left: '50%', xPercent: -50})
lines.fromTo('.line1', 1, {width: 0}, {
    scrollTrigger: {
        trigger: '.about',
        start: '-10% 90%',
        scrub: true,
        end: 'center center',
    }, width: '100%', top: 0
}, 1.5)

gsap.set('.line2', {left: '50%', xPercent: -50})
lines.fromTo('.line2', 1, {width: 0}, {
    scrollTrigger: {
        trigger: '.about',
        start: '20% 90%',
        scrub: true,
        end: 'center center',
    }, width: '100%', top: 0
}, 1.5)
gsap.set('.line3', {left: '50%', xPercent: -50})
lines.fromTo('.line3', 1, {width: 0}, {
    scrollTrigger: {
        trigger: '.about',
        start: '40% 90%',
        scrub: true,

        end: 'center center',
    }, width: '100%', top: 0
}, 1.5)
gsap.set('.line4', {left: '50%', xPercent: -50})
lines.fromTo('.line4', 1, {width: 0}, {
    scrollTrigger: {
        trigger: '.about',
        start: '40% center',
        scrub: true,
        end: '150% bottom',
    }, width: '100%', top: 0
}, 1.5)

document.querySelectorAll('.about-list__text').forEach((item, index) => {
    // lines.set(item, {opacity: 0})
    console.log(index)
    lines.fromTo(item,{opacity: 0},{scrollTrigger: {trigger: '.about', start: '-50% top',
            scrub: true,
            end: '+=' + (index+1) * 500,}, opacity: 1})
})
// tlScroll.to('.about__round-img', {
//     scrollTrigger: {
//         trigger: '.about',
//         start: 'top top',
//         scrub: true,
//         end: '2000px bottom',
//     }, duration: 5, rotate: 360
// })
// tlScroll.to('.about__packet-img', 5, {
//     scrollTrigger: {
//         trigger: '.about',
//         start: 'top top',
//         scrub: true,
//         end: '2000px bottom',
//     }, duration: 5, rotate: -360
// })

// let tlSlider = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.about-exp__title',
//         start: 'top top',
//         scrub: true,
//         pin: true,
//         toggleClass: 'active',
//         end: 'bottom bottom',
//     }
// })
//
// gsap.utils.toArray('._opacity').forEach((panel, i) => {
//     tl.to(panel,  { scrollTrigger: {
//             trigger: '.about-exp',
//             start: 'top top',
//             scrub: true,
//             pin: true,
//             toggleClass: 'active'
//         },duration: 5, opacity: 1 })
// });

gsap.set('.content:not(.initial)', {autoAlpha: 0})


var headlines = gsap.utils.toArray('.text');

var totalDuration = 1000;
var singleDuration = totalDuration / headlines.length;


const lineTimeline = gsap.timeline();
const contentAnimate = gsap.timeline();
ScrollTrigger.create({
    trigger: '.pin-up',
    start: 'top top',
    end: '+=' + totalDuration,
    //markers: true,
    pin: true,
    scrub: true,
    animation: lineTimeline,
});
ScrollTrigger.create({
    trigger: '.about-exp',
    start: '-200px top',
    end: 'bottom bottom',
    animation: contentAnimate,
});
let check = false
const contentFirst = document.querySelector('.content-0')
contentAnimate.fromTo(contentFirst, {autoAlpha: 0, xPercent: -20}, {autoAlpha: 1, xPercent: 0, onComplete: () => { check = true; console.log(check)}})

lineTimeline
    .to('.sideline', {duration: 1}, 0)
    .to('.sideline', {duration: 0.9, scaleY: 1, ease: 'none'}, 0)
headlines.forEach((elem, i) => {
    const smallTimeline = gsap.timeline();
    const content = document.querySelector('.content-wrap');
    const relevantContent = content.querySelector('div.content-' + i);
    const element = document.querySelector('.initial-heading')


    ScrollTrigger.create({
        trigger: '.about-exp',
        start: 'top -=' + (singleDuration * i),
        end: '+=' + singleDuration,
        animation: smallTimeline,
        toggleActions: relevantContent.classList.contains('remaining') ? 'play none play reverse' : 'play reverse play reverse',
        toggleClass: 'test',
        // onToggle: ()=> {
        //     console.log(check)
        //     if(check) {
        //
        //
        //     } else {
        //         if (!relevantContent.classList.contains('initial')) {
        //             smallTimeline.fromTo(relevantContent, {autoAlpha: 0, xPercent: 20}, {
        //                 autoAlpha: 1, xPercent: 0
        //             }, 0.15)
        //             smallTimeline.fromTo(contentFirst, {autoAlpha: 0, xPercent: 20}, {autoAlpha: 1, xPercent: 0}, 0.15)
        //         }
        //     }
        // }

    });
    smallTimeline.to(elem, {duration: 0.25, autoAlpha: 1, ease: 'none'}, 0.1)
    smallTimeline.fromTo(relevantContent, {autoAlpha: 0, xPercent: 20}, {
        autoAlpha: 1, xPercent: 0
    }, 0.15)

    // if(!elem.classList.contains('initial-heading')) {
    //     smallTimeline.to(elem, {scrollTrigger: {}, duration: 0.25, opacity: 1, ease: 'none'}, 0.1)
    //     console.log('test')
    // } else {
    //     console.log('true')
    //     smallTimeline.to(element, {scrollTrigger: {}, duration: 0.25, opacity: 0.1, ease: 'none'}, 0.1)
    // }


});


// tlSlider.to('.about-exp__title', {duration: 5, rotate: -360})
// const aboutExp = document.querySelectorAll('.about-exp__title')
// aboutExp[1].classList.remove('_opacity')
//
// // aboutExp[2].classList.remove('_opacity')
// const animateText = gsap.timeline();
// ScrollTrigger.create({
//     trigger: '.actions',
//     start: 'top top',
//     end: 'bottom bottom',
//     //markers: true,
//     scrub: true,
//     animation: lineTimeline,
// });
// animateText.to('.rolling-text', {xPercent: '+=10'})
// gsap.utils.toArray('.rolling-text').forEach((section, index) => {
//     const w = section.querySelector('.rolling-text__inner');
//     const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * 10*  -1] : [w.scrollWidth * -1, 0];
//     gsap.fromTo(w, {  x  }, {
//         x: xEnd,
//         scrollTrigger: {
//             trigger: section,
//             scrub: 0.5
//         }
//     });
// });
// const rows = document.querySelectorAll(".rolling-text");
//
// rows.forEach(function (e, i) {
//     let row_width = e.getBoundingClientRect().width;
//     let row_item_width = e.children[0].getBoundingClientRect().width;
//     let initial_offset = i % 2 ? ((2 * row_item_width) / row_width) * 10 : ((2 * row_item_width) / row_width) * 10 * -1;
//     let x_translation = initial_offset * -1;
//     // console.log(e.children[0].clientWidth);
//     console.log(x_translation);
//     gsap.set(e, {
//         xPercent: `${x_translation}`
//     });
//
//     let duration = 5 * (i + 1);
//
//     var tl = gsap.timeline();
//
//     tl.to(e, {
//         ease: "none",
//         duration: duration,
//         xPercent: 0,
//
//         scrollTrigger: {
//             trigger: '.actions',
//             scrub: 0.5
//         }
//     });
// });

r = 100;
adjustJank = 4; // Set this to 0 to see the jank I'm talking about ... this just adds to the distance animated to smooth out the seam

// Get the initial scroll elements and save them for later
const scrollElems = document.querySelectorAll('.rolling-text p');

// Adjust our tween based on the object and distance given
function adjustTween(obj, d, m, x) {
    // Get the progress of the previous tween if it exists
    let progress = 0;
    if (obj.tween) {
        progress = obj.tween.progress();
        // Kill the previous tween
        obj.tween.kill();
    }

    // r = d/t
    // r*t = d
    // t = d/r

    // Set the proper time
    var t = d / r;

    // Create a new tween to animate our text so that it loops
    // Make sure to save it to the object so we can refer to it later
    obj.tween = gsap.fromTo(obj.parentElement, {x: x}, {
        duration: t,
        x: m + (d + adjustJank),
        ease: 'linear',
        repeat: -1,
    }).progress(progress); // Set the progress of the new tween to the same value of
                           // the previous tween (if it exists) before it was killed
}

// Set up for what appears to be an seamless stream of text
// This could go in an init() function
scrollElems.forEach((obj, i) => {
    let d = obj.offsetWidth;
    let parent = obj.parentElement;
    let clone = obj.cloneNode(true);
    parent.appendChild(clone);
    gsap.set('.bg-roll', {width: d});
    if (i % 2) {
        adjustTween(obj, d, '-', -1200);
    } else {
        adjustTween(obj, d, '', 1200);
        obj.parentElement.style.direction = 'rtl'

    }
});

// Adjust widths and tweens on resize
window.addEventListener("resize", () => {
    scrollElems.forEach((obj, i) => {
        let d = obj.offsetWidth;
        let parent = obj.parentElement;
        let clone = obj.cloneNode(true);
        parent.appendChild(clone);
        gsap.set('.bg-roll', {width: d});

        if (i % 2) {
            adjustTween(obj, d, '-', -1200);
        } else {
            adjustTween(obj, d, '', 1200);
            obj.parentElement.style.direction = 'rtl'

        }
    });
});
