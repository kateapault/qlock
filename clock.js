// gets current time & inserts into span.clock
function showCurrentTime() {
    let clock = document.getElementById("clock")
    let currentTime = new Date()

    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    let seconds = currentTime.getSeconds()
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    var clockTime = hours + ":" + minutes + ":" + seconds

    clock.innerText = clockTime

    let img = `url("images/BGrainbow${(seconds % 6) + 1}.jpeg")`

    document.body.style.backgroundImage = img
}


setInterval(showCurrentTime,1000)