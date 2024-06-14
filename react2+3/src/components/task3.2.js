// updated 3.6 version TimerControl + TimerContainer
import React, { useState } from 'react';
import { TimerContainer, Timer } from './task3.4';

const TimerControl = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(null);

  const handleStart = () => {
    const totalSeconds = (parseInt(hours, 10) * 3600) + (parseInt(minutes, 10) * 60) + (parseInt(seconds, 10));
    setInitialSeconds(totalSeconds);
  };

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div>
      <div>
        <label>
          Hours:
          <input
            type="text"
            value={hours}
            onChange={(e) => handleInputChange(e, setHours)}
            style={{ width: '50px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Minutes:
          <input
            type="text"
            value={minutes}
            onChange={(e) => handleInputChange(e, setMinutes)}
            style={{ width: '50px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Seconds:
          <input
            type="text"
            value={seconds}
            onChange={(e) => handleInputChange(e, setSeconds)}
            style={{ width: '50px' }}
          />
        </label>
      </div>
      <button onClick={handleStart}>Start</button>
      {initialSeconds !== null && (
        <TimerContainer
          seconds={initialSeconds}
          refresh={1000}
          render={(props) => <Timer {...props} />}
        />
      )}
    </div>
  );
};

export default TimerControl;
