var XAnimationTimeline = gsap.timeline({
    paused: true
});
XAnimationTimeline.to("#X", {
    duration: 0.25,
    rotation: 90
}, "animateX")

$("#X").on("mouseenter", function () {
    console.log("X enter");
    XAnimationTimeline.play();
});
$("#X").on("mouseleave", function () {
    console.log("X leave");
    XAnimationTimeline.reverse();
});

$("#X").on("click", function () {
    if (canYouSeeTheForm === true) {
        console.log("X clicked");
        musicBoxAnimationTimeline.play("MusicToGreen");
        formAnimationTimeline.reverse();
        canYouSeeTheForm = false;
    }
});

var formBackground = document.querySelector("#shadow");
window.onclick = function (event) {
    if (canYouSeeTheForm === true) {
        if (event.target == formBackground) {
            console.log("clicked shadow");
            musicBoxAnimationTimeline.play("MusicToGreen");
            formAnimationTimeline.reverse();
            canYouSeeTheForm = false;
        }
    }
}