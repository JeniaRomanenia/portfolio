
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
};

linkWork.forEach(l=> l.addEventListener('click', activeWork));


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__containet", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'})

/*=================== translation===========================*/
const i180bj = {
    'en': {
      'hello': 'Hello, I\'m',
      'name1': 'Jenia Romanenia',
      'education': 'Frontend Developer',
      'cv': 'Dowloand CV',
      'about-me': 'About me',
      'scroll': 'Call Me',
      'about-subtitle': 'My Intro',
      'about-title': 'About Me',
      'about-box-1': 'Experience',
      'about-text-1': '2 Years Working',
      'about-box-2': 'Completed',
      'about-text-2': '25+ Projects',
      'about-box-3': 'Support',
      'about-text-3': 'Online 24/7',
      'about-description1': 'I am a frontend developer and working at Freelance.. I have a master\'s degree in technical sciences. I develop websites using the following technologies: HTML, Java Script, WordPress, Tilda, etc. I\'m constantly developing and learning new technologies.',
      'about-description2': 'Now I am looking for a company where I can increase my knowledge in Frontend technologies and grow as a specialist.',
      'contact-me': 'Contact Me',
      'skills-subtitle': 'My abilities',
      'skills-title': ' My Skills',
      'intermediate': 'Intermediate',
      'basic': 'Basic',
      'other-skills': 'Other Skills',
      'services-subtitle': 'My Services',
      'services-title': 'What I Offer',
      'services-text-1': 'Website Development',
      'see-more': 'See more',
      'services-modal-title-1': 'Website Development',
      'services-modal-description-1': 'Development of adaptive sites and web applications using HTML, Javascript, CSS according to the design project.',
      'services-modal-1-text-1': 'I develop various websites in a short time.',
      'services-modal-1-text-2': 'Website development from landingpage to online store.',
      'services-modal-1-text-3': 'Responsive and cross-browser site.',
      'services-modal-1-text-4': 'Layout sites with "0" and editing existing ones.',
      'services-modal-1-text-5': 'Design and layout of E-mail letters.',
      'services-modal-description-2': 'WordPress and Tilda are the most popular CMS for website development. Based on them, I can create online stores, landing pages, corporate websites.',
      'services-modal-2-text-1': 'Site layout strictly according to the layout.',
      'services-modal-2-text-2': 'Website adaptation for all devices.',
      'services-modal-2-text-3': 'Development of the site structure.',
      'services-modal-2-text-4': 'Website development on Tilda.',
      'services-modal-2-text-5': 'Website development on WordPress.',
      'services-modal-description-3': 'I can collect new semantics, revise the structure of the site, fix technical errors, register meta tags, finalize the mobile version of the site.',
      'services-modal-3-text-1': 'Compilation of the semantic core (analysis of the subject of the site + competitors).',
      'services-modal-3-text-2': 'Adding a site to Yandex Webmaster, Yandex Maps.',
      'services-modal-3-text-3': 'Adding a site to Google Search Console, Google Maps.',
      'services-modal-3-text-4': 'Setting up Yandex Direct, Google Ads.',
      'services-modal-3-text-5': 'Website usability analysis, functional analysis, layout testing.',
      'work-subtitle': 'My Portfolio',
      'work-title': 'Recent Works',
      'all': 'All',
      'demo': 'Demo',
      'slider': 'JS Slider',
      'tic-tac-toe': 'JS Tic-tac-toe',
      'site-constructor': 'JS Site Constructor',
      'portfolio': 'Portfolio Photographer',
      'mem': 'Mem Sliser',
      'shelter': 'Shelter',
      'keyboard': 'JS Keyboard',
      'player': 'Audio Player',
      'ballons': 'Balloons Online Store',
      'event': 'Website for Event Party',
      'yoga': 'Yoga Teacher Website',
      'contact-subtitle': 'Get in touch',
      'contact-title': 'Talk to me',
      'contact-phone': 'Phone',
      'write-me': 'Write me your project',
      'name': 'Name*',
      'mail': 'Mail*',
      'project': 'Project',
      'message': 'Send Message',
      'hero-text': 'Сontact Мe',
      'jenia': 'Jenia',
      'about': 'About'
    },
    'ru': {
      'hello': 'Привет, я',
      'name1': 'Евгения Романеня',
      'education': 'Фронтенд-разработчик',
      'cv': 'Скачать резюме',
      'about-me': 'Обо мне',
      'scroll': 'Позвонить Мне',
      'about-subtitle': 'Мое вступление',
      'about-title': 'Обо мне',
      'about-box-1': 'Опыт',
      'about-text-1': '2 года работы',
      'about-box-2': 'Завершено',
      'about-text-2': '25+ проектов',
      'about-box-3': 'Поддержка',
      'about-text-3': 'Онлайн 24/7',
      'about-description1': 'Я frontend-разработчик и работаю в Freelance. У меня есть степень магистра технических наук. Я разрабатываю сайты с использованием следующих технологий: HTML, Java Script, WordPress, Tilda и др. Я постоянно развиваюсь и изучаю новые технологии.',
      'about-description2': 'Сейчас я ищу компанию, где я смогу повысить свои знания в области Frontend технологий и вырасти как специалист.',
      'contact-me': 'Свяжиться со мной',
      'skills-subtitle': 'Мои возможности',
      'skills-title': ' Мои навыки',
      'intermediate': 'Средний',
      'basic': 'Базовый',
      'other-skills': 'Другие навыки',
      'services-subtitle': 'Мои услуги',
      'services-title': 'Что я предлагаю',
      'services-text-1': 'Разработка сайтов',
      'see-more': 'Узнать больше',
      'services-modal-title-1': 'Разработка сайтов',
      'services-modal-description-1': 'Разработка адаптивных сайтов и веб-приложений с использованием HTML, Javascript, CSS согласно дизайн-проекту.',
      'services-modal-1-text-1': 'Разрабатываю различные сайты в короткие сроки.',
      'services-modal-1-text-2': 'Разработка сайта от лендинга до интернет-магазина.',
      'services-modal-1-text-3': 'Адаптивный и кроссбраузерный сайт.',
      'services-modal-1-text-4': 'Вёрстка сайтов с "0" и редактирование существующих.',
      'services-modal-1-text-5': 'Дизайн и верстка электронных писем.',
      'services-modal-description-2': 'WordPress и Tilda — самые популярные CMS для разработки сайтов. На их основе я могу создавать интернет-магазины, лендинги, корпоративные сайты.',
      'services-modal-2-text-1': 'Оформление сайта строго по макету.',
      'services-modal-2-text-2': 'Адаптация сайта под все устройства.',
      'services-modal-2-text-3': 'Разработка структуры сайта.',
      'services-modal-2-text-4': 'Разработка сайта на Tilda.',
      'services-modal-2-text-5': 'Разработка сайта на WordPress.',
      'services-modal-description-3': 'Могу собрать новую семантику, пересмотреть структуру сайта, исправить технические ошибки, прописать метатеги, доработать мобильную версию сайта.',
      'services-modal-3-text-1': 'Составление семантического ядра (анализ тематики сайта + конкуренты).',
      'services-modal-3-text-2': 'Добавление сайта в Яндекс Вебмастер, Яндекс Карты.',
      'services-modal-3-text-3': 'Добавление сайта в Google Search Console, Google Maps.',
      'services-modal-3-text-4': 'Настройка Яндекс Директ, Google Ads.',
      'services-modal-3-text-5': 'Анализ юзабилити сайта, функциональный анализ, тестирование макета.',
      'work-subtitle': 'Мое Портфолио',
      'work-title': 'Последние работы',
      'all': 'Все',
      'demo': 'Демо',
      'slider': 'JS Слайдер',
      'tic-tac-toe': 'JS Крестики-Нолики',
      'site-constructor': 'JS Сайт Конструктор',
      'portfolio': 'Портфолио для Фотографа',
      'mem': 'Мем Слайсер',
      'shelter': 'Приют Для Животных',
      'keyboard': 'JS Клавиатура',
      'player': 'Аудиоплеер',
      'ballons': 'Интернет-Магазин Воздушных Шаров',
      'event': 'Веб-сайт Для Огранизаторов',
      'yoga': 'Сайт Учителя Йоги',
      'contact-subtitle': 'Связаться',
      'contact-title': 'Связаться со мной',
      'write-me': 'Напишите мне про свой проект',
      'name': 'Имя*',
      'contact-phone': 'Телефон',
      'mail': 'Mail*',
      'project': 'Проект',
      'message': 'Отправить сообщение',
      'jenia': 'Евгения',
      'hero-text': 'Связаться со мной',
      'about': 'About'
    }
  }


let elem = document.querySelectorAll('[data-i18]');
const btnLang = document.querySelector('.nav-lang');

btnLang.addEventListener('click', (event) => {
    if(event.target.classList.contains('lang')){
      btnLang.querySelector('.active-link').classList.remove('active-link');
      event.target.classList.add('active-link');
      const lang = event.target.getAttribute('data-lang');
      getTranslate(lang);
      localStorage.setItem('lang', lang);
    }}
    );


  function getTranslate (l) {
    elem.forEach(item => item.textContent = i180bj[l][item.dataset.i18])
  }

