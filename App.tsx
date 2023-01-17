import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  console.log({ time });
  return <h1>{time}</h1>;
}
