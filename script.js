"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (postion) {
        let { latitude } = postion.coords;
        let { longitude } = postion.coords;
        let coords = [latitude, longitude];
  
        let map = L.map("map").setView(coords, 13);
  
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
  
        
        map.on('click', function (mapEvent) {
          let {lat, lng} = mapEvent.latlng;
          L.marker([lat, lng])
            .addTo(map)
            .bindPopup(L.popup({
              maxWidth: 250, 
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup'}))
            .setPopupContent('Workout')
            .openPopup();

          })
      },
      function () {
        alert("Could not get your postion.");
      }
    );
  }