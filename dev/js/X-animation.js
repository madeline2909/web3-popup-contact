var XAnimationTimeline = gsap.timeline({paused:true});
XAnimationTimeline.to("#X",{duration: 0.25, rotation:90}, "animateX")

$("#X").on("mouseenter", function(){
    console.log("X enter");
    XAnimationTimeline.play();
});
$("#X").on("mouseleave", function(){
    console.log("X leave");
    XAnimationTimeline.reverse();
}
);

$("#X").on("click", function (){
    console.log("X click");
    musicBoxAnimationTimeline.reverse("formToRotateReverse");
    formAnimationTimeline.reverse();
    canYouSeeTheForm = false;
});

var formBackground = document.querySelector("#pop-up");
window.onclick = function(event){
    if(event.target == formBackground){
        musicBoxAnimationTimeline.reverse("formToRotateReverse");
        formAnimationTimeline.reverse();
        canYouSeeTheForm = false;
    }
}