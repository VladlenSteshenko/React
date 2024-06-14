import React from 'react';
import './watch.css';  

const Watch = ({ seconds }) => {
  const totalSeconds = seconds % 60;
  const totalMinutes = Math.floor(seconds / 60) % 60;
  const totalHours = Math.floor(seconds / 3600) % 12;

  const secondDegrees = totalSeconds * 6;
  const minuteDegrees = totalMinutes * 6 + totalSeconds * 0.1;
  const hourDegrees = totalHours * 30 + totalMinutes * 0.5;

  return (
    <div className="watch">
      <img src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace.png" alt="Clock face" className="clock-face" />
      <img src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace_H.png" alt="Hour hand" className="hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
      <img src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace_M.png" alt="Minute hand" className="minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
      <img src="http://draw.asmer.fe.a-level.com.ua/ClockFace/ClockFace_S.png" alt="Second hand" className="second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }} />
    </div>
  );
};

export default Watch;
