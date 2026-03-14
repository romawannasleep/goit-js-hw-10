const timer = document.querySelector(".timer");
const startBtn = document.querySelector('[data-start]')
const field = document.querySelector("#datetime-picker");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
let userSelectedDate;
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      iziToast.error({
    title: 'Error',
    message: 'Please choose a date in the future',
    position: 'topRight',
    
});
      // window.alert("Please choose a date in the future");
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};
flatpickr("#datetime-picker", options);
let intervalId;
startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  intervalId = setInterval (() => {
    const currentTime = Date.now();
  const diff = userSelectedDate - currentTime;
  // console.log(convertMs(diff));
  if(diff > 0){
    
  const dataDays = document.querySelector('[data-days]').textContent = convertMs(diff).days.toString().padStart(2,'0');
const dataHours = document.querySelector('[data-hours]').textContent = convertMs(diff).hours.toString().padStart(2,'0');
const dataMinutes = document.querySelector('[data-minutes]').textContent = convertMs(diff).minutes.toString().padStart(2,'0');
const dataSeconds = document.querySelector('[data-seconds]').textContent = convertMs(diff).seconds.toString().padStart(2,'0');
  }else{
    clearInterval(intervalId);
    startBtn.disabled = true;
  }
  }, 1000);
});





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}
