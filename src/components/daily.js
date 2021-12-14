import React from "react";

import './forecast.scss'

class Daily extends React.Component {
  render() {
    const items = this.props.forecast.map((f, i) => {
      const image = {
        url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        alt: `Image of  ${f.weather[0].description}`,
      };
      const description = f.weather[0].description;
      const unixTimestamp = f.dt;
      let hour = new Date(unixTimestamp * 1000).getDay();
      let day;
      if(hour===1)
      day="monday";
      else if (hour===2)
      day="tuesday";
      else if (hour===3)
      day="wednesday";
      else if (hour===4)
      day="thurday";
      else if (hour===5)
      day="friday";
      else if (hour===6)
      day="saturday";
      else if (hour===0)
      day="sunday";

      return (
        <div key={i} className="forecast-item">
          <p className="forecast-item__time">{day}</p>
          <p className="forecast-item__temp">
            {f.temp.day} <span className="forecast-item__degree">°</span>
          </p>
          <img className="forecast-item__img" src={image.url} alt={image.alt} />
          <p className="forecast-item__description">{description}</p>
        </div>
      );
    });

    return (
      <div className="forecast">
        <h3 className="forecast__title">Daily Forecast</h3>
        <div className="forecast-items">{items}</div>
      </div>
    );
  }
}

export default Daily;
