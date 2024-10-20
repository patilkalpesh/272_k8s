// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/message')
      .then(response => response.json())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h4>  Welcome and {message}</h4>
        
      </header>
    </div>
  );
}

export default App;
