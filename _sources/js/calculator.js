export default function () {
  document.querySelector('#calc_opener').addEventListener('click', e => {
    document.querySelector('.calculator').classList.add('active');
  });

  document.querySelector('#closer_calc').addEventListener('click', e => {
    document.querySelector('.calculator').classList.remove('active');
  });

  [...document.querySelectorAll('.calculator .tab')]
    .forEach(el => {
      el.addEventListener('click', function () {
        document.querySelector('.calculator .tab_content.active').classList.remove('active');
        document.querySelector(`.calculator .tab_content[data-value-id="${this.dataset.value}"]`).classList.add('active')
      });
    });

  document.querySelector('.calculator .tab_content[data-value-id="bvr"] button')
    .addEventListener('click', function () {
      let _obj = {
        krep: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #krep').value,
        grid: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #grid').value,
        dia: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #dia').value,
        serve: document.querySelector('.calculator .tab_content[data-value-id="bvr"] #serve').value
      }

        if (
          _obj.krep === 'выбор из списка' ||
          _obj.grid === 'выбор из списка' ||
          _obj.dia === 'выбор из списка' ||
          _obj.serve === 'выбор из списка'
        ) {
          document.querySelector('#price_bvr').value = 'Заполните поля';
        } else {
          console.log(_obj);
          result(_obj);
        }
    });

  document.querySelector('.calculator .tab_content[data-value-id="25t"] button')
    .addEventListener('click', e => {
      e.preventDefault();
      let _data = document.querySelector('#way_25t').value;
      result_25t(_data);
    });

  document.querySelector('.calculator .tab_content[data-value-id="45t"] button')
    .addEventListener('click', e => {
      e.preventDefault();
      let _data = {
        V_45t: document.querySelector('#V_45t').value,
        ALLV_45t: document.querySelector('#ALLV_45t').value,
        way: document.querySelector('#way_45t').value,
        price: document.querySelector('#price_45t')
      }

      result45_t(_data);
    });
}

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
    document.querySelector('#price_bvr').value = "Таких значений быть не может"
  }
}

function result_25t(value) {
  let _obj = {
    gruz: document.querySelector('#gruz_25t'),
    month: document.querySelector('#month_25t'),
    price: document.querySelector('#price_25t')
  }

  switch (value) {
    case 'до 3 км':
    case '3-5 км':
    case '5-10 км':
      _obj.gruz.value = '10-13 тн'
      _obj.month.value = 'До 100 000 тн/км'
      _obj.price.value = 'от 2700 тенге/час'
    break;
    // case '10-20 км':
    //   _obj.gruz.value = '20-26 тн'
    //   _obj.month.value = 'До 100 00тн/км'
    //   _obj.price.value = '38 тенге/тн.км'
    // break;
    case '20-50 км':
      _obj.gruz.value = '20-26 тн'
      _obj.month.value = 'До 100 000тн/км'
      _obj.price.value = '18 тенге/тн.км'
    break;
    case '50-100 км':
      _obj.gruz.value = '20-26 тн'
      _obj.month.value = 'До 100 000 тн/км'
      _obj.price.value = '18 тенге/тн.км'
    break;
    case '100-150 км':
      _obj.gruz.value = '20-26 тн'
      _obj.month.value = 'До 100 000тн/км'
      _obj.price.value = '16 тенге/тн.км'
    break;
    case '150-200 км':
      _obj.gruz.value = '20-26 тн'
      _obj.month.value = 'До 100 000 тн/км'
      _obj.price.value = '15 тенге/тн.км'
    break;
    default:
      _obj.price.value = 'Заполните поля'
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
