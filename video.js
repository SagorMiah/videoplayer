const video = document.getElementById("video")
const play = document.getElementById("play")
const stop = document.getElementById("stop")
const progress = document.getElementById("progress")
const timeupdate = document.getElementById("timecus")

const toggleVideoStatus = () => {
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

const updateIcon = () => {
    if(video.paused){
        play.innerHTML = '<i class="fas fa-play"></i>'
    }else{
        play.innerHTML = '<i class="fas fa-pause"></i>'
    }
}

const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) *100

    let mins = Math.floor(video.currentTime / 60)
    if(mins < 10){
        mins = "0" + String(mins)
    }

    let sec = Math.floor(video.currentTime % 60)
    if(sec < 10){
        sec = "0" + String(sec)
    }

    timeupdate.innerText = `${mins}:${sec}`
}

const stopVideo = () => {
    video.currentTime = 0
    video.pause()
}

const setVieoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100
}

//Event Listener
video.addEventListener("click", toggleVideoStatus)
video.addEventListener("play", updateIcon)
video.addEventListener("pause", updateIcon)
video.addEventListener("timeupdate", updateProgress)

play.addEventListener("click", toggleVideoStatus)
stop.addEventListener("click", stopVideo)
progress.addEventListener("change", setVieoProgress)
