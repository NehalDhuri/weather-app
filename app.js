var cityName = document.querySelector('#search-bar');
var searchIcon = document.querySelector('.search-icon');
const apiKey = "2206bc7a96424fcf526f8259a873e585";
var temp = document.querySelector(".temp-value");
var minTemp = document.querySelector(".min-temp");
var description = document.querySelector(".value .title");
var pressure = document.querySelector(".presValue");
var humidity = document.querySelector(".humValue");
var visibility = document.querySelector(".visibValue");

// var serverURL = 'https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=2206bc7a96424fcf526f8259a873e585&units=metric';

function getURL(name) {
    return 'https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=2206bc7a96424fcf526f8259a873e585&units=metric';
}

function errorHandler(error){
    alert("something wrong with server try again after some time");
}

function clickEventHandler() {
    var name = cityName.value;
    
    fetch(getURL(name))
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var presValue = data['main']['pressure'];
            var humValue = data['main']['humidity'];
            var visibValue = data['visibility'];
            var minTempValue = data['main']['temp_min'];
            var descValue = data['weather'][0]['description'];

            temp.innerHTML = parseInt(tempValue) ;
            minTemp.innerHTML = parseInt(minTempValue) ;
            description.innerHTML = descValue;
            pressure.innerHTML = presValue;
            humidity.innerHTML = humValue;
            visibility.innerHTML = visibValue/1000;
            console.log(data);
        })

        .catch(errorHandler)

    
}

searchIcon.addEventListener("click", clickEventHandler);

