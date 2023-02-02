const submit = document.querySelector('submit')
const form = document.querySelector('form')
var result = document.getElementById('result')
var weatherLocation = document.getElementById('location')



form.addEventListener('submit', e =>{
  e.preventDefault()
  let country = document.getElementById('country').value
  let city = document.getElementById('city').value  
  let API_KEY = "8e39e4bf370892ecca5bd840dcb309c8"
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    let {outputTemp, outputWeather} = printRes(data)
    weatherLocation.innerHTML = "hello"
    result.innerHTML = `${outputTemp} <br> ${outputWeather}`
    console.log(outputTemp, outputWeather)
  })
  // result.innerHTML = "Don't waste API Calls"
})

function printRes(data){
  let temp = (data.main.temp - 273.15).toFixed(1)
  let celsius = temp + "°C"
  let fahrenheit = temp * 9 / 5 + 32 + "℉"
  let sky = data.weather[0].main
  let outputTemp = `The Temperature is ${fahrenheit} or ${celsius},` 
  let outputWeather = `The Sky has ${sky}`
  return {outputTemp, outputWeather}
}