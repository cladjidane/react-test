import React from 'react';
import './App.css';
import EventListenenerVar from './components/EventListenerVar';
import EventListenenerFail from './components/EventListenerFail';
import EventListenenerRef from './components/EventListenerRef';

function App() {
  return (
    <div className="App">
      <h2>Event Listener  = fail</h2>
      <EventListenenerFail />
      <h2>Event Listener with Var = OK</h2>
      <EventListenenerVar />
      <h2>Event Listener with Ref = OK</h2>
      <EventListenenerRef />
    </div>
  );
}

export default App;
