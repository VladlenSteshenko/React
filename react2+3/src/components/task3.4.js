// LCD
import React, { useState, useEffect } from 'react';

const Timer = ({ seconds, isPaused, onPauseResume }) => {
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div>
      <div style={{ fontSize: '2em' }}>{formatTime(seconds)}</div>
      <button onClick={onPauseResume}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

const TimerContainer = ({ seconds, refresh, render }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const Render = render;

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      if (!isPaused) {
        const currentTime = Date.now();
        setElapsedTime(Math.floor((currentTime - startTime) / 1000));
      }
    }, refresh);

    return () => clearInterval(interval);
  }, [refresh, isPaused]);

  const remainingSeconds = Math.max(seconds - elapsedTime, 0);

  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <Render
      seconds={remainingSeconds}
      isPaused={isPaused}
      onPauseResume={handlePauseResume}
    />
  );
};

export { TimerContainer, Timer };
