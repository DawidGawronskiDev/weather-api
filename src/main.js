import "./style.css";

import API_KEY from "./key";

fetchData();

async function fetchData(i) {
    i === undefined ? i = "London" : i = i;
    try {
        const req = await fetch(`http://api.weatherapi.com/v1/forecast.json
        ?key=${API_KEY}
        &q=${i}
        &days=7
        &aqi=no
        &alerts=no`, {mode: "cors"});
        const res = await req.json();

        console.log(res)

        renderCurrent(getData(res));

    } catch (err) {
        console.log(err)
    }
}

function getData(data) {
        return {
            // current
            cloud: data.current.cloud,
            condition: data.current.condition.text,
            feelslike_c: data.current.feelslike_c,
            feelslike_f: data.current.feelslike_f,
            code: data.current.condition.code,

            // location
            country: data.location.country,
            localtime: data.location.localtime,
            name: data.location.name,
            region: data.location.region,

            // forecast
            forecast: data.forecast.forecastday,
    }
}

import iPhone from "./assets/iphone12promax.png";
function renderPhone () {
    const component = document.querySelector(".phone-container");

    const iphoneImg = document.createElement("img");
    iphoneImg.classList = "iphone-img";
    iphoneImg.src = iPhone;
    component.appendChild(iphoneImg)
}
renderPhone();

function renderCurrent (data) {
    const component = document.querySelector(".current-container");
    component.innerHTML = "";

    const name = document.createElement("span");
    name.classList = "current-container-location";
    name.innerHTML = `${data.name}, ${data.country}`;
    component.appendChild(name);

    const weatherIcon = document.createElement("span");
    weatherIcon.classList = "material-symbols-outlined";
    weatherIcon.innerHTML = getCurrentWeatherIcon(data.code);
    component.appendChild(weatherIcon);

    const weatherInfo = document.createElement("span");
    weatherInfo.classList = "current-container-weather-info";
    weatherInfo.innerHTML = data.condition;
    component.appendChild(weatherInfo);
}

function getCurrentWeatherIcon(code) {
    let o;
    switch(String(code)) {
        case "1000":
            o = "sunny";
            break;
        case "1003":
            o = "partly_cloudy_day";
            break;
        case "1006":
        case "1009":
            o = "cloudy"
            break;
        case "1030":
        case "1135":
        case "1147":
            o = "mist"
            break;
        case "1063":
        case "1180":
        case "1183":
        case "1186":
        case "1189":
        case "1192":
        case "1195":
        case "1198":
        case "1201":
        case "1240":
        case "1243":
        case "1246":
            o = "rainy"
            break;
        case "1066":
        case "1114":
        case "1210":
        case "1213":
        case "1216":
        case "1219":
        case "1222":
        case "1225":
        case "1255":
        case "1258":
            o = "cloudy_snow"
            break;
        case "1072":
        case "1150":
        case "1153":
        case "1168":
        case "1171":
        case "1237":
        case "1261":
        case "1264":
            o = "ac_unit"
            break;
        case "1087":
        case "1117":
        case "1273":
        case "1276":
        case "1279":
        case "1282":
            o = "thunderstorm"
            break;
        case "1069":
        case "1204":
        case "1207":
        case "1249":
        case "1252":
            o = "weather_hail"
            break;
    }
    return o;
}

document.querySelector("#countryInputButton")
    .addEventListener("click", () => {
        fetchData(
            document.querySelector("#countryInput").value
        )
    })
