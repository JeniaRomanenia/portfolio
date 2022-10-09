const pets = [
    {
        "id": "0",
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "id": "1",
        "name": "Sophia",
        "img": "../../assets/images/pets-katrine2.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "id": "2",
        "name": "Woody",
        "img": "../../assets/images/pets-woody.jpg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
      },
      {
        "id": "3",
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "id": "4",
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "id": "5",
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
      },
      {
        "id": "6",
        "name": "Freddie",
        "img": "../../assets/images/pets-katrine3.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "id": "7",
        "name": "Charly",
        "img": "../../assets/images/pets-charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
      }
]

//Open burger menu
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const burger = document.querySelector('.nav__burger');
const overlay = document.querySelector('.overlay');
const menuNavLink = document.querySelectorAll('.nav__link');
const menu = document.querySelector('.navigation__burger');
const logoBurger = document.querySelector('.logo__burger');
const cards = document.querySelectorAll('.pets__card__item');
const sliderBtns = document.querySelectorAll('.pets__slider-btn');
/*для popup*/
const popup = document.querySelector('.popup__overlay');
const popupBtn = document.querySelector('.close');


burger.addEventListener('click', () => {
    overlay.classList.toggle('overlay__open');
    burger.classList.toggle('burger-open');
    menu.classList.toggle('navigation__burger-active');
    logo.classList.toggle('logo__opocity');
    overlay.style.visibility = "visible";
    if (logo.classList.contains('logo__opocity')) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
        overlay.style.visibility = "hidden";
    }


    //При нажатии на пункты меню
    menuNavLink.forEach(i => {
        i.addEventListener('click', () => {
            overlay.classList.remove('overlay__open');
            burger.classList.remove('burger-open');
            menu.classList.remove('navigation__burger-active');
            logo.classList.remove('logo__opocity');
            body.style.overflow = "";
        });
    });

    //При нажатии на логотип
    logoBurger.addEventListener('click', () => {
        overlay.classList.remove('overlay__open');
        burger.classList.remove('burger-open');
        menu.classList.remove('navigation__burger-active');
        logo.classList.remove('logo__opocity');
        body.style.overflow = "";
    });


    //При нажатии вне границ меню, на затемненную область
    overlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay__open')){
            overlay.classList.remove('overlay__open');
            burger.classList.remove('burger-open');
            menu.classList.remove('navigation__burger-active');
            logo.classList.remove('logo__opocity');
            body.style.overflow = "";
        }
    });

});


/*создaние popup*/

const addPopup = () => {
    const img = document.querySelector('.popup__img');
    const name = document.querySelector('.popup__name');
    const typeBreed = document.querySelector('.popup__type-breed');
    const description = document.querySelector('.popup__description');
    const items = document.querySelectorAll('.item__value');
    const id = event.currentTarget.dataset.id;

    img.src = pets[id].img;
    name.innerHTML = pets[id].name;
    typeBreed.innerHTML = (`${pets[id].type} - ${pets[id].breed}`);
    description.innerHTML = pets[id].description;
    items[0].innerHTML = pets[id].age;
    items[1].innerHTML = pets[id].inoculations;
    items[2].innerHTML = pets[id].diseases;
    items[3].innerHTML = pets[id].parasites;

    popup.classList.add('popup__open');
    body.style.overflow = 'hidden';

}

const closePopup = () => {
    popup.classList.remove('popup__open');
    body.style.overflow = '';
}

cards.forEach((e) => {
    e.addEventListener('click', addPopup)
})
popupBtn.addEventListener('click', closePopup)

popup.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup__open')){
        popup.classList.remove('popup__open');
        body.style.overflow = '';
    }
})

