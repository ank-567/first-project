console.log("welcome to jambeat");

//initialiize the variable
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let song = [
    
    {songname:"sun le zara", filepath:"songs/1.mp3"},
    {songname:"badnaamiyan", filepath:"songs/2.mp3"},
    {songname:"sukran allah", filepath:"songs/3.mp3"},
    {songname:"tera cherea", filepath:"songs/4.mp3"},
    {songname:"phir-mohobatt", filepath:"songs/5.mp3"},
    {songname:"tu hi tu", filepath:"songs/6.mp3"},
    {songname:"tum mere ho", filepath:"songs/7.mp3"},
    {songname:"tum mere ho", filepath:"songs/8.mp3"},
]
songItems.forEach((element , i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = song [i] .coverpath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songname;
    
});
// audioElement.play();

//handle play/pause button
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
   }

    })

   
    

// listen to events
audioElement.addEventListener('timeupdate' , ()=>{
   // update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
     console.log(progress);
     myProgressBar.value =  progress;

})
    // myProgressBar.addEventListener('change', ()=>{
    //        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

    // })
    
   
    
    
    
