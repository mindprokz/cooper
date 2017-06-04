import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';
import Calc from './calculator.js';
import modal_feed from './modal_feed.js';


// Отправка формы обратной связи скрипту для отправления по почте
let data = {
  name : 'input[name="name"]',
  email : 'input[name="email"]',
  telephone : 'input[name="telephone"]'
};

//new SendFunc('application', data, 'mail');
if (document.querySelector('#menu header .number')) {
  document.querySelector('#menu header .number').addEventListener('click', e => {
    document.querySelector('#modal_callwrite').classList.remove('close_modal');
  });

  modal_feed();
}

// fancybox
$(".fancybox").click(function() {
	$(".fancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'fade'
	});
});


if (window.main === true) {
  Calc();

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
      hintContent: 'Mining service'
    });

    myMap.geoObjects.add(myPlacemark);
  }
}
