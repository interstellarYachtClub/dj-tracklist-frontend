const MakeMinutes = (time) => {
    let minutes = Math.floor(time/60000).toString();
    let seconds = (time % 60).toString();
    if (seconds < 10){
        return (`${minutes}:${'0'.concat(seconds)}`)
} else {
    return (`${minutes}:${seconds}`);}
}

export default MakeMinutes;