const timeNow = document.getElementById("time");
const button = document.getElementById("stop-btn");

function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    console.log(time);
    timeNow.innerText = time;
}
showTime();
let interval = setInterval(showTime, 1000);

button.addEventListener('click', () => {
    clearInterval(interval);
})
