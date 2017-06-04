/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sendForm = __webpack_require__(1);

	var _sendForm2 = _interopRequireDefault(_sendForm);

	var _floatMenu = __webpack_require__(2);

	var _floatMenu2 = _interopRequireDefault(_floatMenu);

	var _calculator = __webpack_require__(3);

	var _calculator2 = _interopRequireDefault(_calculator);

	var _modal_feed = __webpack_require__(4);

	var _modal_feed2 = _interopRequireDefault(_modal_feed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Отправка формы обратной связи скрипту для отправления по почте
	var data = {
	  name: 'input[name="name"]',
	  email: 'input[name="email"]',
	  telephone: 'input[name="telephone"]'
	};

	//new SendFunc('application', data, 'mail');
	if (document.querySelector('#menu header .number')) {
	  document.querySelector('#menu header .number').addEventListener('click', function (e) {
	    document.querySelector('#modal_callwrite').classList.remove('close_modal');
	  });

	  (0, _modal_feed2.default)();
	}

	// fancybox
	$(".fancybox").click(function () {
	  $(".fancybox").fancybox({
	    openEffect: 'fade',
	    closeEffect: 'fade'
	  });
	});

	if (window.main === true) {
	  var init = function init() {
	    myMap = new ymaps.Map("map_main", {
	      center: [49.807610, 73.102402],
	      zoom: 17
	    });

	    myMap.behaviors.disable(['drag', 'scrollZoom']);

	    myPlacemark = new ymaps.Placemark([49.807610, 73.102402], {
	      hintContent: 'Mining service'
	    });

	    myMap.geoObjects.add(myPlacemark);
	  };

	  (0, _calculator2.default)();

	  ymaps.ready(init);
	  var myMap, myPlacemark;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sendForm = function sendForm(id, dates, idMail) {
	  _classCallCheck(this, sendForm);

	  document.getElementById(id).addEventListener('submit', function () {

	    var data = {
	      name: document.querySelector(dates.name.value),
	      email: document.querySelector(dates.email.value),
	      telephone: document.querySelector(dates.telephone.value)
	    };

	    $("#application").submit(function () {
	      $.ajax({
	        type: "POST",
	        url: "mail.php",
	        data: data
	      }).done(function (value) {
	        var mail = document.getElementById(idMail);

	        mail.innerHTML = value;
	        mail.classList.remove('not_visible_mail');

	        setTimeout(function () {
	          $("#" + id).trigger("reset");
	          mail.classList.add('not_visible_mail');
	        }, 1000);
	      });

	      return false;
	    });
	  });
	};

	exports.default = sendForm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Принимает объект с настройками для меню
	var FloatMenu = function () {
	  function FloatMenu() {
	    _classCallCheck(this, FloatMenu);
	  }

	  _createClass(FloatMenu, [{
	    key: 'construnctor',

	    // @params - object
	    value: function construnctor(params) {
	      this.elem = params.elem;
	      this.height = params.height;
	      this.first_class = params.first_class;
	      this.second_class = params.second_class;
	      this.active_class = params.first_class;
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      if (window.pageYOffset > this.height) {
	        this.elem.classList.add(this.first_class);
	        this.elem.classList.add(this.second_class);
	      } else {
	        this.elem.classList.add(this.first_class);
	      }

	      window.addEventListener('scroll', function () {

	        if (window.pageYOffset > _this.height && _this.active_class === _this.first_class) {
	          _this.elem.classList.add(_this.second_class);
	          _this.active_class = _this.second_class;
	        } else if (window.pageYOffset < _this.height && _this.active_class === _this.second_class) {
	          _this.elem.classList.remove(_this.second_class);
	          _this.active_class = _this.first_class;
	        }
	      });
	    }
	  }]);

	  return FloatMenu;
	}();

	exports.default = FloatMenu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  document.querySelector('#calc_opener').addEventListener('click', function (e) {
	    document.querySelector('.calculator').classList.add('active');
	  });

	  document.querySelector('#closer_calc').addEventListener('click', function (e) {
	    document.querySelector('.calculator').classList.remove('active');
	  });

	  [].concat(_toConsumableArray(document.querySelectorAll('.calculator .tab'))).forEach(function (el) {
	    el.addEventListener('click', function () {
	      document.querySelector('.calculator .tab_content.active').classList.remove('active');
	      document.querySelector('.calculator .tab_content[data-value-id="' + this.dataset.value + '"]').classList.add('active');
	    });
	  });

	  document.querySelector('.calculator .tab_content[data-value-id="bvr"] button').addEventListener('click', function () {
	    var _obj = {
	      krep: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #krep').value,
	      grid: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #grid').value,
	      dia: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #dia').value,
	      serve: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #serve').value
	    };

	    if (_obj.krep === 'выбор из списка' || _obj.grid === 'выбор из списка' || _obj.dia === 'выбор из списка' || _obj.serve === 'выбор из списка') {
	      document.querySelector('#price_bvr').value = 'Заполните поля';
	    } else {
	      console.log(_obj);
	      result(_obj);
	    }
	  });

	  document.querySelector('.calculator .tab_content[data-value-id="25t"] button').addEventListener('click', function (e) {
	    e.preventDefault();
	    var _data = document.querySelector('#way_25t').value;
	    result_25t(_data);
	  });

	  document.querySelector('.calculator .tab_content[data-value-id="45t"] button').addEventListener('click', function (e) {
	    e.preventDefault();
	    var _data = {
	      V_45t: document.querySelector('#V_45t').value,
	      ALLV_45t: document.querySelector('#ALLV_45t').value,
	      way: document.querySelector('#way_45t').value,
	      price: document.querySelector('#price_45t')
	    };

	    result45_t(_data);
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function result(_obj) {
	  if (_obj.krep === '12-14' && _obj.grid === '3,5*3,5' && _obj.dia === '115' && _obj.serve === 'Kayshan') {
	    document.querySelector('#price_bvr').value = '301,3';
	  } else if (_obj.krep === '12-14' && _obj.grid === '4*4' && _obj.dia === '115' && _obj.serve === 'Kayshan') {
	    document.querySelector('#price_bvr').value = '265,6';
	  } else if (_obj.krep === '12-14' && _obj.grid === '3,5*3,5' && _obj.dia === '165' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '384,9';
	  } else if (_obj.krep === '12-14' && _obj.grid === '4*4' && _obj.dia === '165' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '329,5';
	  } else if (_obj.krep === '12-14' && _obj.grid === '4,5*4,5' && _obj.dia === '165' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '291,4';
	  } else if (_obj.krep === '12-14' && _obj.grid === '3,5*3,5' && _obj.dia === '115' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '377,2';
	  } else if (_obj.krep === '14-18' && _obj.grid === '3,5*3,5' && _obj.dia === '115' && _obj.serve === 'Kayshan') {
	    document.querySelector('#price_bvr').value = '354,4';
	  } else if (_obj.krep === '14-18' && _obj.grid === '4*4' && _obj.dia === '115' && _obj.serve === 'Kayshan') {
	    document.querySelector('#price_bvr').value = '316,6';
	  } else if (_obj.krep === '14-18' && _obj.grid === '3,5*3,5' && _obj.dia === '165' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '434,8';
	  } else if (_obj.krep === '14-18' && _obj.grid === '4*4' && _obj.dia === '165' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '376,5';
	  } else if (_obj.krep === '14-18' && _obj.grid === '4,5*4,5' && _obj.dia === '165' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '336,6';
	  } else if (_obj.krep === '14-18' && _obj.grid === '3,5*3,5' && _obj.dia === '115' && _obj.serve === 'Atlas Copca D 55-65') {
	    document.querySelector('#price_bvr').value = '432,9';
	  } else {
	    document.querySelector('#price_bvr').value = "Таких значений быть не может";
	  }
	}

	function result_25t(value) {
	  var _obj = {
	    gruz: document.querySelector('#gruz_25t'),
	    month: document.querySelector('#month_25t'),
	    price: document.querySelector('#price_25t')
	  };

	  switch (value) {
	    case 'до 3 км':
	    case '3-5 км':
	    case '5-10 км':
	      _obj.gruz.value = '10-13 тн';
	      _obj.month.value = 'До 100 000 тн/км';
	      _obj.price.value = 'от 2700 тенге/час';
	      break;
	    // case '10-20 км':
	    //   _obj.gruz.value = '20-26 тн'
	    //   _obj.month.value = 'До 100 00тн/км'
	    //   _obj.price.value = '38 тенге/тн.км'
	    // break;
	    case '20-50 км':
	      _obj.gruz.value = '20-26 тн';
	      _obj.month.value = 'До 100 000тн/км';
	      _obj.price.value = '18 тенге/тн.км';
	      break;
	    case '50-100 км':
	      _obj.gruz.value = '20-26 тн';
	      _obj.month.value = 'До 100 000 тн/км';
	      _obj.price.value = '18 тенге/тн.км';
	      break;
	    case '100-150 км':
	      _obj.gruz.value = '20-26 тн';
	      _obj.month.value = 'До 100 000тн/км';
	      _obj.price.value = '16 тенге/тн.км';
	      break;
	    case '150-200 км':
	      _obj.gruz.value = '20-26 тн';
	      _obj.month.value = 'До 100 000 тн/км';
	      _obj.price.value = '15 тенге/тн.км';
	      break;
	    default:
	      _obj.price.value = 'Заполните поля';
	  }
	}

	function result45_t(_obj) {
	  if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '3.2' && _obj.way === '1') {
	    _obj.price.value = '282.41';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '3.2' && _obj.way === '1') {
	    _obj.price.value = '294.21';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '3.2' && _obj.way === '1') {
	    _obj.price.value = '319.94';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '1.8' && _obj.way === '1') {
	    _obj.price.value = '346.15';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '1.8' && _obj.way === '1') {
	    _obj.price.value = '357.95';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '1.8' && _obj.way === '1') {
	    _obj.price.value = '383.68';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '2.8' && _obj.way === '1') {
	    _obj.price.value = '294.12';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '2.8' && _obj.way === '1') {
	    _obj.price.value = '305.91';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '2.8' && _obj.way === '1') {
	    _obj.price.value = '331.65';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '4.2' && _obj.way === '1') {
	    _obj.price.value = '262.90';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '4.2' && _obj.way === '1') {
	    _obj.price.value = '274.70';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '4.2' && _obj.way === '1') {
	    _obj.price.value = '300.43';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '4.3' && _obj.way === '1') {
	    _obj.price.value = '261.45';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '4.3' && _obj.way === '1') {
	    _obj.price.value = '273.24';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '4.3' && _obj.way === '1') {
	    _obj.price.value = '298.98';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '4.7' && _obj.way === '1') {
	    _obj.price.value = '256.26';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '4.7' && _obj.way === '1') {
	    _obj.price.value = '268.05';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '4.7' && _obj.way === '1') {
	    _obj.price.value = '293.79';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '6.0' && _obj.way === '1') {
	    _obj.price.value = '244.17';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '6.0' && _obj.way === '1') {
	    _obj.price.value = '255.96';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '6.0' && _obj.way === '1') {
	    _obj.price.value = '281.70';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '3.2' && _obj.way === '2') {
	    _obj.price.value = '391.58';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '3.2' && _obj.way === '2') {
	    _obj.price.value = '403.38';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '3.2' && _obj.way === '2') {
	    _obj.price.value = '429.11';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '1.8' && _obj.way === '2') {
	    _obj.price.value = '455.32';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '1.8' && _obj.way === '2') {
	    _obj.price.value = '467.11';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '1.8' && _obj.way === '2') {
	    _obj.price.value = '492.85';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '2.8' && _obj.way === '2') {
	    _obj.price.value = '403.29';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '2.8' && _obj.way === '2') {
	    _obj.price.value = '415.08';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '2.8' && _obj.way === '2') {
	    _obj.price.value = '440.82';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '4.2' && _obj.way === '2') {
	    _obj.price.value = '372.07';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '4.2' && _obj.way === '2') {
	    _obj.price.value = '383.86';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '4.2' && _obj.way === '2') {
	    _obj.price.value = '409.60';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '4.3' && _obj.way === '2') {
	    _obj.price.value = '370.62';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '4.3' && _obj.way === '2') {
	    _obj.price.value = '382.41';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '4.3' && _obj.way === '2') {
	    _obj.price.value = '408.15';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '4.7' && _obj.way === '2') {
	    _obj.price.value = '365.43';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '4.7' && _obj.way === '2') {
	    _obj.price.value = '377.22';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '4.7' && _obj.way === '2') {
	    _obj.price.value = '402.96';
	  } else if (_obj.V_45t === '7 200 000' && _obj.ALLV_45t === '6.0' && _obj.way === '2') {
	    _obj.price.value = '353.34';
	  } else if (_obj.V_45t === '5 000 000' && _obj.ALLV_45t === '6.0' && _obj.way === '2') {
	    _obj.price.value = '365.13';
	  } else if (_obj.V_45t === '3 000 000' && _obj.ALLV_45t === '6.0' && _obj.way === '2') {
	    _obj.price.value = '390.87';
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = send_mail;
	function send_mail() {
	  document.querySelector('#modal_callwrite .closer').addEventListener('click', function (e) {
	    e.preventDefault();
	    document.querySelector('#modal_callwrite').classList.add('close_modal');
	  });

	  document.querySelector('#modal_callwrite .send').addEventListener('click', function (e) {
	    e.preventDefault();

	    var data = {
	      name: document.querySelector('#modal_callwrite input[name="name"]').value,
	      email: document.querySelector('#modal_callwrite input[name="number"]').value,
	      message: document.querySelector('#modal_callwrite input[name="question"]').value
	    };

	    $.post('/mail.php', data).done(function (value) {
	      location.href = "/thx.html";
	    });

	    document.querySelector('#modal_callwrite').classList.add('close_modal');
	  });
	}

/***/ }
/******/ ]);