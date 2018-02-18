import React from 'react';

export default function CityCondition(props) {
    const {city, weather, temp} = props;
    //const city = props.city;
    //const temp = props.temp;
    
    return (
        <div>
             <section id="left">
                <div id="location">{city} </div>
                <div id="weather">{weather}</div>
                <div id="temperature">{temp}</div>
            </section>

        </div>
    );
}