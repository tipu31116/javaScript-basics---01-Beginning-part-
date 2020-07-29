
function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds();
    const twelveHoursFormate = hours > 12 ? hours - 12 : hours
    const formateHours = twelveHoursFormate < 10 ? '0' + twelveHoursFormate : twelveHoursFormate
    const formateMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formateSeconds = seconds < 10 ? '0' + seconds : seconds
    console.log(`${formateHours}:${formateMinutes}:${formateSeconds}`)

}
const timer=setInterval(() => {

    getCurrentTime();
}, 1000)
clearInterval(timer)