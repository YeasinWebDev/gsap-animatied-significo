
function homePageAnimation() {
    gsap.set(".slidesM", { scale: 5 })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        }
    })

    tl.to('.videodiv', {
        '--clip': "0%",
        ease: Power2,
    }, 'same')

    tl.to(".slidesM", {
        scale: 1,
        ease: Power2,
    }, 'same')

    tl.to(".lft", {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
    }, 'b')

    tl.to(".rgt", {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
    }, 'b')
}

function carftAnimation() {
    let tl = gsap.timeline()
    tl.from('#carft-header h1 span', {
        y: 100,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: ".craft",
            start: "top 40%",
            end: "top 55%",
            scrub: 2
        }
    });
    tl.from('.cardcon', {
        y: 500,
        stagger: 0.3,
        duration: 2,
        scrollTrigger: {
            trigger: ".craft",
            start: "top 40%",
            end: "bottom 40%",
            scrub: 2
        }
    }),
        tl.to('.cardcon1 h1, .cardcon1 p, .cardcon1 i', {
            color: "#aedee0",
            scrollTrigger: {
                trigger: ".cardcon1",
                start: "top 50%",
                end: "bottom 80%",
                scrub: 2
            }
        }, '1')
    tl.to('.card1', {
        background: '#000',
        width: "80%",
        duration: 1,
        scrollTrigger: {
            trigger: ".cardcon1",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 2
        }
    }, '1')
    tl.to('.cardcon2 h1, .cardcon2 p, .cardcon2 i', {
        color: "#aedee0",
        scrollTrigger: {
            trigger: ".cardcon2",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 2
        }
    }, '2')
    tl.to('.card2', {
        background: '#000',
        width: "80%",
        duration: 1,
        scrollTrigger: {
            trigger: ".cardcon2",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 2
        }
    }, '2')
    tl.to('.cardcon3 h1, .cardcon3 p, .cardcon3 i', {
        color: "#aedee0",
        scrollTrigger: {
            trigger: ".cardcon3",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 2
        }
    }, '2')
    tl.to('.card3', {
        background: '#000',
        width: "80%",
        duration: 1,
        scrollTrigger: {
            trigger: ".cardcon3",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 2
        }
    }, '2')
    tl.to('.cardcon4 h1, .cardcon4 p, .cardcon4 i', {
        color: "#aedee0",
        scrollTrigger: {
            trigger: ".cardcon4",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 2
        }
    }, '2')
    tl.to('.card4', {
        background: '#000',
        width: "80%",
        duration: 1,
        scrollTrigger: {
            trigger: ".cardcon4",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 2
        }
    }, '2')
}

function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
        xPercent: -205,
        ease: Power4,
    })
}

function teamAnimation() {
    document.querySelectorAll(".listElem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), { opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX), ease: Power4, duration: 0.5 }),
                gsap.to(this.querySelector(".bluelayer"), { height: '100%', duration: 0.4 })
            gsap.to(this.querySelector(".left-text"), { color: 'white' })
        })

        el.addEventListener("mouseleave", function (e) {
            gsap.to(this.querySelector(".picture"), { opacity: 0, ease: Power4 }),
                gsap.to(".bluelayer", { height: '0%', duration: 0.4 })
            gsap.to(this.querySelector(".left-text"), { color: 'black' })
        })
    })
}

function commentAnimation() {
    let clutter = ''
    document.querySelector(".textpara")
        .textContent.split('')
        .forEach(function (e) {
            if (e === "") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })

    document.querySelector(".textpara").innerHTML = clutter

    gsap.set('.textpara span', { opacity: .1 })
    gsap.to('.textpara span', {
        scrollTrigger: {
            trigger: ".comment",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
        },
        opacity: 1,
        stagger: 0.03,
        ease: Power4,
    })
}

function bodycolorChangee() {
    document.querySelectorAll('.section')
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                }
            })
        })

}

function btnAnimation() {
    document.querySelectorAll('.btnTag').forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
            gsap.fromTo(btn.querySelectorAll('h1 span'), { stagger: 0.2, y: -40, duration: 0.5 }, { stagger: 0.2, y: 0, duration: 0.5 });
        });
    });
}

function scroll() {
    (function () {
        var scroll = new LocomotiveScroll();
    })();
}





btnAnimation()
homePageAnimation()
carftAnimation()
realPageAnimation()
teamAnimation()
commentAnimation()
bodycolorChangee()
scroll()



