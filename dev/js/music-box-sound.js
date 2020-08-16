

// $("#music").on("mouseenter", function(){
//     audio.currentTime = 0;
//     audio.play();
// });
// $("#music").on("mouseleave", function(){
//     audio.currentTime = 0;
//     audio.play();
// }



function PlaySound(){
    var thissound=document.getElementById("audio");
    thissound.play();
}

function StopSound(){
    var thissound=document.getElementById("audio");
    thissound.pause();
    thissound.currentTime = 0;
}
    