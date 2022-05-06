function init(){
  const center = [59.938430492248656,30.32316041534418];
  const mapContainer = document.querySelector('.contacts__map');

  const myMap = new ymaps.Map(mapContainer, {
      center,
      zoom: 15
  });

  const placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/icons/map-pin-small.png',
    iconImageSize: [57, 53],
    iconImageOffset: [-29, -53]
  });

  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.behaviors.disable(['scrollZoom']);

  myMap.geoObjects.add(placemark);
}

ymaps.ready(init);
