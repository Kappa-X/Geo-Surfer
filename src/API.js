// API.js
import fetch from 'node-fetch';


export async function fetchData() {
  try {
    const country = localStorage.getItem('userinput');

    const url = `https://countries-cities.p.rapidapi.com/location/country/${country}?format=json`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '18bde6e0b3mshee662209135796ap1587bfjsn0886e9e7e970',
        'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
