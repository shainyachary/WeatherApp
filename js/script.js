var time = new Date();
time = time.getHours();
// for day time code starts
async function getWeatherData()
{
    if(time>6 && time<18)
    {
        document.querySelector('body').style.backgroundImage = 'url(images/day.jpg)';
        var city = document.querySelector('#city').value;
        if(city == '')
        {
            city = 'Mumbai';
        }
        apik = '3045dd712ffe6e702e3245525ac7fa38';
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apik}`);
        if(response && response.status == 200)
        {
            var data = await response.json();
            console.log(data);
            var temp = Math.floor(data.main.temp - 273.15);
            var weather = data.weather[0].main;
            var place = data.name +" "+data.sys.country;
            var humidity = data.main.humidity;
            var tempmax = Math.floor(data.main.temp_max -273.15);
            var tempmin = Math.floor(data.main.temp_min -273.15);
            document.querySelector('#icon').src = "images/"+weather+"day.png";
            document.querySelector('#temp').innerHTML = temp+'°C';
            document.querySelector('#weather').innerHTML = weather;
            document.querySelector('#msg').innerHTML = place;
            document.querySelector('.humidity').innerHTML = humidity;
            document.querySelector('.tempmax').innerHTML = tempmax+'°C';
            document.querySelector('.tempmin').innerHTML = tempmin+'°C';
        }
        if(response && response.status == 404)
        {
            alert('Invalid City Name');
        }
        if(response && response.status == 401)
        {
            alert('Error in API');
        }
    }
    // for day time code ends
    // for night time code starts
    else
    {
        document.querySelector('body').style.backgroundImage = 'url(images/night.jpg)';
        var city = document.querySelector('#city').value;
        if(city == '')
        {
            city = 'Mumbai';
        }
        apik = '3045dd712ffe6e702e3245525ac7fa38';
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apik}`);
        if(response && response.status == 200)
        {
            var data = await response.json();
            console.log(data);
            var temp = Math.floor(data.main.temp - 273.15);
            var weather = data.weather[0].main;
            var place = data.name + " " + data.sys.country;
            var humidity = data.main.humidity;
            var tempmax = Math.floor(data.main.temp_max -273.15);
            var tempmin = Math.floor(data.main.temp_min -273.15);
            document.querySelector('#icon').src = 'images/'+weather+'night.png';
            document.querySelector('#temp').innerHTML = temp+'°C';
            document.querySelector('#weather').innerHTML = weather;
            document.querySelector('#msg').innerHTML = place;
            document.querySelector('.humidity').innerHTML = humidity;
            document.querySelector('.tempmax').innerHTML = tempmax+'°C';
            document.querySelector('.tempmin').innerHTML = tempmin+'°C';
        }
        if(response && response.status == 404)
        {
            alert('Invalid City Name');
        }
        if(response && response.status == 401)
        {
            alert('Error in API');
        }
    }  
    // for night time code ends  
}
getWeatherData();