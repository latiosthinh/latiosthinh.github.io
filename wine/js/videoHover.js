var video = document.getElementById("video");
var figure = $(".active-video a").hover(hoverVideo, hideVideo);
var intervalRewind;
function hoverVideo(e) {  
    //$('video', this).get(0).play();
    video.play();
    video.playbackRate = 1.0;
    clearInterval(intervalRewind);
}

function hideVideo(e) {
    //$('video', this).get(0).pause();
    //video.pause();
    intervalRewind = setInterval(function(){
       video.playbackRate = 0.5;
       if(video.currentTime == 0){
           clearInterval(intervalRewind);
           video.pause();
       }
       else{
           video.currentTime += -.1;
       }
                },65);
}