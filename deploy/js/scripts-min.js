gsap.registerPlugin(MotionPathPlugin);var formAnimationTimeline=gsap.timeline();gsap.set(".input",{transformOrigin:"left center",alpha:1});let namePath=document.querySelector("#name-path"),emailPath=document.querySelector("#email-path"),messagePath=document.querySelector("#message-path");formAnimationTimeline.from(".main-text",{duration:1,y:"-=100",alpha:0,stagger:.1},"formAnimation").from("#name",{motionPath:{path:namePath,autoRotate:!0,align:namePath,alignOrigin:[0,0]},duration:1,ease:"power1.inOut",alpha:0},"formAnimation").from("#email",{motionPath:{path:emailPath,autoRotate:!0,align:emailPath,alignOrigin:[0,0]},duration:1,ease:"power1.inOut",alpha:0},"formAnimation").from("#message",{motionPath:{path:messagePath,autoRotate:!0,align:messagePath,alignOrigin:[0,0]},duration:1,ease:"power1.inOut",alpha:0},"formAnimation").from("button",{duration:1,alpha:0},"formAnimation").from(".input",{duration:.25,borderBottom:"transparent"},"bottomBordersFadeIn");var XAnimationTimeline=gsap.timeline({paused:!0});function play(){document.getElementById("audio").play()}XAnimationTimeline.to("#X",{duration:.25,rotation:90},"animateX"),$("#X").on("mouseenter",(function(){console.log("X enter"),XAnimationTimeline.play()})),$("#X").on("mouseleave",(function(){console.log("X leave"),XAnimationTimeline.reverse()})),$("#X").on("click",(function(){console.log("X click"),musicBoxAnimationTimeline.reverse("musicToForm"),canYouSeeTheForm=!1}));var musicBoxAnimationTimeline=gsap.timeline({paused:!0}),musicNotesSpeedUp=.5,musicNotesSpeeddown=1,formSpeed=.8;musicBoxAnimationTimeline.addLabel("boxToMusic").to("#note-1",{duration:musicNotesSpeedUp,y:-36},"animateBox").to("#note-2",{duration:musicNotesSpeedUp,y:-36,fill:"#FFC958"},"animateBox").to("#note-3",{duration:musicNotesSpeedUp,y:-40},"animateBox").to("#note-4",{duration:musicNotesSpeedUp,y:-68,fill:"#EE478C"},"animateBox").to("#note-5",{duration:musicNotesSpeedUp,y:-70,fill:"#3FB49F"},"animateBox").to("#box-1",{fill:"#EE478C"},"animateBox").to("#box-2",{fill:"#EE478C"},"animateBox").to("#box-3",{fill:"#EE478C"},"animateBox").to("#green-shield",{fill:"#EE478C"},"animateBox").to("#contact-us",{alpha:0},"animateBox").to("#mail",{fill:"#000"},"animateBox").addLabel("boxToMuiscReverse").addPause().addLabel("musicToForm").to("#note-1",{duration:musicNotesSpeeddown,y:-20,alpha:0},"animateForm").to("#note-2",{duration:musicNotesSpeeddown,y:-20,fill:"#FFC958",alpha:0},"animateForm").to("#note-3",{duration:musicNotesSpeeddown,y:-24,alpha:0},"animateForm").to("#note-4",{duration:musicNotesSpeeddown,y:-52,fill:"#EE478C",alpha:0},"animateForm").to("#note-5",{duration:musicNotesSpeeddown,y:-54,fill:"#3FB49F",alpha:0},"animateForm").from("#pop-up",{duration:formSpeed,y:500,x:500,scale:.01,alpha:0},"animateForm");var canYouSeeTheForm=!1;$("#box").on("mouseenter",(function(){console.log("mouse enter"),!1===canYouSeeTheForm?musicBoxAnimationTimeline.play("boxToMusic"):console.log})),$("#box").on("mouseleave",(function(){console.log("mouse leave"),!1===canYouSeeTheForm?musicBoxAnimationTimeline.reverse("boxToMuiscReverse"):console.log})),$("#box").on("click",(function(){console.log("mouse click"),!1===canYouSeeTheForm?(musicBoxAnimationTimeline.play("musicToForm"),canYouSeeTheForm=!0):(formAnimationTimeline.play(),console.log)}));