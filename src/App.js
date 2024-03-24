import React, { useState } from 'react';
import './styles.css';
import EventForm from './EventForm';
import EventList from './EventList';

const App = () => {
  const [events, setEvents] = useState([]);

  const handleEventCreate = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div id='main'>
      <h1 className='app-heading'>Event Creation App</h1>
      <EventForm onEventCreate={handleEventCreate} />
      <EventList events={events} />
    </div>
  );
};

export default App;
