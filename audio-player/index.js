let previous = document.querySelector('.pre');
let play = document.querySelector('.play');
let next = document.querySelector('.next');
let title = document.querySelector('.title');
let artist = document.querySelector('.artist');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('.volume-show');
let slider = document.querySelector('#time_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('.img-track');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

// создаем аудио элемент
let track = document.createElement('audio');

//список всех песен
let All_song = [
  {
    name: "Lemonade",
    path: "assets/audio/beyonce.mp3",
    img: "assets/img/lemonade.png",
    singer: "Beyonce"
  },
  {
    name: "Don't Start Now",
    path: "assets/audio/dontstartnow.mp3",
    img: "assets/img/dontstartnow.png",
    singer: "Dua Lipa"
  }
];


//загрузка трека
function load_track(index_no){
	clearInterval(timer);
  reset_slider()

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
	timer = setInterval(range_slider, 1000);
}

load_track(index_no);

//сбросить ползунок песни
function reset_slider(){
  slider.value = 0;
}

//отключение звука
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}

//проверяем : играет или нет
function justplay(){
  if(Playing_song==false){
    playsong();
  }else{
    pausesong();
  }
}

//сбросить ползунок песни
function reset_slider(){
  slider.value = 0;
}

//играет
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<svg class="icon-play"><use xlink:href="./assets/svg/sprite.svg#pause"></use></svg';
}

//пауза
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<svg class="icon-play"><use xlink:href="./assets/svg/sprite.svg#play"></use></svg>';
}

//следующая песня
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

//предыдущая песня
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

//изменение громкости
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

//изменение положение ползунка
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

//автозапуск
function autoplay_switch(){
	if (autoplay==1){
      autoplay = 0;
      auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
      autoplay = 1;
      auto_play.style.background = "#148F77";
	}
}

function range_slider(){
	let position = 0;

  //обновляем положение ползунка
  if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
        slider.value =  position;
    }
    //когда песня закончиться она начнет работать
    if(track.ended){
      play.innerHTML = '<svg class="icon-play"><use xlink:href="./assets/svg/sprite.svg#play"></use></svg>';
          if(autoplay==1){
            index_no += 1;
            load_track(index_no);
            playsong();
          }
        }
    }

