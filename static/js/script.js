function videoconAnimation() {
    var videocon = document.querySelector("#right");
    var playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        });
    });

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        });
    });

    videocon.addEventListener("mousemove", function (e) {
        gsap.to(playbtn, {
            left: e.clientX - 70 + "px",
            top: e.clientY - 80 + "px",
        });
    });
}

videoconAnimation();
