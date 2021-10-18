function timeEverySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var intervalTime = setInterval(timeEverySecond, 1000);
