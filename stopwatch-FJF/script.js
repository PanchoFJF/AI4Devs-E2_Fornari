let startTime = 0;
let elapsedTime = 0;
let interval = null;

const display = document.getElementById("display");
const lastTime = document.getElementById("lastTime");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");

let isRunning = false;
let hasStarted = false; // 🔥 clave para evitar bug

// FORMATO
function format(ms) {
    const milliseconds = Math.floor(ms % 1000);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));

    return {
        h: String(hours).padStart(2, "0"),
        m: String(minutes).padStart(2, "0"),
        s: String(seconds).padStart(2, "0"),
        ms: String(milliseconds).padStart(3, "0")
    };
}

// RENDER
function render() {
    const t = format(elapsedTime);
    display.innerHTML = `${t.h}:${t.m}:${t.s}<span class="ms">${t.ms}</span>`;
}

// START
startBtn.onclick = () => {
    if (isRunning || hasStarted) return;

    hasStarted = true;
    isRunning = true;
    startTime = Date.now();

    interval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        render();
    }, 10);

    startBtn.classList.add("disabled");
};

// STOP / RESUME
stopBtn.onclick = () => {

    // 🚫 FIX: si nunca inició → no hace nada
    if (!hasStarted) return;

    if (isRunning) {
        // STOP
        clearInterval(interval);
        isRunning = false;

        stopBtn.textContent = "Resume";
        stopBtn.classList.add("resume");

    } else {
        // RESUME
        isRunning = true;
        startTime = Date.now() - elapsedTime;

        interval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            render();
        }, 10);

        stopBtn.textContent = "Stop";
        stopBtn.classList.remove("resume");
    }
};

// CLEAR
clearBtn.onclick = () => {
    clearInterval(interval);

    if (elapsedTime > 0) {
        const t = format(elapsedTime);
        lastTime.textContent = `Last stopwatch time: ${t.h}:${t.m}:${t.s}:${t.ms}`;
    }

    elapsedTime = 0;
    isRunning = false;
    hasStarted = false;

    render();

    // reset UI
    startBtn.classList.remove("disabled");
    stopBtn.textContent = "Stop";
    stopBtn.classList.remove("resume");
};