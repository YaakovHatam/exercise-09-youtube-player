var youtubePlayer = {
   
};


function onYouTubeIframeAPIReady() {
   youtubePlayer.player = new YT.Player("player", {
      height: "315",
      width: "560",
      events: {
         'onReady': appStart,
      }
   });
}

