const days = document.querySelector('.timer-days');
const hours = document.querySelector('.timer-hours');
const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');

// конечная дата, 31 мая 2023
const deadline = new Date(2023, 4, 31);

// id таймера
let timerId = null;

// склонение числительных
//function declensionNum(num, words) {
//    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//}

function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const daysNum = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hoursNum = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutesNum = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const secondsNum = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    days.textContent = daysNum < 10 ? '0' + daysNum : daysNum;
    hours.textContent = hoursNum < 10 ? '0' + hoursNum : hoursNum;
    minutes.textContent = minutesNum < 10 ? '0' + minutesNum : minutesNum;
    seconds.textContent = secondsNum < 10 ? '0' + secondsNum : secondsNum;
    //days.dataset.title = declensionNum(daysDeclension, ['день', 'дня', 'дней']);
    //hours.dataset.title = declensionNum(hoursDeclension, ['час', 'часа', 'часов']);
    //minutes.dataset.title = declensionNum(minutesDeclension, ['минута', 'минуты', 'минут']);
    //seconds.dataset.title = declensionNum(secondsDeclension, ['секунда', 'секунды', 'секунд']);
  }

  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);