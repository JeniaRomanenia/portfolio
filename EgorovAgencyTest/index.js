const days = document.querySelector('.timer-days');
const hours = document.querySelector('.timer-hours');
const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');
const body = document.querySelector('body');
const applicantForm = document.getElementById('form')

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
const inputForm = document.querySelector('.form-input');


function serializeForm(formNode) {
    return new FormData(formNode)
}

function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('loader')
}

async function sendData(data) {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    })
}

//cоздвние popup
const addPopup = (nameText, descriptionText,) => {
    const name = document.querySelector('.popup-name');
    const description = document.querySelector('.popup-description');

    name.innerHTML = nameText;
    description.innerHTML = descriptionText;

    popup.classList.add('popup-open');
    body.style.overflow = 'hidden';

}

const closePopup = () => {
    popup.classList.remove('popup-open');
    body.style.overflow = '';
}

popupBtn.addEventListener('click', closePopup)
popupBtnClose.addEventListener('click', closePopup)

popup.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup-open')){
        popup.classList.remove('popup-open');
        body.style.overflow = '';
    }
})

//отправка прошла успешно
function onSuccess(formNode) {
    addPopup('succes!', 'You have successfully subscribed to the email newsletter')
    console.log('ok')
    formNode.classList.toggle('hidden')
}

//обработка ошибок
function onError() {
    addPopup('error!', 'Try again. Something went wrong.')
}

async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
    toggleLoader()
    const {status} = await sendData(data)
    toggleLoader()

    if (status === 200 || status === 201 || status === 202) {
        onSuccess(event.target)
    } else {
        onError()
    }
}


applicantForm.addEventListener('submit', handleFormSubmit)

