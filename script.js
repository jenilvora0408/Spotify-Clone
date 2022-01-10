console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {songName: "Let me Love You", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "Duniya - Lukka Chuppi", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "Kyaa Baat Ay - Harrdy Sandhu", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "Filhaal - Akshay Kumar & Nupur Sanon", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "Dooriyan - Dino James", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "Dhindora - Bhuvan Bam", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "Pal Pal Dil Ke Pass", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "Zara Zara Mahekta Hai", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    // element.getElementsByTagName("img")[0].src = songs[1].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        // If anyone clicks on play button, the audio will play.
        audioElement.play();
        // As the song plays, the play button will change into pause button.
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        // GIF appears as soon as the audio plays.
        gif.style.opacity = 1;
    }
    else{
        // If the audio is already playing, then by clicking on pause button - it will pause the audio.
        audioElement.pause();
        // As the song pauses, the pause button will change into plat button.
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        // GIF disappears as soon as the audio is paused.
        gif.style.opacity = 0;
    }
});
// Note: GIF takes time to appear & disappear on play/pause click because of the transition - CSS Property.

// Listen to events

// Updates the time as the audio keeps on playing.
audioElement.addEventListener("timeupdate", ()=>{
    // console.log("timeupdate");  ---Testing Purpose---
    // Update Seekbar

    // The formula gives the value in percentage of how much the audio is played.
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);  ---Testing Purpose---
    // Progress Bar shows the value of how much the song is played.
    myProgressBar.value = progress;
});

// As the Progress Bar changes, the audio will seek according to it's value.
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})