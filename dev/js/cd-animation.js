gsap.registerPlugin(MotionPathPlugin);


var formAnimationTimeline = gsap.timeline({paused:true});
var motionPathAnimationTime = 1;
// gsap.set("#input-path",{transformOrigin: "center"});
gsap.set(".input",{transformOrigin: "left center", alpha:1})
gsap.set(".bottom-border",{alpha:1});

let namePath = document.querySelector("#name-path");
let emailPath = document.querySelector("#email-path");
let messagePath = document.querySelector("#message-path");

formAnimationTimeline.from(".main-text",{
    duration: motionPathAnimationTime,
    x:"150px",
    alpha:0,
    stagger: 0.25
}, "formAnimation")

.from("#name", {
    motionPath: {
        path: namePath,
        autoRotate: true,
        align: namePath,
        alignOrigin: [0,0]
    },
    duration: 1.5,
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
    duration: 1.5,
    ease: "power1.inOut",
    alpha:0
}, "-=1.25")
.from("#message", {
    motionPath: {
        path: messagePath,
        autoRotate: true,
        align: messagePath,
        alignOrigin: [0,0]
    },
    duration: 1.5,
    ease: "power1.inOut",
    alpha:0
}, "-=1.25")

.from("button",{
    duration: motionPathAnimationTime,
    alpha:0
}, "-=1.25")

.from(".bottom-border",{
    duration: motionPathAnimationTime,
    x:"100px",
    alpha:0
}, "formAnimation")
;
