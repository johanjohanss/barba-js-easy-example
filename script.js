"use strict";

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}


function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".transition-div", {
        duration: 0.5,
        scaleX: 1,
        transformOrigin: "bottom left"
    });
    tl.to(".transition-div", {
        duration: 0.5,
        delay: 0.35,
        scaleX: 0,
        transformOrigin: "bottom right"
    });
}


function contentAnimation() {

    var tl = gsap.timeline();

    tl.from(".animation-wrapper", {
        duration: 0.5,
        //translateY: 50,
        opacity: 0,
        rotate: 180,
        scale: 0.2,
    });

}


function leaveAnimation() {
    var tl = gsap.timeline();
    tl.to(".animation-wrapper", {
        duration: 0.25,
        opacity: 0,
    });
}


barba.init({

    transitions: [
        {
            name: "default-transition",

            async leave(data) {

                const done = this.async();

                pageTransition();

                leaveAnimation();

                await delay(150);

                done();

            },

            async enter(data) {
                await delay(1000);
                contentAnimation();
            },

        },

    ],
});
