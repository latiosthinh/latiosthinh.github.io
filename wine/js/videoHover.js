var video = document.getElementById("video");
//var figure = $(".active-video a").hover(pauseVideo, hoverVideo);
var intervalRewind;
function hoverVideo(e) {  
    //$('video', this).get(0).play();
    video.play();
    video.playbackRate = .5;
    clearInterval(intervalRewind);
}

function hideVideo(e) {
    //$('video', this).get(0).pause();
    //video.pause();
    intervalRewind = setInterval(function(){
       video.playbackRate = 3;
       if(video.currentTime == 0){
           clearInterval(intervalRewind);
           video.pause();
       }
       else{
           video.currentTime -= .3;
       }
                },50);
}

function pauseVideo(e) {
    video.pause();
}

