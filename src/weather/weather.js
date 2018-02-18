const CONDITION_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';
const FORECAST_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';

const conditionXHR = new XMLHttpRequest();

const forecastXHR = new XMLHttpRequest();

export function fetchConditionData(city, handleLoad){
    conditionXHR.open(`GET`, `${CONDITION_BASE_URL}${city}.json`);
    conditionXHR.send();
    conditionXHR.onload = () => {
        if(conditionXHR.status === 200){
            const dataObj = JSON.parse(conditionXHR.responseText);
            handleLoad(dataObj.current_observation);
        }
    }
}

export function fetchForecastData(city, handleLoad){
    forecastXHR.open(`GET`, `${FORECAST_BASE_URL}${city}.json`);
    forecastXHR.send();
    forecastXHR.onload = () => {
        if(forecastXHR.status === 200){
            const tempData = JSON.parse(forecastXHR.responseText);
            const forecastObj = tempData.forecast.simpleforecast.forecastday;
            let forecastData =[];
            console.log(forecastObj)
            for(let i=0; i<forecastObj.length;i++ ){
                forecastData[i]={weekday:forecastObj[i].date.weekday, high:forecastObj[i].high.celsius,
                low:forecastObj[i].low.celsius, icon_url:forecastObj[i].icon_url}
            }
            console.log(forecastData)
            handleLoad(forecastData);
            //handleLoad(forecastData.current_observation);

        }
    }

}