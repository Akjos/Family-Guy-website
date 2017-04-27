function test(text) {
    console.log(text);
}
//var timer = "This is the knife";
var interFace = {
    startBt: document.getElementById('start'),
    stopBt: document.getElementById('stop'),
    resetartBt: document.getElementById('restart'),
    catchBt: document.getElementById('catch'),
    cCleanerBt: document.getElementById('cCleaner'),
    init : function () {
        this.startBt.addEventListener('click', stopwatch.start);
        this.stopBt.addEventListener('click', stopwatch.stop);
        this.resetartBt.addEventListener('click', resetTime);
        this.catchBt.addEventListener('click', catchTime);
        this.cCleanerBt.addEventListener('click', clearScoreboard);
    }
},
    stopwatch = {
        timer: document.getElementById('timer'),
        s: 0,
        m: 0,
        h: 0,
        ms: 0,
        countStarted: false,
        clear: null,
        start : function () {
            if (!stopwatch.countStarted) {
                stopwatch.clear = setInterval(stopwatch.counter, 10); //Nie potrafię ogarnąć dlaczego kiedy użyję tu słówka this to nie chcę działać?!(tak samo niżej)
                stopwatch.countStarted = true;
                interFace.stopBt.classList.remove('display');
                interFace.startBt.classList.add('display');
            }
        },
        stop : function () {
            if (stopwatch.countStarted) {
                clearInterval(stopwatch.clear);
                stopwatch.countStarted = false;
                interFace.stopBt.classList.add('display');
                interFace.startBt.classList.remove('display');
            }
        },
        counter : function () {
            stopwatch.ms++;
            if (stopwatch.ms == 100) {
                stopwatch.s++;
                stopwatch.ms = 0;
            }
            if (stopwatch.s == 60) {
                stopwatch.m++;
                stopwatch.s = 0;
            }
            if (stopwatch.m == 60) {
                stopwatch.m = 0;
                stopwatch.h++;
            }
            putInHtml(timer, timerView());
        }
    },
    scoreboard = document.getElementById('scoreboard');
function resetTime() {
    stopwatch.s = 0;
    stopwatch.m = 0;
    stopwatch.h = 0;
    stopwatch.ms = 0;
    putInHtml(timer, timerView());
}
function catchTime() {
    if(stopwatch.ms+stopwatch.s+stopwatch.m+stopwatch.h != 0){
        var node = document.createTextNode(timerView()),
            li = document.createElement('li');
        li.appendChild(node);
        scoreboard.appendChild(li);
    }
    test(stopwatch);
}
function clearScoreboard() {
    scoreboard.innerHTML = '';
}
function timerView() {
    return checkLength(stopwatch.h) + ':' + checkLength(stopwatch.m) + ':' + checkLength(stopwatch.s) + ':' + checkLength(stopwatch.ms);
}

function putInHtml(wher, what) {
    wher.innerHTML = what;
}
function checkLength(num) {
    return (num <= 9) ? '0' + num : num;
}
test(stopwatch);
test(timer);
test(stopwatch.timer);
test(timer === stopwatch.timer); //dlaczego do kurwy nędzy to wskazuje na to samo kurwa timer nie powinno istnieć nie ma tego kurwa (chyba że pierdolnę taką zmienną wtedy jest ok)
document.addEventListener('onload', interFace.init());
