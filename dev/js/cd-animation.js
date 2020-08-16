gsap.registerPlugin(MotionPathPlugin);


var formAnimationTimeline = gsap.timeline({paused:true});
var motionPathAnimationTime = 1.25;
// gsap.set("#input-path",{transformOrigin: "center"});
gsap.set(".input",{transformOrigin: "left center", alpha:1})
gsap.set(".bottom-border",{alpha:1});

let namePath = document.querySelector("#name-path");
let emailPath = document.querySelector("#email-path");
let messagePath = document.querySelector("#message-path");

formAnimationTimeline.from(".main-text",{
    duration: 1,
    y:"-=150",
    alpha:0
}, "formAnimation")

.from("#name", {
    motionPath: {
        path: namePath,
        autoRotate: true,
        align: namePath,
        alignOrigin: [0,0]
    },
    duration: motionPathAnimationTime ,
    ease: "power1.inOut",
    alpha:0   
}, "formAnimation")

.from("#email", {
    motionPath: {
        path: emailPath,
        autoRotate: true,
        align: emailPath,
        alignOrigin: [0,0]
    },
    duration: motionPathAnimationTime,
    ease: "power1.inOut",
    alpha:0
}, "-=1")
.from("#message", {
    motionPath: {
        path: messagePath,
        autoRotate: true,
        align: messagePath,
        alignOrigin: [0,0]
    },
    duration: motionPathAnimationTime,
    ease: "power1.inOut",
    alpha:0
}, "-=1")

.from("button",{
    duration: motionPathAnimationTime,
    alpha:0
}, "formAnimation")

.from(".bottom-border",{
    duration: 2,
    x:"100px",
    alpha:0
}, "formAnimation")
;
