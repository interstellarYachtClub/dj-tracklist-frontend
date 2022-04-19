const MakeMs = (time) => {
    let mvs = time.split(':');
    if (mvs.length > 0 && mvs.length < 2) {
        return (parseInt(mvs[0]*60*1000)+parseInt(mvs[1]*1000))
    } else {
        return (parseInt(mvs[0]*1000))
}
}

export default MakeMs;