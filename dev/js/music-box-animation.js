var musicBoxAnimationTimeline = gsap.timeline({paused:true});
var musicNotesSpeedUp = .5;
var musicNotesSpeeddown = 1;
var formSpeed = 1;


musicBoxAnimationTimeline.addLabel("boxToMusic")
                        .to("#box-1",{fill:"#EE478C"}, "animateMusic")
                        .to("#box-2",{fill:"#EE478C"}, "animateMusic")
                        .to("#box-3",{fill:"#EE478C"}, "animateMusic")
                        .to("#green-shield",{fill:"#EE478C"}, "animateMusic")
                        .to("#contact-us",{alpha:0}, "animateMusic")
                        .to("#mail",{fill:"#000"}, "animateMusic")
                        .to("#note-1",{duration:musicNotesSpeedUp, y:-36}, "animateMusic")
                        .to("#note-2",{duration:musicNotesSpeedUp, y:-36, fill:"#FFC958"}, "animateMusic")
                        .to("#note-3",{duration:musicNotesSpeedUp, y:-40}, "animateMusic")
                        .to("#note-4",{duration:musicNotesSpeedUp, y:-68, fill:"#EE478C"}, "animateMusic")
                        .to("#note-5",{duration:musicNotesSpeedUp, y:-70, fill:"#3FB49F"}, "animateMusic")
                        .addLabel("boxToMuiscReverse")
                        .addPause()
                        .addLabel("formToRotate")
                        .from("#pop-up",{duration:formSpeed, y:230, x:480, scale:0.01, alpha:0, rotate:360}, "animateForm")
                        .from("#shadow",{duration:formSpeed, alpha:0}, "animateForm")
                        .addLabel("formToRotateReverse")
                        .addPause()
                        .to("#note-1",{duration:musicNotesSpeeddown, y:-20, alpha:0}, "animateForm")
                        .to("#note-2",{duration:musicNotesSpeeddown, y:-20, fill:"#FFC958", alpha:0}, "animateForm")
                        .to("#note-3",{duration:musicNotesSpeeddown, y:-24, alpha:0}, "animateForm")
                        .to("#note-4",{duration:musicNotesSpeeddown, y:-52, fill:"#EE478C", alpha:0}, "animateForm")
                        .to("#note-5",{duration:musicNotesSpeeddown, y:-54, fill:"#3FB49F", alpha:0}, "animateForm")
                        .addPause()