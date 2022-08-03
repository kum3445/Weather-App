if('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition((position) => {
       const lat=(position.coords.latitude).toString();
       const lon=(position.coords.longitude).toString();
       const apikey='c88c75d213f85bdac8aff4ef32be97ce';
      fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apikey+"&units=metric")
      .then((res) => res.json())
      .then((data) => {
        const num =(data.main.temp).toString();
        document.querySelector("body").style.backgroundImage=`url("https://source.unsplash.com/random/1920x1080/?${data.weather[0].description}")`;
        document.querySelector("#description").innerHTML="<h2>"+data.name+"</h2>"+"<h2>"+num+"°C</h2>"+
        `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`+
        "<h3>"+data.weather[0].description+"</h3>"+"<h3>Humidity : "+ data.main.humidity+" %</h3>"+"<h3>Wind Speed : "+ data.wind.speed+" m/s</h3>"})
    })
      document.querySelector("button").addEventListener("click", function(){
        document.querySelector("i").classList.add("res");
            const city = document.querySelector("input").value;
            const apikey='c88c75d213f85bdac8aff4ef32be97ce';

            function out(){
              document.querySelector("i").classList.remove("res")
            }
            setTimeout(out,100);
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric")
            .then((res) => res.json())
            .then((data) => {const num =(data.main.temp).toString();
                document.querySelector("body").style.backgroundImage=`url("https://source.unsplash.com/random/1920x1080/?${data.weather[0].description}")`;
              document.querySelector("#description").innerHTML="<h2>"+city+"</h2>"+"<h2>"+num+"°C</h2>"+
              `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`+
              "<h3>"+data.weather[0].description+"</h3>"+"<h3>Humidity : "+ data.main.humidity+" %<h3>"+"<h3>Wind Speed : "+ data.wind.speed+" m/s</h3>"})})
    
  }
    else {
        console.log("failure")
    }
    

function time(){
  var day= new Date();
  day= day.getDay();
  var time = new Date().toLocaleString();
  switch(day){
    case 1:
      day="Monday"
      break;
    case 2:
      day="Tuesday"
      break;
    case 3:
      day="Wednesday"
      break;
    case 4:
        day="Thursday"
        break;
    case 5:
      day="Friday"
      break;
    case 6:
      day="Saturday"
      break;
    case 0:
      day="Sunday"
      break;
    default:

  }
document.querySelector(".time").innerHTML="<h3>"+day+" "+time+"</h3>"
}
setInterval(time,1000);    
    
function key(event){
  console.log(event.key)
  if (event.key==="Enter"){
    document.querySelector("i").classList.add("res");
            const city = document.querySelector("input").value;
            const apikey='c88c75d213f85bdac8aff4ef32be97ce';
            function out(){
              document.querySelector("i").classList.remove("res")
            }
            setTimeout(out,100);
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric")
            .then((res) => res.json())
            .then((data) => {const num =(data.main.temp).toString();
                document.querySelector("body").style.backgroundImage=`url("https://source.unsplash.com/random/1920x1080/?${data.weather[0].description}")`;
              document.querySelector("#description").innerHTML="<h2>"+city+"</h2>"+"<h2>"+num+"°C</h2>"+
              `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`+
              "<h3>"+data.weather[0].description+"</h3>"+"<h3>Humidity : "+ data.main.humidity+" %<h3>"+"<h3>Wind Speed : "+ data.wind.speed+" m/s</h3>"})
  }
}