

const apiKey = '9e122cd782b2d0333f5fe4e7fa192062';
const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function onSubmit(event) {
  event.preventDefault();
  search(searchbox.value);
  searchform.reset();
}


const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('searchbox');
searchform.addEventListener('submit', onSubmit, true);

const city = document.getElementById('city');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');

async function search(query) {
  try {
    const response = await fetch(`${baseURL}?q=${query}&appid=${apiKey}&lang=es`);
    const data = await response.json();

    
    console.log(`${data.name}`)



    const createNode = () => {
      const container = document.createElement('div')
      container.className = 'cards'

      const city = document.createElement('p')
      city.className = "city";
      city.innerHTML = `${data.name}`;
  
      const date = document.createElement('p')
      date.className = "date";
      date.innerHTML = (new Date()).toLocaleDateString();

      const temp = document.createElement('p')
      temp.className = "temp";
      temp.innerHTML = `${kelvinToCelsius(data.main.temp)}°C`;

      const weather = document.createElement('p')
      weather.className = "weather";
      weather.innerHTML = data.weather[0].description; 

      container.append(city, date, temp, weather);
  
      return container;
  };

      const nuevoNodo = createNode();
      const mountNodo = document.getElementById('app')

      mountNodo.appendChild(nuevoNodo)

      const buttonRemove = document.getElementById('remove');

      buttonRemove.addEventListener("click", () => {
          mountNodo.innerHTML = "";
      })
  } catch (err){
    console.log(err)
  }
}
