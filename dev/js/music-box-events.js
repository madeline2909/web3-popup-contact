var canYouSeeTheForm = false;

$("#box").on("mouseenter", function () {
    console.log("mouse enter !!!");
    if (canYouSeeTheForm === false) {
        musicBoxAnimationTimeline.play("boxToMusic");
    } else {
        console.log
    }
});
$("#box").on("mouseleave", function () {
    console.log("mouse leave");
    if (canYouSeeTheForm === false) {
        musicBoxAnimationTimeline.reverse("boxToMuiscReverse");
    } else {
        //console.log
    }
});

$("#box").on("click", function () {
    console.log("mouse click");
    if (canYouSeeTheForm === false) {
        formAnimationTimeline.play();
        musicBoxAnimationTimeline.play("MusicToForm");
        canYouSeeTheForm = true;
    } else {
        //console.log


    }
});

$("#box").on('click', function () {
    $(this).addClass('animating');
    setTimeout(() => {
        $(this).removeClass('animating');
    }, 1000);
});