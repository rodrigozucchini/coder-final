const createNode = () => {
    const container = document.createElement('div')
    container.className = 'cards'

    const city = document.createElement('p')
    city.className = "city";
    city.innerHTML = `${data.name}`;

    container.appendChild(city);

    return container;
};

const nuevoNodo = createNode();
document.getElementsById('card').append(nuevoNodo);








const cleanImages = () => {

  

  [...mountNode.childNodes].forEach(child => {
      child.remove();
  }) 

}

addButton.addEventListener("click", addImage)
cleanButton.addEventListener("click", cleanImages)



/*/
          <div class="city" id="city"></div>
          <div class="date" id="date"></div>
          <div class="temp" id="temp"></div>
          <div class="weather" id="weather"></div>




      if(`${data.name}` == "undefined") {
      city.innerHTML= "Ciudad no definida";
      date.innerHTML = ""
      temp.innerHTML = "No disponible";
      weather.innerHTML = "No disponible";
    } else {
      city.innerHTML=`${data.name}` ;
      date.innerHTML = (new Date()).toLocaleDateString();
      temp.innerHTML = `${kelvinToCelsius(data.main.temp)}°C`;
      weather.innerHTML = data.weather[0].description;  
    }
/*/