/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeater = async (lat, long) => {
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeater(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  if (location == false) {
    return (
      <>
        Você Precisa habiltar a localização no browser
      </>
    )
  }else if (weather == false) {
    return (
      <>
        Carregando o clima...
      </>
    )
  }else {
    return (
      <>
       <h3>Clima nas suas Coordenadas ({weather['weather'][0]['description']})</h3>
       <hr/>
       <ul>
         <li>Temperatura atual: {weather['main']['temp']}°</li>
         <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
         <li>Temperatura minima: {weather['main']['temp_min']}°</li>
         <li>Pressão: {weather['main']['pressure']} hpa</li>
         <li>Umidade: {weather['main']['humidity']}%</li>
       </ul>
      </>
    );
  }

 
}

export default App;
