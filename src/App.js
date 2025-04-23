import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  let greeting = '';

  if (hours < 12) {
    greeting = '☀️ Good Morning!';
  } else if (hours < 18) {
    greeting = '🌤️ Good Afternoon!';
  } else {
    greeting = '🌙 Good Evening!';
  }

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
