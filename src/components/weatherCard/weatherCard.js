import React from 'react';
import './weatherCard.scss';

export default function weatherCard() {
  return (
    <div className="card">
      <h2>Date</h2>
      <ul>
        <li><img src="" alt="" /></li>
        <li>weather status</li>
        <li>mintemp C / maxtemp C</li>
      </ul>
    </div>
  )
}
