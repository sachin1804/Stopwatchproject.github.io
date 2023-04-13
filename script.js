const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("miliseconds");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
const recorded = document.getElementById("recorded-time");

let interval = null;

start.addEventListener("click", () => {
    if (interval !== null) {
        clearInterval(interval);
    }

    interval = setInterval(displayTimmer, 1);
    recorded.style.display = "none";
})

pause.addEventListener("click", () => {
    clearInterval(interval);
})

var hcount = 0;
var mcount = 0;
var scount = 0;
var milicount = 0;

reset.addEventListener("click", () => {
    clearInterval(interval);
    let h = hours.innerHTML;
    let m = minutes.innerHTML;
    let s = seconds.innerHTML;
    let mili = miliseconds.innerHTML;
    recorded.style.display = "block"

    recorded.innerHTML = ` ${h} : ${m} : ${s} : ${mili}`

    hours.innerHTML = "00"
    minutes.innerHTML = "00"
    seconds.innerHTML = "00"
    miliseconds.innerHTML = "00"
    hcount = 0;
    mcount = 0;
    scount = 0;
    milicount = 0;
});

function displayTimmer() {
    milicount += 1;
    miliseconds.innerHTML = milicount < 10 ? "0" + milicount : milicount;
    if (milicount >= 99) {
        milicount = 0;
        scount++;
        seconds.innerHTML = scount < 10 ? "0" + scount : scount;
        if (scount >= 60) {
            scount = 0;
            mcount++;
            minutes.innerHTML = mcount < 10 ? "0" + mcount : mcount;
            if (mcount >= 60) {
                mcount = 0;
                hcount++;
                hours.innerHTML = hcount < 10 ? "0" + hcount : hcount;
            }
        }
    }
}
