


async function updateWeather(){

    let background = {
        "few clouds": "https://arthive.net/res/media/img/oy800/work/b0f/763330@2x.jpg",
        "clear sky": "http://4.bp.blogspot.com/-iimVgXkJ1so/VP3v78EipYI/AAAAAAAAAno/lSyLZ-fdEj8/s1600/bDTyf.jpg",
        "scattered clouds": "https://www.art-plus.it/wp-content/uploads/2021/07/Alfons-Mucha-La-Femme-Animee-en-Fleur-blog-1024x577.jpg",
        "broken clouds": "https://i0.wp.com/parkstone.international/wp-content/uploads/2021/07/BO-Alphonse-Mucha-ENG-Cherry-Blossom-1898.jpg?fit=1286%2C803&ssl=1",
        "shower rain": "https://c4.wallpaperflare.com/wallpaper/575/613/88/traditional-artwork-alphonse-mucha-artwork-art-nouveau-fantasy-art-hd-wallpaper-preview.jpg",
        "rain": "https://media.istockphoto.com/illustrations/woman-taking-photo-with-plate-camera-art-nouveau-1898-illustration-id1352247737?k=20&m=1352247737&s=612x612&w=0&h=_PC4Virp1ZyINNWN2W41iRPaeRcfbmDKUGbLHpCZxZM=",
        "thunderstorm": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/femme-a-la-marguerite-alphonse-mucha.jpg",
        "snow": "https://thumbs.dreamstime.com/b/poster-background-decorative-flowers-bird-art-nouveau-style-black-white-graphics-nvector-illustration-poster-124383873.jpg",
        "mist": "https://www.itl.cat/pngfile/big/115-1155974_alphonse-mucha-wallpapers-princess-hyacinth.jpg"
    }

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=46.7177&lon=11.6572&appid=6b34ede9382d257d0217b859e8d805cf&units=metric", {method: "GET"})
    .then(response => response.json())
    .then(data => {

        let temp = data.main.temp;
        let icon = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        let description = data.weather[0].description;
        let sunrise = data.sys.sunrise;
        let sunset = data.sys.sunset;
        let sunsetDate = new Date(sunset * 1000);
        let sunriseDate = new Date(sunrise * 1000);
        let sunriseTime = sunriseDate.toLocaleTimeString();
        let sunsetTime = sunsetDate.toLocaleTimeString();

        document.getElementById("weatherDescription").innerHTML = "Weather: " + description;
        document.getElementById("temp").innerHTML = "Temp: " + Math.round(temp);
        document.getElementById("sunrise").innerHTML = "Sunrise: " + sunriseTime.substring(0,4);
        document.getElementById("sunset").innerHTML = "Sunset: " + sunsetTime.substring(0,4);
        document.getElementById("icon").src = iconUrl;

        $(".backgroundContainer").css("background-image", "url(" + background[description] + ")");

    })
}

function hideAll(){
    document.getElementById("weatherContainer").classList.add("hidden");
    document.getElementById("teamContainer").classList.add("hidden");
}

function unhideWeather(){
    document.getElementById("weatherContainer").classList.remove("hidden");
}

function unhideGallery(){
    document.getElementById("galleryContainer").classList.remove("hidden");
}

function unhideTeam(){ 
    document.getElementById("teamContainer").classList.remove("hidden");
}

function test(selection){
    document.getElementById("burger-toggle").checked=false;
    // switch case selection
    switch(selection){
        case "Home": unhideWeather(); break;
        case "Team" : unhideTeam(); break;
    }
}

window.onload = function() {
    document.getElementById("burger-toggle").addEventListener("click", function(){
        if(document.getElementById("burger-toggle").checked)
            hideAll();
        else{
            hideAll();
            unhideWeather();
        }
    })
}



$(document).ready(function(){updateWeather();});