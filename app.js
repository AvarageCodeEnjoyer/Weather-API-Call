const submit = document.querySelector('submit')
const form = document.querySelector('form')
var result = document.getElementById('result')


form.addEventListener('submit', e =>{
  e.preventDefault()
  let country = document.getElementById('country').value
  let city = document.getElementById('city').value  
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8e39e4bf370892ecca5bd840dcb309c8`)
  .then(response => response.json())
  .then(data => {
    result.innerHTML = printRes(data)
  })

  console.log(city)
  console.log(country)
})

function printRes(data){
  return data.main.temp
}