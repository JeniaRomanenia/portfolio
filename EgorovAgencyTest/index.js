const days = document.querySelector('.timer-days');
const hours = document.querySelector('.timer-hours');
const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');

// конечная дата, 31 мая 2023
const deadline = new Date(2023, 4, 31);

// id таймера
let timerId = null;

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
}

countdownTimer();
timerId = setInterval(countdownTimer, 1000);

//для popup
const popup = document.querySelector('.popup-overlay');
const popupBtn = document.querySelector('.popup-btn');
const popupBtnClose = document.querySelector('.popup-btn-close');
const formBtn = document.querySelector('.form-btn');

//cоздвние popup
const addPopup = () => {
    const name = document.querySelector('.popup-name');
    const description = document.querySelector('.popup-description');
    const id = event.currentTarget.dataset.id;

    name.innerHTML = "success";
    description.innerHTML = "You have successfully subscribed to the email newsletter";

    popup.classList.add('popup-open');
    body.style.overflow = 'hidden';

}

const closePopup = () => {
    popup.classList.remove('popup-open');
    body.style.overflow = '';
}

formBtn.addEventListener('click', addPopup)

popupBtn.addEventListener('click', closePopup)
popupBtnClose.addEventListener('click', closePopup)

popup.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup-open')){
        popup.classList.remove('popup-open');
        body.style.overflow = '';
    }
})