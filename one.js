// function play(){
//     document.getElementById("play").innerHTML = "Play";
// }

// function pause(){
//     document.getElementById("play").innerHTML = "Pause";
// }

// function stop(){
//     document.getElementById("play").innerHTML = "Stop";
// }

// function next(){
//     document.getElementById("play").innerHTML = "Next";
// }

// function previous(){
//     document.getElementById("play").innerHTML = "Previous";
// }

// function volumeUp(){
//     document.getElementById("play").innerHTML = "Volume Up";
// }

// function volumeDown(){
//     document.getElementById("play").innerHTML = "Volume Down";
// }

// function repeat(){
//     document.getElementById("play").innerHTML = "Repeat";
// }

// function shuffle(){
//     document.getElementById("play").innerHTML = "Shuffle";
// }

// function mute(){
//     document.getElementById("play").innerHTML = "Mute";
// }

// function unmute(){
//     document.getElementById("play").innerHTML = "Unmute";
// }

// function fullScreen(){
//     document.getElementById("play").innerHTML = "Full Screen";
// }

// function exitFullScreen(){
//     document.getElementById("play").innerHTML = "Exit Full Screen";
// }

// function download(){
//     document.getElementById("play").innerHTML = "Download";
// }

// function upload(){
//     document.getElementById("play").innerHTML = "Upload";
// }

// function search(){
//     document.getElementById("play").innerHTML = "Search";
// }

// function settings(){
//     document.getElementById("play").innerHTML = "Settings";
// }

// function help(){
//     document.getElementById("play").innerHTML = "Help";
// }

// function about(){
//     document.getElementById("play").innerHTML = "About";
// }

// function close(){
//     document.getElementById("play").innerHTML = "Close";
// }

// function minimize(){
//     document.getElementById("play").innerHTML = "Minimize";
// }

// function maximize(){
//     document.getElementById("play").innerHTML = "Maximize";
// }

// function zoomIn(){
//     document.getElementById("play").innerHTML = "Zoom In";
// }

// function zoomOut(){
//     document.getElementById("play").innerHTML = "Zoom Out";
// }

// function zoomReset(){
//     document.getElementById("play").innerHTML = "Zoom Reset";
// }

// function zoomFit(){
//     document.getElementById("play").innerHTML = "Zoom Fit";
// }

var main = document.querySelector("#main")

var cursor = document.querySelector("#cursor")

var imageDiv = document.querySelector("#image")

var hero = document.querySelector("#hero")

var cursor1 = document.querySelector("#cursor1")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:4
    })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1
    })
})
hero.addEventListener("mousemove", function(dets){
    gsap.to(cursor1,{
        x: dets.x,
        y: dets.y,
        duration: 0.3,
    })
})