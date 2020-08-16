function PlaySound(){
    var thissound=document.getElementById("audio");
    thissound.play();
}

function StopSound(){
    var thissound=document.getElementById("audio");
    thissound.pause();
    thissound.currentTime = 0;
}
    