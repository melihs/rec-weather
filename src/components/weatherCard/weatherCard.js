import React from "react";
import "./weatherCard.scss";

export default function weatherCard({ location, data }) {
  return (
    <div className="card">
      <h3>{data.date}</h3>
      <ul>
        <li>
          <img src={data.day.condition.icon} alt="" />
        </li>
        <li>{data.day.condition.text}</li>
        <li>{`min ${data.day.mintemp_c} C° / max ${data.day.maxtemp_c} C°`}</li>
      </ul>
    </div>
  );
}
