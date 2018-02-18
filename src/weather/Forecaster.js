import React from 'react';

// import {fetchConditionData, fetchForest} from '../api/weather';

function DailyItem(props){
    const day = props.day;
    
    return(
    <div>
        <span>{day.weekday}</span>
        <span><img src={day.icon_url} /> </span>
        <span id="r1c3">{day.high}</span>
        <span id="r1c4">{day.low}</span>
    </div>
    )
}
export default function Forecaster(props){
    return props.forecast.map(
        (day, i) => <DailyItem key ={i} day={day} />

    )

    
}