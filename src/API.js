// API.js
import fetch from 'node-fetch';
import {userinput} from './components/function.jsx';

export var data;

export async function fetchData() {
  try {
    const country = userinput;
    const url = `https://countries-cities.p.rapidapi.com/location/country/${country}?format=json`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ADD_YOUR_KEY',
        'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.text();
    data = JSON.parse(result);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
