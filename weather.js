let updateWidget2 = function(data) {
  var temp = data.main.temp
  var name = data.name
  var image = data.weather[0].icon
  $("#temp2").text("It is " + temp + " degrees outside")
  $("#name2").text( name)
  $("#pic2").attr('src','http://openweathermap.org/img/w/'+image+'.png')
  $("#work3").text("Yes, I Can!")
  console.log(i)
  i+=1

}
let updateWidget1 = function(data) {
  var temp = data.main.temp
  var name = data.name
  $("#temp1").text("It is " + temp + " degrees outside")
  $("#name1").text( name)
  $("#work2").text("Yes, I Can!")
  console.log(i)
  i+=1
}
let updateWidget = function(data) {
  var temp = data.main.temp
  var name = data.name
  $("#temp").text("It is " + temp + " degrees outside")
  $("#work1").text("Yes, I Can!")
  console.log(i)
  i+=1
}

function latlong(pos){
  latitude = pos.coords.latitude
  longitude = pos.coords.longitude
  city = pos.coords.name
  $("#get_forecast").text("Get Current Temperature")
  $("#get_forecast1").text("Get Current Temperature")
  $("#get_forecast2").text("Get Current Temperature")
}

let getWeather2 = function(event) {
  let apiKey = '9b9f7a54f1e86af82959cc458a054ef7'
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget2).catch(displayError)
}
let getWeather1 = function(event) {
  let apiKey = '9b9f7a54f1e86af82959cc458a054ef7'
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget1).catch(displayError)
}
let getWeather = function(event) {
  let latitude = '48.8566'
  let longitude = '2.3522'
  let apiKey = '9b9f7a54f1e86af82959cc458a054ef7'

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////
var i = 0
let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
var longitude
var latitude
navigator.geolocation.getCurrentPosition(latlong)
$('#get_forecast').on('click',getWeather)
$('#get_forecast1').on('click',getWeather1)
$('#get_forecast2').on('click',getWeather2)
alert('I added some additional "fun" elements to make up for its lateness. When reviewing the syllabus, I noticed that late assignments are not accepted. I am hoping you will consider an exception.  This has been a terrible quarter for me and I have missed a few classes and will need to travel to Seattle next week, missing class on March 7th as well.  To provide some context as to why I have not been able to achieve my normal level of academic rigor, in the last month I lost my grandmother and best friend (Diane McGowan and Tyler Martin), requiring either travel or work to clean up their belongings over the weekends when I  typically complete my schoolwork.  Also, I have needed to travel more than usual for work this quarter as I recommended and cancelled the efforts on a product I have been building for two years.  Needless to say, a hard month. Please let me know if there is anything that I can do, inclusive of providing documentation, to make up for my performance to date. Bill')
