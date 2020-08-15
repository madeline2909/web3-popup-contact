var musicBoxAnimationTimeline = gsap.timeline({paused:true});
var musicNotesSpeedUp = .5;
var musicNotesSpeeddown = 1;
var formSpeed = 1;


musicBoxAnimationTimeline.addLabel("boxToMusic")
                        .to("#note-1",{duration:musicNotesSpeedUp, y:-36}, "animateBox")
                        .to("#note-2",{duration:musicNotesSpeedUp, y:-36, fill:"#FFC958"}, "animateBox")
                        .to("#note-3",{duration:musicNotesSpeedUp, y:-40}, "animateBox")
                        .to("#note-4",{duration:musicNotesSpeedUp, y:-68, fill:"#EE478C"}, "animateBox")
                        .to("#note-5",{duration:musicNotesSpeedUp, y:-70, fill:"#3FB49F"}, "animateBox")
                        .to("#box-1",{fill:"#EE478C"}, "animateBox")
                        .to("#box-2",{fill:"#EE478C"}, "animateBox")
                        .to("#box-3",{fill:"#EE478C"}, "animateBox")
                        .to("#green-shield",{fill:"#EE478C"}, "animateBox")
                        .to("#contact-us",{alpha:0}, "animateBox")
                        .to("#mail",{fill:"#000"}, "animateBox")
                        .addLabel("boxToMuiscReverse")
                        .addPause()
                        .addLabel("musicToForm")
                        .to("#note-1",{duration:musicNotesSpeeddown, y:-20, alpha:0}, "animateForm")
                        .to("#note-2",{duration:musicNotesSpeeddown, y:-20, fill:"#FFC958", alpha:0}, "animateForm")
                        .to("#note-3",{duration:musicNotesSpeeddown, y:-24, alpha:0}, "animateForm")
                        .to("#note-4",{duration:musicNotesSpeeddown, y:-52, fill:"#EE478C", alpha:0}, "animateForm")
                        .to("#note-5",{duration:musicNotesSpeeddown, y:-54, fill:"#3FB49F", alpha:0}, "animateForm")
                        .from("#pop-up",{duration:formSpeed, y:230, x:480, scale:0.01, alpha:0, rotate:360}, "animateForm")
                        .addPause()
                        .addLabel("noteToFlow")
                        .to("#note-1",{duration:musicNotesSpeedUp, y:-50}, "animateNote")