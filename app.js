//console.log("test")

//const appid = '295b6e49cdc48ac279a265d252241d0c'

//const getToken = async() => {
    //const response = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+inputValue.value+',US&appid=295b6e49cdc48ac279a265d252241d0c')

    //const data = response.json()

//}
//getToken()

//var button = document.querySelector('.btn btn-outline-success')
//var inputValue = document.querySelector('form-control me-2')
//var high = document.querySelector('.high')
//var low = document.querySelector('.low')
//var forecast = document.querySelector('.forecast')
//var humidity = document.querySelector('.humdity')

//button.addEventListener('click',function(){
    //fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${inputValue.value},US&appid=295b6e49cdc48ac279a265d252241d0c`)
    //.then(response => response.json())
    //.then(data => console.log(data))

//.catch(err => alert ("Please enter a United States Zipcode"))
//})

const getWeather = async () => {
    var cityName = document.getElementById('city-name').value;
    //const response = await fetch (`http://api.openweathermap.org/geo/1.0/zip?zip=10031,US&appid=295b6e49cdc48ac279a265d252241d0c`)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=295b6e49cdc48ac279a265d252241d0c`)
    const data = await response.json()
    console.log(data)

    const city = data.name
    // const temp = data.main.temp
    // const high = data.main.temp_max
    // const low = data.main.temp_min
    // const forecast = data.weather[0].description
    // const humidity = data.main.humidity

     document.querySelector('#city').innerText = city;
    // document.querySelector('#temp').innerText = 'Temp:' + temp + 'F';
    // document.querySelector('#foreast').innerText = 'Forecast:' + forecast;
    // document.querySelector('#high').innerText = 'High:' + 'F';
    // document.querySelector('#low').innerText = 'Low:' + 'F';
    // document.querySelector('#humidity').innerText = 'Humidity:' + '%';

}
