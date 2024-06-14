import React, { useState, useEffect } from 'react';

const SecondsTimer = ({ seconds }) => <h2>{seconds}</h2>;

const TimerContainer = ({ seconds, refresh, render }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const Render = render;

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const currentTime = Date.now();
      setElapsedTime(Math.floor((currentTime - startTime) / 1000));
    }, refresh);

    return () => clearInterval(interval);
  }, [refresh]);

  const remainingSeconds = Math.max(seconds - elapsedTime, 0);

  return <Render seconds={remainingSeconds} />;
};

export default TimerContainer;
export { SecondsTimer };
