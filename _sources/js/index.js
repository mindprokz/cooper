import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';


// Отправка формы обратной связи скрипту для отправления по почте
let data = {
  name : 'input[name="name"]',
  email : 'input[name="email"]',
  telephone : 'input[name="telephone"]'
};

//new SendFunc('application', data, 'mail');


ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map("map_main", {
    center: [49.807610, 73.102402],
    zoom: 17
  });

  myMap.behaviors.disable(['drag','scrollZoom']);

  myPlacemark = new ymaps.Placemark([49.807610, 73.102402], {
    hintContent: 'Москва!',
    balloonContent: 'Столица России'
  }, {
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'images/map_icon.png',
    // Размеры метки.
    iconImageSize: [212, 103],
    iconImageOffset: [-10, -50]
  });

  myMap.geoObjects.add(myPlacemark);
}

document.querySelector('#modal_callwrite .closer').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#modal_callwrite').classList.add('close_modal');
});

document.querySelector('#menu header .number').addEventListener('click', e => {
  document.querySelector('#modal_callwrite').classList.remove('close_modal');
});


// fancybox
$(".fancybox").click(function() {
	$(".fancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'fade'
	});
});
