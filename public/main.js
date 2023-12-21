
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const middle_layer = document.getElementById("middle_layer");
const inputdata = document.getElementById("inputdata");
const date = document.getElementById("date");
const day = document.getElementById("day");

const days = new Date().getDay();
const month = new Date().getMonth();
const dates = new Date().getDate();
const daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

day.innerText = daysName[days];
date.innerText = dates + " " + monthsName[month];

middle_layer.style.visibility = "hidden";

const fetchdata = async() => {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&units=metric&appid=cedb098b636ef881bcb4d3fe0c320e06`;
     const response = await fetch(url);
     const data = await response.json();

     if(inputdata.value == ""){
     	city_name.innerText = "you haven't entered city name"
     	middle_layer.style.visibility = "hidden"
     }
    
      if(data.cod == "404"){
    	city_name.innerText = data.message ;
    	middle_layer.style.visibility = "hidden"
    }else{

     temp.innerText = data.main.temp ;
     city_name.innerText = `${data.name} , ${data.sys.country}`;
     middle_layer.style.visibility = "visible"
 }

     if(data.weather[0].main == "Clear"){
     	 weather.src = "images/sun.png"
     }else if(data.weather[0].main == "Rain"){
         weather.src = "images/thunderstorm.png"
     }else{
         weather.src = "images/cloud.png"	
     }
    
}

const myFunction = () => {
	fetchdata();
}