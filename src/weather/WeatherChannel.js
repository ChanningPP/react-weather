import React, { Component } from 'react';

import CityCondition from './CityCondition';
import Forecaster from './Forecaster';
import * as weather from './weather';


export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            conditionData: {
                city: 'brisbane',
                weather: 'cloudy',
                temp: '22'
            },
            forecastData: [
                // { weekday: 'tue', high: '17', low: '10' },
                // { weekday: 'wed', high: '16', low: '9' },
                // { weekday: 'thu', high: '17', low: '10' }
            ]
        }
    }

    handleConditionData(data) {
        console.log(data)
        //this.setState({conditionData: data});
       
        const conditionData = {
            city: data.display_location.full,
            weather: data.weather,
            temp: data.temp_c
        }
        this.setState({ conditionData });
    }

    handleForecastData(data) {
        console.log(data)
        //this.setState({conditionData: data});
       
        const forecastData = data;
        this.setState({ forecastData });
    }


    componentDidMount() {

        weather.fetchConditionData('brisbane', (data) => this.handleConditionData(data));
        weather.fetchForecastData('brisbane', (data) => this.handleForecastData(data));
    }


    render() {
        const { city, weather, temp } = this.state.conditionData;
        return (
            <main>
                <section id="left">
                <CityCondition
                    //city={this.state.condition.city}
                    //weather={this.state.conditionData.weather}
                    city={city}
                    weather={weather}
                    temp={temp}

                />
                </section>
                <section id="right">
                <Forecaster
                    forecast={this.state.forecastData}
                />
                </section>

            </main>

        )
    }
}