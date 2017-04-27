function test() {
    console.log('Wynik testu 1');
}
var startBt = document.getElementById('start'),
    stopBt = document.getElementById('stop'),
    resetartBt = document.getElementById('restart'),
    timer = document.getElementById('timer'),
    catchBt = document.getElementById('catch'),
    cCleanerBt = document.getElementById('cCleaner'),
    scoreboard = document.getElementById('scoreboard'),
    s = 0,
    m = 0,
    h = 0,
    ms = 0,
    countStarted = false,
    clear;
var interFace = {
    
}
startBt.addEventListener('click', start);
stopBt.addEventListener('click', stop);
resetartBt.addEventListener('click', resetTime);
catchBt.addEventListener('click', catchTime);
cCleanerBt.addEventListener('click', clearScoreboard);
function start() {
    if(!countStarted) {
        countStop = setInterval(counter,10);
        countStarted = true;
        stopBt.classList.remove('display');
        startBt.classList.add('display');
    }
}
function stop() {
    if(countStarted) {
        clearInterval(countStop);
        countStarted = false;
        stopBt.classList.add('display');
        startBt.classList.remove('display');
    }
}
function resetTime() {
    s = 0;
    m = 0;
    h = 0;
    ms = 0;
    putInHtml(timer, timerView());
}
function catchTime() {
    var node = document.createTextNode(timerView()),
        li = document.createElement('li');
    li.appendChild(node);
    scoreboard.appendChild(li);
}
function clearScoreboard() {
    scoreboard.innerHTML = '';
}
function timerView() {
    return checkLength(h) + ':' + checkLength(m) + ':' + checkLength(s) + ':' + checkLength(ms);
}
function counter() {
    ms++;
    if (ms == 100) {
        s++;
        ms=0;
    }
    if (s == 60){
        m++;
        s = 0;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    putInHtml(timer, timerView());
}
function putInHtml(wher,what) {
    wher.innerHTML = what;
}
function checkLength(num) {
    return (num <= 9)? '0'+num:num;
}
