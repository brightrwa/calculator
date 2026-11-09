function updateclock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timestring = `${hours}:${minutes}:${seconds}`;

    const clock = document.getElementById('clock');

    clock.textContent = timestring;
}

updateclock();
setInterval(updateclock, 1000);