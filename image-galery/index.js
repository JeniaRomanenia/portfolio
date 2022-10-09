const input = document.getElementById('input');
const galery = document.getElementsByClassName('galery')[0];
const searchIcon = document.getElementById('search-icon');
const closeIcon = document.getElementById('close-icon');


input.addEventListener('keydown', function(event){
  if(event.key === 'Enter')
    loadImg();
})

closeIcon.addEventListener('click',() => input.value= '');

searchIcon.addEventListener('click', () => loadImg(input.value));

function loadImg(){
  removeImages();

  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=dOpxI6tEBzQGGLQQlqf1r2qQwNeQqJnlAOVq7XFRcB8';

  fetch(url)

  .then(response => {
    if(response.ok)
    return response.json();
  else
    alert(response.status)
  })

  .then(data => {
    const imageNodes = [];
    for(let i = 0; i < data.results.length; i++){
      imageNodes[i] = document.createElement('div');
      imageNodes[i].className = 'img';
      imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
      galery.appendChild(imageNodes[i]);
    }
  })
}

function removeImages(){
  galery.innerHTML = '';
}


